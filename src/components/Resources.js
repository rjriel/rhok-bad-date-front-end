import React from 'react';
import FontIcon from 'material-ui/FontIcon';

const containerStyle = {
  width: '90vw',
  maxWidth: '600px',
  alignItems: 'center',
};

const linkStyle = {
  float: 'left',
  color: '#0097a7',
};

const contactStyle = {
  float: 'left',
  margin: 0,
  marginLeft: 10,
};

const headerStyle = {
  marginTop: 15,
  marginBottom: 5,
};

const Resources = () => {
  return (
    <div style={containerStyle}>
      <h1 style={{ marginTop: 0 }}>Resources</h1>
      <h4 style={{ margin: 0 }}>Have you been assaulted? Harassed? Ripped off?</h4>
      <p>
        {`We are a coalition of front line workers and agencies providing direct services to those who work in the sex trade
        and those who are survivors of violence.`}
      </p>
      <div>
        <a href="http://www.orcc.net" style={{ color: '#0097a7' }}><h4 style={headerStyle}>Ottawa Rape Crisis Centre</h4></a>
        <a href="tel:16135622333"><FontIcon className="material-icons" style={linkStyle}>phone</FontIcon></a>
        <p style={contactStyle}>613-562-2333</p>
        <br />
        <h4 style={headerStyle}>{'Brigid\'s Place'}</h4>
        <a href="tel:16136882017"><FontIcon className="material-icons" style={linkStyle}>phone</FontIcon></a>
        <p style={contactStyle}>613-688-2017</p>
        <br />
        <h4 style={headerStyle}>{'Daisy\'s'}</h4>
        <a href="tel:16137224000"><FontIcon className="material-icons" style={linkStyle}>phone</FontIcon></a>
        <p style={contactStyle}>613-722-4000 (x260)</p>
        <br />
        <h4 style={headerStyle}>Storm Van</h4>
        <a href="tel:16132657558"><FontIcon className="material-icons" style={linkStyle}>phone</FontIcon></a>
        <p style={contactStyle}>613-265-7558</p>
        <br />
        <h4 style={headerStyle}>Site Van</h4>
        <a href="tel:16132657558"><FontIcon className="material-icons" style={linkStyle}>phone</FontIcon></a>
        <p style={contactStyle}>613-265-7558</p>
      </div>
    </div>
  );
};

export default Resources;
