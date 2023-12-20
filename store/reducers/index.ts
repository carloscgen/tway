import { combineReducers } from 'redux';
import { imagesReducer } from '../reducers/imagesReducer';

export const reducers = combineReducers({
    storeImages: imagesReducer
})

export type State = ReturnType<typeof reducers>