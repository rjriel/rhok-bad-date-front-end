import { TextField, Checkbox, Divider } from 'material-ui';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SortDropDownMenu from './SortDropDownMenu';
import IncidentSummary from './IncidentSummary';
import FullIncident from './FullIncident';

const listStyle = {
  margin: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
};

const incidentResultStyle = {
  overflow: 'auto',
  height: '600px',
};

const separatorStyle = {
  marginTop: '30px',
  backgroundColor: 'rgb(0, 188, 212)',
};

const horizontalRuleStyle = {
  marginTop: '30px',
};

const searchLabelStyle = {
  marginRight: '20px',
};

const sortLabelStyle = {
  marginRight: '20px',
  marginTop: '17px',
};

const sortDropDownMenuStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
};

const showOnlyMyIncidentsCheckboxStyle = {
  marginTop: '17px',
};

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      checked: false,
      basicIncidents: [],
      fullIncidents: [],
    };
  }
  getFullIncidents = () => {
    console.log(this.state.fullIncidents);
    const filtered = this.state.fullIncidents.filter((incident) => {
      return JSON.stringify(incident).includes(this.state.searchTerm);
    });
    return filtered.map((incident) => {
      return (
        <div key={incident.id}>
          <Divider style={horizontalRuleStyle} /><FullIncident fullIncident={incident} />
        </div>
      );
    });
  }

  getBasicIncidents = () => {
    console.log(this.state.basicIncidents);
    const filtered = this.state.basicIncidents.filter((incident) => {
      return JSON.stringify(incident).includes(this.state.searchTerm);
    });
    return filtered.map((incident) => {
      return (
        <div key={incident.id}>
          <Divider style={horizontalRuleStyle} /><IncidentSummary incidentSummary={incident} />
        </div>
      );
    });
  }

  updateCheck = () => {
    if (this.state) {
      console.log('Checkmark is now', !this.state.checked);
      this.setState({ checked: !this.state.checked });
    }
  }
  render() {
    // const { } = this.state;
    return (
      <div style={listStyle}>
        <div>
          <h1>Reported Incidents</h1>
          <div>
            <span style={searchLabelStyle}>Search:</span>
            <TextField
              label="sjdkfskdfj"
              id="searchTerm"
              value={this.state.searchTerm}
              onChange={(event) => { this.setState({ searchTerm: event.target.value }); }}
              placeholder="Enter your search criteria"
            />
          </div>
          <div style={sortDropDownMenuStyle}>
            <span style={sortLabelStyle}>Sort:</span>
            <SortDropDownMenu />
          </div>
          <div>
            <Checkbox
              label="Show only my incidents"
              checked={this.state.checked}
              onCheck={() => { this.updateCheck(); }}
              style={showOnlyMyIncidentsCheckboxStyle}
            />
          </div>
        </div>
        <Divider style={separatorStyle} />
        <div style={incidentResultStyle}>
          {this.state.checked ? this.getFullIncidents() : this.getBasicIncidents()}
        </div>
      </div>
    );
  }
}

List.defaultProps = {
};

List.propTypes = {
};

export default List;
