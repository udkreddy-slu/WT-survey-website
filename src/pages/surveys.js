// pages/blogs.js

import React, { useState } from "react";
import "./surveys.css";
import { data } from "./data";

const Surveys = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const tabs = data.surveyList;

  // Function to handle clicking on a tab
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setActiveTab(null);
    setModalOpen(false);
  };

  return (
    <div className="tabs-page">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="tab"
          onClick={() => handleTabClick(tab.id)}
        >
          <h3>{tab.title}</h3>
          <a href={tab.description} target="_blank" rel="noopener noreferrer">
            {tab.description}
          </a>
        </div>
      ))}

      {/* Modal */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{tabs.find((tab) => tab.id === activeTab)?.title}</h2>
            {tabs
              .find((tab) => tab.id === activeTab)
              ?.details.map((detail) => (
                <div key={detail.id}>
                  <h3>{detail.Problem}</h3>
                  <p>
                    {detail.answer.split(/[:]/).map((part, index) => (
                      <span key={index}>
                        {part.trim()}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Surveys;
