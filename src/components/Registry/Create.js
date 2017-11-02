import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Panel, Button } from 'react-bootstrap'

import { FormItem } from '../Generic/index'

import { registryActions } from '../../actions/index'

class CreateComponent extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const { dispatch } = this.props
    console.log('registryActions', registryActions);
  }

  setValue(e) {
    const { dispatch } = this.props
    const { value, id } = e.target

    dispatch({ type: 'SET_REGISTRATION_DETAILS', id, value })
  }

  render() {
    const { admin: { address, signer } } = this.props

    return (
      <div style={{ height: '1200px', textAlign: 'center' }}>
        <Row>
          <Col sm={12} >
            <h3>Create Registry</h3>
          <Panel style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)'
            }} collapsible expanded={true}>
              <FormItem
                type={'text'}
                value={address}
                placeholder={'0x0'}
                onChange={this.setValue.bind(this)}
                validationState={() => { return null }}
                label={'Admin Ethereum Address'}
                controlId={'address'}
                help={"Please enter your Ethereum address (e.g. 0x7c6e58f14fe93bf4fca9a4dd0eb63b3e174a2205)"}
              />
              <FormItem
                type={'text'}
                value={signer}
                placeholder={'0x0'}
                onChange={this.setValue.bind(this)}
                validationState={() => { return null }}
                label={'Admin Ethereum Address'}
                controlId={'signer'}
                help={"Please enter your Ethereum address (e.g. 0x7c6e58f14fe93bf4fca9a4dd0eb63b3e174a2205)"}
              />
            </Panel>
          </Col>
        </Row>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Admin: store.Admin
  }
}

const Create = connect(mapStoreToProps)(CreateComponent)

export default Create
