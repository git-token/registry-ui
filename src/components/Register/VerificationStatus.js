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
import RegistrationForm from './RegistrationForm'


class VerificationStatusComponent extends Component {
  constructor() {
    super()

  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'verificationStatus', value: 'Verifying Organization...' })
    dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'organizationVerified', value: false })

    setTimeout(() => {
      // dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'activeSlide', value: 'start' })
      dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'verificationStatus', value: 'Verification Success' })
      dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'organizationVerified', value: true })
    }, 3000)
  }

  render() {
    const { dispatch, Register: { tos, organization, verificationStatus, organizationVerified } } = this.props

    return (
      <Row>
        <Col sm={12}>
          <div style={{ textAlign: 'center' }}>
            <NetworkLogo width={'50%'} style={{ marginBottom: '-10%' }} />
            <h1>{verificationStatus}</h1>
            <br/>
            { organizationVerified ?
              <Button
                onClick={() => {
                  dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'activeSlide', value: 'start' })
                }}
                bsSize={'sm'}
                bsStyle={'success'}
                block>
                Create GitToken
              </Button> : null
            }

            <br/>
          </div>
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

const VerificationStatus = connect(mapStoreToProps)(VerificationStatusComponent)

export default VerificationStatus
