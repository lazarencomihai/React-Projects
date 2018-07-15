import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class extends React.PureComponent{
  constructor(props){
    super(props);

    this.state = {}

    this.setLinkActive = this.setLinkActive.bind(this);
  }

  setLinkActive(){
    this.props.setLinkStatus('mobileLink');
  }

  render(){
    return[
      <Button id="PopoverMobileLink"
              className="header-toolbar-link dropdown-toggle"
              onClick={this.setLinkActive}
              onMouseEnter={this.setLinkActive}
      >
        Save BIG with our app!
      </Button>,
      <Popover
        placement="bottom"
        isOpen={this.props.isOpen}
        target="PopoverMobileLink"
        toggle={this.props.closeAllPopups}
      >
        <PopoverHeader>
          Download our Cool FREE App!
        </PopoverHeader>
        <PopoverBody>
          <div className="col-12"> Enjoy App-EXCLUSIVE Deals </div>
          <div className="row">
            <div className="col-6"> 1 block</div>
            <div className="col-6">
              <img className="" src="" width="50px" height="30px"/>
              <img className="" src="" width="50px" height="30px"/>
            </div>
          </div>
        </PopoverBody>
      </Popover>
    ]
  }
}