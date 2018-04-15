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
      basicIncidents: [
        {
          id: 0,
          user_name: 'string',
          updated: true,
          incident_date: 'string',
          incident_type: [
            [
              'string',
            ],
          ],
          incident_descriptor: 'string',
          car: {
            plate_number: 'string',
            plate_province: 'string',
            model: 'string',
            type: 'string',
            make: 'string',
            extra_details: 'string',
          },
          location: 'string',
          offender_details: {
            name: 0,
            age: 'string',
            gender: 'string',
            hair_colour: 'string',
            hair_style: 'string',
            facial_hair: 'string',
            height: 'string',
            weight: 'string',
            build: 'string',
            clothing: 'string',
            tattoos: 'string',
            scars: 'string',
            smells: 'string',
            accent: 'string',
            skin_colour: 'string',
            eye_colour: 'string',
            facial_description: 'string',
            extra_details: 'string',
            contact_type: 'string',
            contaact_details: 'string',
          },
          incident_description: 'string',
          extra_details: 'string',
          repeat_offender: true,
          incident_report_date: 'string',
          submitter_contact_details: 'string',
          submitter_contact_method: 'string',
          comments: {
            user_name: 'string',
            comment_details: 'string',
          },
        },
      ],
      fullIncidents: [
        {
          id: 0,
          user_name: 'string',
          updated: true,
          incident_date: 'string',
          incident_type: [
            [
              'string',
            ],
          ],
          incident_descriptor: 'string',
          car: {
            plate_number: 'string',
            plate_province: 'string',
            model: 'string',
            type: 'string',
            make: 'string',
            extra_details: 'string',
          },
          location: 'string',
          offender_details: {
            name: 0,
            age: 'string',
            gender: 'string',
            hair_colour: 'string',
            hair_style: 'string',
            facial_hair: 'string',
            height: 'string',
            weight: 'string',
            build: 'string',
            clothing: 'string',
            tattoos: 'string',
            scars: 'string',
            smells: 'string',
            accent: 'string',
            skin_colour: 'string',
            eye_colour: 'string',
            facial_description: 'string',
            extra_details: 'string',
            contact_type: 'string',
            contaact_details: 'string',
          },
          incident_description: 'string',
          extra_details: 'string',
          repeat_offender: true,
          incident_report_date: 'string',
          submitter_contact_details: 'string',
          submitter_contact_method: 'string',
          comments: {
            user_name: 'string',
            comment_details: 'string',
          },
        },
      ],
      // [{
      //   id: 123,
      //   user_name: 'Mark',
      //   updated: true,
      //   incident_date: 'Monday',
      //   incident_type: ['TimeWaster', 'Abuser'],
      //   incident_descriptor: 'My description...',
      //   location: 'Ottawa',
      // },
      // {
      //   id: 123764,
      //   user_name: 'Dave',
      //   updated: true,
      //   incident_date: 'Monday',
      //   incident_type: ['TimeWaster', 'Abuser'],
      //   incident_descriptor: 'My description...',
      //   location: 'Ottawa',
      // },
      // {
      //   id: 1289776653,
      //   user_name: 'Mark',
      //   updated: true,
      //   incident_date: 'Monday',
      //   incident_type: ['TimeWaster', 'Abuser'],
      //   incident_descriptor: 'My description...',
      //   location: 'Ottawa',
      // },
      // {
      //   id: 1278634,
      //   user_name: 'Dave',
      //   updated: true,
      //   incident_date: 'Monday',
      //   incident_type: ['TimeWaster', 'Abuser'],
      //   incident_descriptor: 'My description...',
      //   location: 'Ottawa',
      // },
      // {
      //   id: 15675623,
      //   user_name: 'Mark',
      //   updated: true,
      //   incident_date: 'Monday',
      //   incident_type: ['TimeWaster', 'Abuser'],
      //   incident_descriptor: 'My description...',
      //   location: 'Ottawa',
      // },
      // {
      //   id: 1234534,
      //   user_name: 'Dave',
      //   updated: true,
      //   incident_date: 'Monday',
      //   incident_type: ['TimeWaster', 'Abuser'],
      //   incident_descriptor: 'My description...',
      //   location: 'Ottawa',
      // },
      // {
      //   id: 354435123,
      //   user_name: 'Mark',
      //   updated: true,
      //   incident_date: 'Monday',
      //   incident_type: ['TimeWaster', 'Abuser'],
      //   incident_descriptor: 'My description...',
      //   location: 'Ottawa',
      // },
      // {
      //   id: 123434543,
      //   user_name: 'Dave',
      //   updated: true,
      //   incident_date: 'Monday',
      //   incident_type: ['TimeWaster', 'Abuser'],
      //   incident_descriptor: 'My description...',
      //   location: 'Ottawa',
      // }],
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
          <Divider style={horizontalRuleStyle} /><IncidentSummary incidentSummary={incident} />
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
          {this.getFullIncidents()}
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
