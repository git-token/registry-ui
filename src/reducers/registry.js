const DEFAULT_STATE = {
  address: '0x34a88a4b714ffc02ecf2da5e83f2bbd860700948',
  organizations: {}
}

export default function registry(state=DEFAULT_STATE, action) {
  switch(action.type) {
    case 'SET_REGISTRY_VALUE':
      return {
        ...state,
        [action.id]: action.value
      }
      break;
    case 'SET_REGISTRY_ORGANIZATION_VALUE':
      return {
        ...state,
        organizations: {
          ...state['organizations'],
          [action.id]: action.value
        }
      }
      break;
    default:
      return state;
  }
}
