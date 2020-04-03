// contact@hacksoc.com
import React from 'react';
import Reaptcha from 'reaptcha';

import './Contact.css';
import stamp from '../assets/stamp.png';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      content: '',
      token: '',
      verified: false,
    };

    this.captcha = null;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onVerify = (token) => {
    this.setState({ token, verified: true });
  };

  submitForm = async (e) => {
    e.preventDefault();
    if (this.captcha) {
      try {
        await this.captcha.execute();
      } catch (err) {
        console.log('Failed Captcha');
      }
      console.log(this.state);
      if (this.state.verified) this.submit();
    }
  };

  async submit() {
    try {
      await fetch('/.netlify/functions/sendgrid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode({
          'form-name': 'contact',
          'g-recaptcha-response': this.state.token,
          email: this.state.email,
          name: this.state.name,
          content: this.state.content,
        }),
      });
    } catch (err) {
      console.log('An error has occured');
    }
    console.log('your email has been sent');
  }

  render() {
    const { email, name, content } = this.state;

    return (
      <div>
        <form onSubmit={this.submitForm} className="contact-container">
          <h4 className="contact-text">EMAIL ADDRESS</h4>
          <div className="row">
            <input
              className="email-input"
              name="email"
              onChange={this.handleChange}
              required
              value={email}
            />
          </div>
          <h4 className="contact-text">NAME (OPTIONAL)</h4>
          <div className="row">
            <input
              className="email-input"
              name="name"
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <h4 className="contact-text">MESSAGE</h4>
          <div className="row">
            <textarea
              className="email-input"
              name="content"
              onChange={this.handleChange}
              value={content}
              style={{ height: '150px' }}
              required
            />
          </div>

          {/* Include the captcha for the form */}
          <Reaptcha
            ref={(e) => (this.captcha = e)}
            sitekey={process.env.REACT_APP_SITE_RECAPTCHA_KEY}
            onVerify={this.onVerify}
            size="invisible"
          />

          <div className="btn-contact-container">
            <button type="submit" className="btn btn-secondary btn-contact">
              Send Email
            </button>
          </div>
        </form>
        <div className="stamp-img">
          <img src={stamp} alt="Bee stamp" style={{ width: '150px' }} />
        </div>
      </div>
    );
  }
}
