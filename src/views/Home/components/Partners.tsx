import React from 'react'
import { Card, CardBody, Heading, Image, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import useTheme from 'hooks/useTheme'

const StyledListedOn = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const LinkListed = styled.a`
  float: left;
  min-width: 200px;
  margin: 5px;
`

const Partners = () => {
  const { isDark } = useTheme()
  return (
    <StyledListedOn>
      <CardBody>
        <Heading size="lg">Listed on</Heading>
        <LinkListed>
          <a href="https://www.dapp.com/app/tapswap-exchange" target="_blank" rel="noreferrer">
            <Image
              src={
                isDark
                  ? 'https://www.jdiyield.com/_next/image?url=%2Fimages%2Flogo%2Fjdi-color-dark.svg&w=1920&q=75'
                  : 'https://www.jdiyield.com/_next/image?url=%2Fimages%2Flogo%2Fjdi-color-light.svg&w=1920&q=75'
              }
              alt="Dapp.com is a one-stop platform for the dapps you’ll love. Explore and enjoy thousands of ranked blockchain games, social network, tools &amp; more built on Ethereum, EOS, STEEM, NEO &amp; TRON."
              width={110}
              height={50}
            />
          </a>
        </LinkListed>

        <LinkListed>
          <a
            href="https://dex.apeswap.finance/#/swap?outputCurrency=0x56eab07247e3e6404ac90140F20bba61375d5C3C"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/extras/apeswap.svg"
              alt="Cheaper and faster than Uniswap? Discover ApeSwap, the #1 AMM and yield farm for apes by apes."
              width={150}
              height={43}
            />
          </a>
        </LinkListed>
      </CardBody>
    </StyledListedOn>
  )
}

export default Partners