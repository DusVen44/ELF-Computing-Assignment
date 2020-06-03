import React, { Component } from 'react';
import Header from './Header';
import Cart from './Cart'
import Options from './Options'
import './App.css';

class App extends Component {
   state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Options 
                features={this.props.features}
                parts={this.state.selected}
                updateFeature={this.updateFeature}/>
          </form>
          <section className="main__summary">
            <Cart parts={this.state.selected}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
