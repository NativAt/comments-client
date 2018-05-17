import React, { Component } from 'react';
import { connect } from 'react-redux';
import MD5 from 'md5.js';
import { fetchComments, createComment } from '../../actions/Comments/actions';
import './CommentFormBoot.scss';


class CommentFormBoot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
			message: '',
		};
		
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
	}
	
	generateImageUrl = (email) => {
		const processedEmail = email.trim().toLowerCase();
		const hashEmail = new MD5().update(processedEmail).digest('hex');
		const imageUrl = `https://www.gravatar.com/avatar/${hashEmail}`;
		return imageUrl;
	}

  async handleSubmit(event) {
    event.preventDefault();
		const { dispatch } = this.props;
		const image = this.generateImageUrl(this.state.email);
		this.setState({ 
			email: '',
			message: ''
		});
		const response = await dispatch(createComment(Object.assign({ image }, this.state)));
		if (response && response.status === 200) dispatch(fetchComments());
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
	}
	

  render() {
    return(
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<input name="email" type="email" value={this.state.email} className="form-control rounded-0" placeholder="Email" onChange={this.handleChange} required />
				</div>
				<div className="form-group">
					<textarea name="message" type="text" value={this.state.message} className="form-control rounded-0" rows="3" placeholder="Message" onChange={this.handleChange} required />
				</div>
				<button type="submit" className="btn btn-primary float-right">SUBMIT</button>
			</form>
    );
  }
}

export default connect()(CommentFormBoot);