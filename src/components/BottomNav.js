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

const BottomNav = ({ currentView, viewSelector }) => {
  return (
    <BottomNavigation style={bottomNavStyles} selectedIndex={currentView}>
      <BottomNavigationItem
        label="Home"
        icon={homeIcon}
        onClick={() => { viewSelector(views.HOME); }}
      />
      <BottomNavigationItem
        label="Create"
        icon={createIcon}
        onClick={() => { viewSelector(views.CREATE); }}
      />
      <BottomNavigationItem
        label="List"
        icon={listIcon}
        onClick={() => { viewSelector(views.LIST); }}
      />
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
};

BottomNav.propTypes = {
  currentView: PropTypes.number,
  viewSelector: PropTypes.func,
}

export default BottomNav;
