import React from 'react'
import styled from 'styled-components'
import Row from 'views/Farms/components/FarmTable/Row'

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

  font-family: 'Zen Tokyo Zoo', cursive;
  color: white;
  text-shadow: rgba(255, 255, 255, 0.81) 0px 0px 8px;
  letter-spacing: 2px;
  font-size: 4.5rem;
  text-align: center;
`
const LaunchPadContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const LaunchPadItem = styled.div`
  width: 36.8rem;
  border: 2px solid white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  h1 {
    color: white;
    letter-spacing: 2px;
    font-size: 2rem;
    text-align: center;
  }

  .img-container {
    display: flex;
    justify-content: center;
    img {
      margin-top: 3rem;
      width: 15rem;
    }
  }

  .price-container {
    margin-top: 2rem;
  }
`

const Launchpad: React.FC = () => {
  return (
    <>
      <Header>DEFI LAUNCHPAD</Header>
      <LaunchPadContentContainer>
        <LaunchPadItem>
          <h1>Project Defi</h1>
          <div className="img-container">
            <img
              src="https://cdn.discordapp.com/attachments/847731075640066048/862980270404010014/Defi_Logo.png"
              alt=""
            />
          </div>
          <div className="price-container">
            <h1>1000 USD</h1>
          </div>

          <div className="details">
            <div className="detail-item">Referral Commission (5%)</div>
            <div className="detail-item">Buy Back (20%)</div>
            <div className="detail-item">Faucet Operation (30%)</div>
            <div className="detail-item">Auto Compounding (40%)</div>
          </div>
        </LaunchPadItem>
        <LaunchPadItem>
          <h1>Token Development</h1>
          <div className="img-container">
            <img
              src="https://cdn.discordapp.com/attachments/847731075640066048/862980273670848512/Token_Development.png"
              alt=""
            />
          </div>

          <div className="price-container">
            <h1>1000 USD</h1>
          </div>
          <div className="details">
            <div className="detail-item">Referral Commission (5%)</div>
            <div className="detail-item">Buy Back (20%)</div>
            <div className="detail-item">Faucet Operation (30%)</div>
            <div className="detail-item">Auto Compounding (40%)</div>
          </div>
        </LaunchPadItem>
        <LaunchPadItem>
          <h1>Meme Token</h1>
          <div className="img-container">
            <img
              src="https://cdn.discordapp.com/attachments/847731075640066048/862980270404010014/Defi_Logo.png"
              alt=""
            />
          </div>
          <div className="price-container">
            <h1>1000 USD</h1>
          </div>
          <div className="details">
            <div className="detail-item">Referral Commission (5%)</div>
            <div className="detail-item">Buy Back (20%)</div>
            <div className="detail-item">Faucet Operation (30%)</div>
            <div className="detail-item">Auto Compounding (40%)</div>
          </div>
        </LaunchPadItem>
      </LaunchPadContentContainer>
    </>
  )
}

export default Launchpad
