import React from "react";
import styled from "styled-components";
import Form from "../components/Form";
const Sell = () => {
  const option = "Sale";
  return (
    <div className="container">
      <Title>
        <span>Sell your Item</span>
      </Title>
      <Form option={option} />
    </div>
  );
};

const Title = styled.h2`
  font-size: var(--lengthLg1);
  text-align: center;
  margin-top: 1em;
  span {
    background: linear-gradient(180deg, transparent 70%, #c090ff 50%);
  }
`;
export default Sell;
