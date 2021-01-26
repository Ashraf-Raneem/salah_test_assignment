import React from "react"
import "./footer.styles.css"
import Camera from "../../images/camera.png"

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='column'>
                <img className='footerImg' src={Camera} alt='footer'></img>
                <p>1717 Harrison Street, San Francisco</p>
                <p>CA 94103,USA</p>
            </div>
            <div className='column'>
                <h3>Main Menu</h3>
                <p>Home</p>
                <p>About</p>
                <p>Shop</p>
                <p>Help</p>
            </div>
            <div className='column'>
                <h3>Company</h3>
                <p>The company</p>
                <p>Careers</p>
                <p>Press</p>
            </div>
            <div className='column'>
                <h3>Discover</h3>
                <p>The team</p>
                <p>Our History</p>
                <p>Brand Moto</p>
            </div>
            <div className='column'>
                <h3>Find us on</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
    )
}
export default Footer