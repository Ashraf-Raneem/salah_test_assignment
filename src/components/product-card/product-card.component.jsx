import React from "react"
import "./product-card.styles.css"

import {connect} from "react-redux";
import {addToCart} from "../../redux/cart/cart.actions";

const ProductCard = ({product,addToCart}) => {
    const add = (product) => {
        addToCart(product);
        window.alert("Item has been added to cart")
    }
    return(
        <div className='productCardContainer'>
            <img className='productCardImg' src={product.productImg}></img>
            <div className='productCardGrid'>
                <div className='productText'>
                    <p>{product.productName}</p>
                    <p>$ {product.price}</p>
                </div>
                <div>
                    <p className='addCartBtn' onClick={()=> add(product)}>Add to cart</p>
                </div>
            </div>
        </div>
    )
}
export default connect(null, {addToCart})(ProductCard)