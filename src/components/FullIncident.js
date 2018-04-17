import { Card, CardHeader, CardText } from 'material-ui';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const rowLabelStyle = {
  color: 'rgb(0, 188, 212, 0.8)',
};

const rowValueStyle = {
  paddingLeft: '30px',
};

const breakStyle = {
  marginTop: '15px',
};

class FullIncident extends Component {
  static renderCar(car) {
    return (
      <React.Fragment>
        {FullIncident.renderRow('Make', car.make)}
        {FullIncident.renderRow('Model', car.model)}
        {FullIncident.renderRow('Type', car.type)}
        {FullIncident.renderRow('Plate', car.plate_number)}
        {FullIncident.renderRow('Plate province', car.plate_province)}
        {FullIncident.renderEmptyRow()}
      </React.Fragment>
    );
  }
  static renderOffender(offender) {
    return (
      <React.Fragment>
        {FullIncident.renderRow('Build', offender.build)}
        {FullIncident.renderRow('Race/skin', offender.skin_colour)}
        {FullIncident.renderRow('Height', offender.height)}
        {FullIncident.renderRow('Weight', offender.weight)}
        {FullIncident.renderRow('Age', offender.age)}
        {FullIncident.renderRow('Hair colour', offender.hair_colour)}
        {FullIncident.renderRow('Facial hair', offender.facial_hair)}
        {FullIncident.renderRow('Tattoos', offender.tattoos)}
        {FullIncident.renderEmptyRow()}
      </React.Fragment>
    );
  }
  static renderRow(label, value) {
    return (
      <React.Fragment>
        {value &&
        <tr>
          <td style={rowLabelStyle}>{label}</td>
          <td style={rowValueStyle}>{value}</td>
        </tr>
      }
      </React.Fragment>
    );
  }
  static renderEmptyRow() {
    return (
      <React.Fragment>
        {
          <tr>
            <td style={rowLabelStyle}><br /></td>
            <td style={rowValueStyle}><br /></td>
          </tr>
        }
      </React.Fragment>
    );
  }
  static buildSubtitle(incidentDate, location) {
    const strDate = (incidentDate ? (new Date(incidentDate)).toLocaleDateString('en-US') : '');
    const separator = strDate ? '        ' : '';
    const strLocation = location ? location : '';
    return `${strDate}${separator}${strLocation}`;
  }
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    console.log('fullIncident:', this.props.fullIncident);
    const {
      incidentType,
      incidentDate,
      incident_description: incidentDescription,
      car,
      offender,
      location,
      extra_details,
    } = this.props.fullIncident;

    return (
      <div >
        <Card>
          <CardHeader
            title={incidentType ? incidentType.join(', ') : 'not available'}
            subtitle={FullIncident.buildSubtitle(incidentDate, location)}
            actAsExpander
            showExpandableButton
          />
          <CardText expandable>
            <table>
              <tbody>
                { car &&
                  FullIncident.renderCar(car)
                }
                { offender &&
                  FullIncident.renderOffender(offender)
                }
              </tbody>
            </table>

            { incidentDescription &&
              <div style={breakStyle}>{incidentDescription}</div>
            }

            { extra_details &&
              <div style={breakStyle}>{extra_details}</div>
            }
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
    location: PropTypes.string,
    incidentType: PropTypes.arrayOf(PropTypes.string),
    incidentDate: PropTypes.string,
    incident_description: PropTypes.string,
    car: PropTypes.objectOf(PropTypes.string),
    offender: PropTypes.objectOf(PropTypes.string),
  }),
};

export default FullIncident;
