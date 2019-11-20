import React from "react";
import styled from "styled-components";
import { Input } from "../input";
interface Props {}
const StyledForm = styled.form``;
const InputWrapper = styled.div`
  margin: 15px;
`;
const RowWrapper = styled.div`
  display: flex;
`;
export const LoginForm: React.FC<Props> = props => (
  <form>
    <RowWrapper>
      <InputWrapper>
        <Input placeholder="First Name" type="text" />
      </InputWrapper>
      <InputWrapper>
        <Input placeholder="Last Name" type="text" />
      </InputWrapper>
    </RowWrapper>
    <RowWrapper>
      <InputWrapper>
        <Input placeholder="Username" type="text" />
      </InputWrapper>
    </RowWrapper>
    <RowWrapper>
      <InputWrapper>
        <Input placeholder="Password" type="password" />
      </InputWrapper>
      <InputWrapper>
        <Input placeholder="Confirm" type="password" />
      </InputWrapper>
    </RowWrapper>
  </form>
);
