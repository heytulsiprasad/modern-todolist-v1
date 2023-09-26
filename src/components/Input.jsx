import { useState } from "react";
import styled from "styled-components";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";

import { db } from "../config/firebase";

const InputContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const StyledInput = styled.input`
  width: 476px;
  height: 56px;
  border: 1px solid #bdbdbd;
  border-radius: 12px;
  padding-left: 20px;

  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #828282;
    /* padding-left: 20px;   */
  }
`;

const StyledButton = styled.button`
  width: 109px;
  height: 56px;
  background: #2f80ed;
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  border-radius: 12px;
  border: none;

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #fff;
  }
`;

const Input = ({ uid }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="add details"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <StyledButton type="submit">
        <span>Add</span>
      </StyledButton>
    </InputContainer>
  );
};

export default Input;
