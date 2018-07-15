import React from 'react';
import CoutryWebsite from './links/CountryWebsite';
import LanguageTranslator from './links/LanguageTranslator';
import ShipTo from './links/ShipTo';
import MobileLink from './links/MobileLink';
import {Button} from 'reactstrap';

class HeaderToolbar extends React.PureComponent{
  constructor(props){
    super(props);

    this.state = {
      isOpen:{
        mobileLink: false,
        shipTo: false,
        languageTranslator: false,
        countryWebsite: false
      }
    }
    this.setLinkStatus = this.setLinkStatus.bind(this);
    this.closeAllPopups = this.closeAllPopups.bind(this);
  }

  setLinkStatus(activeLinkKey){
    this.closeAllPopups();
    console.warn(activeLinkKey);
    this.setState({
      isOpen: {
        [activeLinkKey]: true
      }
    },()=> console.warn(this.state));
  }

  closeAllPopups(){
    console.warn('close')
    this.setState({
      isOpen: {}
    })
  }


  render(){
    return (
      <div className="header-toolbar container col-8 pull-right">
        <MobileLink
        isOpen={this.state.isOpen.mobileLink}
        setLinkStatus={this.setLinkStatus}
        closeAllPopups={this.closeAllPopups}/>
        <ShipTo
        isOpen={this.state.isOpen.shipTo}
        setLinkStatus={this.setLinkStatus}
        closeAllPopups={this.closeAllPopups}/>
        <LanguageTranslator
        isOpen={this.state.isOpen.languageTranslator}
        setLinkStatus={this.setLinkStatus}
        closeAllPopups={this.closeAllPopups}/>
        <Button color="secondary" className="header-toolbar-link"> Support Center</Button>
        <CoutryWebsite
        isOpen={this.state.isOpen.countryWebsite}
        setLinkStatus={this.setLinkStatus}
        closeAllPopups={this.closeAllPopups}/>
      </div>
    )
  }
}

export default HeaderToolbar;