import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

function Weather() {
  return (
    <Wrapper>
      <h3>
        <FormattedMessage
          id="Weather.message"
          defaultMessage="Because it is sunny ya goof!"
        />
      </h3>
      <img
        className="image"
        src="https://cdn.pixabay.com/photo/2016/01/19/14/42/grass-1148913__340.jpg"
        alt="sunny day"
      ></img>
    </Wrapper>
  );
}

export default Weather;

const Wrapper = styled.div`
  direction: flex;
  flex-direction: column;
  .image {
    border-radius: 9px;
  }
`;
