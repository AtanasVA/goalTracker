import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import style from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [hasContent, updateHasContent] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      updateHasContent(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      updateHasContent(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!hasContent ? "invalid" : ""}`}> */}
      <div
        className={`${style["form-control"]} ${!hasContent && style.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
