import React, { Component } from 'react';
import _ from 'lodash';
import {
  DatePicker,
  RaisedButton,
  TextField,
  DropDownMenu,
  MenuItem,
  SelectField,
} from 'material-ui';
import { incidentViews } from './helpers';

const containerStyle = {
  width: '90vw',
  maxWidth: '600px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const stepContainerStyles = {
  margin: '10px 10px 60px',
};

const buttonStyles = {
  width: '75%',
  maxWidth: '400px',
  display: 'flex',
  justifyContent: 'space-between',
};

const headerStyles = {
  margin: '10px',
};

const types = [
  'Theft',
  'Harassment',
  'Creepy',
  'Physical Assault',
  'Sexual Assault',
  'Other',
];


class Create extends Component {
  state = {
    currentView: 0,
    incident: {
      submitter_id: '', // user id
      updated: false,
      incident_date: null, // date from calendar, timestamp from dropdown
      incidentType: [], // incident_type
      incident_descriptor: [],
      car: {
        plate_number: '',
        plate_province: '',
        model: '',
        type: '',
        make: '',
        extra_details: '',
      },
      location: '',
      offender: {
        name: '',
        age: '',
        gender: '',
        hair_colour: '',
        hair_style: '',
        facial_hair: '',
        height: '',
        weight: '',
        build: '',
        clothing: '',
        tattoos: '',
        scars: '',
        smell: '',
        accent: '',
        skin_colour: '',
        eye_colour: '',
        facial_description: '',
        extra_details: '',
        contact_type: '',
        contact_detail: '',
      },
      incident_description: '',
      extra_details: '',
      repeat_offender: false,
      submitter_contact_method: '',
      submitter_contact_detail: '',
      comments: [],
      public_incident_description: '',
    },
  };

  setNext = () => {
    const current = this.state.currentView;
    const totalSteps = _.keys(incidentViews).length;
    if (current === totalSteps - 1) return;
    this.setState({
      currentView: current + 1,
    });
  };

  setPrevious = () => {
    const current = this.state.currentView;
    if (current === 0) return;
    this.setState({
      currentView: current - 1,
    });
  };

  incidentUpdate = (field, value) => {
    console.log(field, value);
    this.setState({
      incident: {
        ...this.state.incident,
        [field]: value,
      },
    });
  };

  renderIncidentType = () => {
    const { currentView, incident: { incidentType } } = this.state;
    if (currentView !== incidentViews.TYPE) return null;

    return (
      <div id="type">
        <div>What type of incident occured?</div>
        <SelectField
          multiple
          hintText="Select the applicable types"
          value={incidentType}
          onChange={(event, index, values) => { this.incidentUpdate('incidentType', values); }}
        >
          {this.renderIncidentTypeItems(incidentType)}
        </SelectField>
      </div>
    );
  };

  renderIncidentTypeItems = (values) => {
    return types.map(type => (
      <MenuItem
        key={type}
        insetChildren
        checked={values && values.indexOf(type) > -1}
        value={type}
        primaryText={type}
      />
    ));
  }

  renderIncidentDateTime = () => {
    const { currentView } = this.state;
    if (currentView !== incidentViews.DATETIME) return null;
    return currentView === incidentViews.DATETIME && <div id="datetime">Date and time</div>;
  };

  renderIncidentLocation = () => {
    const { currentView } = this.state;
    if (currentView !== incidentViews.LOCATION) return null;
    return (
      <div id="location">
        <TextField
          hintText="Hint Text"
          floatingLabelText="Where did this incident occur?"
        />
      </div>
    );
  };

  renderIncidentOffender = () => {
    const { currentView } = this.state;
    if (currentView !== incidentViews.OFFENDER) return null;
    return currentView === incidentViews.OFFENDER && <div id="offender">Offender</div>;
  };

  renderIncidentVehicle = () => {
    const { currentView } = this.state;
    if (currentView !== incidentViews.VEHICLE) return null;
    return currentView === incidentViews.VEHICLE && <div id="vehicle">Vehicle</div>;
  };

  renderIncidentOther = () => {
    const { currentView } = this.state;
    if (currentView !== incidentViews.OTHER) return null;
    return currentView === incidentViews.OTHER && <div id="other">Other Notes</div>;
  };

  renderSuccess = () => {
    const { currentView } = this.state;
    if (currentView !== incidentViews.SUCCESS) return null;
    return currentView === incidentViews.SUCCESS && <div id="success">Successfully Reported</div>;
  };

  render() {
    const { currentView } = this.state;
    const totalSteps = _.keys(incidentViews).length;
    return (
      <div style={containerStyle}>
        <h1 style={headerStyles}>New Incident</h1>
        <div>Step {currentView + 1} of {totalSteps}</div>

        <div style={stepContainerStyles}>
          { this.renderIncidentType() }
          { this.renderIncidentDateTime() }
          { this.renderIncidentLocation() }
          { this.renderIncidentOffender() }
          { this.renderIncidentVehicle() }
          { this.renderIncidentOther() }
          { this.renderSuccess() }
        </div>

        <div style={buttonStyles}>
          <RaisedButton primary onClick={() => this.setPrevious()} >Back</RaisedButton>
          <RaisedButton primary onClick={() => this.setNext()}>Next</RaisedButton>
        </div>
      </div>
    );
  }
}

export default Create;
