import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import useTheme from 'hooks/useTheme'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const TwitterCard = () => {
  const { isDark } = useTheme()
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard
      style={{
        backgroundColor: isDark ? 'rgba(15, 14, 47, 0.5)' : 'white',
        border: '0.6px solid rgba(255, 255, 255, 0.7)',
        boxShadow: !isDark && '0px 0px 22px rgba(0,0,0,0.2)',
      }}
    >
      <CardBody>
        <Heading size="lg" mb="24px">
          {TranslateString(10003, 'Announcements')}
        </Heading>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'tapswapdex',
          }}
          options={{
            height: '300',
            chrome: 'noheader, nofooter',
            width: '100vw',
          }}
        />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
