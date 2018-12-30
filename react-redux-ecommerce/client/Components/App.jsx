import React, { Fragment } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';

// Components
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

const App = () => (
  <Fragment>
    <Navbar inverse staticTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Ecommerce</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>

    <Grid>
      <Row>
        <Col sm={8}>
          <ProductList />
        </Col>
        <Col sm={4}>
          <ShoppingCart />
        </Col>
      </Row>
    </Grid>
  </Fragment>
);

export default App;
