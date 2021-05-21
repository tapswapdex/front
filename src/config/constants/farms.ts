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
      56: '0x4308382Fbb0f4b9Fb7d6306177D659BB0934E609', // TAPS-BUSD LP
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
    pid: 1,
    isOldPsc: true,
    lpSymbol: 'TAPS-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x4308382Fbb0f4b9Fb7d6306177D659BB0934E609',
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
    pid: 2,
    isOldPsc: true,
    lpSymbol: 'TAPS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2e593C36346037D2C5583328C4B76945b37B3893',
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
    pid: 3,
    isPsc: true,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
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
    pid: 4,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD
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
    pid: 7,
    isPsc: true,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
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
    pid: 8,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'ADA',
    lpAddresses: {
      97: '',
      56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf', // ADA-BNB
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', // ADA
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 9,
  //   isApe: true,
  //   lpSymbol: 'TAPS-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x744527700ceB261689dF9862FcD0036f5771324C',
  //   },
  //   tokenSymbol: 'TAPS',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x56eab07247e3e6404ac90140F20bba61375d5C3C',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 10,
  //   isApe: true,
  //   lpSymbol: 'TAPS-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1ea398a30f0f2a6ce00bEBfe08Fe11cd9Df5Afb6',
  //   },
  //   tokenSymbol: 'TAPS',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x56eab07247e3e6404ac90140F20bba61375d5C3C',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },

  { // ----------------------------------------------------------------------- checked
    pid: 9,
    isPsc: true,
    lpSymbol: 'BSC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x37e195ad182b653ddde0b7742fa137cc2f52f8b1', // checked
    },
    tokenSymbol: 'BSC',
    tokenAddresses: {
      97: '',
      56: '0xf5128928f85f16bd67c1e02ddd1b47a71d17adf5', // checked
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
