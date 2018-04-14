import React from 'react';
import FontIcon from 'material-ui/FontIcon';

const linkStyle = {
  color: '#0097a7'
};

const contactStyle = {
  float: 'left',
  margin: 0,
  marginLeft: 10
}

const Resources = () => {
  return (
    <div style={{ margin: 30 }}>
      <h1>Resources</h1>
      <h4>Have you been assaulted? Harassed? Ripped off?</h4>
      <p>
        {`We are a coalition of front line workers and agencies providing direct services to those who work in the sex trade
        and those who are survivors of violence.`}
      </p>
      <h4>
        <a href="http://www.orcc.net" style={linkStyle}>Ottawa Rape Crisis Centre</a>
      </h4>
      <div>
        <a href="tel:16135622333"><FontIcon className="material-icons" style={{ float: 'left' }}>phone</FontIcon></a>
        <p style={contactStyle}>613-562-2333</p>
      </div>
      <br />
      <h4>{'Brigid\'s Place'}</h4>
      <div>
        <FontIcon className="material-icons" style={{ float: 'left' }}>phone</FontIcon>
        <p style={contactStyle}>613-688-2017</p>
      </div>

    </div>
  );
};

export default Resources;
