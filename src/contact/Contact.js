// contact@hacksoc.com
import React from 'react';


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: '',
      name: '',
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  sendEmail = _ => {
    const email = this.state;


  };

  render() {
    const email = this.state;

    return (
      <div>
        <form>
          <div className="row">
            <div className="form-group col-md-6 col-sm-12">
              <input
                className="form-control"
                name="email"
                onChange={this.handleChange}
                placeholder="Email Address"
                required
                value={email.sender}
              />
            </div>
            <div className="form-group col-md-6 col-sm-12">
              <input
                className="form-control"
                name="name"
                onChange={this.handleChange}
                placeholder="Name (optional)"
                value={email.name}
              />
            </div>
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              onChange={this.handleChange}
              placeholder="Your message"
              required
              value={email.content}
              style={{ width: '100%', height: '150px' }}
            />
          </div>
        </form>

        <button onClick={this.sendEmail}> Send Email </button>
      </div>
    );
  }
}


