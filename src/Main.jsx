import React from 'react';
import {hot} from 'react-hot-loader';
import LandingPage from './pages/LandingPage/LandingPage';

class Main extends React.Component {
    render() {
        return (
            <LandingPage />
        )
    }
}

export default hot(module)(Main);