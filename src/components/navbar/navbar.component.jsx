import React,{useState} from "react"
import "./navbar.styles.css"

import {Button,Input} from "reactstrap"
import {AiOutlineShoppingCart} from "react-icons/ai"
import Camera from "../../images/camera.png"
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Navbar = ({cart}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = (val) => setIsOpen(val);

    const checkWidth = () => {
        if(window.innerWidth <= 950){
            toggle(true)
          }
          else {
            toggle(false)
          }
    }
    window.addEventListener("resize", checkWidth);
    console.log(isOpen)
    return (
        <div className='navbarContainer'>
            <div className='brand'>
                <img className='brandImg' src={Camera} alt='brand'></img>
                <div className='search'>
                    <p></p>
                    <Input className='navInput' placeholder='search'></Input>
                </div>
            </div>
            <div className='nav'>
                <Link to='/'>Home</Link>
                <a>About</a>
                <a>Shop</a>
                <a className='nb'>Help</a>
                <Link className='nb' to='/cart'>
                    <Button className='cartBtn' color='secondary' size='sm'><AiOutlineShoppingCart/> Your cart </Button>
                    <div className='cartNumber'>{cart.cartItems.length}</div>
                </Link>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    cart : state.cart
})
export default connect(mapStateToProps)(Navbar)