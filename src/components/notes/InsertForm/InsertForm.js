import React from "react";
import styled from "styled-components";

const InsertTemplate = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 1024px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  `;

const Title = styled.div`
  border-bottom: 1px solid $oc-gray-8;
  padding-bottom: 0.75rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

const Input = styled.input`
  margin-top: 0.75rem;
  height: 2.5rem;
  border: 1px solid $oc-gray-5;
  border-radius: 2px;
  outline: none;
  font-size: 1.5rem;
  padding: 0.25rem;
  background: $oc-gray-5;
  color: black;
  font-weight: 600;
  flex: 1;
`;

const InsertForm = ({ inputValue, onChangeInput, onAdd }) => {
  const handleChange = e => {
    const { value } = e.target;
    onChangeInput({ value });
  }

  const handleKeyPress = e => {
    if(e.key === "Enter") {
      const note = e.target.value;
      onAdd(note);
    }
  }

  return(
    <InsertTemplate>
      <Title />
      <Input type="text" name="note" value={inputValue} onChange={handleChange} onKeyPress={handleKeyPress} />
    </InsertTemplate>
  );
}

export default InsertForm;
