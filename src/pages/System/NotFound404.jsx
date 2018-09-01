import React from 'react';
import {Link} from 'react-router-dom';
import PageStructure from '../PageStructure/PageStructure';

export default () => {
  return (
    <PageStructure>
      <p>The page you requested was not found!</p>
      <Link to="/" style={{ color: 'red', display: 'inline' }}>Click here to return to the main page.</Link>
    </PageStructure>
  );
}
