import React, { useEffect, useState } from 'react'
import { Button, ConnectorNames, Dropdown, Heading, useWalletModal } from 'tapswap-uikit'
import { ProSidebar, Menu as ProMenu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar'
import { useWeb3React } from '@web3-react/core'

import { connectorsByName } from 'utils/web3React'
import { Link, useHistory } from 'react-router-dom'
import useTheme from 'hooks/useTheme'

import { AlignLeft } from 'react-feather'
import config from './config'
import sun from '../../assets/svg/sun'
import moon from '../../assets/svg/moon'
import tapswapLogo from '../../assets/img/logo.png'
import tapswapLogoDark from '../../assets/img/logo-dark.png'

const Menu = () => {
  const { isDark, toggleTheme } = useTheme()

  const { push } = useHistory()
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
          {moon()}
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
          {sun()}
        </button>
      </div>
    </>
  )

  const RenderLogo = (
    <img
      src={isDark ? tapswapLogo : tapswapLogoDark}
      alt=""
      style={{
        marginLeft: isMobile ? '4%' : '-2%',
        width: isMobile ? '50%' : '10%',
      }}
    />
  )

  const RenderMobileLogo = (
    <img
      src={tapswapLogo}
      alt=""
      style={{
        marginLeft: isMobile ? '4%' : '-2%',
        width: isMobile ? '50%' : '10%',
      }}
    />
  )

  const [collapsed, setCollapsed] = useState(true)

  const collapseNavBar = () => {
    return setCollapsed(true)
  }

  const RenderMobileSideBar = (
    <ProSidebar toggled collapsed={collapsed} style={{ position: 'fixed', maxWidth: '5px', height: '100vh' }}>
      <SidebarHeader
        style={{ padding: '10px', display: 'flex', justifyContent: 'space-between', height: collapsed ? '20px' : '' }}
      >
        {!collapsed && RenderMobileLogo}

        <AlignLeft
          onClick={() => {
            setCollapsed(!collapsed)
          }}
        />
      </SidebarHeader>
      {!collapsed && (
        <ProMenu iconShape="square">
          {config.map((item) => {
            if (item.href && item.href.includes('http')) {
              return (
                <MenuItem>
                  <a
                    className="navbar-item"
                    href={item.href}
                    target={item.target}
                    style={{
                      color: isDark ? 'aqua' : '#d2004c',
                    }}
                    onClick={collapseNavBar}
                  >
                    {item.svgIcon && item.svgIcon()}
                    {item.label}
                  </a>
                </MenuItem>
              )
            }

            if (item.items && item.items.length > 0) {
              return (
                <>
                  <SubMenu
                    title="More"
                    className="navbar-item"
                    style={{
                      color: isDark ? 'aqua' : '#d2004c',
                    }}
                    icon={item.svgIcon()}
                  >
                    {item.items.map(({ href, label, target }) => {
                      return (
                        <MenuItem>
                          <a
                            className="navbar-item"
                            href={href}
                            target={target}
                            style={{
                              color: isDark ? 'aqua' : '#d2004c',
                              marginBottom: '20px',
                            }}
                            onClick={collapseNavBar}
                          >
                            {label}{' '}
                          </a>
                        </MenuItem>
                      )
                    })}
                  </SubMenu>
                </>
              )
            }

            return (
              <MenuItem
                className="navbar-item"
                style={{
                  color: isDark ? 'aqua' : '#d2004c',
                }}
                onClick={() => {
                  push(item.href)
                  collapseNavBar()
                }}
              >
                {item.svgIcon && item.svgIcon()}
                {item.label}
              </MenuItem>
            )
          })}
          <div
            style={{
              marginTop: '5%',
              marginLeft: '5%',
            }}
          >
            {RenderConnectButton}
          </div>
          <div
            style={{
              marginTop: '5%',
              marginLeft: '5%',
            }}
          >
            {RenderSwitchTheme}
          </div>
        </ProMenu>
      )}
    </ProSidebar>
  )

  const RenderDesktopSidebar = (
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
            <a
              className="navbar-item"
              href={item.href}
              target={item.target}
              style={{
                color: isDark ? 'aqua' : '#d2004c',
              }}
            >
              {item.svgIcon && item.svgIcon()}
              {item.label}
            </a>
          )
        }

        if (item.items && item.items.length > 0) {
          return (
            <Dropdown
              target={
                <h4
                  className="navbar-item"
                  style={{
                    color: isDark ? 'aqua' : '#d2004c',
                  }}
                >
                  More
                </h4>
              }
            >
              {item.items.map(({ href, label, target }) => {
                return (
                  <a
                    className="navbar-item"
                    href={href}
                    target={target}
                    style={{
                      color: isDark ? 'aqua' : '#d2004c',
                      marginBottom: '20px',
                    }}
                  >
                    {label}
                  </a>
                )
              })}
            </Dropdown>
          )
        }

        return (
          <Link
            className="navbar-item"
            to={item.href}
            target={item.target}
            style={{
              color: isDark ? 'aqua' : '#d2004c',
            }}
          >
            {item.svgIcon && item.svgIcon()}
            {item.label}
          </Link>
        )
      })}
      {RenderConnectButton}
      {RenderSwitchTheme}
    </Heading>
  )

  return isMobile ? RenderMobileSideBar : RenderDesktopSidebar
}

export default Menu
