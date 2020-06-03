import React, { Component } from 'react'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default class Cart extends Component {
    render() {
        const summary = Object.keys(this.props.parts).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.parts[feature];
      
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            );
          });
      
          const total = Object.keys(this.props.parts).reduce(
            (acc, curr) => acc + this.props.parts[curr].cost,
            0
          );

        return (
            <div>
                <h2>Your cart</h2>
                {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
            </div>
        )
    }
}