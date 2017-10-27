import React, { Component } from 'react'
import MainLogo from '../SVG/MainLogo.jsx'

export default class Splash extends Component {
  constructor() {
    super()
  }

  render() {
    const { title } = this.props

    return (
      <div style={{ textAlign: 'center', color: '#fff' }}>
        <h1>{title}</h1>
      </div>
    )
  }
}
