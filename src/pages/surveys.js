import React, { useState } from "react";
import "./surveys.css";
import { data } from "./data";

const Surveys = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState("all");
  const [selectedMethodology, setSelectedMethodology] = useState("all");
  const [selectedProblem, setSelectedProblem] = useState("all");

  const tabs = data.surveyList;

  function getUniqueSolutionCategories(dataArray, key) {
    // Use Set to store unique values efficiently
    const uniqueValues = new Set();
  
    // Loop through each object in the data array
    dataArray.forEach((item) => {
      // Extract the categories array from the current item
      const categories = item[key];
        if(categories)
            // Add each element of categories to the Set
            categories.forEach((category) => uniqueValues.add(category));
    });
  
    // Convert the Set back to an array for easier use
    return Array.from(uniqueValues);
  }

  const solutionList = getUniqueSolutionCategories(tabs, 'solutionCategories');
  const methodsList = getUniqueSolutionCategories(tabs, 'methodologyCategories');
  const problemList = getUniqueSolutionCategories(tabs, 'problemCategories');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveTab(null);
    setModalOpen(false);
  };

  const handleSolutionChange = (event) => {
    setSelectedSolution(event.target.value);
  };

  const handleMethodologyChange = (event) => {
    setSelectedMethodology(event.target.value);
  };

  const handleProblemChange = (event) => {
    setSelectedProblem(event.target.value);
  };

  const resetFilters = () => {
    setSelectedSolution("all");
    setSelectedMethodology("all");
    setSelectedProblem("all");
  };

  const filteredTabs = tabs.filter((tab) => {
    const solutionMatch =
      selectedSolution == "all" || tab.solutionCategories.includes(selectedSolution);
    const methodologyMatch =
      selectedMethodology === "all" || tab.methodologyCategories.includes(selectedMethodology);
    const keywordMatch =
      selectedProblem === "all" || tab.problemCategories.includes(selectedProblem);
    return solutionMatch && methodologyMatch && keywordMatch;
  });

  return (
    <div className="tabs-page">
      {/* Dropdowns */}
      <select value={selectedProblem} onChange={handleProblemChange}>
        <option value="all">All Problem Statements</option>
        {problemList.map((problem) => (
        <option key={problem} value={problem}>
          {problem}
        </option>
      ))}
      </select>
      <select value={selectedSolution} onChange={handleSolutionChange}>
        <option value="all">All Solutions</option>
        {solutionList.map((solution) => (
        <option key={solution} value={solution}>
          {solution}
        </option>
      ))}
      </select>
      <select value={selectedMethodology} onChange={handleMethodologyChange}>
        <option value="all">All Methodologies</option>
        {/* Populate options from data.methodologies (assuming it exists) */}
        {methodsList.map((methodology) => (
        <option key={methodology} value={methodology}>
          {methodology}
        </option>))}
      </select>
      {/* <select value={selectedProblem} onChange={handleKeywordChange}>
        <option value="all">All Keywords</option>
        <option value="problem1">Problem 1</option>
        <option value="problem2">Problem 2</option>
      </select> */}
      <button onClick={resetFilters}>Reset Filters</button>

      {filteredTabs.map((tab) => (
        <div key={tab.id} className="tab" onClick={() => handleTabClick(tab.id)}>
          <h3>{tab.title}</h3>
          <a href={tab.description} target="_blank" rel="noopener noreferrer">
            {tab.description}
          </a>
        </div>
      ))}

      {/* Modal (Conditional) */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{filteredTabs.find((tab) => tab.id === activeTab)?.title}</h2>
            {filteredTabs
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
