const initialState = {
    imagesCount: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESET_LOADED_IMAGES_COUNT':
            return {
                ...state,
                imagesCount: initialState.imagesCount
            }
        case 'IMAGE_LOADED':
            return {
                ...state,
                imagesCount: state.imagesCount + 1
            }
        default:
            return state;
    }
}

export default reducer;