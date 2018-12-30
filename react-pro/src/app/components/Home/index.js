import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        homesss - <Link to="/about">about</Link> - <Link to="/blog">blog</Link>
      </div>
    );
  }
}
