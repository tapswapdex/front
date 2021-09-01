import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon } from 'tapswap-uikit'

const qoutationModes = {
  bnb: 'bnb',
  ygt: 'ygt',
}

const CoreTag = (props) => (
  <Tag variant="secondary" outline startIcon={<VerifiedIcon />} {...props}>
    Core
  </Tag>
)

const CommunityTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon />} {...props}>
    Community
  </Tag>
)

const InsteadTag = ({ mode, ...props }) => (
  <Tag variant="textSubtle" outline {...props}>
    {mode === qoutationModes.bnb ? 'Get BNB qoute instead' : 'Get YGT qoute instead'}
  </Tag>
)

const BinanceTag = (props) => (
  <Tag variant="binance" outline startIcon={<BinanceIcon />} {...props}>
    Binance
  </Tag>
)

const DualTag = (props) => (
  <Tag variant="textSubtle" outline {...props}>
    Dual
  </Tag>
)

export { CoreTag, CommunityTag, BinanceTag, DualTag, InsteadTag }
