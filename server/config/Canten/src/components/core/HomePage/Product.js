import React from 'react'
import '../Styles.css'

const Product = (props) => {
    const heading = props.heading;
  return (
    <div className='custom-container product w-11/12 mx-auto'>
            <div className='product-section-1'>
                <h3>{heading}</h3>
            </div>
            <div className='product-section-2'>
                {/* card 1 */}
                <div className='card'>
                    <div className='rating'>
                        <span className='rating-value'>4.2</span>
                    </div>
                    <div className='product'>
                        <img src='./images/category_images/headphone.png' width={"100px"} height={"100px"} className='product-image'></img>
                        <div className='product-details'>
                            <span className='product-type'>PROVOGUE</span>
                            <p className='product-description'>Men Formal Evening Black Artificial Leather, Texas Belt</p>
                        </div>
                    </div>
                    <div className='price'>
                        <span className='sale-price'>$120</span>
                        <div className='offers'>
                            <span className='actual-price'>$1,499</span>
                            <span className='discount'>88% off</span>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className='card'>
                    <div className='rating'>
                        <span className='rating-value'>4.9</span>
                    </div>
                    <div className='product'>
                        <img src='./images/category_images/headphone.png' width={"100px"} height={"100px"} className='product-image'></img>
                        <div className='product-details'>
                            <span className='product-type'>Sponsored</span>
                            <p className='product-description'>BEARDO Godfather Perfume - 100 ml (For Men)</p>
                        </div>
                    </div>
                    <div className='price'>
                        <span className='sale-price'>$78</span>
                        <div className='offers'>
                            <span className='actual-price'>$640</span>
                            <span className='discount'>90% off</span>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className='card'>
                    <div className='rating'>
                        <span className='rating-value'>4.9</span>
                    </div>
                    <div className='product'>
                        <img src='./images/category_images/headphone.png' width={"100px"} height={"100px"} className='product-image'></img>
                        <div className='product-details'>
                            <span className='product-type'>Premium</span>
                            <p className='product-description'>Indian wood mart Wooden Royal Wedding Chair (Pure Wood)</p>
                        </div>
                    </div>
                    <div className='price'>
                        <span className='sale-price'>$199</span>
                        <div className='offers'>
                            <span className='actual-price'>$700</span>
                            <span className='discount'>75% off</span>
                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div className='card'>
                    <div className='rating'>
                        <span className='rating-value'>3.9</span>
                    </div>
                    <div className='product'>
                        <img src='./images/category_images/headphone.png' width={"100px"} height={"100px"} className='product-image'></img>
                        <div className='product-details'>
                            <span className='product-type'>Premium</span>
                            <p className='product-description'>JBL Tune 760NC Active Noise Cancelling,Wireless Bluetooth</p>
                        </div>
                    </div>
                    <div className='price'>
                        <span className='sale-price'>$99</span>
                        <div className='offers'>
                            <span className='actual-price'>$200</span>
                            <span className='discount'>85% off</span>
                        </div>
                    </div>
                </div>
                {/* card 5 */}
                <div className='card'>
                    <div className='rating'>
                        <span className='rating-value'>4.2</span>
                    </div>
                    <div className='product'>
                        <img src='./images/category_images/headphone.png' width={"100px"} height={"100px"} className='product-image'></img>
                        <div className='product-details'>
                            <span className='product-type'>Allen Solly</span>
                            <p className='product-description'>Men Regular Fit Solid Spread Collar Casual Shirt</p>
                        </div>
                    </div>
                    <div className='price'>
                        <span className='sale-price'>$49</span>
                        <div className='offers'>
                            <span className='actual-price'>$150</span>
                            <span className='discount'>80% off</span>
                        </div>
                    </div>
                </div>
                <div className="view-more">
                    <img src="./images/category_images/arrow.png" width={"40px"} ></img>
                </div>
            </div>
        </div>
  )
}

export default Product;