import React, { useState } from 'react'
import { isEmpty } from 'lodash'
import styled from 'styled-components'
import { Button, Input } from 'tapswap-uikit'
import { InsteadTag } from 'components/Tags'
import Spacer from 'components/Spacer'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import Card from './Card'
import CardTitle from './CardTitle'

const Balance = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  font-weight: 600;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
  margin-bottom: 16px;
`

const DetailPlaceholder = styled.div`
  display: flex;
  font-size: 14px;
`
const Value = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`

const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => (theme.isDark ? '#524B63' : '#E9EAEB')};
  padding: 24px;
`

const qoutationModes = {
  bnb: 'bnb',
  ygt: 'ygt',
}

const Coming: React.FC = () => {
  const { account } = useWeb3React()

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
      <Label>Buy YGT Token</Label>
      <Input
        placeholder="1 BNB"
        value={bnb}
        onChange={({ target: { value } }) => {
          setBnb(value)
        }}
      />
      <Spacer />
      <Button variant="secondary" as="a" href="https://t.me/tapswapchat" external width="100%" mb="16px">
        Deposit
      </Button>
      <DetailPlaceholder>
        <div style={{ flex: 1 }}>YGT Tokens:</div>
        <Value>{getYgtTokens()}</Value>
      </DetailPlaceholder>
    </>
  )

  const QoutationYGT = (
    <>
      <Label>Buy YGT Token</Label>
      <Input
        placeholder="1 YGT"
        value={ygt}
        onChange={({ target: { value } }) => {
          setYgt(value)
        }}
      />
      <Spacer />
      <Button variant="secondary" onClick={deposite} width="100%" mb="16px">
        Deposit
      </Button>
      <DetailPlaceholder>
        <div style={{ flex: 1 }}>BNB: </div>
        <Value>{getBNBForYgt()}</Value>
      </DetailPlaceholder>
    </>
  )

  const toggleQoutationModes = () => {
    if (qoutationMode === qoutationModes.bnb) {
      setQoutationMode(qoutationModes.ygt)
    } else {
      setQoutationMode(qoutationModes.bnb)
    }
  }

  return (
    <Card>
      <div style={{ padding: '24px' }}>
        <CardTitle>
          Get YGT Token
          <span role="img" aria-label="eyes">
            👀
          </span>
        </CardTitle>
        {qoutationMode === qoutationModes.bnb ? QoutationBNB : QoutationYGT}
      </div>
      <Footer>
        <InsteadTag mode={qoutationMode} onClick={toggleQoutationModes} />
      </Footer>
    </Card>
  )
}

export default Coming
