const DEFAULT_STATE = {
  address: '0x0',
  signer: '0x0'
}

export default function admin(state=DEFAULT_STATE, action) {
  switch(action.type) {
    case 'SET_ADMIN_VALUE':
      return {
        ...state,
        [action.id]: action.value
      }
      break;
    default:
      return state;
  }
}
