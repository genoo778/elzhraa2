import React from "react";
import "./report14.css";
import  { useState } from 'react';
import Footer from "../../shared/Footer";
import Share from "../../shared/Share";

const Report14 = () => {
  const [selectedOption1, setSelectedOption1] = useState(""); // State for first dropdown
  const [selectedOption2, setSelectedOption2] = useState(""); // State for second dropdown
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  // Function to handle change in selection for first dropdown
  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  // Function to handle change in selection for second dropdown
  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleChange3 = (event) => {
    setSelectedOption3(event.target.value);
  };

  const handleChange4 = (event) => {
    setSelectedOption4(event.target.value);
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
    <div className="widget-right1114 window-widget1114">
    <div className="window-header1">
        <i class="icon2 fa-solid fa-share"></i>
        <span className="window-title">بيان استلام الوجبات</span>
        <i class="icon fa-regular fa-pen-to-square"></i>
      </div> 
      <div>
      <h2 class="style1">:العام الأكاديمي</h2>
      <select value={selectedOption1} onChange={handleChange1}>
        <option value="">Choose</option>
        <option value="option1">2020/2021</option>
        <option value="option2"> 2021/2022</option>
        <option value="option3">2022/2023</option>
        <option value="option4">2023/2024</option>
        <option value="option5">2024/2025</option>
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption1}</p>
    </div>
    <div>
      <h2 class="style2"> :الكلية</h2>
      <select class="lara1" value={selectedOption2} onChange={handleChange2}>
        <option value="">Choose</option>
        <option value="option1">حاسبات ومعلومات </option>
        <option value="option2"> اداب</option>
        <option value="option3">علوم</option>
        <option value="option4">طب</option>
        <option value="option5">هندسه</option>
        <option value="option6">تجاره</option>
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption2}</p>
    </div>
    
    <div class="style7">
      <h2 >: الفترة</h2>  
      <h4>من</h4>
      <input type="date"></input>
      <h4>إلي</h4>
      <input type="date"></input>
      </div>

      <div>
      <h2 class="style3"> :الوجبة</h2>
      <select class="lara1" value={selectedOption3} onChange={handleChange3}>
        <option value="">Choose</option>
        <option value="option1">...</option>
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption2}</p>
    </div>

    <div>
      <h2 class="style67">:بيانات الوجبات للطلاب</h2>
      <div>
        <label>
          <input
            type="radio"
            name="group1"
            value="option1"
            checked={selectedOptions.group1 === "option1"}
            onChange={handleChange}
          />
           تخلف عن الاستلام
        </label>
        <label>
          <input
            type="radio"
            name="group1"
            value="option2"
            checked={selectedOptions.group1 === "option2"}
            onChange={handleChange}
          />
          استلمها  
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
         لم يحجز وجبات
        </label>
        <label>
          <input
            type="radio"
            name="group2"
            value="option2"
            checked={selectedOptions.group2 === "option2"}
            onChange={handleChange}
          />
           حجز 
        </label>
      </div>
    </div>
    <div>
      <h2 class="style4"> :بيانات السكن </h2>
      <div>
        <label>
          <input
            type="checkbox"
            value="option1"
            checked={selectedOptions.group1 === "option1"}
            onChange={(e) => handleCheckboxChange(e, "group1")}
          />
          قدامي
        </label>
        <label>
          <input
            type="checkbox"
            value="option2"
            checked={selectedOptions.group1 === "option2"}
            onChange={(e) => handleCheckboxChange(e, "group1")}
          />
          جدد
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="option1"
            checked={selectedOptions.group2 === "option1"}
            onChange={(e) => handleCheckboxChange(e, "group2")}
          />
          سكن عادي
        </label>
        <label>
          <input
            type="checkbox"
            value="option2"
            checked={selectedOptions.group2 === "option2"}
            onChange={(e) => handleCheckboxChange(e, "group2")}
          />
          سكن مميز
        </label>
      </div>
      <div>
      <h2 class="style68">:الديانه</h2>
      <div>
        <label>
          <input
            type="checkbox"
            value="option1"
            checked={selectedOptions.group3 === "option1"}
            onChange={(e) => handleCheckboxChange(e, "group3")}
          />
          مسيحي
        </label>
        <label>
          <input
            type="checkbox"
            value="option2"
            checked={selectedOptions.group3 === "option2"}
            onChange={(e) => handleCheckboxChange(e, "group3")}
          />
          مسلم 
        </label>
      </div>
    </div>
    <div>
      <h2 class="style444">:الترتيب</h2>
      <select value={selectedOption4} onChange={handleChange4}>
        <option value="">Choose</option>
        <option value="option1">الاسم</option>
        <option value="option2">الكليه</option>
        <option value="option3">الفرقه</option>
        <option value="option4">مكان السكن</option>
        <option value="option5">تاريخ السكن</option>
        {/* Add more options as needed */}
      </select>
      <p>Selected Option {selectedOption1}</p>
    </div>     
    </div>
    <div className="button-container">
          <button>عرض التقرير</button>
          <button>توقعيات التقرير</button>
        </div>
    </div>
    <Footer/>
          </>
          );
        };
export default Report14;