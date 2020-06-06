import React, { Component } from 'react'
import ChosenParts from './ChosenParts'
import Total from './Total'

export default class Cart extends Component {
    render() {
        return (
            <div>
              <ChosenParts parts={this.props.parts} />
              <Total parts={this.props.parts} />
            </div>
        )
    }
}
