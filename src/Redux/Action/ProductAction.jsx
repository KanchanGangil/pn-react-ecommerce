import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from "../Constants/ProductConstant";
import axios from "axios";

export const getproduct = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST })
        let link = 'http://localhost:4000/api/getallproduct'
        const { data } = await axios.get(link)
        // console.log(data);
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getproductdetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        let link = `http://localhost:4000/api/getallproductdetail/${id}`;
        const { data } = await axios.get(link)
        console.log(data);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}