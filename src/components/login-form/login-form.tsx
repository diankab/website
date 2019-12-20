import React from "react";
import styled from "styled-components";
import { Input } from "../input";
import { Formik, Form, Field, ErrorMessage } from "formik";
interface Props {}
const StyledForm = styled.form``;
const InputWrapper = styled.div`
  margin: 15px;
`;
const RowWrapper = styled.div`
  display: flex;
`;

export const LoginForm: React.FC<Props> = props => (
  <div>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        confirm: ""
      }}
      validate={values => {
        const errors = {};

        return errors;
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {props => (
        <Form translate="">
          <RowWrapper>
            <InputWrapper>
              <Input
                placeholder="First Name"
                type="text"
                name="firstName"
                value={props.values.firstName}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={props.values.lastName}
              />
            </InputWrapper>
          </RowWrapper>
          <RowWrapper>
            <InputWrapper>
              <Input
                placeholder="Username"
                type="text"
                name="userName"
                value={props.values.userName}
              />
            </InputWrapper>
          </RowWrapper>
          <RowWrapper>
            <InputWrapper>
              <Input
                placeholder="Password"
                type="password"
                name="password"
                value={props.values.password}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                placeholder="Confirm"
                type="password"
                name="confirm"
                value={props.values.confirm}
              />
            </InputWrapper>
          </RowWrapper>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
