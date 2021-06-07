
import { MenuEntry } from '@pancakeswap-libs/uikit'
import DocumentIcon from 'assets/svg/icons/document'
import ExchangeIcon from 'assets/svg/icons/exchange'
import FarmsIcon from 'assets/svg/icons/farms'
import FaucetIcon from 'assets/svg/icons/faucet'
import HomeIcon from 'assets/svg/icons/home'
import InfoIcon from 'assets/svg/icons/info'
import MoreIcon from 'assets/svg/icons/more'
import PoolsIcon from 'assets/svg/icons/pools'
import SecurityIcon from 'assets/svg/icons/security'

interface AppMenuEntry extends MenuEntry {
  svgIcon?: any
}

const config: AppMenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
    svgIcon: HomeIcon
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    href:"https://swape.tapswap.money/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x56eab07247e3e6404ac90140F20bba61375d5C3C",
    // items: [
    //   {
    //     label: 'Exchange',
    //     href:
    //       'https://swape.tapswap.money/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x56eab07247e3e6404ac90140F20bba61375d5C3C',
    //   },
    //   {
    //     label: 'Liquidity',
    //     href:
    //       'https://swape.tapswap.money/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x56eab07247e3e6404ac90140F20bba61375d5C3C',
    //   },
    // ],
    svgIcon: ExchangeIcon
  },
  {
    label: 'Lake Farms',
    icon: 'FarmIcon',
    href: '/farms',
    svgIcon: FarmsIcon
   
  },
  {
    label: 'Oasis Pool',
    icon: 'PoolIcon',
    href: '/pools',
    svgIcon: PoolsIcon
  },
  {
    label: 'Smart Faucet',
    icon: 'BushIcon',
    href: '/bush',
    svgIcon: FaucetIcon
  },
  // {
  //   label: 'Techrate Audit',
  //   icon: 'ShieldIcon',
  //   href: 'https://tapswap.money/files/audit_techrate.pdf',
  //   target: '_blank',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    href: 'https://info.apeswap.finance/token/0x56eab07247e3e6404ac90140f20bba61375d5c3c',
    target: '_blank',
    svgIcon: InfoIcon
    // items: [
    //   {
    //     label: 'Token',
    //     href: 'https://info.apeswap.finance/token/0x56eab07247e3e6404ac90140f20bba61375d5c3c',
    //     target: '_blank',
    //   },
    //   // {
    //   //   label: 'Contracts',
    //   //   href: 'https://tapswap.gitbook.io/tapswap/security/contracts',
    //   //   target: '_blank',
    //   // },
    //   // {
    //   //   label: 'Transparency',
    //   //   href: 'https://tapswap.gitbook.io/tapswap/transparency/transparency',
    //   //   target: '_blank',
    //   // },
    //   // {
    //   //   label: 'PancakeSwap',
    //   //   href: 'https://pancakeswap.info/token/0x56eab07247e3e6404ac90140F20bba61375d5C3C',
    //   //   target: '_blank',
    //   // },
    //   // {
    //   //   label: 'Dapp.com',
    //   //   href: 'https://www.dapp.com/app/tapswap-exchange',
    //   //   target: '_blank',
    //   // },
    //   // {
    //   //   label: 'Dappradar.com',
    //   //   href: 'https://dappradar.com/binance-smart-chain/defi/tapswap',
    //   //   target: '_blank',
    //   // },
    //   // {
    //   //   label: 'Bsc.news',
    //   //   href: 'https://www.bsc.news/bsc-projects',
    //   //   target: '_blank',
    //   // },
    //   // {
    //   //   label: 'CoinGecko',
    //   //   href: 'https://www.coingecko.com/en/coins/tapswaptoken',
    //   // },
    //   // {
    //   //   label: 'CoinMarketCap',
    //   //   href: 'https://coinmarketcap.com/currencies/tapswaptoken/',
    //   // },
    // ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'Audit By Certik',
    icon: 'ShieldIcon',
    href: 'https://www.certik.org/projects/tapswapfinance',
    target: '_blank',
    svgIcon: SecurityIcon
  },
  {
    label: 'Docs',
    icon: 'DocIcon',
    href: 'https://tapswapmoney.gitbook.io/tapswap/security/contracts',
    target: '_blank',
    svgIcon: DocumentIcon
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/TapSwapV3',
        target: '_blank',
      },
      {
        label: 'Blog',
        href: 'https://tapswapmoneydex.medium.com/',
        target: '_blank',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/tapswap',
        target: '_blank',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/tapswapdex',
        target: '_blank',
      },
    ],
    svgIcon: MoreIcon 
  },
]

export default config
