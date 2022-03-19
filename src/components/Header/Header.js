import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Search from '../Search/SearchContainer';

import styles from './Header.scss';

const Header = () => (
  <header className={styles.component}>
    <Container>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to="/">
          <Icon name="clipboard-list"></Icon>
        </Link>
        <Search />
      </div>
    </Container>
  </header>
);

export default Header;