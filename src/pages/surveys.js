// pages/blogs.js

import React, { useState } from 'react';
import './surveys.css';
const Surveys = () => {

    const [activeTab, setActiveTab] = useState(null);

  const tabs = [
    { id: 1, title: 'Tab 1', description: 'This is a short description for Tab 1.' },
    { id: 2, title: 'Tab 2', description: 'This is a short description for Tab 2.' },
    { id: 3, title: 'Tab 3', description: 'This is a short description for Tab 3.' },
    { id: 4, title: 'Tab 4', description: 'This is a short description for Tab 4.' },
    { id: 5, title: 'Tab 5', description: 'This is a short description for Tab 5.' },
    { id: 6, title: 'Tab 6', description: 'This is a short description for Tab 6.' },
    { id: 7, title: 'Tab 7', description: 'This is a short description for Tab 7.' },
    { id: 8, title: 'Tab 8', description: 'This is a short description for Tab 8.' },
    { id: 9, title: 'Tab 9', description: 'This is a short description for Tab 9.' },
  ];
  return (
    <div className="tabs-page">
      {tabs.map(tab => (
        <div
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          onMouseEnter={() => setActiveTab(tab.id)}
          onMouseLeave={() => setActiveTab(null)}
        >
          <h3>{tab.title}</h3>
          <p>{tab.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Surveys;
