import Web3 from 'web3'
import Promise, { promisifyAll } from 'bluebird'
import GitHubAPI from 'github-api'
import axios, { post } from 'axios'
import Tx from 'ethereumjs-tx'
import GitTokenRegistry from 'gittoken-contracts/build/contracts/GitTokenRegistry.json'
import RegistryWorker from 'gittoken-web-workers/dist/Registry.worker.js'

const { abi, unlinked_binary, networks } = JSON.parse(GitTokenRegistry)


export default class RegistryActions {
  constructor({
    torvaldsNetwork,
    registryAddress,
    registryAPI
  }) {

    // Torvalds Network
    this.torvalds = new Web3(new Web3.providers.HttpProvider(torvaldsNetwork))

    // Registry on the Main Ethereum Network
    this.registry = window.web3.eth.contract(abi).at(registryAddress)

    // Registry Http Service
    this.registryAPI = registryAPI

    this.registryWorker = new RegistryWorker()
    this.registryWorker.addEventListener('message', (msg) => {
      console.log('Received Message from Worker', msg)
    })

    this.registryWorker.postMessage(JSON.stringify({
      event: 'configure',
      payload: { registryAPI }
    }))

  }

  /**
   * [registerToken description]
   * @param  {[type]} registry      [description]
   * @param  {[type]} organization  [description]
   * @param  {[type]} tokenName     [description]
   * @param  {[type]} adminAddress  [description]
   * @param  {[type]} adminUsername [description]
   * @param  {[type]} symbol        [description]
   * @param  {[type]} decimals      [description]
   * @return {[type]}               [description]
   */
  registerToken({
    authToken,
    organization,
    tokenName,
    adminAddress,
    adminUsername,
    symbol,
    decimals
  }) {
    return (dispatch) => {
      this.validateAdmin({ username: adminUsername, token: authToken, organization }).then((validated) => {
        if (!validated) {
          alert('Only an organization admin may register an organization with GitToken')
          throw new Error('Invalid Authorization')
        } else {
          const params = [
            organization,
            name,
            symbol,
            decimals,
            adminAddress,
            adminUsername
          ]
          return this.sendTransaction({ params, method: 'registerToken' })
        }
      }).then((txHash) => {
        console.log('txHash', txHash)
        // dispatch({ type: null, id: null, value: null })
        return window.web3.eth.getTransactionReceipt(txHash)
      }).then((txReceipt) => {
        console.log('txReceipt', txReceipt)
      }).catch((error) => {
        console.log('error', error)
      })
    }
  }

  verifyOrganization({ admin, username, token, organization }) {
    return (dispatch) => {
      this.registryWorker.postMessage(JSON.stringify({
        event: 'verify_organization',
        payload: { admin, username, token, organization, uri: `${this.registryAPI}/verify/${organization}` }
      }))
    }
  }

  signTransaction({ params, method }) {
    return new Promise((resolve, reject) => {
      getAccount().then((account) => {
        const data = this.registry[method].getData(...params, { data: unlinked_binary })

        const tx = new Tx({
          from: account,
          to: this.registry.address,
          data,
          value: 0,
          gasLimit: 1e6, // set higher?
          gas: 4e9
        })

        console.log('tx', tx)

      }).catch((error) => {
        reject(error)
      })
    })
  }

  sendTransaction({ params, method }) {
    return new Promise((resolve, reject) => {
      this.registry[method](...params, (error, txHash) => {
        if (error) { reject(error) }
        if (txHash != 'undefined') { resolve(txHash) }
      })
    })
  }

  setAccount() {
    return (dispatch) => {
      getAccount().then((account) => {
        dispatch({
          type: 'SET_ACCOUNT_DETAILS',
          id: 'account',
          value: account
        })
      }).catch((error) => {
        console.log('setAccount::error', error)
      })
    }
  }

  getAccount() {
    return new Promise((resolve, reject) => {
      window.web3.eth.getAccounts((error, accounts) => {
        if (error) { reject(error) }
        console.log('accounts', accounts)
        resolve(accounts[0])
      })
    })
  }



  // watchRegitrations({ fromBlock=0, toBlock='latest' }) {
  //   return (dispatch) => {
  //
  //     console.log(`Watching Registration Events for: ${this.registry.address}`)
  //
  //     const event = this.registry.Registration({ fromBlock, toBlock }, (error, result) => {
  //       if (error) { console.log('error', error) }
  //       console.log('result', result)
  //     })
  //   }
  // }

  getRegitrations() {
    return (dispatch) => {

      console.log(`Retrieving Registration Events for: ${this.registry.address}`)

      this.registry.allEvents({ fromBlock: 0, toBlock: 'latest' }, (error, log) => {
          if (error) { console.log('getRegitrations::error', error) }
          // console.log(log)
          const { args } = log
          const { _token } = args

          dispatch({
            type: 'SET_REGISTRY_ORGANIZATION_DETAILS',
            id: _token,
            value: args
          })
      })
    }
  }

}
