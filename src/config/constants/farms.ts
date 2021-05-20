import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    isOldPsc: true,
    isTokenOnly: true,
    lpSymbol: 'TAPS',
    lpAddresses: {
      97: '',
      56: '0x455254e9f1846F70184F586B56dfFb82E5370dec', // TAPS-BUSD LP
    },
    tokenSymbol: 'TAPS',
    tokenAddresses: {
      97: '',
      56: '0x56eab07247e3e6404ac90140F20bba61375d5C3C',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
     {
     pid: 4,
     isPsc: true,
     isTokenOnly: true,
     lpSymbol: 'BTCB',
     lpAddresses: {
       97: '',
       56: '0x1E1aFE9D9c5f290d8F6996dDB190bd111908A43D', // BTCB-WBNB APE LP
     },
     tokenSymbol: 'BTCB',
     tokenAddresses: {
       97: '',
       56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
     },
     quoteTokenSymbol: QuoteToken.BNB,
     quoteTokenAdresses: contracts.wbnb,
   },
   {
    pid: 5,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xA0C3Ef24414ED9C9B456740128d8E63D016A9e11', // ETH -WBNB APE LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'ADA',
    lpAddresses: {
      97: '',
      56: '0x40d4543887E4170A1A40Cd8dB15A6b297c812Cb1', // ADA-BNB
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', // ADA
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 12,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'TAPS-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x455254e9f1846F70184F586B56dfFb82E5370dec',
    },
    tokenSymbol: 'TAPS',
    tokenAddresses: {
      97: '',
      56: '0x56eab07247e3e6404ac90140F20bba61375d5C3C',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'TAPS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xca21e3aDb07a2f1A289CA1C5530021A6f8130DBc',
    },
    tokenSymbol: 'TAPS',
    tokenAddresses: {
      97: '',
      56: '0x56eab07247e3e6404ac90140F20bba61375d5C3C',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 14,
    isApe: true,
    lpSymbol: 'TAPS-BANANA LP',
    lpAddresses: {
      97: '',
      56: '0x1beD49A495353C33eCfF62c32Ee590E65d513fDB',
    },
    tokenSymbol: 'TAPS',
    tokenAddresses: {
      97: '',
      56: '0x56eab07247e3e6404ac90140F20bba61375d5C3C',
    },
    quoteTokenSymbol: QuoteToken.BANANA,
    quoteTokenAdresses: contracts.banana,
  },
  {
    pid: 15,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2e707261d086687470B515B320478Eb1C88D49bb',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 18,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xA0C3Ef24414ED9C9B456740128d8E63D016A9e11',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x51e6D27FA57373d8d4C256231241053a70Cb1d93', // BNB-BUSD APE LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x60593Abea55e9Ea9d31c1b6473191cD2475a720D',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 20,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'BTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1E1aFE9D9c5f290d8F6996dDB190bd111908A43D',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 21,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'BSC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5c60Efc9b169aCe846f185eFbb1a77efEA2dbE3C',
    },
    tokenSymbol: 'BSC',
    tokenAddresses: {
      97: '',
      56: '0xf5128928f85f16bd67c1e02ddd1b47a71d17adf5',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 22,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'BURGER-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xf2d7590cb86bea32193293d1bc9dffaf379c3642',
    },
    tokenSymbol: 'BURGER',
    tokenAddresses: {
      97: '',
      56: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  
]

export default farms
