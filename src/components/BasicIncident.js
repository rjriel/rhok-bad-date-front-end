import { Card, CardText } from 'material-ui';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BasicIncident extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.basicIncident);
    const { public_incident_description: publicIncidentDescription } = this.props.basicIncident;

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

BasicIncident.defaultProps = {
  basicIncident: {
    public_incident_description: '',
  },
};

BasicIncident.propTypes = {
  basicIncident: PropTypes.shape({
    public_incident_description: PropTypes.string,
  }),
};

export default BasicIncident;
