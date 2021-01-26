import React from "react"
import "./cart-page.styles.css"

import {Button} from 'reactstrap'
import {connect} from "react-redux"
import {reduceItem, addToCart} from "../../redux/cart/cart.actions";
import Footer from "../../components/footer/footer.component";

const CartPage = ({cart, addToCart, reduceItem}) => {
    const {cartItems, total} = cart
    return(
        <div className='cartPageContainer'>
            <div className='cartPageHeader'>
                <h3>1. Shopping Cart</h3>
                <div className='borderBottom'></div>
            </div>
            <div className='cartPageGrid'>
                <div className='cartItems'>
                    <h4>Shopping Cart</h4>
                    <div className='cartItemsList'>
                        { 
                            cartItems.length > 0 ?
                            (
                                cartItems.map(item => {
                                    return (
                                    <div key={item.id} className='cartItem'>
                                        <img className='cartItemImg' src={item.productImg}></img>
                                        <div className='cartItemText'>
                                            <p>{item.productName}</p>
                                            <p>{item.caption}</p>
                                            <p>$ {item.price}</p>
                                        </div>
                                        <div className='quantity'>
                                            <p>{item.quantity} pieces</p>
                                            <div className='quantityBtnContainer'> 
                                                <button onClick={()=> addToCart(item)}>+</button>
                                                <button onClick={()=> reduceItem(item)}>-</button>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })
                            )
                            :
                            (
                                <p>There are no items in your cart</p>
                            )
                        }
                    </div>
                    <div className='btnContainer'>
                        <Button className='nextBtn'>Next</Button>
                        <button className='cancelBtn'>Cancel</button>
                    </div>
                </div>
                <div className='summary'>
                    <h4>Summary</h4>
                    <p>Enter coupon number</p>
                    <div className='reciept'>
                        <div className='valueContainer'>
                            <p>SUBTOTAL</p>
                            <p>$ {total}</p>
                        </div>
                        <div className='valueContainer'>
                            <p>SHIPPING</p>
                            <p>Free</p>
                        </div>
                        <div className='valueContainer'>
                            <p>TAXES</p>
                            <p>$ 13</p>
                        </div>
                    </div>
                    <div className='valueContainer'>
                        <p>TOTAL</p>
                        <p>$ {total+13}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    cart : state.cart
})
export default connect(mapStateToProps,{addToCart, reduceItem})(CartPage)