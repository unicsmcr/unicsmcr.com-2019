// Reference: https://www.npmjs.com/package/react-recaptcha
import React from 'react';
import Recaptcha from 'react-recaptcha';
export default class Capcha extends React.Component{
  constructor(props) {
    super(props)
    this.captcha_loaded = this.captcha_loaded.bind(this);
    this.sendEmail_event = this.sendEmail_event.bind(this);
    this.verify_callback = this.verify_callback.bind(this);
    this.current_state = {
      user_verified: false
    }
  }

  captcha_loaded(){
    console.log('Capcha has successfully loaded');
  }

  sendEmail_event(){
    if (this.user_verified == true){
      alert('Email has been sent!');
    }
    else {
      alert('Please verify you are not a robot!');
    }
  }

  verify_callback(response){
    if (response) {
    this.current_state({
      user_verified: true
    });
  }
  }

  render(){
    return(
      <div>
      <h2>Contact Us</h2>
      <input type="text" placeholder="email@company.com" />
      <button onClick={this.sendEmail_event}> Send Email </button>
      <Recaptcha
        sitekey="6LeLm-MUAAAAABy2w5h-0y56ymK24o9yXTQrtr3g"
        render="explicit"
        onloadCallback={this.captcha_loaded}
        verifyCallback={this.verify_callback}
      />
      </div>
    );
  }
}
