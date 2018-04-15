import { Card, CardHeader, CardText } from 'material-ui';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const showOnlyMyIncidentsCheckboxStyle = {
//   marginTop: '17px',
// };

class IncidentSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { incident_type, incident_date, incident_description } = this.props.incidentSummary;

    return (
      <div >
        <Card>
          <CardHeader
            title={incident_type.join()}
            subtitle={incident_date}
            actAsExpander
            showExpandableButton
          />
          <CardText expandable>
            {incident_description}
          </CardText>
        </Card>
      </div>
    );
  }
}

IncidentSummary.defaultProps = {
  incidentSummary: {
    id: 123,
    user_name: 'Mark',
    updated: true,
    incident_date: 'Monday',
    incident_type: ['TimeWaster', 'Abuser'],
    incident_descriptor: 'My description...',
    location: 'Ottawa',
  },
};

IncidentSummary.propTypes = {
  incidentSummary: PropTypes.shape({
    id: PropTypes.number,
    user_name: PropTypes.string,
    updated: PropTypes.bool,
    incident_date: PropTypes.string,
    incident_type: PropTypes.arrayOf(PropTypes.string),
    location: PropTypes.string,
  }),
};

export default IncidentSummary;
