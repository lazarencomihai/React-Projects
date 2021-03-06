import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class extends React.PureComponent{
  constructor(props){
    super(props);

    this.state = {
      isOpen: false
    };
    this.setLinkActive = this.setLinkActive.bind(this);
  }

  setLinkActive(){
    this.props.setLinkStatus('languageTranslator');
  }

  render(){
    return[
      <Button id="Popover-translator"
              className="header-toolbar-link dropdown-toggle"
              onClick={this.setLinkActive}
              onMouseEnter={this.setLinkActive}
              active={this.props.isOpen}
      >
        Launch Popover
      </Button>,
      <Popover placement="bottom"
               isOpen={this.props.isOpen}
               target="Popover-translator"
               toggle={this.props.closeAllPopups}
      >
        <PopoverHeader>
          Popover Title
        </PopoverHeader>
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </PopoverBody>
      </Popover>
    ]
  }
}