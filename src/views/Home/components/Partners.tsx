import React from 'react'
import { Card, CardBody, Heading, Image, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import useTheme from 'hooks/useTheme'

const StyledListedOn = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  background-color: rgba(15, 14, 47, 0.5) !important;
  border: 0.6px solid rgba(255, 255, 255, 0.7);
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
        <Heading size="lg">Partnerships and Technology</Heading>
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

        <LinkListed>
          <a href="https://app.1inch.io/#/56/swap/TAPS/BUSD" target="_blank" rel="noreferrer">
            <Image
              src="https://cdn.discordapp.com/attachments/847731075640066048/854978566080692234/1inch.png"
              alt="Cheaper and faster than Uniswap? Discover ApeSwap, the #1 AMM and yield farm for apes by apes."
              width={150}
              height={45}
            />
          </a>
        </LinkListed>

        <LinkListed>
          <a href="https://techrate.org/#about" target="_blank" rel="noreferrer">
            <Image
              src="https://cdn.discordapp.com/attachments/847731075640066048/854978595034497054/techrate.png"
              alt="Cheaper and faster than Uniswap? Discover ApeSwap, the #1 AMM and yield farm for apes by apes."
              width={150}
              height={45}
            />
          </a>
        </LinkListed>
        <LinkListed>
          <a href="https://trustwallet.com/" target="_blank" rel="noreferrer">
            <Image
              src="https://cdn.discordapp.com/attachments/847731075640066048/854978630475579422/trustwallet.png"
              alt="Cheaper and faster than Uniswap? Discover ApeSwap, the #1 AMM and yield farm for apes by apes."
              width={150}
              height={105}
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
              src="https://cdn.discordapp.com/attachments/847731075640066048/854978681428377630/binance_smartchain.png"
              alt="Cheaper and faster than Uniswap? Discover ApeSwap, the #1 AMM and yield farm for apes by apes."
              width={150}
              height={80}
            />
          </a>
        </LinkListed>

        <LinkListed>
          <a href="https://www.certik.org/projects/tapswapfinance" target="_blank" rel="noreferrer">
            <Image
              src="https://cdn.discordapp.com/attachments/847731075640066048/854978820435214356/certik.png"
              alt="Cheaper and faster than Uniswap? Discover ApeSwap, the #1 AMM and yield farm for apes by apes."
              width={150}
              height={45}
            />
          </a>
        </LinkListed>
      </CardBody>
    </StyledListedOn>
  )
}

export default Partners
