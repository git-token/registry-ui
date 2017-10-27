import RegistryActions from './RegistryActions'
import { torvaldsNetwork, registryAddress } from '../../app.config.js'

module.exports = {
  registryActions: new RegistryActions({
    torvaldsNetwork,
    registryAddress
  })
}
