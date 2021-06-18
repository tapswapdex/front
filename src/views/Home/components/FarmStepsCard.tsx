import React from 'react'
import { Card, CardBody, Heading, Image, Link, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import CardHeading from 'views/Farms/components/FarmCard/CardHeading'

const StyledListedOn = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  background: none;
`

const StepCard = styled(Card)`
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(15, 14, 47, 0.5) !important;
  border: 0.6px solid rgba(255, 255, 255, 0.7);
  width: 250px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`

const LinkListed = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  float: left;
  min-width: 100%;
  margin: 5px;

  @media (max-width: 768px) {
    display: block;
  }
`

const FarmStepsCard = () => {
  const { theme } = useTheme()

  const farmingSteps = [
    {
      text: '1. Before farming',
      body: 'Buy TAPS and BNB or BUSD Tokens. Get TAPS-BNB LP or  TAPS- BUSD LP token by Clicking the links Below.',
      links: [
        {
          text: 'Get TAPS',
          href: 'https://swape.tapswap.money/#/swap',
        },
        {
          text: 'Get LP Tokens',
          href: 'https://swape.tapswap.money/#/pool',
        },
      ],
    },
    {
      text: '2. During farming',
      body: 'Harvest your Farm Anytime.Take note of Gas Fees spent during Harvest.Be Wise!',
    },
    {
      text: '3. After farming',
      body: (
        <>
          {' '}
          Once You harvest your TAPS token you can either Sell it , Stake it On {'  '}
          <a
            href="/pools"
            style={{
              color: theme.colors.primary,
            }}
          >
            TAPS Pools
          </a>{' '}
          {'  '}
          or{' '}
          <a
            href="/bush"
            style={{
              color: theme.colors.primary,
            }}
          >
            Smart Faucet
          </a>
        </>
      ),
    },
  ]
  return (
    <StyledListedOn>
      <CardBody>
        <Heading size="lg">How to participate in yield farming?</Heading>
        <LinkListed>
          {farmingSteps.map(({ text, body, links }, index) => {
            return (
              <>
                <StepCard
                  style={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Text>{text}</Text>

                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 'normal',
                    }}
                  >
                    {body}
                  </p>
                  {links && (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      {links.map(({ text: linkText, href }) => (
                        <Link href={href}>{linkText}</Link>
                      ))}
                    </div>
                  )}
                </StepCard>
                {farmingSteps.length - 1 !== index && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 10,
                    }}
                  >
                    ᐅ
                  </div>
                )}
              </>
            )
          })}
        </LinkListed>
      </CardBody>
    </StyledListedOn>
  )
}

export default FarmStepsCard
