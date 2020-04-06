import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <h1 className="item App-title">
          <FormattedMessage id="Home.header" defaultMessage="Hello world!" />
        </h1>

        <p className="item">
          <FormattedMessage
            id="Home.dayMessage"
            defaultMessage="It is a beautiful day outside"
          />
        </p>
        <Link to="/day" className="item link">
          <FormattedMessage
            id="Home.dayLink"
            defaultMessage="Click here to find out why!"
          />
        </Link>
      </Wrapper>
    );
  }
}

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
