import BigNumber from 'bignumber.js'
import React, { useCallback, useState } from 'react'
import { isEmpty } from 'lodash'
import Web3 from 'web3'
import styled from 'styled-components'
import { Button, IconButton, useModal, AddIcon, Image, Text, Input } from 'tapswap-uikit'
import { useWeb3React } from '@web3-react/core'
import UnlockButton from 'components/UnlockButton'
import Label from 'components/Label'
import { useERC20 } from 'hooks/useContract'
import { useSousApprove } from 'hooks/useApprove'
import useI18n from 'hooks/useI18n'
import { useSousStake } from 'hooks/useStake'
import { useSousUnstake } from 'hooks/useUnstake'
import useBlock from 'hooks/useBlock'
import { getBalanceNumber } from 'utils/formatBalance'
import { useSousHarvest } from 'hooks/useHarvest'
import Balance from 'components/Balance'
import { QuoteToken, PoolCategory } from 'config/constants/types'
import { Pool } from 'state/types'
import { InsteadTag } from 'components/Tags'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'
import Spacer from 'components/Spacer'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import CompoundModal from './CompoundModal'
import CardTitle from './CardTitle'
import Card from './Card'
import HarvestButton from './HarvestButton'
import CardFooter from './CardFooter'

interface PoolWithApy extends Pool {
  apy: BigNumber
}

interface HarvestProps {
  pool: PoolWithApy
}

const DetailPlaceholder = styled.div`
  display: flex;
  font-size: 14px;
`
const Value = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`

const qoutationModes = {
  bnb: 'bnb',
  ygt: 'ygt',
}

const PoolCard: React.FC<HarvestProps> = ({ pool }) => {
  const {
    sousId,
    image,
    tokenName,
    tokenLabel,
    stakingTokenName,
    stakingTokenAddress,
    stakingTokenDecimals,
    projectLink,
    harvest,
    apy,
    tokenDecimals,
    poolCategory,
    totalStaked,
    startBlock,
    endBlock,
    isFinished,
    userData,
    stakingLimit,
    debug,
  } = pool
  // Pools using native BNB behave differently than pools using a token
  const isBnbPool = poolCategory === PoolCategory.BINANCE
  const TranslateString = useI18n()
  const stakingTokenContract = useERC20(stakingTokenAddress)
  const { account } = useWeb3React()
  const block = useBlock()
  const { onApprove } = useSousApprove(stakingTokenContract, sousId)
  const { onStake } = useSousStake(sousId, isBnbPool)
  const { onUnstake } = useSousUnstake(sousId)
  const { onReward } = useSousHarvest(sousId, isBnbPool)

  const [requestedApproval, setRequestedApproval] = useState(false)
  const [pendingTx, setPendingTx] = useState(false)

  const allowance = new BigNumber(userData?.allowance || 0)
  const stakingTokenBalance = new BigNumber(userData?.stakingTokenBalance || 0)
  const stakedBalance = new BigNumber(userData?.stakedBalance || 0)
  const earnings = new BigNumber(userData?.pendingReward || 0)

  const blocksUntilStart = Math.max(startBlock - block, 0)
  const blocksRemaining = Math.max(endBlock - block, 0)
  const isOldSyrup = stakingTokenName === QuoteToken.SYRUP
  const accountHasStakedBalance = stakedBalance?.toNumber() > 0
  const needsApproval = !accountHasStakedBalance && !allowance.toNumber() && !isBnbPool
  const isCardActive = isFinished && accountHasStakedBalance
  const isOldFinishedBush = sousId === 66

  const totalValueFormated = pool.totalValue
    ? `$${Number(pool.totalValue).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : '-'

  const convertedLimit = new BigNumber(stakingLimit).multipliedBy(new BigNumber(10).pow(tokenDecimals))
  const [onPresentDeposit] = useModal(
    <DepositModal
      max={stakingLimit && stakingTokenBalance.isGreaterThan(convertedLimit) ? convertedLimit : stakingTokenBalance}
      onConfirm={onStake}
      tokenName={stakingLimit ? `${stakingTokenName} (${stakingLimit} max)` : stakingTokenName}
      depositFeeBP={pool.depositFee}
      pool={pool}
    />,
  )

  const [onPresentCompound] = useModal(
    <CompoundModal earnings={earnings} onConfirm={onStake} tokenName={stakingTokenName} />,
  )

  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance} onConfirm={onUnstake} tokenName={stakingTokenName} />,
  )

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
    } catch (e) {
      console.error(e)
    }
  }, [onApprove, setRequestedApproval])

  const showDebug = () => {
    const rows = []

    for (let i = 0; i < Object.entries(debug).length; i++) {
      const [key, value] = Object.entries(debug)[i]
      rows.push(
        <StyledDetails>
          <div style={{ flex: 1 }}>{key}:</div>
          <div style={{ fontWeight: 600, lineHeight: '1.5' }}>{value}</div>
        </StyledDetails>,
      )
    }

    return <div>{rows}</div>
  }

  const [qoutationMode, setQoutationMode] = useState(qoutationModes.bnb)
  const [bnb, setBnb] = useState('')
  const [ygt, setYgt] = useState('')

  const deposite = async () => {
    try {
      if (!isEmpty(account)) {
        const web3 = new Web3(Web3.givenProvider)
        const token = new web3.eth.Contract(
          JSON.parse(
            '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Purchase","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"WithdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"availableToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposite","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"contract TapSwap","name":"_token","type":"address"},{"internalType":"uint256","name":"_availabletoken","type":"uint256"}],"name":"initialise","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startEnd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract TapSwap","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawEth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]',
          ),
          '0xcb34e1c9d84716462f3bf293167a973807986a0b',
        )

        const depositeValue = qoutationMode === qoutationModes.bnb ? bnb : getBNBForYgt()
        await token.methods.deposite().send({
          from: account,
          value: web3.utils.toWei(`${depositeValue}`, 'ether'),
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getYgtTokens = () => {
    if (bnb.length > 0 && bnb.match(/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/)) {
      const web3 = new Web3(Web3.givenProvider)
      const depositValue: any = web3.utils.toWei(bnb, 'ether')

      return (depositValue / 2100000000000000).toFixed(2)
    }
    return ''
  }

  const getBNBForYgt = () => {
    if (ygt.length > 0 && ygt.match(/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/)) {
      const ygtValue: any = ygt

      return ygtValue * 0.0021
    }
    return ''
  }

  const QoutationBNB = (
    <>
      <br />
      <Input
        placeholder="1 BNB"
        value={bnb}
        onChange={({ target: { value } }) => {
          setBnb(value)
        }}
      />
      <Spacer />
      <Button variant="secondary" onClick={deposite} width="100%" mb="16px">
        {getYgtTokens() === '' ? 'GET YGT' : `GET ${getYgtTokens()} YGT`}
      </Button>
      {getYgtTokens() !== '' && (
        <DetailPlaceholder>
          <div style={{ flex: 1 }}>YGT Tokens:</div>
          <Value>{getYgtTokens()}</Value>
        </DetailPlaceholder>
      )}
    </>
  )

  const QoutationYGT = (
    <>
      <br />
      <Input
        placeholder="1 YGT"
        value={ygt}
        onChange={({ target: { value } }) => {
          setYgt(value)
        }}
      />
      <Spacer />
      <Button variant="secondary" onClick={deposite} width="100%" mb="16px">
        Buy YGT for {getBNBForYgt()} BNB
      </Button>
      {getBNBForYgt() !== '' && (
        <DetailPlaceholder>
          <div style={{ flex: 1 }}>BNB: </div>
          <Value>{getBNBForYgt()}</Value>
        </DetailPlaceholder>
      )}
    </>
  )

  const toggleQoutationModes = () => {
    if (qoutationMode === qoutationModes.bnb) {
      setQoutationMode(qoutationModes.ygt)
    } else {
      setQoutationMode(qoutationModes.bnb)
    }
  }

  const [showBuy, setShowBuy] = useState(false)

  return (
    <Card isActive={isCardActive} isFinished={isFinished && sousId !== 0}>
      {isFinished && sousId !== 0 && <PoolFinishedSash />}
      <div style={{ padding: '24px' }}>
        <CardTitle isFinished={isFinished && sousId !== 0}>
          {isOldSyrup && '[OLD]'} {tokenLabel} Guild
        </CardTitle>
        <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <Image src={`/images/tokens/${image || tokenName}.png`} width={256} height={256} alt={tokenName} />
          </div>
          {!isOldFinishedBush && account && harvest && !isOldSyrup && (
            <HarvestButton
              disabled={!earnings.toNumber() || pendingTx}
              text={pendingTx ? 'Collecting' : 'Harvest'}
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            />
          )}
        </div>
        {!showBuy && (
          <Button variant="primary" onClick={() => setShowBuy(true)}>
            Buy YGT
          </Button>
        )}
        {showBuy && (
          <>
            Get YGT Token
            <span role="img" aria-label="eyes">
              👀
            </span>
            <br />
            {qoutationMode === qoutationModes.bnb ? QoutationBNB : QoutationYGT}
            <Spacer />
            <InsteadTag mode={qoutationMode} onClick={toggleQoutationModes} />
            <Spacer />
            <Button variant="danger" onClick={() => setShowBuy(false)}>
              Close
            </Button>
          </>
        )}
        {!isOldFinishedBush && !isOldSyrup ? (
          <BalanceAndCompound>
            <Balance value={getBalanceNumber(earnings, tokenDecimals)} isDisabled={isFinished} />
            {sousId === 0 && account && harvest && (
              <HarvestButton
                disabled={!earnings.toNumber() || pendingTx}
                text={pendingTx ? TranslateString(999, 'Compounding') : TranslateString(704, 'Compound')}
                onClick={onPresentCompound}
              />
            )}
          </BalanceAndCompound>
        ) : (
          <div>-</div>
        )}
        <Label isFinished={isFinished && sousId !== 0} text={tokenName === 'YGT' ? 'SLP Earned' : tokenName} />
        <Text color="secondary" fontSize="14px">
          {TranslateString(10009, `Deposit:`)} {stakingTokenName}
        </Text>
        <StyledCardActions>
          {!account && <UnlockButton />}
          {account &&
            (needsApproval && !isOldSyrup ? (
              <div style={{ flex: 1 }}>
                <Button disabled={isFinished || requestedApproval} onClick={handleApprove} width="100%">
                  {pool?.isBush === true ? (
                    <span>{TranslateString(999, 'Approve this Guild')}</span>
                  ) : (
                    <span>{`Approve ${stakingTokenName}`}</span>
                  )}
                </Button>
              </div>
            ) : (
              <>
                <Button
                  disabled={stakedBalance.eq(new BigNumber(0)) || pendingTx}
                  onClick={
                    isOldSyrup
                      ? async () => {
                          setPendingTx(true)
                          await onUnstake('0')
                          setPendingTx(false)
                        }
                      : onPresentWithdraw
                  }
                >
                  {`Unstake ${stakingTokenName}`}
                </Button>
                <StyledActionSpacer />
                {!isOldSyrup && (
                  <IconButton disabled={isFinished && sousId !== 0} onClick={onPresentDeposit}>
                    <AddIcon color="background" />
                  </IconButton>
                )}
              </>
            ))}
        </StyledCardActions>
        <StyledDetails>
          <div style={{ flex: 1 }}>
            {TranslateString(10001, 'Deposit Fee')}{' '}
            <span data-tip data-for={`depositFeeTooltip${pool.sousId}`}>
              <FontAwesomeIcon icon={faQuestionCircle} />
            </span>{' '}
            :
          </div>
          <Text
            bold
            style={{
              backgroundColor: pool.depositFee === 0 ? '#4bca4b' : 'transparent',
              color: pool.depositFee === 0 ? 'white' : '#424f3e',
              padding: pool.depositFee === 0 ? '2px 5px' : 'inherit',
              borderRadius: pool.depositFee === 0 ? '10px' : 'inherit',
            }}
          >
            {pool.depositFee / 100}%
          </Text>
          <ReactTooltip id={`depositFeeTooltip${pool.sousId}`} effect="solid" place="right">
            {pool.isLp === true ? (
              <span>
                {TranslateString(
                  10010,
                  'In the case of an LP, only the deposit fees on non-stable tokens will be burnt.',
                )}
              </span>
            ) : (
              <span>{TranslateString(742, 'Deposit fees will be automatically burnt')}</span>
            )}
          </ReactTooltip>
        </StyledDetails>
        <StyledDetails>
          <div style={{ flex: 1 }}>{TranslateString(736, 'APR')}:</div>
          {isFinished || isOldSyrup || !apy || apy?.isNaN() || !apy?.isFinite() ? (
            '-'
          ) : (
            <Balance fontSize="14px" isDisabled={isFinished} value={apy?.toNumber()} decimals={2} unit="%" />
          )}
        </StyledDetails>
        <StyledDetails>
          <div style={{ flex: 1 }}>
            {pool.stakingTokenName === 'TAPS' && (
              <img src="/images/farms/taps.png" alt="TAPS Token" width="15" height="15" />
            )}
            {TranslateString(384, 'Your Stake')}:
          </div>
          <Balance fontSize="14px" isDisabled={isFinished} value={getBalanceNumber(stakedBalance)} />
        </StyledDetails>
        {blocksUntilStart > 0 && (
          <StyledDetails>
            <div style={{ flex: 1 }}>⏱ {TranslateString(999, 'Blocks until start')}:</div>
            <Balance fontSize="14px" isDisabled={isFinished} value={blocksUntilStart} decimals={0} />
          </StyledDetails>
        )}
        {debug !== null && <>{showDebug()}</>}
      </div>
      <CardFooter
        projectLink={projectLink}
        decimals={tokenDecimals}
        totalStaked={totalStaked}
        blocksRemaining={blocksRemaining}
        isFinished={isFinished}
        blocksUntilStart={blocksUntilStart}
        poolCategory={poolCategory}
        tokenName={stakingTokenName}
        tokenAddress={stakingTokenAddress}
        tokenDecimals={stakingTokenDecimals}
        isLp={pool.isLp}
        totalValueFormated={totalValueFormated}
      />
    </Card>
  )
}

const PoolFinishedSash = styled.div`
  background-image: url('/images/pool-finished-sash.svg');
  background-position: top right;
  background-repeat: not-repeat;
  height: 135px;
  position: absolute;
  right: -24px;
  top: -24px;
  width: 135px;
`

const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
  box-sizing: border-box;
`

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledDetails = styled.div`
  display: flex;
  font-size: 14px;
`

export default PoolCard
