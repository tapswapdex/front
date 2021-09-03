import React, { useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Heading, HelpIcon, Link, Text } from 'tapswap-uikit'
import { BLOCKS_PER_YEAR } from 'config'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import useI18n from 'hooks/useI18n'
import useBlock from 'hooks/useBlock'
import GuildIcon from 'assets/svg/icons/guild'
import { useFarms, usePriceBnbBusd, usePools, usePriceEthBnb, usePriceCakeBusd, useFarmFromPid } from 'state/hooks'
import { QuoteToken } from 'config/constants/types'
import FlexLayout from 'components/layout/Flex'
import PoolCard from '../Pools/components/PoolCard'
import PoolTabButtons from '../Pools/components/PoolTabButtons'
import Divider from '../Pools/components/Divider'
import Coming from '../Pools/components/Coming'
import useApePrice from '../../hooks/useApePrice'
import useCakePrice from '../../hooks/useCakePrice'
import YieldGuild from '../Pools/components/YieldGuild'

const faqData = {
  title: 'FAQ',
  rows: [
    {
      title: `What about Deposit Fees`,
      content: `We eat them. The participation fee collected are fully eaten (burnt) by the TapSwap. The TAPS-BUSD LP from the deposit fee will be decomposed, then we will use the BUSD portion to market buy the $TAPS equivalent, then finally eat (burn) all of the 🍃 $TAPS.`,
    },
    {
      title: `Audit`,
      content: `Bush V1 contract were fully audited by Techrate, <a href="https://tapswap.money/files/audit_techrate.pdf" target="_blank" style="color: orange;font-weight: bold">check the Techrate audit</a>`,
    },
    {
      title: `V1 vs V0 ?`,
      content: `Learn more about Bushs Evolution on our blog: <a href="https://tapswap.medium.com/the-bush-next-evolution-d9e316be71f1" target="_blank" style="color: orange;font-weight: bold">https://tapswap.medium.com/the-bush-next-evolution-d9e316be71f1</a>`,
    },
  ],
}
const faqStyles = {
  bgColor: ({ theme }) => (theme.isDark ? '#36343c' : '#fbfbfb'),
  titleTextColor: '#4e4e4e',
  rowTitleColor: '#4e4e4e',
  rowContentColor: '#6b6b6b',
}

const Bush: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { account } = useWeb3React()
  const farms = useFarms()
  const pools = usePools(account)
  const bnbPriceUSD = usePriceBnbBusd()
  const ethPriceBnb = usePriceEthBnb()
  const tapsPrice = usePriceCakeBusd()
  const tapsBusdfarm = useFarmFromPid(12)
  const [apePrice, setApePrice] = useState(0)
  const [cakePrice, setCakePrice] = useState(0)
  const block = useBlock()
  const [stackedOnly, setStackedOnly] = useState(false)

  const apeReserve = useApePrice()
  apeReserve.then(setApePrice)

  const cakeReserve = useCakePrice()
  cakeReserve.then(setCakePrice)

  const priceToBnb = (tokenName: string, tokenPrice: BigNumber, quoteToken: QuoteToken): BigNumber => {
    const tokenPriceBN = new BigNumber(tokenPrice)
    if (tokenName === 'BNB') {
      return new BigNumber(1)
    }
    if (tokenPrice && quoteToken === QuoteToken.BUSD) {
      return tokenPriceBN.div(bnbPriceUSD)
    }
    return tokenPriceBN
  }

  const poolsWithApy = pools.map((pool) => {
    const stakingTokenFarm = farms.find((s) => s.tokenSymbol === pool.stakingTokenName)

    const cakePriceFinal = cakePrice * bnbPriceUSD.toNumber()

    let tokenPriceVsQuote = stakingTokenFarm?.tokenPriceVsQuote
    if (pool.tokenName === 'BANANA') {
      tokenPriceVsQuote = new BigNumber(apePrice)
    }
    if (pool.tokenName === 'CAKE') {
      tokenPriceVsQuote = new BigNumber(cakePriceFinal)
    }

    // tmp mulitplier to support ETH farms
    // Will be removed after the price api
    const tempMultiplier = stakingTokenFarm?.quoteTokenSymbol === 'ETH' ? ethPriceBnb : 1

    // /!\ Assume that the farm quote price is BNB
    const stakingTokenPriceInBNB = new BigNumber(tokenPriceVsQuote).times(tempMultiplier)

    // total liquidity
    let totalStakingTokenInPool = new BigNumber(0)
    if (pool.stakingTokenName === QuoteToken.TAPS) {
      totalStakingTokenInPool = new BigNumber(pool.totalStaked).div(new BigNumber(10).pow(18)).multipliedBy(tapsPrice)
    }
    if (pool.stakingTokenName === QuoteToken.TAPS_BUSD_APE_LP) {
      const lpPrice = Number(tapsBusdfarm.lpTotalInQuoteToken) / Number(tapsBusdfarm.lpTokenBalanceMC)
      totalStakingTokenInPool = new BigNumber(pool.totalStaked).div(new BigNumber(10).pow(18)).multipliedBy(lpPrice)
    }

    const totalRewardPricePerYear = new BigNumber(1).times(pool.tokenPerBlock).times(BLOCKS_PER_YEAR)
    let apy = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)

    if (pool.tokenName === 'WBNB') {
      apy = apy.multipliedBy(bnbPriceUSD.toJSON())
    }

    if (pool.tokenName === 'BANANA') {
      apy = apy.multipliedBy(new BigNumber(apePrice).toJSON())
    }

    if (pool.tokenName === 'CAKE') {
      apy = apy.multipliedBy(new BigNumber(cakePriceFinal).toJSON())
    }

    // const debug = {
    //   '---': '-',
    //   apePrice,
    //   cakePrice: cakePriceFinal,
    //   '----': '-',
    //   tokenName: pool.tokenName,
    //   tokenPriceVsQuote: tokenPriceVsQuote ? tokenPriceVsQuote.toString() : '-',
    //   'sTF?.tokenPriceVsQuote': Number(stakingTokenFarm?.tokenPriceVsQuote).toFixed(3),
    //   stakingTokenPriceInBNB: stakingTokenPriceInBNB.toFixed(3),
    //   totalRewardPricePerYear: totalRewardPricePerYear.toFixed(3),
    //   totalStakingTokenInPool: totalStakingTokenInPool.toFixed(3),
    //   'pool.tokenPerBlock': pool.tokenPerBlock,
    //   'pool.totalStaked': getBalanceNumber(pool.totalStaked).toFixed(3),
    //   BLOCKS_PER_YEAR: BLOCKS_PER_YEAR.toFixed(3),
    //   'sTF?.quoteTokenSymbol': stakingTokenFarm?.quoteTokenSymbol,
    // }
    const debug = null

    return {
      ...pool,
      isFinished: pool.sousId === 0 ? false : pool.isFinished || block > pool.endBlock,
      apy,
      totalValue: totalStakingTokenInPool,
      debug,
    }
  })

  const [finishedPools, openPools] = partition(poolsWithApy, (pool) => pool.isFinished)
  const stackedOnlyPools = openPools.filter(
    (pool) => pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0),
  )

  const Header = styled.div`
    padding: 32px 0px;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};

    padding-left: 16px;
    padding-right: 16px;

    margin-bottom: 20px;

    ${({ theme }) => theme.mediaQueries.sm} {
      padding-left: 24px;
      padding-right: 24px;
    }
  `

  const AddressLink = styled(Link)`
    display: inline-block;
    font-weight: 400;
    font-size: 12px;
    white-space: nowrap;

    ${({ theme }) => theme.mediaQueries.sm} {
      font-size: 16px;
      width: auto;
    }
  `

  const axies = ['2171193', '2171194', '1122545']

  return (
    <>
      <Header>
        <Heading as="h1" size="xl" color="secondary" mb="36px" textAlign="center">
          Yield <GuildIcon /> Guild
        </Heading>
        <Heading size="md" color="text">
          <ul>
            <li>{TranslateString(580, 'Stake YGT claim token to earn SLP and AXS token.')}</li>
            <li>
              {TranslateString(486, 'The first and only Automated Yield Guild to earn from Axie Infinity Metaverse.')}
            </li>
            <li>
              40% of Farmed SLP allocated directly into this Vault. The rest goes to Scholars, Guild Managers and
              Buyback program.
            </li>
            <li>
              {TranslateString(
                742,
                'At least 300 YGT suggested  minimum deposit to fund the Vault per user but you can deposit any amount. Rewards can be claimed every 15 days',
              )}
            </li>
          </ul>
        </Heading>
        {/* <Text style={{ marginTop: '10px' }}>
          <AddressLink href="https://tapswapmoneydex.medium.com/the-bush-next-evolution-d9e316be71f1" color="text" external>
            <HelpIcon color="textSubtle" /> {TranslateString(743, 'Learn more about Yield Guild')}
          </AddressLink>
        </Text> */}
      </Header>
      <PoolTabButtons stackedOnly={stackedOnly} setStackedOnly={setStackedOnly} />
      <Divider />
      <FlexLayout>
        <Route exact path={`${path}`}>
          <>
            {stackedOnly
              ? orderBy(stackedOnlyPools, ['sortOrder']).map((pool) => <PoolCard key={pool.sousId} pool={pool} />)
              : orderBy(openPools, ['sortOrder']).map((pool) => {
                  if (pool.axieId) {
                    return <YieldGuild key={pool.sousId} pool={pool} />
                  }
                  return <PoolCard key={pool.sousId} pool={pool} />
                })}
          </>
        </Route>
        <Route path={`${path}/history`}>
          {orderBy(finishedPools, ['sortOrder']).map((pool) => (
            <PoolCard key={pool.sousId} pool={pool} />
          ))}
        </Route>
      </FlexLayout>
    </>
  )
}

export default Bush
