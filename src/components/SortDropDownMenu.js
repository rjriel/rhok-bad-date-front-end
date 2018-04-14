import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class SortDropDownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Date" />
          <MenuItem value={2} primaryText="Location" />
          <MenuItem value={3} primaryText="Type" />
          <MenuItem value={4} primaryText="License Plate" />
        </DropDownMenu>
      </div>
    );
  }
}
