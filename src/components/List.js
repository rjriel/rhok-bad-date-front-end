import { TextField, Checkbox, Divider } from 'material-ui';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SortDropDownMenu from './SortDropDownMenu';
import BasicIncident from './BasicIncident';
import FullIncident from './FullIncident';

const listStyle = {
  width: '90vw',
  height: '90vh',
  maxWidth: '600px',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
};

const incidentResultStyle = {
  overflow: 'auto',
  maxHeight: '60vh',
  width: '100%',

};

const headerStyle = {
  maxHeight: '24vh',
};

const separatorStyle = {
  marginTop: '30px',
  backgroundColor: 'rgb(0, 188, 212)',
};

const horizontalRuleStyle = {
  marginTop: '20px',
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

  componentWillMount = () => {
    this.getIncidentSummaries(this.state.checked);
  }

  componentWillUpdate = (nextProps, nextState) => {
    const { checked } = this.state;
    if (checked !== nextState.checked) {
      this.getIncidentSummaries(nextState.checked);
    }
  }

  getIncidentSummaries = (isPrivate) => {
    const { user } = this.props;
    const { username, id } = user;
    const publicProp = !isPrivate ? '/public' : '';
    console.log('GET SUMMARIES', publicProp);
    axios.get(`https://a7v59dsb4l.execute-api.ca-central-1.amazonaws.com/UAT/incident${publicProp}?username=${username}&authorization=${id}`)
      .then(({ data }) => {
        if (isPrivate) {
          this.setState({
            fullIncidents: data,
          });
        } else {
          this.setState({
            basicIncidents: data,
          });
        }
      });
  }

  updateCheck = () => {
    if (this.state) {
      console.log('Checkmark is now', !this.state.checked);
      this.setState({ checked: !this.state.checked });
    }
  }

  renderFullIncidents = () => {
    console.log(this.state.fullIncidents);
    const filtered = this.state.fullIncidents.filter((incident) => {
      return JSON.stringify(incident).includes(this.state.searchTerm);
    });
    return filtered.map((incident) => {
      return (
        <div key={incident.incident_id}>
          <Divider style={horizontalRuleStyle} /><FullIncident fullIncident={incident} />
        </div>
      );
    });
  }

  renderBasicIncidents = () => {
    console.log(this.state.basicIncidents);
    const filtered = this.state.basicIncidents.filter((incident) => {
      return JSON.stringify(incident).includes(this.state.searchTerm);
    });
    return filtered.map((incident) => {
      return (
        <div key={Math.random()}>
          <Divider style={horizontalRuleStyle} /><BasicIncident basicIncident={incident} />
        </div>
      );
    });
  }

  render() {
    // const { } = this.state;
    return (
      <div style={listStyle}>
        <div style={headerStyle}>
          <h1 style={{ marginTop: 0, marginBottom: 5 }}>Reported Incidents</h1>
          <div>
            <span style={searchLabelStyle}>Search:</span>
            <TextField
              label="Search"
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
          {this.state.checked ? this.renderFullIncidents() : this.renderBasicIncidents()}
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
