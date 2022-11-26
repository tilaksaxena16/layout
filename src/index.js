import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './Header/Header';
import { Sidebarheading } from './Sidebar/Sidebarheading';
import { Sidebaritems } from './Sidebar/Sidebaritems';
import { Maincontent } from './Maincontent/Maincontent';
import { Nav } from './Nav/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='page-display'>
      <Header></Header>
      <div className='display'>
        <div className='sidebar-child-div'>
          <Sidebarheading name="Manage"></Sidebarheading>
          <Sidebaritems name="View site"></Sidebaritems>
          <Sidebaritems name="Create page"></Sidebaritems>
          <Sidebaritems name="Blog articles"></Sidebaritems>
          <Sidebaritems name="Files"></Sidebaritems>
          <Sidebaritems name="Users"></Sidebaritems>
          <Sidebaritems name="Subscriptions"></Sidebaritems>
          <Sidebaritems name="Archived pages"></Sidebaritems>
          <Sidebarheading name="Pro features"></Sidebarheading>
          <Sidebaritems name="Themes"></Sidebaritems>
          <Sidebaritems name="Plugins"></Sidebaritems>
          <Sidebaritems name="Upgrade plans"></Sidebaritems>
        </div>
        <div className='maincontent-container1'>
          <Nav></Nav>
          <Maincontent name="Home_page"></Maincontent>
          <Maincontent name="About_page"></Maincontent>
          <Maincontent name="Home_page"></Maincontent>
          <Maincontent name="About_page"></Maincontent>
          <Maincontent name="About_page"></Maincontent>
        </div>
      </div>
    </div>
  </>
);

