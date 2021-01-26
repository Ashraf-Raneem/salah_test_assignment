import Camera from "../../images/camera.png";
import {GET_PRODUCTS} from "./products.types";

const INITIAL_STATE = {
    products : [
        {
            id:1,
            productImg: Camera,
            productName: "Product 1",
            caption : "Proin dapibus eget odio et gravida. Nullam et felis lacinia, molestie nunc sed, tempus ipsum. Vestibulum fermentum,",
            price : 400
        },
        {
            id:2,
            productImg: Camera,
            productName: "Product 2",
            caption : "Proin dapibus eget odio et gravida. Nullam et felis lacinia, molestie nunc sed, tempus ipsum. Vestibulum fermentum,",
            price : 100
        },
        {
            id:3,
            productImg: Camera,
            productName: "Product 3",
            caption : "Proin dapibus eget odio et gravida. Nullam et felis lacinia, molestie nunc sed, tempus ipsum. Vestibulum fermentum,",
            price : 50
        },
        {
            id:4,
            productImg: Camera,
            productName: "Product 4",
            caption : "Proin dapibus eget odio et gravida. Nullam et felis lacinia, molestie nunc sed, tempus ipsum. Vestibulum fermentum,",
            price : 500
        }
    ]
}

export default function (state = INITIAL_STATE, action ){
    switch(action.type){
        case GET_PRODUCTS : 
        return {
            ...state,
            products : state.products
        }
        default:
            return state
    }
}