import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Grid, Row, Col, Panel, Button } from 'react-bootstrap'

import { Register, RegisteredOrganizations } from './Registry/index'

import {
  TotalContributors,
  TotalOrganizations,
  TotalTokens
} from './Stats/index'


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
  }

  render() {
    const { dispatch, Registry: { organizations }, Register: { showRegistration } } = this.props

    return (
      <div>
        <Panel style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            margin: '5px',
            borderStyle: 'solid',
            borderColor: '#e95420',
            height: '1200px'
          }}>
            <Row>
              <Col sm={12}>
                <RegisteredOrganizations />
              </Col>
            </Row>
          </Panel>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Register: store.Register,
    Registry: store.Registry
  }
}

const Main = connect(mapStoreToProps)(MainComponent)

export default Main
