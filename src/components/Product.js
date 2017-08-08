// Code Product Component Here

import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return(
      <div className="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer ? this.props.producer : 'No producer given'}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    );
  }
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(Array(220).fill().map((x,i)=>i+80)).isRequired
};

//DONT DO THIS. THIS WILL OVERWRITE THE PRODUCT AND THEN EXPORT IT
// ReactDOM.render(
//   <Product />,
//   document.getElementById('root')
// );

export default Product;
