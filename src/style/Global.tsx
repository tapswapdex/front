import React from 'react'
import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit/dist/theme'
import useTheme from 'hooks/useTheme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = () => {
  const { isDark } = useTheme()
  const Style = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {

    background-color: ${isDark ? 'rgb(31, 43, 70)' : 'white'};
   
    img {
      height: auto;
      max-width: 100%;
    }
  }
`
  // background-image: url(${
  //   isDark && 'https://cdn.discordapp.com/attachments/847731075640066048/854998645790474250/Night.png'
  // });

  return (
    <>
      <Style />
    </>
  )
}

export default GlobalStyle
