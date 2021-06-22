import React from 'react'
import { Card, CardBody, Heading } from 'tapswap-uikit'

import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import useTheme from 'hooks/useTheme'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const ShillCard = () => {
  const { isDark } = useTheme()
  return (
    <StyledCakeStats
      style={{
        backgroundColor: isDark ? 'rgba(15, 14, 47, 0.5)' : 'white',
        border: '0.6px solid rgba(255, 255, 255, 0.7)',
        boxShadow: !isDark && '0px 0px 22px rgba(0,0,0,0.2)',
      }}
    >
      <CardBody>
        <Heading size="lg" mb="24px">
          Shill Board
        </Heading>
        <Carousel infiniteLoop autoPlay showArrows showThumbs={false}>
          <div
            style={{
              padding: '50px',
            }}
          >
            <Heading>For the month of June</Heading>
            <img
              src="https://cdn.discordapp.com/attachments/847731075640066048/855005976902238228/Taps__Moon_updated.png"
              alt=""
            />
          </div>

          <div
            style={{
              padding: '50px',
            }}
          >
            <Heading>Security Oracle</Heading>
            <img src="https://cdn.discordapp.com/attachments/847731075640066048/855010573824294932/Certik.png" alt="" />
          </div>
          <div>
            <Heading>JDI Yield</Heading>
            <img
              src="   https://cdn.discordapp.com/attachments/847731075640066048/855337874362728488/Farm_JDi.png"
              alt=""
            />
          </div>

          <div>
            <Heading>Buy signal for $SHIB Token</Heading>
            <img
              src="/images/farms/shib.png"
              alt=""
              style={{
                maxHeight: '300px',
                maxWidth: '300px',
              }}
            />
            <Heading>Catalyst: Coinbase listing</Heading>
          </div>
          <div>
            <Heading>Buy signal for $MATIC Token</Heading>
            <img
              src="/images/farms/matic.png"
              alt=""
              style={{
                maxHeight: '300px',
                maxWidth: '300px',
              }}
            />
            <Heading>Catalyst: Growing polygon ecosystem</Heading>
          </div>
          <div>
            <Heading>Buy signal for $BANANA Token</Heading>
            <img
              src="/images/farms/banana.png"
              alt=""
              style={{
                maxHeight: '300px',
                maxWidth: '300px',
              }}
            />
            <Heading>Catalyst: Expanding to Polygon Network</Heading>
          </div>
          <div>
            <Heading>Security Audit</Heading>
            <img
              src="https://cdn.discordapp.com/attachments/847731075640066048/855015754113351680/Techrate.png"
              alt=""
            />
          </div>
        </Carousel>
      </CardBody>
    </StyledCakeStats>
  )
}

export default ShillCard
