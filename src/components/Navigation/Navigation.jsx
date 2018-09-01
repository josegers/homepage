import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Sidebar from 'grommet/components/Sidebar';
import Section from 'grommet/components/Section';

export default class Navigation extends React.Component {
  render() {
    return (
      <Sidebar>
        <Header>
          <Title>Menu</Title>
        </Header>
        <Section>Bio</Section>
        <Section>CV</Section> 
        <Section>Tech</Section>
        <Section>Contact</Section>
      </Sidebar>
    );
  }
}
