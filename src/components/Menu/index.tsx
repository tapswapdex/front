import React, { Component, Props, useContext } from 'react'
import { Dropdown, Heading, Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import { Link } from 'react-router-dom'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import { usePriceCakeBusd, useProfile } from 'state/hooks'
import config from './config'

const Menu = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const { profile } = useProfile()

  // return (
  //   <UikitMenu
  //     account={account}
  //     login={login}
  //     logout={logout}
  //     isDark={isDark}
  //     toggleTheme={toggleTheme}
  //     currentLang={selectedLanguage && selectedLanguage.code}
  //     langs={allLanguages}
  //     setLang={setSelectedLanguage}
  //     cakePriceUsd={cakePriceUsd.toNumber()}
  //     links={config}
  //     profile={{
  //       username: profile?.username,
  //       image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
  //       profileLink: '/profile',
  //       noProfileLink: '/profile',
  //       showPip: !profile?.username,
  //     }}
  //     {...props}
  //   />
  // )
  return (
    <Heading
      as="h1"
      size="xl"
      color="secondary"
      mt="24px"
      mb="24px"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      {config.map((item) => {
        if (item.href && item.href.includes('http')) {
          return (
            <a className="navbar-item" href={item.href} target={item.target} style={{}}>
              {item.iconComponent && item.iconComponent}
              {item.label}
            </a>
          )
        }

        if (item.items && item.items.length > 0) {
          console.log(item.items)

          return (
            <Dropdown target={<h4 className="navbar-item">More</h4>}>
              {item.items.map(({ href, label, target }) => {
                return (
                  <a className="navbar-item" href={href} target={target} style={{}}>
                    {label}
                  </a>
                )
              })}
            </Dropdown>
          )
        }

        return (
          <Link className="navbar-item" to={item.href} target={item.target} style={{}}>
            {item.iconComponent && item.iconComponent}
            {item.label}
          </Link>
        )
      })}
    </Heading>
  )
}

export default Menu
