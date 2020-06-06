import React, { Component } from 'react'
import PartButtons from './PartButtons'
import FEATURES from './store'
import slugify from 'slugify'
import PartsDisplay from './PartsDisplay';

export default class Specs extends Component {
    render() {
        const features = Object.keys(FEATURES).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = FEATURES[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <PartButtons
                  itemHash={itemHash}
                  item={item}
                  feature={feature}
                  parts={this.props.parts}
                  updateFeature={this.props.updateFeature}
                />
              );
            });

            return ( 
              <PartsDisplay
                feature={feature}
                options={options}
              />
              );
            });

        return (
            <div>
              {features}
            </div>
        )
    }
}
