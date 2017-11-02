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
import { FormItem, TOS } from '../Generic/index'
import RegistrationForm from './RegistrationForm'


class GettingStartedComponent extends Component {
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
    const { dispatch, Register: { tos } } = this.props

    return (
      <Row>
        <Col sm={12}>
          <div style={{ textAlign: 'center' }}>
            <NetworkLogo width={'50%'} style={{ marginBottom: '-10%' }} />
            <h1>GitToken Registry</h1>
            <br/>
          </div>
          <Button
            onClick={ () => {
              dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'tos', value: !tos })
            } }
            bsSize={'sm'}
            bsStyle={'info'}
            block
            >
            Register GitHub Organization
          </Button>
          <TOS onAgree={() => {
              dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'activeSlide', value: 'registrationForm' })
              dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'tos', value: false })
            }} />
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

const GettingStarted = connect(mapStoreToProps)(GettingStartedComponent)

export default GettingStarted
