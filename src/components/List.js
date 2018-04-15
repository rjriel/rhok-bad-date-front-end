import { TextField, Checkbox, Divider } from 'material-ui';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SortDropDownMenu from './SortDropDownMenu';
import IncidentSummary from './IncidentSummary';

const testIncidents = [
  {
    id: 123,
    user_name: 'Mark',
    updated: true,
    incident_date: 'Monday',
    incident_type: ['TimeWaster', 'Abuser'],
    incident_descriptor: 'My description...',
    location: 'Ottawa',
  },
  {
    id: 123764,
    user_name: 'Dave',
    updated: true,
    incident_date: 'Monday',
    incident_type: ['TimeWaster', 'Abuser'],
    incident_descriptor: 'My description...',
    location: 'Ottawa',
  },
  {
    id: 1289776653,
    user_name: 'Mark',
    updated: true,
    incident_date: 'Monday',
    incident_type: ['TimeWaster', 'Abuser'],
    incident_descriptor: 'My description...',
    location: 'Ottawa',
  },
  {
    id: 1278634,
    user_name: 'Dave',
    updated: true,
    incident_date: 'Monday',
    incident_type: ['TimeWaster', 'Abuser'],
    incident_descriptor: 'My description...',
    location: 'Ottawa',
  },
  {
    id: 15675623,
    user_name: 'Mark',
    updated: true,
    incident_date: 'Monday',
    incident_type: ['TimeWaster', 'Abuser'],
    incident_descriptor: 'My description...',
    location: 'Ottawa',
  },
  {
    id: 1234534,
    user_name: 'Dave',
    updated: true,
    incident_date: 'Monday',
    incident_type: ['TimeWaster', 'Abuser'],
    incident_descriptor: 'My description...',
    location: 'Ottawa',
  },
  {
    id: 354435123,
    user_name: 'Mark',
    updated: true,
    incident_date: 'Monday',
    incident_type: ['TimeWaster', 'Abuser'],
    incident_descriptor: 'My description...',
    location: 'Ottawa',
  },
  {
    id: 123434543,
    user_name: 'Dave',
    updated: true,
    incident_date: 'Monday',
    incident_type: ['TimeWaster', 'Abuser'],
    incident_descriptor: 'My description...',
    location: 'Ottawa',
  }
];

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
      checked: true,
      incidentSummaries: testIncidents,
    };
  }

  componentWillMount = () => {
    this.getIncidentSummaries();
  }

  componentWillUpdate = (nextProps, nextState) => {
    const { checked } = this.state;
    if (checked !== nextState.checked) {
      this.getIncidentSummaries();
    }
  }

  getIncidentSummaries = () => {
    const { user } = this.props;
    const { checked } = this.state;
    const { username, id } = user;
    const publicProp = !checked ? '/public' : '';
    axios.get(`https://a7v59dsb4l.execute-api.ca-central-1.amazonaws.com/UAT/incident${publicProp}?username=${username}&authorization=${id}`)
      .then(({ data }) => {
        this.setState({
          incidentSummaries: data,
        });
      });
  }

  updateCheck = () => {
    if (this.state) {
      console.log('Checkmark is now', !this.state.checked);
      this.setState({ checked: !this.state.checked });
    }
  }

  renderIncidentSummaries = () => {
    console.log(this.state.incidentSummaries);
    const filtered = this.state.incidentSummaries.filter((incident) => {
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
          {this.renderIncidentSummaries()}
        </div>
      </div>
    );
  }
}

List.defaultProps = {
  user: null,
};

List.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
};

export default List;
