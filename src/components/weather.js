import React from "react";
import { FormattedMessage } from "react-intl";

function Weather() {
  return (
    <>
      <p>
        <FormattedMessage
          id="Weather.message"
          defaultMessage="Because it is sunny ya goof!"
        />
      </p>
      <img
        src="https://api.creativecommons.engineering/t/600/https://live.staticflickr.com/2660/3689874057_b972130eca_m.jpg"
        alt="sunny day"
      ></img>
    </>
  );
}

export default Weather;
