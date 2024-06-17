// pages/blogs.js

import React, { useState } from 'react';
import './surveys.css';
import {data} from './data';
const Surveys = () => {

    const [activeTab, setActiveTab] = useState(null);

  const tabs = data.surveyList;
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
          {/* <p>{tab.description}</p> */}
          <a href={tab.description} target="_blank" rel="noopener noreferrer">
            {tab.description}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Surveys;
