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
    console.log('--------------', this.props.fullIncident);
    const {
      incidentType,
      incident_date: incidentDate,
      incident_description: incidentDescription,
      car,
      offender,
    } = this.props.fullIncident;

    return (
      <div >
        <Card>
          <CardHeader
            title={incidentType ? incidentType.join() : 'n/a'}
            subtitle={incidentDate}
            actAsExpander
            showExpandableButton
          />
          <CardText expandable>
            { car &&
              [
                <div style={spaceEvenlyStyle}>
                  <span style={labelStyle}>Plate Number:</span>
                  <span>{car.plate_number}</span>
                </div>,
                <div style={spaceEvenlyStyle}>
                  <span style={labelStyle}>Make:</span>
                  <span>{car.make}</span>
                </div>,
                <div style={spaceEvenlyStyle}>
                  <span style={labelStyle}>Model:</span>
                  <span>{car.model}</span>
                </div>,
                <div style={spaceEvenlyStyle}>
                  <span style={labelStyle}>Type:</span>
                  <span>{car.type}</span>
                </div>,
                <div style={spaceEvenlyStyle}>
                  <span style={labelStyle}>Details:</span>
                  <span>{car.extra_details}</span>
                </div>,
                <div style={breakStyle} />,
              ]
            }

            {offender &&
              [
                <div style={spaceEvenlyStyle}>
                  <span style={labelStyle}>Name:</span>
                  <span>{offender.name}</span>
                </div>,
                <div style={spaceEvenlyStyle}>
                  <span style={labelStyle}>Age:</span>
                  <span>{offender.age}</span>
                </div>,
                <div style={spaceEvenlyStyle}>
                  <span style={labelStyle}>Gender:</span>
                  <span>{offender.gender}</span>
                </div>,
                <div style={spaceEvenlyStyle}>
                  <span style={labelStyle}>Height:</span>
                  <span>{offender.height}</span>
                </div>,
                <div style={spaceEvenlyStyle}>
                  <span style={labelStyle}>Weight:</span>
                  <span>{offender.weight}</span>
                </div>,
                <div style={spaceEvenlyStyle}>
                  <span style={labelStyle}>Skin Colour:</span>
                  <span>{offender.skin_colour}</span>
                </div>,
                <div style={spaceEvenlyStyle}>
                  <span style={labelStyle}>Contact details:</span>
                  <span>{offender.contact_details}</span>
                </div>,
              ]
            }
            <div style={breakStyle}>{incidentDescription}</div>
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
    incidentType: PropTypes.string,
    incident_date: PropTypes.string,
    incident_description: PropTypes.string,
    car: PropTypes.objectOf(PropTypes.string),
    offender: PropTypes.objectOf(PropTypes.string),
  }),
};

export default FullIncident;
