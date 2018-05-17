import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/Comments/actions';
import Filter from '../Filter/Filter';
import './CommentsList.scss';


class CommentList extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchComments());
	};

	renderComments(data) {
		const handleClick = (event) => {
			console.log('click');
		}

		return (
			<Fragment key={data._id}>
				<div className="row mt-3"></div>
				<div className="row no-gutters">
					<div className="col-sm-2">
						<img src={`${data.image}?s=50`} onClick={handleClick} alt=''></img>
					</div>
					<div className="col-sm-10">
						<div className="email">{data.email}</div>
						<div className="message">{data.message}</div>
					</div>
				</div>
			</Fragment>
		);
	};

	render() {
		return (
			<div className="border">
				<Filter />
				{this.props.comments.map(this.renderComments)}
			</div>
		);
	};
};


const mapStateToProps = (state) => {
	return { comments: state.comments }
}


export default connect(mapStateToProps)(CommentList);