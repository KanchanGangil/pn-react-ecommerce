import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO
} from '../Constants/CartConstant'
import axios from 'axios'

export const addItemsToCart = (id, quantity) => async (dispatch) => {
    let link = `http://localhost:4000/api/getallproductdetail/${id}`
    const { data } = await axios.get(link)
    // console.log(data);
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.image.url,
            stock: data.product.stock,
            quantity,
        },

    })
}