const initialState = {
    //isLoading: true,
    mrkdownInput: '',
    //mrkdownInputSuccess: false,
    //error: {}
};

export function MarkdownReducer(state = initialState, action) {
    switch (action.type) {
        // case 'SET_MARKDOWN_BEGIN':
        //     return {
        //         ...state,
        //         isLoading: false
        //     };
        case 'SET_MARKDOWN':
            return {
                ...state,
                mrkdownInput: action.markdown
            }
        // case 'SET_MARKDOWN_SUCCESS':
        //     return {
        //         ...state,
        //         mrkdownInputSuccess: true
        //     };
        // case 'SET_MARKDOWN_ERROR':
        //     return {
        //         ...state,
        //         error: action.error
        //     }
        default:
            return state;
    }
};