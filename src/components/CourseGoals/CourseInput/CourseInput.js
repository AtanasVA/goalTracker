import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    color: ${(props) => (props.isValid ? "black" : "red")};
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.isValid ? "#ccc" : "red")};
    background-color: ${(props) => (props.isValid ? "transparent" : "salmon")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

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
      <FormControl isValid={hasContent}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
