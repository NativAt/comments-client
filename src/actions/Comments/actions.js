import axios from 'axios';
import { FETCH_COMMENTS, CREATE_COMMENT } from './types';
import { ROOT_URL } from '../../config';


export function fetchComments(term) {
  return async function(dispatch) {
    let request;
    const URL = term ? `${ROOT_URL}?filter=${term}` : ROOT_URL;
    try {
      request = await axios.get(URL);
    } catch (err) {
        throw err;
    }
    dispatch({
      type: FETCH_COMMENTS,
      payload: request
    })    

    return request;
  }
}

export function createComment(values) {
  return async function(dispatch) {
    let request;
    try {
      request = await axios.post(`${ROOT_URL}`, values);
    } catch (err) {
        throw err;
    }
    dispatch({
      type: CREATE_COMMENT,
      payload: request
    })    

    return request;
  }
}