import React from 'react';
import PageStructure from '../PageStructure/PageStructure';

export default class BioPage extends React.Component {
  render() {
    return (
      <PageStructure activeMenuKey="bio">
        Bio
      </PageStructure>
    );
  }
}