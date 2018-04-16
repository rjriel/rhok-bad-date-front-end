import { Card, CardText } from 'material-ui';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IncidentSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { public_incident_description: publicIncidentDescription } = this.props.incidentSummary;

    return (
      <div >
        <Card>
          <CardText>
            {publicIncidentDescription}
          </CardText>
        </Card>
      </div>
    );
  }
}

IncidentSummary.defaultProps = {
  incidentSummary: {
    public_incident_description: '',
  },
};

IncidentSummary.propTypes = {
  incidentSummary: PropTypes.shape({
    public_incident_description: PropTypes.string,
  }),
};

export default IncidentSummary;
