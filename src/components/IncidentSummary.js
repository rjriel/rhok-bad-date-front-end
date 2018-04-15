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
    const { public_incident_description } = this.props.incidentSummary;

    return (
      <div >
        <Card>
          <CardText>
            {public_incident_description}
          </CardText>
        </Card>
      </div>
    );
  }
}

IncidentSummary.defaultProps = {
  incidentSummary: {
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
