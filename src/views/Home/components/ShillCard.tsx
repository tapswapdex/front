import React from 'react'
import { Card, CardBody, Heading } from '@pancakeswap-libs/uikit'

import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(15, 14, 47, 0.5) !important;
  border: 0.6px solid rgba(255, 255, 255, 0.7);
`

const ShillCard = () => {
  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="lg" mb="24px">
          Welcome to #HotDefiSummer
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
          <div
            style={{
              padding: '50px',
            }}
          >
            <Heading>Buy signal for $SHIB Token</Heading>
            <img src="https://miro.medium.com/max/800/0*kZnKmgzBxG9oDyVB.png" alt="" />
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
