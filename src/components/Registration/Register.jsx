import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Row,
  Col,
  Button,
  ButtonGroup,
  Jumbotron,
  Panel
} from 'react-bootstrap'

import { MainLogo } from '../SVG/index'
import { FormItem } from '../Generic/index'
import TOS from './TOS.jsx'

class RegisterComponent extends Component {
  constructor() {
    super()

  }

  setValue(e) {
    const { dispatch } = this.props
    const { value, id } = e.target

    dispatch({ type: 'SET_REGISTRATION_DETAILS', id, value })
  }

  validateOrganization() {
    return null
  }


  render() {
    const { dispatch, Register } = this.props

    const {
      showRegistration,
      organization,
      symbol,
      decimals,
      adminAddress,
      adminUsername,
      authToken,
      tokenName,
      tos
    } = Register

    const min = 0
    const max = 18

    return (
      <div>
        <Panel style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            marginTop: '25px'
          }}
          collapsible
          expanded={showRegistration}
        >
          <div style={{ textAlign: 'center' }}>
            <MainLogo width={'25%'} />
            <h1 style={{ fontSize: '36px' }}>Register Your GitHub Organization with GitToken</h1>
            <br/>
            <hr/>
          </div>
          <form>
            <FormItem
              type={'text'}
              value={adminAddress}
              placeholder={'0x0'}
              onChange={this.setValue.bind(this)}
              validationState={() => { return null }}
              label={'Admin Ethereum Address'}
              controlId={'adminAddress'}
              help={"Please enter your Ethereum address (e.g. 0x7c6e58f14fe93bf4fca9a4dd0eb63b3e174a2205)"}
            />
            <FormItem
              type={'text'}
              value={adminUsername ? adminUsername : ''}
              placeholder={''}
              onChange={this.setValue.bind(this)}
              validationState={() => { return null }}
              label={'Admin GitHub Username'}
              controlId={'adminUsername'}
              help={"Please enter your GitHub Username"}
            />
            <FormItem
              type={'password'}
              value={authToken ? authToken : ''}
              placeholder={''}
              onChange={this.setValue.bind(this)}
              validationState={() => { return null }}
              label={'Enter GitHub Open Authorization Token'}
              controlId={'authToken'}
              help={"Please enter your GitHub Open Authorization Token (e.g. 4ab299c8ad6ed14f31923dd94f8b5f5cb89dfb54)"}
            />
            <FormItem
              type={'text'}
              value={organization ? organization : ''}
              placeholder={'git-token'}
              onChange={this.setValue.bind(this)}
              validationState={this.validateOrganization}
              label={'Organization Name'}
              controlId={'organization'}
              help={'Please input your GitHub organization name. (e.g. git-token)'}
            />
            <FormItem
              type={'text'}
              value={tokenName ? tokenName : ''}
              placeholder={'GitToken'}
              onChange={this.setValue.bind(this)}
              validationState={() => { return null }}
              label={'Organization Token Name'}
              controlId={'tokenName'}
              help={"Please set your organization's GitToken name. (e.g. GitToken)"}
            />
            <FormItem
              type={'text'}
              value={symbol ? symbol : ''}
              placeholder={'GTK'}
              onChange={this.setValue.bind(this)}
              validationState={() => { return null }}
              label={'Organization Token Symbol'}
              controlId={'symbol'}
              help={"Please set your organization's GitToken symbol. (e.g. GTK)"}
            />
            <FormItem
              type={'number'}
              value={decimals ? decimals : ''}
              placeholder={8}
              min={min}
              max={max}
              onChange={this.setValue.bind(this)}
              validationState={() => { return null }}
              label={'Token Decimals'}
              controlId={'decimals'}
              help={`Enter desired token decimal places of precision. Min=${min}; Max=${max}`}
            />
          </form>
          <br/>
          <div style={{ textAlign: 'center' }}>
            <Button
              bsSize={'lg'}
              bsStyle={'info'}
              onClick={ () => {
                dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'tos', value: !tos })
              } }
              block
            > Register!
            </Button>
            <br/>
          <TOS />
          </div>
        </Panel>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Register: store.Register
  }
}

const Register = connect(mapStoreToProps)(RegisterComponent)

export default Register
