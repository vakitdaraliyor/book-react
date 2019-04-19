import axios from "axios";
import {GET_ERRORS, GET_BOOKS, GET_BOOK, DELETE_BOOK} from "./types";

export const addBook = (book, history) => async dispatch => {
   
    try{
        await axios.post("http://localhost:8080/api/book", book);
        history.push("/bookItems");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch(error){
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}; 

export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/book/all")
    dispatch({
        type: GET_BOOKS,
        payload: res.data
    })
};

export const deleteBook = pt_id => async dispatch => {
    if(
        window.confirm(
            `You are deleting book ${pt_id}, this action can not be undone`
        )
    ){
        await axios.delete(`http://localhost:8080/api/book/${pt_id}`);
        dispatch({
            type: DELETE_BOOK,
            payload: pt_id
        })
    }
};

export const getBook = (pt_id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/book/${pt_id}`);
        dispatch({
            type: GET_BOOK,
            payload: res.data
        })
    } catch (error) {
        history.push("/");
    }
};