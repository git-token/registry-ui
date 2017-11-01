import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Table, Button, Panel } from 'react-bootstrap'

export default class SummaryComponent extends Component {
  constructor() {
    super()
  }

  componentDidMount() {}

  render() {
    const { organization } = this.props
    const { _organization, _token, _symbol, _date, _registeredBy } = organization

    return (
      <div >
        <Panel style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            margin: '5px',
            borderStyle: 'solid',
            borderColor: '#e95420'
          }}
          header={(<h3>{_organization} Summary</h3>)}>
          <Table >
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Organization</td>
                <td>{_organization}</td>
              </tr>
              <tr>
                <td>Token Address</td>
                <td>{_token}</td>
              </tr>
            </tbody>
          </Table>
        </Panel>
      </div>
    )
  }
}
