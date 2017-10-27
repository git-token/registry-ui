import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Web3 from 'web3'

import { Registration, Registry, Main } from './components/index';

import { store, history } from './store'
import { web3Provider } from '../app.config'


window.addEventListener('load', () => {

  if (typeof window.web3 !== 'undefined') {
    window.web3 = new Web3(window.web3.currentProvider)
  } else {
    window.web3 = new Web3(new Web3.providers.HttpProvider(web3Provider))
  }


  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
          <div style={{ background: 'linear-gradient(45deg, #0c0019, #493f5b)', height: '100%', color: '#fff' }}>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/registry" component={Registry['RegisteredOrganizations']}/>
              <Route path="/register" component={Registration['Register']}/>
            <Route path="/admin" component={Registry['Create']}/>
            </Switch>
          </div>
      </Provider>
    </BrowserRouter>,
    document.getElementById('app')
  )
})
