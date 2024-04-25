import React from "react";
import "./acc.css";
import  { useState } from 'react';
import Share from "../../shared/Share";
import Footer from "../../shared/Footer";

const Accept = () => {
  const [selectedOption1, setSelectedOption1] = useState(""); // State for first dropdown
  const [selectedOption2, setSelectedOption2] = useState(""); // State for second dropdown

  // Function to handle change in selection for first dropdown
  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  // Function to handle change in selection for second dropdown
  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const [selectedOptions3, setSelectedOptions3] = useState({
    group1: "",
    group2: "",
    group3: ""
  });

  // Function to handle change in selection
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions({ ...selectedOptions, [name]: value });
  };
  
  const [selectedOptions, setSelectedOptions] = useState({
    group1: "",
    group2: "",
    group3: ""
  });

  // Function to handle change in selection
  const handleCheckboxChange = (event, groupName) => {
    const { value, checked } = event.target;
    setSelectedOptions(prevState => {
      // Clear the other checkbox in the same group
      const updatedState = Object.keys(prevState).reduce((acc, key) => {
        if (key === groupName) {
          acc[key] = checked ? value : "";
        } else if (prevState[key] === value) {
          acc[key] = "";
        } else {
          acc[key] = prevState[key];
        }
        return acc;
      }, {});
      return updatedState;
    });
  };
          return(
          <>
          <Share/>
    <div className="widget-right10 window-widget10">
    <div className="window-header1">

        <span className="window-title">قبول الحالات </span>
        <i class="icon fa-regular fa-pen-to-square"></i>
      </div> 

      <div class="vbn1">
        <label>
          <input
            type="radio"
            name="group2"
            value="option1"
            checked={selectedOptions.group2 === "option1"}
            onChange={handleChange}
          />
        جماعي
        </label>
        <label>
          <input
            type="radio"
            name="group2"
            value="option2"
            checked={selectedOptions.group2 === "option2"}
            onChange={handleChange}
          />
          فردي 
        </label>
      </div>

      <div>
      <h2 class="style11122">:الأسره بالخارج</h2>
      <select value={selectedOption1} onChange={handleChange1}>
        <option value="">Choose</option>
        <option value="option1">.....</option>
        <option value="option2">نعم</option>
        <option value="option3">لا</option>
        
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption1}</p>
    </div>
    <div>
      <h2 class="style2221">:احتياجات خاصة</h2>
      <select class="lara1" value={selectedOption2} onChange={handleChange2}>
        <option value="">Choose</option>
        <option value="option1">....</option>
        <option value="option2"> نعم</option>
        <option value="option3">لا</option>
        
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption2}</p>
    </div>

      <div>
        <label>
          <input
            type="radio"
            name="group1"
            value="option1"
            checked={selectedOptions.group1 === "option1"}
            onChange={handleChange}
          />
          طلاب الجامعة
        </label>
        <label>
          <input
            type="radio"
            name="group1"
            value="option2"
            checked={selectedOptions.group1 === "option2"}
            onChange={handleChange}
          />
          من خارج الجامعة
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="group2"
            value="option1"
            checked={selectedOptions.group2 === "option1"}
            onChange={handleChange}
          />
         مصري
        </label>
        <label>
          <input
            type="radio"
            name="group2"
            value="option2"
            checked={selectedOptions.group2 === "option2"}
            onChange={handleChange}
          />
          وافد من الخارج
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="group3"
            value="option1"
            checked={selectedOptions.group3 === "option1"}
            onChange={handleChange}
          />
          متقدمين
        </label>
        <label>
          <input
            type="radio"
            name="group3"
            value="option2"
            checked={selectedOptions.group3 === "option2"}
            onChange={handleChange}
          />
          مقبولين
        </label>
    </div>
  
      <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button><i className="fas fa-search"></i></button>
        </div>

      </div>     
      <Footer/>
          </>
          );
        };
export default Accept;