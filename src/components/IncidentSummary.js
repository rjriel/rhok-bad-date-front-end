import { Card, CardHeader, CardText } from 'material-ui';
import React, { Component } from 'react';

// const showOnlyMyIncidentsCheckboxStyle = {
//   marginTop: '17px',
// };

class IncidentSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div >
        <Card>
          <CardHeader
            title="Without Avatar"
            subtitle="Subtitle"
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
};

IncidentSummary.propTypes = {
};

export default IncidentSummary;
