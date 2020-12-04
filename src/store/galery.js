import { galeryApi } from "../api/unsplash.api";

const ADD_IMAGES = "ADD-IMAGES";
const addImagesAC = (images) => ({type: ADD_IMAGES, payload: {images}})



export function galeryReducer(state = {
    images: [],
    page: 1,
    loading: true,
    error: null
}, action) {
    switch(action.type) {
        case ADD_IMAGES:
            return { ...state, images: [...state.images, ...action.payload.images], loading: false, page: state.page + 1}
        default:
            return state;
    }
}

export const getPhotos = (...args) => async dispatch => {
    try {
        const images = await galeryApi.getPhotos(...args);
        dispatch(addImagesAC(images))        
    } catch(e) {
        console.log(e);
    }    
}


