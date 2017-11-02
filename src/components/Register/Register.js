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

import GettingStarted from './GettingStarted'
import RegistrationForm from './RegistrationForm'
import VerificationStatus from './VerificationStatus'

class RegisterComponent extends Component {
  constructor() {
    super()

  }

  setValue(e) {
    const { dispatch } = this.props
    const { value, id } = e.target

    dispatch({ type: 'SET_REGISTRATION_DETAILS', id, value })
  }

  renderSlide() {
    const { Register: { activeSlide } } = this.props
    switch(activeSlide) {
      case 'registrationForm':
        return (<RegistrationForm />)
        break;
      case 'verification':
        return (<VerificationStatus />)
        break;
      default:
        return (<GettingStarted />)
    }
  }


  render() {
    const { dispatch, Register: { activeSlide } } = this.props

    return (
      <div>
        <Panel style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          margin: '5px',
          borderStyle: 'solid',
          borderColor: '#e95420'
          }}
          header={(<h1><NetworkLogo width={'42px'} style={{ marginTop: '-10px', marginBottom: '-16px', marginRight: '-8px' }} />  | Register Organization</h1>)}
          collapsible
          expanded={true}
        >
          {this.renderSlide()}
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
