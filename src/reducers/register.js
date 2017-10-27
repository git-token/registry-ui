

const DEFAULT_STATE = {
  organization: 'git-token',
  adminAddress: '0x48299b423342db084b49d97c8b09392f6156cdc7',
  adminUsername: 'Ryanmtate',
  authToken: '82720e8ae222f2d266cda80a707eaf1056189517',
  decimals: 8,
  symbol: 'GTK',
  tokenName: 'GitToken',
  registered: false,
  showRegistration: false
  // organization: '',
  // adminAddress: '0x0',
  // adminUsername: '',
  // authToken: '',
  // decimals: 8,
  // symbol: '',
  // tokenName: '',
  // registered: false,
  // showRegistration: true
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
