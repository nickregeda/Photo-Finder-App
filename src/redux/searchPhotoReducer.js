import {searchPhotosApi} from "../DAL/api/api";

const SET_PHOTOS = 'SET_PHOTOS'
const SET_TOTAL_PHOTOS_COUNT = 'SET_TOTAL_PHOTOS_COUNT';
const SET_TOTAL_PAGES_COUNT = 'SET_TOTAL_PAGES_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
    photos: [],
    totalPhotosCount: 0,
    totalPagesCount: 0,
    pageSize: 10,
    currentPage: 1,
}

const searchPhotoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS:
            return {
                ...state,
                photos: action.photos,
            }
        case SET_TOTAL_PHOTOS_COUNT:
            return {
                ...state,
                totalPhotosCount: action.totalPhotosCount
            }
        case SET_TOTAL_PAGES_COUNT:
            return {
                ...state,
                totalPagesCount: action.totalPagesCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state;
    }
}

export default searchPhotoReducer;

//actionCreators
export const setPhotos = (photos) => ({type: SET_PHOTOS, photos})
export const setTotalPagesCount = (totalPagesCount) => ({type: SET_TOTAL_PAGES_COUNT, totalPagesCount})
export const setTotalPhotosCount = (totalPhotosCount) => ({type: SET_TOTAL_PHOTOS_COUNT, totalPhotosCount})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})

//thunkCreators
export const getPhotos = (query, page, perPage) => {
    return (dispatch) => {
        searchPhotosApi.getPhotos(query, page, perPage).then(
            response => {
                dispatch(setPhotos(response.results))
                dispatch(setTotalPhotosCount(response.total))
                dispatch(setTotalPagesCount(response.total_pages))
            }
        )
    }
}