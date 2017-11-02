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

import NetworkLogo from 'gittoken-svg-icons/dist/NetworkLogo'
import { FormItem } from '../Generic/index'

import {
  registryActions
} from '../../actions/index'

class RegistrationFormComponent extends Component {
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
      <Row>
        <Col sm={6}>
          <form>
            <FormItem
              type={'text'}
              value={adminAddress != '0x0' ? adminAddress : '' }
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
          </form>
        </Col>
        <Col sm={6}>
          <form>
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
              value={decimals ? decimals : 8}
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
        </Col>
        <Col sm={12}>
          <Button
            bsSize={'sm'}
            bsStyle={'primary'}
            onClick={() => {
              dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'activeSlide', value: 'verification' })
              dispatch(registryActions.verifyOrganization({
                admin: adminAddress,
                username: adminUsername,
                token: authToken,
                organization
              }))
            }}
            block
          > Verify GitHub Organization
          </Button>
        </Col>
        <Col sm={12}><hr/></Col>
      </Row>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Register: store.Register
  }
}

const RegistrationForm = connect(mapStoreToProps)(RegistrationFormComponent)

export default RegistrationForm
