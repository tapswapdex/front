import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 67, // V2
  //   tokenName: 'BUSD',
  //   tokenLabel: 'BUSD v2',
  //   tokenAddress: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  //   stakingTokenName: QuoteToken.TAPS,
  //   stakingTokenAddress: '0x56eab07247e3e6404ac90140F20bba61375d5C3C',
  //   stakingTokenDecimals: 18,
  //   contractAddress: {
  //     97: '',
  //     56: '0x6Bf9e6B8752bED5E8c91A58D93dE8ABD2D9c3804',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://tapswap.money',
  //   harvest: true,
  //   tokenPerBlock: '0.0005',
  //   sortOrder: 999,
  //   isFinished: false,
  //   tokenDecimals: 18,
  //   isBush: true,
  //   isLp: false,
  //   bushVersion: 1,
  //   getUrl: '/#/swape?outputCurrency=0x56eab07247e3e6404ac90140F20bba61375d5C3C',
  // },

  {
    sousId: 70, // BSC COre YIELD Guild
    tokenName: 'YGT',
    tokenLabel: 'BSC Core Yield',
    tokenAddress: '0x070a08beef8d36734dd67a491202ff35a6a16d97', // rewards token should be SLP
    stakingTokenName: QuoteToken.YGT,
    stakingTokenAddress: '0xCbE002053F2d200a1CB152e2296D64698C1030E8', // Staked token
    stakingTokenDecimals: 18,
    contractAddress: {
      97: '',
      56: '0x6eDeb935A3BbcDcfB6c0E480574ABCf8017AFcC7',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://dapp.tapswap.finance/#/',
    harvest: true,
    tokenPerBlock: '0.00138',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    isBush: true,
    isLp: false,
    bushVersion: 1,
    getUrl: '/#/swap?outputCurrency=0xcbe002053f2d200a1cb152e2296d64698c1030e8',
  },

  // {
  //   sousId: 75, // BSC COre YIELD Guild
  //   tokenName: 'YGT',
  //   tokenLabel: 'User 1',
  //   tokenAddress: '0x070a08beef8d36734dd67a491202ff35a6a16d97', // rewards token should be SLP
  //   stakingTokenName: QuoteToken.YGT,
  //   stakingTokenAddress: '0xCbE002053F2d200a1CB152e2296D64698C1030E8', // Staked token
  //   stakingTokenDecimals: 18,
  //   contractAddress: {
  //     97: '',
  //     56: '0x6eDeb935A3BbcDcfB6c0E480574ABCf8017AFcC7',
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   projectLink: 'https://dapp.tapswap.finance/#/',
  //   harvest: true,
  //   tokenPerBlock: '0.00138',
  //   sortOrder: 999,
  //   isFinished: false,
  //   tokenDecimals: 18,
  //   isBush: true,
  //   isLp: false,
  //   bushVersion: 1,
  //   getUrl: '/#/swap?outputCurrency=0xcbe002053f2d200a1cb152e2296d64698c1030e8',
  //   axieId: '994315',
  // },
  // {
  //   sousId: 68, // V1
  //   tokenName: 'WBNB',
  //   tokenLabel: 'WBNB v1',
  //   tokenAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  //   stakingTokenName: QuoteToken.TAPS,
  //   stakingTokenAddress: '0x56eab07247e3e6404ac90140F20bba61375d5C3C',
  //   stakingTokenDecimals: 18,
  //   contractAddress: {
  //     97: '',
  //     56: '0x705993A5576c67Ba7d0d1B8a39857AeB28712201',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://www.binance.com',
  //   harvest: true,
  //   tokenPerBlock: '0.00001388888889',
  //   sortOrder: 999,
  //   isFinished: false,
  //   tokenDecimals: 18,
  //   isBush: true,
  //   isLp: false,
  //   bushVersion: 1,
  //   getUrl: '/#/swap?outputCurrency=0x56eab07247e3e6404ac90140F20bba61375d5C3C',
  // },
  // {
  //   sousId: 69, // V1
  //   tokenName: 'BANANA',
  //   tokenLabel: 'BANANA v1',
  //   tokenAddress: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
  //   stakingTokenName: QuoteToken.TAPS_BUSD_APE_LP,
  //   stakingTokenAddress: '0x744527700ceB261689dF9862FcD0036f5771324C',
  //   stakingTokenDecimals: 18,
  //   contractAddress: {
  //     97: '',
  //     56: '0x9dA22cd406890Be1De991243f4922CcE83cC874F',
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   projectLink: 'https://apeswap.finance/',
  //   harvest: true,
  //   tokenPerBlock: '0.003472222222',
  //   sortOrder: 999,
  //   isFinished: false,
  //   tokenDecimals: 18,
  //   isBush: true,
  //   isLp: true,
  //   bushVersion: 1,
  //   getUrl: '/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x56eab07247e3e6404ac90140F20bba61375d5C3C',
  // },
  // {
  //   sousId: 70, // V1
  //   tokenName: 'CAKE',
  //   tokenLabel: 'CAKE v1',
  //   tokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   stakingTokenName: QuoteToken.TAPS_BUSD_APE_LP,
  //   stakingTokenAddress: '0x744527700ceB261689dF9862FcD0036f5771324C',
  //   stakingTokenDecimals: 18,
  //   contractAddress: {
  //     97: '',
  //     56: '0xe0c34a5b8E231e05AEF3A30d7FB953223fE4e642',
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   projectLink: 'https://pancakeswap.finance/',
  //   harvest: true,
  //   tokenPerBlock: '0.000248015873',
  //   sortOrder: 999,
  //   isFinished: false,
  //   tokenDecimals: 18,
  //   isBush: true,
  //   isLp: true,
  //   bushVersion: 1,
  //   getUrl: '/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x56eab07247e3e6404ac90140F20bba61375d5C3C',
  // },
]

export default pools
