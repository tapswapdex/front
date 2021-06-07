import React, { useState } from 'react'
import styled from 'styled-components'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { useMatchBreakpoints } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

import useTheme from 'hooks/useTheme'
import Apr, { AprProps } from './Apr'
import Farm, { FarmProps } from './Farm'
import Earned, { EarnedProps } from './Earned'
import Details from './Details'
import Multiplier, { MultiplierProps } from './Multiplier'
import Liquidity, { LiquidityProps } from './Liquidity'
import Fee, { FeeProps } from './Fee'
import ActionPanel from './Actions/ActionPanel'
import CellLayout from './CellLayout'
import { DesktopColumnSchema, MobileColumnSchema } from '../types'

export interface RowProps {
  apr: AprProps
  farm: FarmProps
  earned: EarnedProps
  multiplier: MultiplierProps
  liquidity: LiquidityProps
  fee: FeeProps
  details: FarmWithStakedValue
}

const cells = {
  apr: Apr,
  farm: Farm,
  earned: Earned,
  details: Details,
  multiplier: Multiplier,
  liquidity: Liquidity,
  fee: Fee,
}

const CellInner = styled.div`
  padding: 24px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 8px;

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-right: 32px;
  }
`

const StyledTr = styled.tr`
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};
`

const EarnedMobileCell = styled.td`
  padding: 16px 0 24px 16px;
`

const AprMobileCell = styled.td`
  padding-top: 16px;
  padding-bottom: 24px;
`

const FarmMobileCell = styled.td`
  padding-top: 24px;
`

const Row: React.FunctionComponent<RowProps> = (props) => {
  const { details } = props
  const [actionPanelToggled, setActionPanelToggled] = useState(false)
  const TranslateString = useI18n()

  const toggleActionPanel = () => {
    setActionPanelToggled(!actionPanelToggled)
  }

  const cellLabel = (key: string): string => {
    if (key === 'farm' || key === 'details') {
      return ''
    }

    return key
  }

  const { isXl, isXs } = useMatchBreakpoints()

  const isMobile = !isXl
  const tableSchema = isMobile ? MobileColumnSchema : DesktopColumnSchema
  const columnNames = tableSchema.map((column) => column.name)
  const [rowHovered, setRowHovered] = useState(false)
  const [actionPanelHovered, setActionPanelHovered] = useState(false)
  const { isDark } = useTheme()

  const currentBoxShadow = isDark
    ? `0 0 2px #fff, 0 0 4px #fff, 0 0 8px #0ba9ca, 0 0 12px #0ba9ca, 0 0 40px #0ba9ca, 0 0 50px #0ba9ca`
    : `0 0 2px #fff, 0 0 4px #fff, 0 0 8px #0ba9ca, 0 0 12px #be259e,
  0 0 40px #be259e, 0 0 50px #be259e`

  const handleOnRowMouseEvents = ({ type }) => {
    if (type === 'mouseover') {
      setRowHovered(true)
    }

    if (type === 'mouseout') {
      setRowHovered(false)
    }
  }

  const handleOnActionPanelMouseEvents = ({ type }) => {
    if (type === 'mouseover') {
      setActionPanelHovered(true)
    }

    if (type === 'mouseout') {
      setActionPanelHovered(false)
    }
  }

  const rowStyles = () => {
    if (rowHovered) {
      return {
        boxShadow: currentBoxShadow,
      }
    }
    return {}
  }

  const handleRenderRow = () => {
    if (!isXs) {
      return (
        <StyledTr
          onClick={toggleActionPanel}
          style={{
            boxShadow: actionPanelToggled ? currentBoxShadow : ``,
            zIndex: 9999999999,
            ...rowStyles(),
          }}
          onFocus={handleOnRowMouseEvents}
          onBlur={handleOnRowMouseEvents}
          onMouseOver={handleOnRowMouseEvents}
          onMouseOut={handleOnRowMouseEvents}
        >
          {Object.keys(props).map((key) => {
            if (columnNames.indexOf(key) === -1) {
              return null
            }

            switch (key) {
              case 'details':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout>
                        <Details actionPanelToggled={actionPanelToggled} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'apr':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={TranslateString(999, 'Apr')}>
                        <Apr {...props.apr} hideButton={isMobile} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'fee':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={TranslateString(10001, 'Fee')}>
                        <Fee {...props.fee} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              default:
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={cellLabel(key)}>{React.createElement(cells[key], props[key])}</CellLayout>
                    </CellInner>
                  </td>
                )
            }
          })}
        </StyledTr>
      )
    }

    return (
      <StyledTr onClick={toggleActionPanel}>
        <td>
          <tr>
            <FarmMobileCell>
              <CellLayout>
                <Farm {...props.farm} />
              </CellLayout>
            </FarmMobileCell>
          </tr>
          <tr>
            <EarnedMobileCell>
              <CellLayout label={TranslateString(999, 'Earned')}>
                <Earned {...props.earned} />
              </CellLayout>
            </EarnedMobileCell>
            <AprMobileCell>
              <CellLayout label={TranslateString(999, 'Apr')}>
                <Apr {...props.apr} hideButton />
              </CellLayout>
            </AprMobileCell>
          </tr>
        </td>
        <td>
          <CellInner>
            <CellLayout>
              <Details actionPanelToggled={actionPanelToggled} />
            </CellLayout>
          </CellInner>
        </td>
      </StyledTr>
    )
  }

  return (
    <>
      {handleRenderRow()}
      {actionPanelToggled && details && (
        <tr
          style={{
            boxShadow: actionPanelToggled ? currentBoxShadow : ``,
            zIndex: 9999999999,
          }}
          onFocus={handleOnActionPanelMouseEvents}
          onBlur={handleOnActionPanelMouseEvents}
        >
          <td colSpan={12}>
            <ActionPanel {...props} />
          </td>
        </tr>
      )}
    </>
  )
}

export default Row
