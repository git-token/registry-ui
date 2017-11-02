import RegistryActions from './RegistryActions'
import config from '../../app.config.js'

module.exports = {
  registryActions: new RegistryActions(config)
}
