import React from 'react'
import CommentFormBoot from '../containers/CommentFormBoot/CommentFormBoot';
import CommentList from '../containers/CommentsList/CommentsList';
import './App.scss';


const App = () => (
	<div className="container">
	<div className="row mt-3"></div>
	<div className="row mt-3"></div>
		<div className="row">
			<div className="col-sm-5 offset-sm-3">
				<CommentFormBoot />
			</div>
		</div>
		<div className="row">
			<div className="col-sm-5 offset-sm-3">
				<CommentList />
			</div>
		</div>
	</div>
);
  
  
export default App;