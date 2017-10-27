import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Grid, Row, Col, Table, Button } from 'react-bootstrap'

import { Register } from './Registration/index'

import {
  TotalContributors,
  TotalOrganizations,
  TotalTokens
} from './Stats/index'

import {
  RegisteredOrganizations
} from './Registry/index'

import {
  NetworkLogo
} from './SVG/index'

import {
  registryActions
} from '../actions/index'

class MainComponent extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(registryActions.getRegitrations())
    // dispatch(registryActions.watchRegitrations({}))
  }

  render() {
    const { dispatch, register: { showRegistration } } = this.props

    return (
      <Grid>
        <Row>
          <Col sm={12} style={{ textAlign: 'center' }}>
            <NetworkLogo width={'35%'} style={{ marginTop: '-35px' }} />
          <h1 style={{ fontSize: '96px', marginTop: '-65px' }}>GitToken</h1>
            <h1>Token Registry</h1>
            <br/>
            <hr/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={4} >
            <TotalOrganizations />
          </Col>
          <Col sm={4} >
            <TotalTokens />
          </Col>
          <Col sm={4} >
            <TotalContributors />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={12} >
            <Register />
            <Button
              bsSize={'lg'}
              bsStyle={'primary'}
              onClick={() => { dispatch({ type: 'SET_REGISTRATION_VALUE', id: 'showRegistration', value: !showRegistration }) }}
              block
            >
              { !showRegistration ? 'Click to Register GitHub Organization' : 'Close Registration' }
            </Button>
            <br/>
            <hr/>
            <br/>
            <RegisteredOrganizations />
          </Col>
        </Row>
      </Grid>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    register: store.register
  }
}

const Main = connect(mapStoreToProps)(MainComponent)

export default Main
