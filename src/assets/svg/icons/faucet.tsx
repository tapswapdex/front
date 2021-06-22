import { darkColors, lightColors } from 'tapswap-uikit'
import useTheme from 'hooks/useTheme'
import React from 'react'

export default function FaucetIcon() {
  const { isDark } = useTheme()

  return (
    <svg
      viewBox="0 0 512 512"
      fill={isDark ? 'white' : 'dark'}
      width="24px"
      color="text"
      xmlns="http://www.w3.org/2000/svg"
      className="sc-bdfBwQ jPzyzv"
    >
      <path d="M15,91c-8.284,0-15,6.716-15,15v301c0,8.284,6.716,15,15,15c24.853,0,45-20.147,45-45V136C60,111.147,39.853,91,15,91z" />
      <path d="M392,362v30c0,8.284,6.716,15,15,15h90c8.284,0,15-6.716,15-15v-30H392z" />
      <path
        d="M392,197h-69.357c-9.911-11.003-22.405-19.427-36.643-24.489V90h41.206c3.001,1.957,13.226,15,33.794,15
			c24.814,0,45-20.186,45-45c0-24.814-20.186-45-45-45c-20.592,0-30.787,13.039-33.794,15h-39.36l-3.545-9.99
			C280.053,8.042,268.686,0,256,0c-12.686,0-24.053,8.042-28.301,20.01L224.154,30h-39.36c-3.001-1.957-13.226-15-33.794-15
			c-24.814,0-45,20.186-45,45c0,24.814,20.186,45,45,45c20.592,0,30.787-13.039,33.794-15H226v82.511
			c-14.238,5.061-26.732,13.486-36.643,24.489H90v120h99.086h0.271c16.474,18.287,40.093,30,66.643,30s50.169-11.713,66.643-30
			h0.271H362c10.984,0,20.176,6.194,25.402,15H512v-15C512,250.725,458.275,197,392,197z"
      />
      <path
        d="M479.671,470.398l-14.678-25.679c-2.666-4.673-7.632-7.559-13.008-7.559h-0.015c-5.376,0-10.327,2.871-13.008,7.529
			l-14.678,25.781C422.776,474.163,422,478.045,422,482c0,16.538,13.462,30,30,30c16.538,0,30-13.462,30-30
			C482,478.241,481.537,473.664,479.671,470.398z"
      />
    </svg>
  )
}
