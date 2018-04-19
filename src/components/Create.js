import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  DatePicker,
  RaisedButton,
  TextField,
  MenuItem,
  SelectField,
  Checkbox,
  CircularProgress,
  FontIcon,
} from 'material-ui';
import axios from 'axios';
import { incidentViews } from './helpers';

const containerStyle = {
  width: '90vw',
  maxWidth: '600px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const errorStyles = {
  color: '#f36868',
  textAlign: 'center',
  marginBottom: '20px',
};

const stepContainerStyles = {
  margin: '10px 10px 60px',
};

const columnStyle = {
  maxWidth: '45%',
  float: 'left',
  margin: '5px',
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

const successStyle = {
  margin: 10,
  fontSize: 72,
  width: 72,
  color: 'green',
};

const types = [
  'Theft',
  'Harassment',
  'Creepy',
  'Physical Assault',
  'Sexual Assault',
  'Other',
];

const times = [
  { display: '12am-6am', value: 0 },
  { display: '6am-12noon', value: 6 },
  { display: '12noon-6pm', value: 12 },
  { display: '6pm-12am', value: 18 },
];

const initialDate = new Date();
initialDate.setHours(0);
initialDate.setMinutes(0);
initialDate.setSeconds(0);
initialDate.setMilliseconds(0);

class Create extends Component {
  state = {
    errorMessage: '',
    currentView: 0,
    loading: false,
    dateTime: {
      date: initialDate,
      time: 0,
    },
    incident: {
      submitter_id: '', // user id
      updated: false,
      incidentDate: initialDate, // date from calendar, timestamp from dropdown
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
    if (current === totalSteps - 1) {
      this.submitIncident();
    }

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
    if (field === 'date' || field === 'time') {
      let currentField = field;
      const { incidentDate } = this.state.incident;
      let currentValue = value;
      currentField = 'incidentDate';
      if (field === 'date') {
        currentValue.setHours(incidentDate.getHours());
      } else {
        currentValue = new Date(incidentDate);
        currentValue.setHours(value);
      }

      this.setState({
        incident: {
          ...this.state.incident,
          [currentField]: currentValue,
        },
        dateTime: {
          ...this.state.dateTime,
          [field]: value,
        },
      });
    } else {
      this.setState({
        incident: {
          ...this.state.incident,
          [field]: value,
        },
      });
    }
  };

  incidentOffenderUpdate = (field, value) => {
    this.setState({
      incident: {
        ...this.state.incident,
        offender: {
          ...this.state.incident.offender,
          [field]: value,
        },
      },
    });
  };

  incidentVehicleUpdate = (field, value) => {
    this.setState({
      incident: {
        ...this.state.incident,
        car: {
          ...this.state.incident.car,
          [field]: value,
        },
      },
    });
  };

  submitIncident = () => {
    const { incident } = this.state;
    const { user } = this.props;
    if (!user) return;

    const { username, id } = user;
    this.setState({
      loading: true,
    });

    axios.post(
      `https://a7v59dsb4l.execute-api.ca-central-1.amazonaws.com/UAT/incident?username=${username}&authorization=${id}`,
      incident,
    ).then(({ data }) => {
      if (data) {
        this.setState({
          loading: false,
          currentView: incidentViews.SUCCESS,
        });
      } else {
        this.setState({
          errorMessage: 'Error submitting your incident',
        });
      }
    });
    //   this.setState({
    //     loading: false,
    //     currentView: incidentViews.SUCCESS,
    //   });
    // });
  }

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

  renderIncidentTimes = () => {
    return times.map(time => (
      <MenuItem
        key={time.display}
        insetChildren
        value={time.value}
        primaryText={time.display}
      />
    ));
  }

  renderIncidentDateTime = () => {
    const { currentView, incident: { incidentDate }, dateTime } = this.state;
    if (currentView !== incidentViews.DATETIME) return null;
    return (
      <div id="datetime">
        <div>When did this incident occur?</div>
        <DatePicker
          style={{ color: '#fff !important' }}
          hintText="Date"
          value={incidentDate}
          onChange={(event, value) => { this.incidentUpdate('date', value); }}
        />
        <SelectField
          hintText="Time"
          value={dateTime.time}
          onChange={(event, index, values) => { this.incidentUpdate('time', values); }}
        >
          {this.renderIncidentTimes(dateTime.time)}
        </SelectField>
      </div>
    );
  };

  renderIncidentLocation = () => {
    const { currentView, incident: { location } } = this.state;
    if (currentView !== incidentViews.LOCATION) return null;
    return (
      <div id="location">
        <div>Where did this incident occur?</div>
        <TextField
          value={location}
          hintText="Enter location"
          floatingLabelText="Where did this incident occur?"
          onChange={(event, value) => { this.incidentUpdate('location', value); }}
        />
      </div>
    );
  };

  renderIncidentOffender = () => {
    const { currentView, incident: { offender } } = this.state;
    if (currentView !== incidentViews.OFFENDER) return null;
    return currentView === incidentViews.OFFENDER &&
      <div id="offender">
        <p style={{ textAlign: 'center' }}>Who was the aggressor?</p>
        <div style={columnStyle}>
          <TextField
            hintText="Enter age"
            floatingLabelText="Age"
            fullWidth
            value={offender.age}
            onChange={(event, value) => { this.incidentOffenderUpdate('age', value); }}
          />
          <TextField
            hintText="Enter height"
            floatingLabelText="Height"
            fullWidth
            value={offender.height}
            onChange={(event, value) => { this.incidentOffenderUpdate('height', value); }}
          />
          <TextField
            hintText="Enter weight"
            floatingLabelText="Weight"
            fullWidth
            value={offender.weight}
            onChange={(event, value) => { this.incidentOffenderUpdate('weight', value); }}
          />
          <TextField
            hintText="Enter build"
            floatingLabelText="Build"
            fullWidth
            value={offender.build}
            onChange={(event, value) => { this.incidentOffenderUpdate('build', value); }}
          />
        </div>
        <div style={columnStyle}>
          <TextField
            hintText="Enter hair colour"
            floatingLabelText="Hair colour"
            fullWidth
            value={offender.hair_colour}
            onChange={(event, value) => { this.incidentOffenderUpdate('hair_colour', value); }}
          />
          <TextField
            hintText="Enter facial hair"
            floatingLabelText="Facial hair"
            fullWidth
            value={offender.facial_hair}
            onChange={(event, value) => { this.incidentOffenderUpdate('facial_hair', value); }}
          />
          <TextField
            hintText="Enter skin colour"
            floatingLabelText="Race/Skin colour"
            fullWidth
            value={offender.skin_colour}
            onChange={(event, value) => { this.incidentOffenderUpdate('skin_colour', value); }}
          />
          <TextField
            hintText="Tattoos"
            floatingLabelText="Tattoos"
            fullWidth
            value={offender.tattoos}
            onChange={(event, value) => { this.incidentOffenderUpdate('tattoos', value); }}
          />
        </div>
      </div>;
  };

  renderIncidentVehicle = () => {
    const { currentView, incident: { car } } = this.state;
    if (currentView !== incidentViews.VEHICLE) return null;
    return currentView === incidentViews.VEHICLE &&
    <div id="vehicle" style={{ textAlign: 'center' }}>
      <p style={{ marginBottom: -10 }} >What were they driving?</p>
      <div>
        <TextField
          hintText="Enter make"
          floatingLabelText="Make"
          value={car.make}
          onChange={(event, value) => { this.incidentVehicleUpdate('make', value); }}
        />
        <TextField
          hintText="Enter model"
          floatingLabelText="Model"
          value={car.model}
          onChange={(event, value) => { this.incidentVehicleUpdate('model', value); }}
        />
        <TextField
          hintText="Enter type"
          floatingLabelText="Type"
          value={car.type}
          onChange={(event, value) => { this.incidentVehicleUpdate('type', value); }}
        />
        <TextField
          hintText="Enter plate number"
          floatingLabelText="Plate number"
          value={car.plate_number}
          onChange={(event, value) => { this.incidentVehicleUpdate('plate_number', value); }}
        />
        <TextField
          hintText="Enter plate province"
          floatingLabelText="Plate province"
          value={car.plate_province}
          onChange={(event, value) => { this.incidentVehicleUpdate('plate_province', value); }}
        />
      </div>
    </div>;
  };

  renderIncidentOther = () => {
    const { currentView, loading, incident: { extra_details: extraDetails } } = this.state;
    if (currentView !== incidentViews.OTHER) return null;
    return currentView === incidentViews.OTHER &&
      <div id="other">
        <p>Anything else?</p>
        <TextField
          hintText="Other details"
          floatingLabelText="Other details"
          multiLine
          rows={4}
          value={extraDetails}
          onChange={(event, value) => { this.incidentUpdate('extra_details', value); }}
        />
        <Checkbox
          label="Do you want to us to contact you?"
          style={{ marginTop: 20 }}
        />
        { loading &&
        <div id="spinner" style={{ marginTop: 20, textAlign: 'center' }}>
          <CircularProgress />
        </div>
        }
      </div>;
  };

  renderSuccess = () => {
    const { currentView } = this.state;
    if (currentView !== incidentViews.SUCCESS) return null;
    return currentView === incidentViews.SUCCESS &&
    <div id="success" style={{ textAlign: 'center' }}>
      Successfully Reported
      <br />
      <FontIcon
        className="material-icons"
        style={successStyle}
      >check circle
      </FontIcon>
      <p>Thank you for helping make our community safer.</p>
    </div>;
  };

  render() {
    const { currentView, errorMessage } = this.state;
    const totalSteps = _.keys(incidentViews).length;
    const isLast = currentView === totalSteps - 1;
    const isFirst = currentView === 0;
    const invisibleStyle = {
      visibility: 'hidden',
    };

    const nextText = isLast ? 'Submit' : 'Next';
    return (
      <div style={containerStyle}>
        <h1 style={headerStyles}>New Incident</h1>
        {
          (currentView !== incidentViews.SUCCESS) &&
          <div>Step {currentView + 1} of {totalSteps}</div>
        }

        <div style={stepContainerStyles}>
          {this.renderIncidentType()}
          {this.renderIncidentDateTime()}
          {this.renderIncidentLocation()}
          {this.renderIncidentOffender()}
          {this.renderIncidentVehicle()}
          {this.renderIncidentOther()}
          {this.renderSuccess()}
        </div>
        { errorMessage && <div style={errorStyles}>{errorMessage}</div>}
        {
          (currentView !== incidentViews.SUCCESS) &&
          <div style={buttonStyles}>
            <RaisedButton
              style={isFirst && invisibleStyle}
              primary
              onClick={() => this.setPrevious()}
            >Back
            </RaisedButton>
            <RaisedButton primary onClick={() => this.setNext()}>{nextText}</RaisedButton>
          </div>
        }
      </div>
    );
  }
}

Create.defaultProps = {
  user: null,
};

Create.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
};

export default Create;
