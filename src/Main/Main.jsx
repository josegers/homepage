import React from 'react';
import {hot} from "react-hot-loader";
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Sidebar from 'grommet/components/Sidebar';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import Section from 'grommet/components/Section';

class Main extends React.Component {
    render() {
        return (
        <App>
            <Split>
                <Box>
                    <Sidebar>
                        <Header>
                            <Title>Menu</Title>
                        </Header>
                        <Section>Bio</Section>
                        <Section>CV</Section> 
                        <Section>Tech</Section>
                        <Section>Contact</Section>
                    </Sidebar>
                </Box>
                <Box>
                    <Header>
                        <Title>Jo Segers</Title>
                    </Header>
                    <Footer>2018 Jo Segers</Footer>
                </Box>
            </Split>
            
        </App>)
    }
}

export default hot(module)(Main);