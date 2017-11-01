import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  VictoryChart,
  VictoryArea,
  VictoryGroup
} from 'victory'

import ChartTheme from '../Generic/ChartTheme.js'

import {
  registryActions
} from '../../actions/index'

class TotalOrganizationsComponent extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const { dispatch } = this.props;
  }

  render() {
    const { Registry: { organizations } } = this.props

    console.log('organizations', organizations)

    return (
      <div style={{ textAlign: 'center', color: '#fff' }}>
        <div style={{
            height: '250px',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            margin: 'auto',
            marginBottom: '-20px'
        }}>
        <VictoryChart
          scale={{ x: 'time', y: 'linear' }}
          theme={ChartTheme}>
          <VictoryGroup

            style={{
              data: {strokeWidth: 3, fillOpacity: 0.4}
            }}
          >
            <VictoryArea

              style={{
                data: {fill: "cyan", stroke: "cyan"}
              }}
              data={Object.keys(organizations).map((organization, i) => {
                console.log('organizations[organization]', organizations[organization])
                const { _date } = organizations[organization]
                return {
                  y: i+1,
                  x: new Date(_date.toNumber() * 1000).getTime()
                }
              })}
            />
          </VictoryGroup>
        </VictoryChart>
        </div>
        <div style={{ height: '150px', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <h1 style={{ fontSize: '72px' }}>{Object.keys(organizations).length}</h1>
          <h1 style={{ fontSize: '24px' }}>Organizations Registered</h1>
        </div>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Registry: store.Registry
  }
}

const TotalOrganizations = connect(mapStoreToProps)(TotalOrganizationsComponent)

export default TotalOrganizations
