import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Button, Dropdown } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { Link } from 'react-router-dom'
import config from 'components/Menu/config'
import BushIcon from 'assets/svg/icons/Bush'

import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import TwitterCard from 'views/Home/components/TwitterCard'
import ListedOn from 'views/Home/components/ListedOn'
import { CheckCircle } from 'react-feather'
import AuditCard from './components/AuditCard'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 22px;
  padding-top: 60px;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
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

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Header = styled.div`
  padding: 32px 0px;
  background: ${({ theme }) => theme.colors.gradients.bubblegum};

  padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const [width, setWidth] = useState<number>(window.innerWidth)
  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 768

  return (
    <>
      <Header>
        <Heading
          as="h1"
          size="xl"
          color="secondary"
          mb="24px"
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {TranslateString(578, 'AMM +Yield Aggregator on Binance Smartchain.')}
        </Heading>
        <Heading
          size="lg"
          color="text"
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <a href="https://swape.tapswap.money/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x56eab07247e3e6404ac90140F20bba61375d5C3C">
            <Button variant="primary">
              {TranslateString(733, 'BUY')} <img src="/images/farms/taps.png" alt="TAPS Token" width="70" height="70" />{' '}
              {TranslateString(734, 'TAPS Token Now!')}
            </Button>
          </a>
          <a href="https://swape.tapswap.money/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x56eab07247e3e6404ac90140F20bba61375d5C3C">
            <Button variant="primary">Launch App</Button>
          </a>
        </Heading>
      </Header>
      <Page>
        <div>
          <Cards>
            <FarmStakingCard />
            <TwitterCard />
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
          <Cards>
            <EarnAssetCard />
            <EarnAPYCard />
          </Cards>
          <Cards>
            <ListedOn />
            <AuditCard />
          </Cards>
        </div>
        <div
          style={{
            width: isMobile ? '40vw' : '8vw',
            position: 'fixed',
            zIndex: 99999999999,
            bottom: '1%',
            left: isMobile ? '4%' : '2%',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <img
              color="green"
              src="https://d33wubrfki0l68.cloudfront.net/dfe9e8524c40923c3f0e2d34b1b939aa411e79f4/404e7/img/certik-logo-w-small.svg"
              width="30px"
              alt=""
            />
            <h1
              style={{
                color: '#4acaa4',
              }}
            >
              Certik
            </h1>
            <h1 style={{ color: 'white' }}>
              <CheckCircle />
            </h1>
            <h1
              style={{
                color: '#4acaa4',
              }}
            >
              Skynet
            </h1>
          </div>
        </div>
      </Page>
    </>
  )
}

export default Home
