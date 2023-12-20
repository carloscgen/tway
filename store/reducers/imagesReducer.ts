import { IImage } from '@/interfaces/images';
import { ActionType } from '../action-types';
import { ACTION } from '../actions'


export interface IFilters {
    section: string,
    sort: string,
    window: string,
    viralImages: boolean
}
export interface IStoreData {
    images: IImage[],
    image: IImage,
    headerColor: string,
    isLoading: boolean,
    filters: IFilters,
}

export const imagesReducer = (state: IStoreData = {
    images: [],
    image: {},
    headerColor: '#7e7d936e',
    isLoading: false,
    filters: {
        section: 'hot',
        sort: 'viral',
        window: 'day',
        viralImages: true
    }
}, action: ACTION) => {
    switch (action.type) {
        case ActionType.SET_IMAGE:
            return { ...state, image: action.payload };
        case ActionType.ADD_IMAGES:
            return { ...state, images: [...action.payload] };
        case ActionType.SET_COLOR:
            return { ...state, headerColor: action.payload };
        case ActionType.SET_LOADING:
            return { ...state, isLoading: action.payload };
        case ActionType.SET_FILTERS:
            return { ...state, filters: action.payload };
        default:
            return state;
    }
}
