import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  VictoryChart,
  VictoryArea,
  VictoryGroup
} from 'victory'

import ChartTheme from '../Generic/ChartTheme.js'

class TotalTokensComponent extends Component {
  constructor() {
    super()
  }

  componentDidMount() {}

  render() {
    const { registry } = this.props

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
              data={[
                {x: new Date().getTime() + (2*1000*60*60), y: 2},
                {x: new Date().getTime() + (3*1000*60*60), y: 3},
                {x: new Date().getTime() + (5*1000*60*60), y: 5},
                {x: new Date().getTime() + (4*1000*60*60), y: 4},
                {x: new Date().getTime() + (7*1000*60*60), y: 7}
              ]}
            />
          </VictoryGroup>
        </VictoryChart>
        </div>
        <div style={{ height: '150px', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <h1 style={{ fontSize: '72px' }}>{4e6.toLocaleString()}</h1>
          <h1 style={{ fontSize: '36px' }}>Total Tokens</h1>
        </div>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    registry: store.registry
  }
}

const TotalTokens = connect(mapStoreToProps)(TotalTokensComponent)

export default TotalTokens
