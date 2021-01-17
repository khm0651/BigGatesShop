import { combineReducers} from "redux";
import user from './user';
import post from './post';

const rootReucer =combineReducers( {
    user,
    post,
});

export default rootReucer;