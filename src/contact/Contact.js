// contact@hacksoc.com
import React from 'react';
import './Contact.css';
import stamp from '../assets/stamp.png';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      await fetch('/.netlify/functions/sendgrid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode({ 'form-name': 'contact', ...this.state }),
      });
    } catch (err) {
      console.log("An error has occured");
    }
    console.log("your email has been sent");
    // add something to tell them their qustion has been submitted
  };

  render() {
    const email = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="contact-container">
          <h4 className="contact-text">YOUR EMAIL ADDRESS</h4>
          <div className="row">
            <input
              className="email-input"
              name="email"
              onChange={this.handleChange}
              required
              value={email.email}
            />
          </div>
          <h4 className="contact-text">YOUR NAME (OPTIONAL)</h4>
          <div className="row">
            <input
              className="email-input"
              name="name"
              onChange={this.handleChange}
              value={email.name}
            />
          </div>
          <h4 className="contact-text">MESSAGE</h4>
          <div className="row">
            <textarea
              className="email-input"
              name="content"
              onChange={this.handleChange}
              required
              value={email.content}
              style={{ height: '150px' }}
            />
          </div>

          <div className="btn-contact-container">
            <button type="submit" className="btn btn-secondary btn-contact"> Send Email →</button>
          </div>
          
        </form>
        <div class="stamp-img">
          <img src={stamp} alt="Gallery Folder" style={{ width:"150px" }}/>
        </div>
      </div>
    );
  }
}


