import React, { Component } from 'react'
import Specs from './Specs'


export default class Options extends Component {
      render() {
        return (
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <div>
              <Specs
                parts={this.props.parts}
                updateFeature={this.props.updateFeature}
              />
              </div>
          </form>
        )
        }
    }