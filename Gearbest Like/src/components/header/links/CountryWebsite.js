import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class extends React.PureComponent{
  constructor(props){
    super(props);

    this.state = {
      isOpen: false
    };
    this.setLinkActive = this.setLinkActive.bind(this);
  }

  setLinkActive(){
    this.props.setLinkStatus('countryWebsite');
  }

  render(){
    return(
      <ButtonDropdown onMouseEnter={this.setLinkActive}
                      toggle={this.props.closeAllPopups}
                      isOpen={this.props.isOpen}
      >
        <DropdownToggle caret className="header-toolbar-link">
          Website Country
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Choose Your Country!</DropdownItem>
          <DropdownItem disabled>England</DropdownItem>
          <DropdownItem>Romanian</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Russian</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

