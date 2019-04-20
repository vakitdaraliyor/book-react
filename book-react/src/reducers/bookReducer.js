import {GET_BOOKS, DELETE_BOOK, GET_BOOK} from "../actions/types";

const initialState = {
    books: [],
    oneBook: {}
}

export default function(state = initialState, action){
    switch(action.type){
        
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            };
        
        case DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter(book =>
                    book.id !== action.payload)
            };

        case GET_BOOK:
            return {
                ...state,
                oneBook: action.payload
            }    

        default:
            return state;
    }
}
