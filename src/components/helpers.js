const views = {
  HOME: 0,
  CREATE: 1,
  LIST: 2,
  RESOURCES: 3,
};

const incidentViews = {
  TYPE: 0,
  DATETIME: 1,
  LOCATION: 2,
  OFFENDER: 3,
  VEHICLE: 4,
  OTHER: 5,
};

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
  },
];

export { views, incidentViews, testIncidents };
