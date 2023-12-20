import { Dispatch } from 'redux';
import { ActionType } from "../action-types";
import { IAddImagesAction, ISetColorAction, ISetFiltersAction, ISetImageAction, ISetLoadingAction } from '../actions';
import { IFilters } from '../reducers/imagesReducer';
import { IImage } from '@/interfaces/images';

export const addImages = (images: IImage[]) => {
    return (dispatch: Dispatch<IAddImagesAction>) => {
        dispatch({
            type: ActionType.ADD_IMAGES,
            payload: images
        })
    }
}

export const setImageDetails = (image: IImage) => {
    return (dispatch: Dispatch<ISetImageAction>) => {
        dispatch({
            type: ActionType.SET_IMAGE,
            payload: image
        })
    }
}

export const setColor = (color: string) => {
    return (dispatch: Dispatch<ISetColorAction>) => {
        dispatch({
            type: ActionType.SET_COLOR,
            payload: color
        })
    }
}

export const setIsLoading = (isLoading: boolean) => {
    return (dispatch: Dispatch<ISetLoadingAction>) => {
        dispatch({
            type: ActionType.SET_LOADING,
            payload: isLoading
        })
    }
}

export const setFilters = (filters: IFilters) => {
    return (dispatch: Dispatch<ISetFiltersAction>) => {
        dispatch({
            type: ActionType.SET_FILTERS,
            payload: filters
        })
    }
}
