import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Table, Button, Panel } from 'react-bootstrap'
import NetworkLogo from 'gittoken-svg-icons/dist/NetworkLogo'

import Summary from '../Organization/Summary'



class RegisteredOrganizationsComponent extends Component {
  constructor() {
    super()
  }

  componentDidMount() {

  }

  organizations() {
    const { Registry: { organizations } } = this.props

    return Object.keys(organizations).map((organization, i) => {
      const { _organization } = organizations[organization]
      return (
        <Panel style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            margin: '5px',
            borderStyle: 'solid',
            borderColor: '#e95420'
          }}
          collapsible expanded={false}
          header={(<h2>{i} | {_organization}</h2>)}>
          <Row>
            <Col sm={5}>
              <Summary organization={organizations[organization]} />
            </Col>
            <Col sm={7}>
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
            <Col sm={5}>
              <Panel style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  margin: '5px',
                  borderStyle: 'solid',
                  borderColor: '#e95420'
                }}>
                  <p>Hello</p>
                </Panel>
            </Col>
            <Col sm={7}>
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
          header={(<h3><NetworkLogo width={'42px'} style={{ marginTop: '-10px', marginBottom: '-16px', marginRight: '-8px' }} /> | Registered Organizations</h3>)}>
          <Panel style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              margin: '5px',
              borderStyle: 'solid',
              borderColor: '#e95420',
            }}>
              <h1>Search Filter</h1>
            </Panel>
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
