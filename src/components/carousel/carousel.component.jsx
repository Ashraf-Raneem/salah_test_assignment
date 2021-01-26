import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../product-card/product-card.component";

import "./carousel.styles.css"

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const CarouselComponent = ({products}) => {
    return (
        <div className='carouselContainer'>
            <h3>Featured Products</h3>
            <Carousel responsive={responsive}>
               {
                   products.products.map(items => {
                       return(
                        <div key={items.id} className='productCarousel'>
                            <img src={items.productImg}></img>
                            <p>{items.productName}</p>
                            <p>$ {items.price}</p>
                        </div>
                       )
                   })
               }
            </Carousel>
        </div>
    )
}
export default CarouselComponent