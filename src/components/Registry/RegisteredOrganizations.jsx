import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Table, Button } from 'react-bootstrap'

class RegisteredOrganizationsComponent extends Component {
  constructor() {
    super()
  }

  componentDidMount() {

  }

  organizations() {
    const { registry } = this.props

    return Object.keys(registry['organizations']).map((organization, i) => {
      const { _symbol, _token, _organization } = registry['organizations'][organization]
      return (
        <tbody>
          <tr key={i}>
            <td><a href={`https://github.com/${_organization}`}>{_organization}</a></td>
            <td>{_symbol}</td>
            <td><a href={`https://etherscan.io/address/${_token}`}>{_token}</a></td>
          </tr>
        </tbody>
      )
    })
  }

  render() {
    const { registry } = this.props

    return (
      <div style={{ paddingBottom: '500px' }}>
        <Row>
          <Col sm={12} >
            {/* <Button bsStyle={'primary'} onClick={() => { console.log('Register') }} block>Register Organization</Button> */}
            <h3>Registered Organizations</h3>
            <Table >
              <thead>
                <tr>
                  <th>Organization</th>
                  <th>Token Symbol</th>
                  <th>Token Address</th>
              </tr>
              </thead>
              { this.organizations() }
            </Table>
          </Col>
        </Row>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    registry: store.registry
  }
}

const RegisteredOrganizations = connect(mapStoreToProps)(RegisteredOrganizationsComponent)

export default RegisteredOrganizations
