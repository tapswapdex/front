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
  color: ${({ theme }) => theme.colors.secondary};
  text-shadow: ${({ theme }) => theme.colors.secondary} 0px 0px 8px;
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
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 1.5rem;
  border-radius: 0.5rem;

  h1 {
    font-family: 'Anton', sans-serif;
    color: ${({ theme }) => theme.colors.secondary};
    letter-spacing: 4px;
    font-size: 2rem;
    text-align: center;
  }

  .img-container {
    display: flex;
    justify-content: center;
    img {
      margin-top: 3rem;
      height: 22rem;
    }
  }

  .price-container {
    margin-top: 2rem;
  }

  .details {
    margin-top: 2rem;
    .detail-item {
      color: ${({ theme }) => theme.colors.secondary};
      letter-spacing: 0.5px;
      font-size: 1rem;
    }
  }
`

const ContactDetails = styled.div`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;

  .twitter,
  .telegram {
    margin-left: 1rem;
    width: 2rem;
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
              src="https://cdn.discordapp.com/attachments/847731075640066048/864390052351574026/Meme_Token.png"
              alt=""
            />
          </div>
          <div className="details">
            <div className="detail-item">Referral Commission (5%)</div>
            <div className="detail-item">Buy Back (20%)</div>
            <div className="detail-item">Faucet Operation (30%)</div>
            <div className="detail-item">Auto Compounding (40%)</div>
          </div>
        </LaunchPadItem>
      </LaunchPadContentContainer>

      <ContactDetails>
        <span>Contact us at: </span>{' '}
        <a href="https://twitter.com/tapswapdex" target="_blank" rel="noreferrer">
          <img
            src="
        https://upload.wikimedia.org/wikipedia/bar/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"
            alt=""
            className="twitter"
          />
        </a>
        <a href="https://t.me/DefiTeddy2" target="_blank" rel="noreferrer">
          <img src="https://image.flaticon.com/icons/png/512/2111/2111646.png" alt="" className="telegram" />
        </a>
      </ContactDetails>
    </>
  )
}

export default Launchpad
