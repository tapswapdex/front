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
          <div>
            <Heading>For the month of June</Heading>
            <img
              src="https://cdn.discordapp.com/attachments/847731075640066048/856430420089765988/Taps_Moon.png"
              alt=""
            />
          </div>

          <div>
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
            <img
              src="https://cdn.discordapp.com/attachments/847731075640066048/858960496782213150/Buy_Shiba.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/847731075640066048/858960494973812746/Buy_Matic.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/847731075640066048/858960493058064394/Buy_Banana.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/847731075640066048/855015754113351680/Techrate.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/847731075640066048/856430280466497566/ApeSwap_x_PancakeSwap.png"
              alt=""
            />
          </div>
          <div>
            <Heading>$TAPS is now on TrustWallet</Heading>
            <img
              src="https://cdn.discordapp.com/attachments/847731075640066048/856771033134792774/Trust_Wallet.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/847731075640066048/861533876870840336/Buy_Axie_Infinity.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/847731075640066048/862938886308626432/Buy_My_Defi_Pet_Call_Price.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/847731075640066048/862934000405446667/Buy_Smooth_Love_Potion_Call_Price.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/847731075640066048/862934001915658270/Buy_Axie_Infinity_Day_Price.png"
              alt=""
            />
          </div>
        </Carousel>
      </CardBody>
    </StyledCakeStats>
  )
}

export default ShillCard
