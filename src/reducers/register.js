const DEFAULT_STATE = {
  organization: '',
  adminAddress: '0x0',
  adminUsername: '',
  authToken: '',
  decimals: 8,
  symbol: '',
  tokenName: '',
  registered: false,
  showRegistration: true
}

export default function register(state=DEFAULT_STATE, action) {
  switch(action.type) {
    case 'SET_REGISTRATION_VALUE':
      return {
        ...state,
        [action.id]: action.value
      }
      break;
    default:
      return state;
  }
}
