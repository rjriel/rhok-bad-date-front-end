import React, { Component } from 'react';

class Create {
  state = {
    submitter_id: '', // user id
    updated: false,
    incident_date: null, // date from calendar, timestamp from dropdown
    incident_type: [],
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
  };

  render() {
    return (
      <div>
        <h1>Create</h1>
      </div>
    );
  }
}

export default Create;
