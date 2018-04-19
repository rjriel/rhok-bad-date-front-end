import React from 'react';
import PropTypes from 'prop-types';

import BottomNavigation from 'material-ui/BottomNavigation';
import BottomNavigationItem from 'material-ui/BottomNavigation/BottomNavigationItem';
import FontIcon from 'material-ui/FontIcon';

import { views } from './helpers';

const homeIcon = <FontIcon className="material-icons">home</FontIcon>;
const createIcon = <FontIcon className="material-icons">add</FontIcon>;
const listIcon = <FontIcon className="material-icons">list</FontIcon>;
const resourcesIcon = <FontIcon className="material-icons">help</FontIcon>;

const bottomNavStyles = {
  position: 'fixed',
  bottom: 0,
};

const BottomNav = ({ currentView, viewSelector, loggedIn }) => {
  return (
    <BottomNavigation style={bottomNavStyles} selectedIndex={currentView}>
      <BottomNavigationItem
        label="Home"
        icon={homeIcon}
        onClick={() => { viewSelector(views.HOME); }}
      />
      {loggedIn &&
      <BottomNavigationItem
        label="Create"
        icon={createIcon}
        style={null}
        onClick={() => { viewSelector(views.CREATE); }}
      />
      }
      {loggedIn &&
      <BottomNavigationItem
        label="List"
        icon={listIcon}
        color="#FF0000"
        onClick={() => { viewSelector(views.LIST); }}
      />
      }
      <BottomNavigationItem
        label="Resources"
        icon={resourcesIcon}
        onClick={() => { viewSelector(views.RESOURCES); }}
      />
    </BottomNavigation>
  );
};

BottomNav.defaultProps = {
  currentView: 0,
  viewSelector: () => {},
  loggedIn: false,
};

BottomNav.propTypes = {
  currentView: PropTypes.number,
  viewSelector: PropTypes.func,
  loggedIn: PropTypes.bool,
};

export default BottomNav;
