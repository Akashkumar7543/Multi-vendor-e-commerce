import React from 'react';
import '../Styles.css';
function Featured() {
    return (
        <div className='custom-container featured w-11/12 mx-auto'>
            <div className='featured-section1'>
                <h3>Featured Products</h3>
            </div>
            <div className='featured-section2'>
                <div className='featured-section2-part1'>
                       <span>Create Your Own Space with our </span>
                       <span className='title'>Furniture</span> 
                </div>
                
                <div className='featured-section2-part2'>
                    <div className='featured-section2-part2-part1'>
                    <a href='/'>
                        <div className='featured-section2-part2-part1-card'>
                            <div className='price'>$100</div>
                            <div className='image'><img src='./images/category_images/smart-watch.png'></img></div>
                             <div className='title'>Smart Watches</div> 
                        </div>
                        </a>
                        <div className='featured-section2-part2-part1-card'>
                            <div className='price'>$500</div>
                            <div className='image'><img src='./images/category_images/camera.png'></img></div>
                            <div className='title'>Cameras</div>
                        </div>
                        <div className='featured-section2-part2-part1-card'>
                            <div className='price'>$20</div>
                            <div className='image'><img src='./images/category_images/cooking.png'></img></div>
                            <div className='title'>Kitchen Cooking ware</div>
                        </div>
                    </div>
                    <div className='featured-section2-part2-part2'>
                        <div className='featured-section2-part2-part2-card1'>
                        <div className='price'>$20</div>
                            <div className='image'><img src='./images/category_images/bedsheet.png'></img></div>
                            <div className='title'>Bedsheets</div>
                        </div>
                        <div className='featured-section2-part2-part2-card2'>
                            <div className='section1'>
                                <div className='section1-content'>
                                    <h5>Samsung Washing Machine</h5>
                                    <span>The Samsung front load machine is too simple to use. You just need to load your clothes into the machine and your job is done</span>
                                </div>
                                <div className='section1-offer'>Offer</div>
                            </div>
                            <div className='section2'>
                                <img src='./images/category_images/washing-machine.png' width="480px"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>             
    );
}
export default Featured;