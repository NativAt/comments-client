import React, { Component } from 'react';
import { fetchComments } from '../../actions/Comments/actions';
import { connect } from 'react-redux';
import './Filter.scss';


class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
    const { dispatch } = this.props;
    dispatch(fetchComments(event.target.value));
  }

  render() {
    return(
      <div className="row no-gutters"> 
        <div className="col-sm-12">
          <form>
            <div className="form-group">
              <input type="text" value={this.state.term} className="form-control fontAwesome rounded-0" placeholder="&#xF002;" onChange={this.handleChange} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Filter);