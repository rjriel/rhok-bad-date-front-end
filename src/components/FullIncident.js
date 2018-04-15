import { Card, CardHeader, CardText } from 'material-ui';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const showOnlyMyIncidentsCheckboxStyle = {
//   marginTop: '17px',
// };

const labelStyle = {
  fontWeight: 700,
  marginRight: '10px',
};

const breakStyle = {
  marginTop: '15px',
};

const spaceEvenlyStyle = {
  display: 'flex',
  direction: 'row',
  justifyContent: 'space-between',
};

class FullIncident extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log('--------------', this.props.fullIncident)
    const { incident_type, incident_date, incident_description, car, offender_details } = this.props.fullIncident;

    return (
      <div >
        <Card>
          <CardHeader
            title={incident_type ? incident_type.join() : 'n/a'}
            subtitle={incident_date}
            actAsExpander
            showExpandableButton
          />
          <CardText expandable>
            <div style={spaceEvenlyStyle}><span style={labelStyle}>Plate Number:</span><span>{car.plate_number}</span></div>
            <div style={spaceEvenlyStyle}><span style={labelStyle}>Make:</span><span>{car.make}</span></div>
            <div style={spaceEvenlyStyle}><span style={labelStyle}>Model:</span><span>{car.model}</span></div>
            <div style={spaceEvenlyStyle}><span style={labelStyle}>Type:</span><span>{car.type}</span></div>
            <div style={spaceEvenlyStyle}><span style={labelStyle}>Details:</span><span>{car.extra_details}</span></div>

            <div style={breakStyle} />

            <div style={spaceEvenlyStyle}><span style={labelStyle}>Name:</span><span>{offender_details.name}</span></div>
            <div style={spaceEvenlyStyle}><span style={labelStyle}>Age:</span><span>{offender_details.age}</span></div>
            <div style={spaceEvenlyStyle}><span style={labelStyle}>Gender:</span><span>{offender_details.gender}</span></div>
            <div style={spaceEvenlyStyle}><span style={labelStyle}>Height:</span><span>{offender_details.height}</span></div>
            <div style={spaceEvenlyStyle}><span style={labelStyle}>Weight:</span><span>{offender_details.weight}</span></div>
            <div style={spaceEvenlyStyle}><span style={labelStyle}>Skin Colour:</span><span>{offender_details.skin_colour}</span></div>
            <div style={spaceEvenlyStyle}><span style={labelStyle}>Contact details:</span><span>{offender_details.contact_details}</span></div>

            <div style={breakStyle}>{incident_description}</div>
            
          </CardText>
        </Card>
      </div>
    );
  }
}

FullIncident.defaultProps = {
  fullIncident: {},
};

FullIncident.propTypes = {
  fullIncident: PropTypes.shape({
  }),
};

export default FullIncident;
