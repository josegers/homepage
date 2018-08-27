import React from 'react';

export default class SiteExplanation extends React.Component {
  render() {
    return (
      <div>
        <h2>Frontend technologies</h2>
        <ul>
          <li>React</li>
          <li>Webpack</li>
          <li>TypeScript</li>
        </ul>
        <h2>Backend</h2>
        <ul>
          <li>.NET</li>
        </ul>
        <h2>Database</h2>
        <ul>
          <li>MySql</li>
        </ul>
        <h2>Devops</h2>
        <ul>
          <li>Teamcity</li>
          <li>Amazon AWS</li>
        </ul>
      </div>
    );
  }
}