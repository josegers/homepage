import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Sidebar from 'grommet/components/Sidebar';
import Section from 'grommet/components/Section';
import { Link } from 'react-router-dom'

export default class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: [
        {key: 'bio', text: 'Bio'},
        {key: 'cv', text: 'cv'},
        {key: 'tech', text: 'tech'},
        {key: 'contact', text: 'contact'},
      ],
    };
  }

  getMenuItems(activeMenuKey) {
    return this.state.menuItems.map(menuItem => {
      let isActive = menuItem.key === activeMenuKey;
      let activeStyle = isActive ? {fontWeight: 'bolder'} : {};
      return (
        <Link to={menuItem.key} key={menuItem.key} style={{ textDecoration: 'none', color: 'inherit'}}>
          <Section style={activeStyle}>{menuItem.text}</Section>
        </Link>
      );
    });
  }

  render() {
    return (
      <Sidebar>
        <Header>
          <Title>Menu</Title>
        </Header>
        {this.getMenuItems(this.props.activeMenuKey)}
      </Sidebar>
    );
  }
}
