import React, { Component, Props, useContext } from 'react'
import {
  Button,
  ConnectorNames,
  Dropdown,
  Heading,
  Menu as UikitMenu,
  Toggle,
  useWalletModal,
} from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import { connectorsByName } from 'utils/web3React'
import { Link } from 'react-router-dom'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'

import useI18n from 'hooks/useI18n'
import { usePriceCakeBusd, useProfile } from 'state/hooks'
import config from './config'
import sun from '../../assets/svg/sun.svg'
import moon from '../../assets/svg/moon.svg'
import tapswapLogo from '../../assets/img/logo.png'
import tapswapLogoDark from '../../assets/img/logo-dark.png'

const Menu = (props) => {
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const { profile } = useProfile()

  const TranslateString = useI18n()
  const { account, activate, deactivate } = useWeb3React()

  const handleLogin = (connectorId: ConnectorNames) => {
    const connector = connectorsByName[connectorId]
    if (connector) {
      activate(connector)
    }
  }

  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(handleLogin, deactivate, account as string)
  const connect = () => {
    onPresentConnectModal()
  }

  const truncateAccountName = (accountName: string) => {
    const firstSlice = accountName.slice(0, 4)

    const lastSlice = accountName.slice(accountName.length - 4, accountName.length)
    return `${firstSlice}...${lastSlice}`
  }

  const RenderConnectButton = (
    <Button onClick={account !== undefined ? onPresentAccountModal : connect} height="50">
      {account !== undefined ? truncateAccountName(account) : 'Connect'}
    </Button>
  )

  const switchToDark = () => {
    if (!isDark) {
      toggleTheme()
    }
  }

  const switchToLight = () => {
    if (isDark) {
      toggleTheme()
    }
  }

  const RenderSwitchTheme = (
    <>
      <div>
        <button
          onClick={switchToDark}
          type="button"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <img src={moon} alt="" />
        </button>
        <span style={{ fontSize: '25px' }}>/</span>
        <button
          onClick={switchToLight}
          type="button"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <img src={sun} alt="" />
        </button>
      </div>
    </>
  )

  const RenderLogo = (
    <img
      src={isDark ? tapswapLogo : tapswapLogoDark}
      alt=""
      style={{
        marginLeft: '-2%',
        width: '10%',
      }}
    />
  )

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
      {RenderLogo}
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
      {RenderConnectButton}
      {RenderSwitchTheme}
    </Heading>
  )
}

export default Menu
