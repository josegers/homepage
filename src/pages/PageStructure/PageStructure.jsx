import React from 'react';
import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Navigation from '../../components/Navigation/Navigation';

export default class PageStructure extends React.Component {
  render() {
    return (
      <App>
        <Split>
          <Box>
            <Navigation />
          </Box>
          <Box>
            <Header>
              <Title>Jo Segers</Title>
            </Header>
            {this.props.children}
            <Footer>2018 Jo Segers</Footer>
          </Box>
        </Split>
      </App>
    );
  }
}