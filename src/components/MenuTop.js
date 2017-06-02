import React, { Component } from 'react';
import { Tabs, Tab, Label, Button } from 'react-bootstrap';
import './MenuTop.css';

class MenuTop extends Component {
  render() {
    return (
      <div className="MenuTop">
        <Tabs defaultActiveKey={1} id="tabs">
          <Tab eventKey={1} title="Constants">
            <Button bsStyle="primary" bsSize="small">NEW</Button>
            <nav className="horizontal-scroll" ref="constants">
              <a href="#"><Label>Ar</Label></a>
              <a href="#"><Label>Portfolio</Label></a>
              <a href="#"><Label>Download</Label></a>
              <a href="#"><Label>About</Label></a>
              <a href="#"><Label>Contact</Label></a>
              <a href="#"><Label>Blog</Label></a>
              <a href="#"><Label>Portfolio</Label></a>
              <a href="#"><Label>Download</Label></a>
              <a href="#"><Label>About</Label></a>
              <a href="#"><Label>Contact</Label></a>
              <a href="#"><Label>Blog</Label></a>
              <a href="#"><Label>Portfolio</Label></a>
              <a href="#"><Label>Download</Label></a>
              <a href="#"><Label>About</Label></a>
              <a href="#"><Label>Contact</Label></a>
            </nav>
          </Tab>
          <Tab eventKey={2} title="Functions">
            <Button bsStyle="primary" bsSize="small">NEW</Button>
            <nav className="horizontal-scroll" ref="functions">
              <a href="#"><Label>Ar</Label></a>
              <a href="#"><Label>Portfolio</Label></a>
              <a href="#"><Label>Download</Label></a>
              <a href="#"><Label>About</Label></a>
              <a href="#"><Label>Contact</Label></a>
              <a href="#"><Label>Blog</Label></a>
              <a href="#"><Label>Portfolio</Label></a>
              <a href="#"><Label>Download</Label></a>
              <a href="#"><Label>About</Label></a>
              <a href="#"><Label>Contact</Label></a>
              <a href="#"><Label>Blog</Label></a>
              <a href="#"><Label>Portfolio</Label></a>
              <a href="#"><Label>Download</Label></a>
              <a href="#"><Label>About</Label></a>
              <a href="#"><Label>Contact</Label></a>
            </nav>
          </Tab>
          <Tab eventKey={3} title="Conditionals">
            <Button bsStyle="primary" bsSize="small">NEW</Button>
            <nav className="horizontal-scroll" ref="conditionals">
              <a href="#"><Label>Ar</Label></a>
              <a href="#"><Label>Portfolio</Label></a>
              <a href="#"><Label>Download</Label></a>
              <a href="#"><Label>About</Label></a>
              <a href="#"><Label>Contact</Label></a>
              <a href="#"><Label>Blog</Label></a>
              <a href="#"><Label>Portfolio</Label></a>
              <a href="#"><Label>Download</Label></a>
              <a href="#"><Label>About</Label></a>
              <a href="#"><Label>Contact</Label></a>
              <a href="#"><Label>Blog</Label></a>
              <a href="#"><Label>Portfolio</Label></a>
              <a href="#"><Label>Download</Label></a>
              <a href="#"><Label>About</Label></a>
              <a href="#"><Label>Contact</Label></a>
            </nav>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default MenuTop;
