import { combineReducers } from 'redux';
import { MarkdownReducer } from './reducers/markdownReducer';

export default combineReducers({
    markdown: MarkdownReducer 
});
