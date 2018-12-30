import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';

// Actions
import * as actions from '../Actions';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
};

const ShoppingCart = ({ cart, removeFromCart }) => (
  <Panel header="Shopping Cart">
    <Table fill="true">
      <tbody>
        {cart.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td className="text-right">${product.price}</td>
            <td className="text-right">
              <Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCart(product)}>
                <Glyphicon glyph="trash" />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="4" style={styles.footer}>
            Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
          </td>
        </tr>
      </tfoot>
    </Table>
  </Panel>
);

ShoppingCart.propTypes = {
  cart: propTypes.array.isRequired,
  removeFromCart: propTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeFromCart: actions.removeFromCart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
