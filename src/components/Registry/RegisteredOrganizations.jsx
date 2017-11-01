import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Table, Button, Panel } from 'react-bootstrap'

import { Summary } from '../Organization/index'

class RegisteredOrganizationsComponent extends Component {
  constructor() {
    super()
  }

  componentDidMount() {

  }

  organizations() {
    const { Registry: { organizations } } = this.props

    return Object.keys(organizations).map((organization) => {
      const { _organization } = organizations[organization]
      return (
        <Panel style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            margin: '5px',
            borderStyle: 'solid',
            borderColor: '#e95420'
          }}
          header={(<h2>{_organization}</h2>)}>
          <Row>
            <Col sm={4}>
              <Summary organization={organizations[organization]} />
            </Col>
            <Col sm={8}>
              <Panel style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  margin: '5px',
                  borderStyle: 'solid',
                  borderColor: '#e95420'
                }}>
                  <p>Hello</p>
                </Panel>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Panel style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  margin: '5px',
                  borderStyle: 'solid',
                  borderColor: '#e95420'
                }}>
                  <p>Hello</p>
                </Panel>
            </Col>
            <Col sm={8}>
              <Panel style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  margin: '5px',
                  borderStyle: 'solid',
                  borderColor: '#e95420'
                }}>
                  <p>Hello</p>
                </Panel>
            </Col>
          </Row>
        </Panel>
      )
    })
  }

  render() {
    const { Registry } = this.props

    return (
      <div >
        <Panel style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            margin: '5px',
            borderStyle: 'solid',
            borderColor: '#e95420'
          }}
          header={(<h3>Registered Organizations</h3>)}>
          { this.organizations()}
        </Panel>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Registry: store.Registry
  }
}

const RegisteredOrganizations = connect(mapStoreToProps)(RegisteredOrganizationsComponent)

export default RegisteredOrganizations
