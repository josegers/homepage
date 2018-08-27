import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import SiteExplanation from '../components/SiteExplanation';

export default class PageStructure extends React.Component {
  render(){
    return (
      <div>
        <p>On this page you can find a short bio, my CV, a technical description about all the technologies used to create this site and a contact form.</p>
        <Tabs defaultActiveKey={1} id="tabstrip" style={{padding: '10px'}}>
          <Tab eventKey={1} title="Biography">
            Biography
          </Tab>
          <Tab eventKey={2} title="CV">
            CV
          </Tab>
          <Tab eventKey={3} title="Site explanation">
            <SiteExplanation />
          </Tab>
          <Tab eventKey={4} title="Contact">
            Contact form
          </Tab>
        </Tabs>
      </div>
    )
  }
}
