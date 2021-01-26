import React from "react"
import "./index.styles.css";

import {Button,Input} from "reactstrap";
import Footer from '../../components/footer/footer.component';
import ProductCard from "../../components/product-card/product-card.component"
import {connect} from "react-redux";
import {addToCart} from "../../redux/cart/cart.actions";

import CarouselComponent from "../../components/carousel/carousel.component";

const Index = ({products, addToCart}) => {
    const add = (product) => {
        addToCart(product);
        window.alert("Item has been added to cart")
    }
    return (
        <div className='indexContainer'>
            <div className='cover'>
                <h2>Tagline describing your e-shop</h2>
                <div className='underline'></div>
                <div className='coverImageContainer'>
                    <img src={products.products[0].productImg} alt='product'></img>
                    <img src={products.products[1].productImg} alt='product'></img>
                    <img src={products.products[2].productImg} alt='product'></img>
                </div>
                <Button color='secondary' className='shopBtn'>Shop Now</Button>
            </div>
            <CarouselComponent products={products}></CarouselComponent>
            <div className='newsletter'>
                <div className='newsletterText'>
                    <h3>Newsletter</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed porta gravida malesuada. Phasellus a blandit dolor. 
                        Donec facilisis commodo accumsan.
                    </p>
                </div>
                <div className='newsletterForm'>
                    <Input placeholder='Email Address'></Input>
                    <Button className='newsletterBtn'>Subscribe</Button>
                </div>
            </div>
            <div className='productListContainer'>
                <div className='column1'>
                    <img src={products.products[0].productImg} alt='product'></img>
                    <div className='productCardGrid'>
                        <div>
                            <p>{products.products[0].productName}</p>
                            <p>$ {products.products[0].price}</p>
                        </div>
                        <div>
                            <p className='addCartBtn' onClick={()=> add(products.products[0])}>Add to cart</p>
                        </div>
                    </div>
                </div>
                <div className='column2'>
                    {
                        products.products.map(items => {
                            return(
                                <ProductCard key={items.id} product={items}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className='about'>
                <h3>About Your Shop</h3>
                <p>            
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed porta gravida malesuada. Phasellus a blandit dolor. 
                    Donec facilisis commodo accumsan.Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.Sed porta gravida malesuada. 
                    Phasellus a blandit dolor.Donec facilisis commodo accumsan.
                </p>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    products : state.products
})
export default connect(mapStateToProps, {addToCart})(Index);