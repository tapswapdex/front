import React from 'react'
import styled from 'styled-components'
import { BaseLayout, Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import useTheme from 'hooks/useTheme'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'
import EarnAssetCard from './EarnAssetCard'
import EarnAPYCard from './EarnAPYCard'
import AuditCard from './AuditCard'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  background-color: rgba(15, 14, 47, 0.5) !important;
  border: 0.6px solid rgba(255, 255, 255, 0.7);
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const TotalValueLockedCard = () => {
  const { isDark } = useTheme()
  const TranslateString = useI18n()
  const totalValue = useTotalValue()

  return (
    <StyledTotalValueLockedCard>
      <CardBody
        style={{
          backgroundColor: isDark ? 'rgba(15, 14, 47, 0.5)' : 'white',
          border: '0.6px solid rgba(255, 255, 255, 0.7)',
          boxShadow: !isDark && '0px 0px 22px rgba(0,0,0,0.2)',
        }}
      >
        <Cards>
          <StyledTotalValueLockedCard>
            <CardBody>
              <Heading size="md" mb="24px">
                {TranslateString(731, 'Total Value Locked (TVL)')}
              </Heading>
              <>
                <CardValue fontSize="23px" value={totalValue.toNumber()} prefix="$" decimals={2} />
                <Text color="textSubtle">{TranslateString(732, 'Across all Farms, Pools and Smart Faucets')}</Text>
              </>
            </CardBody>
          </StyledTotalValueLockedCard>
          <EarnAPYCard />
          <AuditCard />
          <EarnAssetCard />
        </Cards>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
