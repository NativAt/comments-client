import { FETCH_COMMENTS} from '../../actions/Comments/types';

export default (state = [], action) => {
	switch(action.type) {
		case FETCH_COMMENTS:
			return action.payload.data;
		default:
			return state;
	}
}