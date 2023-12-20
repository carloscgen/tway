import { ActionType } from '../action-types/index';

export interface ISetLoadingAction {
    type: ActionType.SET_LOADING,
    payload: any
}

export interface ISetImageAction {
    type: ActionType.SET_IMAGE,
    payload: any
}

export interface IAddImagesAction {
    type: ActionType.ADD_IMAGES,
    payload: any
}

export interface ISetColorAction {
    type: ActionType.SET_COLOR,
    payload: any
}

export interface ISetFiltersAction {
    type: ActionType.SET_FILTERS,
    payload: any
}

export type ACTION =  IAddImagesAction | ISetColorAction | ISetLoadingAction | ISetFiltersAction | ISetImageAction;