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
      captchaReady: false,
      submitted: false,
      error: false,
    };

    this.captcha = null;
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onLoad = () => this.setState({ captchaReady: true });
  onVerify = (token) => this.setState({ token, verified: true });

  submitForm = async (e) => {
    e.preventDefault();
    try {
      await this.captcha.renderExplicitly();
      await this.captcha.execute();
    } catch (err) {
      console.log('Failed captcha with err' + err);
    }
    if (this.state.verified) this.submit();
  };

  async submit() {
    let isError = false;
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
      isError = true;
    }
    this.setState({
      error: isError,
      submitted: true,
    });
  }

  render() {
    const { email, name, content, submitted, error } = this.state;

    return (
      <div>
        <div className={`form-alert ${!submitted ? 'hide' : null}`}>
          {submitted && !error ? (
            <p>Thank you, the form has been submitted</p>
          ) : (
            <p className="failed">
              An error has occured while submitting the form
            </p>
          )}
        </div>

        <form
          className={`contact-container ${submitted && !error ? 'hide' : null}`}
        >
          <h4 className="contact-text">Your Email</h4>
          <div className="row">
            <input
              className="email-input"
              name="email"
              onChange={this.handleChange}
              required
              value={email}
            />
          </div>
          <h4 className="contact-text">Name (Optional)</h4>
          <div className="row">
            <input
              className="email-input"
              name="name"
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <h4 className="contact-text">Message</h4>
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
          <div className="row">
            <Reaptcha
              ref={(e) => (this.captcha = e)}
              sitekey={process.env.REACT_APP_SITE_RECAPTCHA_KEY}
              onVerify={this.onVerify}
              onLoad={this.onLoad}
              theme="dark"
              size="normal"
              explicit
            />
          </div>

          <div className="btn-contact-container">
            <button
              onClick={this.submitForm}
              type="submit"
              className="btn btn-secondary btn-contact"
              disabled={this.state.recaptchaReady}
            >
              Send Email
            </button>
          </div>
        </form>
        <div className="stamp-img">
          <img src={stamp} alt="Bee stamp" style={{ width: '100%' }} />
        </div>
      </div>
    );
  }
}
