import { configureStore } from '@reduxjs/toolkit'

const defaultState = {
  nfts: [],
  peacefulStaked: [],
  hungryStaked: [],
  frenzyStaked: [],
  peacefulNum: 0,
  hungryNum: 0,
  frenzyNum: 0,
  approvedNFT: false,
  approvedToken: 0,
  connected: false,
  nftSupply: 0,
  balance: 0,
  avax: 0,
  claimable: 0,
  epochNum: 0,
  river: 0,
  lastEpochTime: 0,
  nftPaused: true,
  stakingPaused: true,
  account: {
    address: undefined,
    connected: false,
    chainId: undefined,
  },
};
const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
      case "UPDATE_NFTS_UNSTAKED":
          return {...state, nfts: action.payload}
      case "UPDATE_NFTS_PEACEFUL":
          return {...state, peacefulStaked: action.payload}
      case "UPDATE_NFTS_HUNGRY":
          return {...state, hungryStaked: action.payload}
      case "UPDATE_NFTS_FRENZY":
          return {...state, frenzyStaked: action.payload}
      case "UPDATE_PEACEFUL_NUM":
          return {...state, peacefulNum: action.payload}
      case "UPDATE_HUNGRY_NUM":
          return {...state, hungryNum: action.payload}
      case "UPDATE_FRENZY_NUM":
          return {...state, frenzyNum: action.payload}
      case "UPDATE_NFTS_SUPPLY":
          return {...state, nftSupply: action.payload}
      case "UPDATE_APPROVAL_NFTS":
          return {...state, approvedNFT: action.payload}
      case "UPDATE_APPROVAL_TOKEN":
          return {...state, approvedToken: action.payload}
      case "UPDATE_BALANCE":
          return {...state, balance: action.payload}
      case "UPDATE_CLAIMABLE":
          return {...state, claimable: action.payload}
      case "UPDATE_EPOCH":
          return {...state, epochNum: action.payload}
      case "UPDATE_EPOCH_TIME":
          return {...state, lastEpochTime: action.payload}
      case "UPDATE_RIVER":
          return {...state, river: action.payload}
      case "UPDATE_AVAX":
          return {...state, avax: action.payload}
      case "UPDATE_RIVER_PAUSED":
          return {...state, stakingPaused: action.payload}
      case "UPDATE_NFT_PAUSED":
          return {...state, nftPaused: action.payload}
      case "CONNECT_WALLET":
          return {...state, connected: true};
      case "UPDATE_ACCOUNT":
          return {...state, account: action.payload};
      case "DISCONNECT_WALLET":
          return defaultState;
      case "LOADING":
          return {...state, loading: true}
      case "FINISH_LOADING":
          return {...state, loading: false}
      default:
          return state;
  }
};
export const makeStore = () => {
  return configureStore({
    reducer: reducer
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']