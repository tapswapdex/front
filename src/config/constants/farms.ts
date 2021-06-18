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
    pid: 33,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'BSC  ',
    lpAddresses: {
      97: '',
      56: '0xa643e30c957ca5a1e176da169a1be7afdc1bda16', // BSC-BNB BLP
    },
    tokenSymbol: 'BSC',
    tokenAddresses: {
      97: '',
      56: '0xf5128928f85f16bd67c1e02ddd1b47a71d17adf5', // BSC
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 34,
    isApe: false,
    isTokenOnly: false,
    lpSymbol: 'BSC-BNB Locked LP',
    lpAddresses: {
      97: '',
      56: '0xa643e30c957ca5a1e176da169a1be7afdc1bda16',
    },
    tokenSymbol: 'BSC',
    tokenAddresses: {
      97: '',
      56: '0xf5128928f85F16bD67C1E02DdD1b47A71d17aDF5',
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
  {
    pid: 30,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'BANANA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713',
    },
    tokenSymbol: 'BANANA',
    tokenAddresses: {
      97: '',
      56: '0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 31,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'BAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc1c7a1d33b34019f82808f64ba07e77512a13d1a',
    },
    tokenSymbol: 'BAKE',
    tokenAddresses: {
      97: '',
      56: '0xe02df9e3e622debdd69fb838bb799e3f168902c5',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 23,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'MATIC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0A79586aE8d07a5739A99b5334983620040Fa76F',
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      97: '',
      56: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 24,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'MATIC',
    lpAddresses: {
      97: '',
      56: '0x29A4A3D77c010CE100A45831BF7e798f0f0B325D', // MATIC-BNB
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      97: '',
      56: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd', // MATIC
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 25,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'BAKE',
    lpAddresses: {
      97: '',
      56: '0xc1C7a1D33B34019F82808F64bA07e77512a13d1A', // BAKE-BNB
    },
    tokenSymbol: 'BAKE',
    tokenAddresses: {
      97: '',
      56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5', // BAKE
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 26,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'XRP',
    lpAddresses: {
      97: '',
      56: '0x6f0f18f5fcC1466ec41c8106689e10BeFE68D1c0', // XRP-BNB
    },
    tokenSymbol: 'XRP',
    tokenAddresses: {
      97: '',
      56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe', // XRP
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 28,
  //   isApe: true,
  //   isTokenOnly: true,
  //   lpSymbol: 'DOGE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xfd1ef328A17A8e8Eeaf7e4Ea1ed8a108E1F2d096', // DOGE-BNB
  //   },
  //   tokenSymbol: 'DOGE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xba2ae424d960c26247dd6c32edc70b295c744c43', // DOGE
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  {
    pid: 29,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'BANANA',
    lpAddresses: {
      97: '',
      56: '0xF65C1C0478eFDe3c19b49EcBE7ACc57BB6B1D713', // BANANA-BNB
    },
    tokenSymbol: 'BANANA',
    tokenAddresses: {
      97: '',
      56: '0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95', // BANANA
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 36,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'JDI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xfb6063f29AF6dcd1fc03A8E221c6D91DEabbE764',
    },
    tokenSymbol: 'JDI',
    tokenAddresses: {
      97: '',
      56: '0x0491648c910ad2c1afaab733faf71d30313df7fc',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 37,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'UNI',
    lpAddresses: {
      97: '',
      56: '0x531b34E4e6F3ea3E05dee17EeA164b03cc328E23', // UNI-WBNB
    },
    tokenSymbol: 'UNI',
    tokenAddresses: {
      97: '',
      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1', // UNI
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 38,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'BIFI',
    lpAddresses: {
      97: '',
      56: '0xDDd3f9d5Bd347c55D18752c0C2075698EC657750', // BIFI-BNB
    },
    tokenSymbol: 'BIFI',
    tokenAddresses: {
      97: '',
      56: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A', // BIFI
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 39,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'AUTO',
    lpAddresses: {
      97: '',
      56: '0x649a5ad5135b4bd287e5aca8d41f4d5e1b52af5c', // AUTO-WBNB LP
    },
    tokenSymbol: 'AUTO',
    tokenAddresses: {
      97: '',
      56: '0xa184088a740c695e156f91f5cc086a06bb78b827', // AUTO
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 42,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'BUNNY',
    lpAddresses: {
      97: '',
      56: '0xAa78E5580AE24e52d2841281AdA5B55fDd72c81a', // BUNNY-WBNB
    },
    tokenSymbol: 'BUNNY',
    tokenAddresses: {
      97: '',
      56: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51', // BUNNY
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 40,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'SPACE',
    lpAddresses: {
      97: '',
      56: '0xd0f82498051067e154d1dcd3d88fa95063949d7e', // SPACE-BNB
    },
    tokenSymbol: 'SPACE',
    tokenAddresses: {
      97: '',
      56: '0xe486a69e432fdc29622bf00315f6b34c99b45e80', // SPACE
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 41,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'SWAMP',
    lpAddresses: {
      97: '',
      56: '0xa3f0f63268df562c71051ac5e81460e857c32c12', // SWAMP-BNB
    },
    tokenSymbol: 'SWAMP',
    tokenAddresses: {
      97: '',
      56: '0xc5a49b4cbe004b6fd55b30ba1de6ac360ff9765d', // SWAMP
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 43,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'JDI',
    lpAddresses: {
      97: '',
      56: '0xfb6063f29AF6dcd1fc03A8E221c6D91DEabbE764', // JDI-BNB
    },
    tokenSymbol: 'JDI',
    tokenAddresses: {
      97: '',
      56: '0x0491648c910ad2c1afaab733faf71d30313df7fc', // JDI
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 44,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'LYPTUS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1ea398a30f0f2a6ce00bEBfe08Fe11cd9Df5Afb6',
    },
    tokenSymbol: 'LYPTUS',
    tokenAddresses: {
      97: '',
      56: '0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 45,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'LYPTUS',
    lpAddresses: {
      97: '',
      56: '0x1ea398a30f0f2a6ce00bEBfe08Fe11cd9Df5Afb6', // LYPTUS-BNB
    },
    tokenSymbol: 'LYPTUS',
    tokenAddresses: {
      97: '',
      56: '0xba26397cdff25f0d26e815d218ef3c77609ae7f1', // LYPTUS
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 46,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'BREW-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9758F1A00B8babF336d8D058F1495d7C325865fc', // BREW-BNB
    },
    tokenSymbol: 'BREW',
    tokenAddresses: {
      97: '',
      56: '0x790be81c3ca0e53974be2688cdb954732c9862e1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 47,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'BREW',
    lpAddresses: {
      97: '',
      56: '0x9758F1A00B8babF336d8D058F1495d7C325865fc', // BREW-BNB
    },
    tokenSymbol: 'BREW',
    tokenAddresses: {
      97: '',
      56: '0x790be81c3ca0e53974be2688cdb954732c9862e1', // BREW
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 48,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'WATCH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa00a91fbb39051e2a6368424a93895c3f1f2290b', // WATCH-BNB
    },
    tokenSymbol: 'WATCH',
    tokenAddresses: {
      97: '',
      56: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 49,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'WATCH',
    lpAddresses: {
      97: '',
      56: '0xa00a91fbb39051e2a6368424a93895c3f1f2290b', // WATCH-BNB
    },
    tokenSymbol: 'WATCH',
    tokenAddresses: {
      97: '',
      56: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0', // WATCH
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 50,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'SHIB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc0afb6078981629f7eae4f2ae93b6dbea9d7a7e9', // SHIB-BNB
    },
    tokenSymbol: 'SHIB',
    tokenAddresses: {
      97: '',
      56: '0x2859e4544c4bb03966803b044a93563bd2d0dd4d',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 51,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'SHIB',
    lpAddresses: {
      97: '',
      56: '0xc0afb6078981629f7eae4f2ae93b6dbea9d7a7e9', // SHIB-BNB
    },
    tokenSymbol: 'SHIB',
    tokenAddresses: {
      97: '',
      56: '0x2859e4544c4bb03966803b044a93563bd2d0dd4d', // SHIB
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 52,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'BFT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1696a65ea693593ba771b5a7afc54c8eaf4c20de', // BFT-BNB
    },
    tokenSymbol: 'BFT',
    tokenAddresses: {
      97: '',
      56: '0xa4f93159ce0a4b533b443c74b89967c60a5969f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 53,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'BFT',
    lpAddresses: {
      97: '',
      56: '0x1696a65ea693593ba771b5a7afc54c8eaf4c20de', // BFT-BNB
    },
    tokenSymbol: 'BFT',
    tokenAddresses: {
      97: '',
      56: '0xa4f93159ce0a4b533b443c74b89967c60a5969f8', // BFT
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 54,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'PANTHER-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4ede3a65fceddfe4e8ea4279b684a94739fac35d', // PANTHER-BNB
    },
    tokenSymbol: 'PANTHER',
    tokenAddresses: {
      97: '',
      56: '0x1f546ad641b56b86fd9dceac473d1c7a357276b7',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 55,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'PANTHER',
    lpAddresses: {
      97: '',
      56: '0x4ede3a65fceddfe4e8ea4279b684a94739fac35d', // PANTHER-BNB
    },
    tokenSymbol: 'PANTHER',
    tokenAddresses: {
      97: '',
      56: '0x1f546ad641b56b86fd9dceac473d1c7a357276b7', // PANTHER
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 56,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'ALLOY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc64187324684f11b913ca707bc63b80e32e870bc', // ALLOY-BNB
    },
    tokenSymbol: 'ALLOY',
    tokenAddresses: {
      97: '',
      56: '0x5ef5994fa33ff4eb6c82d51ee1dc145c546065bd',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 57,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'ALLOY',
    lpAddresses: {
      97: '',
      56: '0xc64187324684f11b913ca707bc63b80e32e870bc', // ALLOY-BNB
    },
    tokenSymbol: 'ALLOY',
    tokenAddresses: {
      97: '',
      56: '0x5ef5994fa33ff4eb6c82d51ee1dc145c546065bd', // ALLOY
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 58,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x60593Abea55e9Ea9d31c1b6473191cD2475a720D', // CAKE-BNB
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', // CAKE
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 59,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'CELR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xb7f42e58cf2364ac994f93f7aff3b158cfa3dc76', // CELR-BNB
    },
    tokenSymbol: 'CELR',
    tokenAddresses: {
      97: '',
      56: '0x1f9f6a696c6fd109cd3956f45dc709d2b3902163',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 60,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'CELR',
    lpAddresses: {
      97: '',
      56: '0xb7f42e58cf2364ac994f93f7aff3b158cfa3dc76', // CELR-BNB
    },
    tokenSymbol: 'CELR',
    tokenAddresses: {
      97: '',
      56: '0x1f9f6a696c6fd109cd3956f45dc709d2b3902163', // CELR
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 61,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x21cbb561c5d7d70e9e6cc42136cb22f07552aeef', // DOT-BNB
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 62,
    isApe: true,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      56: '0x21cbb561c5d7d70e9e6cc42136cb22f07552aeef', // DOT-BNB
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402', // DOT
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 64,
    isApe: true,
    isTokenOnly: false,
    lpSymbol: 'LTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0f12362c017fe5101c7bba09390f1cb729f5b318', // LTC-BNB
    },
    tokenSymbol: 'LTC',
    tokenAddresses: {
      97: '',
      56: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 65,
  //   isApe: true,
  //   isTokenOnly: true,
  //   lpSymbol: 'LTC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0f12362c017fe5101c7bba09390f1cb729f5b318', // LTC-BNB
  //   },
  //   tokenSymbol: 'LTC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94', // LTC
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
]

export default farms
