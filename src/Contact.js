// contact@hacksoc.com
import React from 'react';


export default class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipient: 'ayeshakhtar24@gmail.com',
			sender: '',
			name: '',
			subject: 'UniCS Contact Form',
			text: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.sendEmail = this.sendEmail.bind(this);
		}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}
	sendEmail = _ => {
		const email = this.state;
		fetch(`http://127.0.0.1:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
			.catch(err => console.error(err))
	}

  	render() {
		const email = this.state;

		return (
		<div>
			<h2>Contact Us</h2>
			<input
				name="email"
				onChange={this.handleChange}
				placeholder="Email Address"
				required
				value={email.sender}
			/>
			
			<input
				name="name"
				onChange={this.handleChange}
				placeholder="Name (optional)"
				value={email.name}
			/>

			<textarea
				name="message"
				onChange={this.handleChange}
				placeholder="Your message"
				required
				value={email.text}
				style={{width: '100%', height: '150px'}}
			/>

			<button onClick={this.sendEmail}> Send Email </button>

		</div>
		);
  }
}



// export default class Contact extends React.Component {
//   constructor(props) {
// 	super(props);
// 	this.state = {message: '', name: '', email: '' };
// 	this.handleChange = this.handleChange.bind(this);
// 	this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
// 	return (
//   	<form>
//     	<h1>Contact Us</h1>
//     	<div>
// 			<input
// 				name="email"
// 				onChange={this.handleChange}
// 				placeholder="Email Address"
// 				required
// 				value={this.state.email}
// 			/>
// 			<input
// 				name="name"
// 				onChange={this.handleChange}
// 				placeholder="Name (optional)"
// 				value={this.state.name}
// 			/>
// 			<textarea
// 				name="message"
// 				onChange={this.handleChange}
// 				placeholder="Your message"
// 				required
// 				value={this.state.message}
// 				style={{width: '100%', height: '150px'}}
// 			/>
//     	</div>
//     	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
//   	</form>
// 	)
//   }

//   handleChange(event) {
// 	// this.setState({message: event.target.value})
// 	const target = event.target;
// 	// const value = target.type === 'checkbox' ? target.checked : target.value;
// 	const value = target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   handleSubmit (event) {
// 	const templateId = 'unics';
// 	this.sendFeedback(templateId, {message: this.state.message, name: this.state.name, email: this.state.email})
//   }

//   sendFeedback (templateId, variables) {
// 	window.emailjs.send(
//   	'gmail', templateId,
//   	variables
//   	).then(res => {
//     	console.log('Email successfully sent!')
//   	})
//   	// Handle errors here however you like, or use a React error boundary
//   	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
//   }
// }