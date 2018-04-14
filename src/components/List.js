import { TextField, Checkbox, Divider } from 'material-ui';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SortDropDownMenu from './SortDropDownMenu';
import IncidentSummary from './IncidentSummary';

const listStyle = {
  margin: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
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
      incidentSummaries: [{ name: 'harry' }, { name: 'john' }],
    };
  }
  getIncidentSummaries = () => {
    return this.state.incidentSummaries.map(() => {
      return (<div><Divider style={horizontalRuleStyle} /><IncidentSummary /></div>);
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
        <div>
          {this.getIncidentSummaries()}
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
