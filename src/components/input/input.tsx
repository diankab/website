import React from "react";
import styled from "styled-components";
import { Field } from "formik";
export const StyledField = styled(Field)`
  background-color: white;
  color: #3d3d29;
  width: 250px;
  height: 30px;
  border: 1px solid blue;
  font-size: 13.3333px;
  border-radius: 5px;
  align-items: center;
  justify-content: left;
`;

const Label = styled.label`
  position: absolute;
  top: -15px;
  background-color: white;
  left: 8px;
  padding: 0 5px;
  font-size: 14px;
`;

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  value: string;
}
const Wrapper = styled.div`
  position: relative;
`;

export const Input: React.FC<InputProps> = props => (
  <Wrapper>
    {props.value && <Label> {props.placeholder}</Label>}
    <StyledField
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
    />
  </Wrapper>
);
