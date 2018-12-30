import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import { Button, Glyphicon } from 'react-bootstrap';

// Actions
import * as actions from '../Actions';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

const ProductList = ({ products, addToCart }) => (
  <div style={styles.products}>
    {products.map(product => (
      <div className="thumbnail" style={styles.product} key={product.id}>
        <img src={product.image} alt={product.name} />
        <div className="caption">
          <h4>{product.name}</h4>
          <p>
            <Button
              bsStyle="primary"
              onClick={() => addToCart(product)}
              role="button"
              disabled={product.inventory <= 0}
            >
              ${product.price} <Glyphicon glyph="shopping-cart" />
            </Button>
          </p>
        </div>
      </div>
    ))}
  </div>
);

ProductList.propTypes = {
  products: propTypes.array.isRequired,
  addToCart: propTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart: actions.addToCart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
