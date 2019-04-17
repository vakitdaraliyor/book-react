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