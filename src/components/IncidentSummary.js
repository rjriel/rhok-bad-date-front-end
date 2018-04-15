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
    const { user_name, incident_type } = this.props.incidentSummary;

    return (
      <div >
        <Card>
          <CardHeader
            title={user_name}
            subtitle={incident_type.join()}
            actAsExpander
            showExpandableButton
          />
          <CardText expandable>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
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
