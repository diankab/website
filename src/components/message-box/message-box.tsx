import React, { useState } from "react";
import styled from "styled-components";
import { Message } from "../message";
import { Button } from "../button";
import { Input } from "../input";
interface MessageBoxProps {}
const Wrapper = styled.div`
  margin: 20px;
`;

const messages = ["laiskas", "rasinelis", `laikas`];

export const MessageBox: React.FC<MessageBoxProps> = props => {
  const [messageNumber, setMessageNumber] = useState(0);
  return (
    <Wrapper>
      <Button
        onClick={() => {
          setMessageNumber(messageNumber === 2 ? 0 : messageNumber + 1);
        }}
      >
        Click
      </Button>
      <Message>{messages[messageNumber]}</Message>
      {/* <Input /> */}
    </Wrapper>
  );
};
