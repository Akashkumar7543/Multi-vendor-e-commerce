import React from "react";
import '../Styles.css'
import { Link } from "react-router-dom";
function Category(){
    return(
        <div className="custom-container category w-11/12 mx-auto">
            <div className="category-section-1">
                <h3>Shop By Category</h3>
            </div>
            <div className="category-section-2">
                <div className="category-card1 card-1">Grocery</div>
               <a href="/newarival"><div className="category-card2 card-2">Electronics</div></a> 
                <div className="category-card3 card-3">Beauty</div>
                <div className="category-card4 card-4">Fashion</div>
                <div className="category-card5 card-5">Kitchen</div>
                <Link>
                <div className="category-card6 card-6">
                    <img src="./images/category_images/arrow.png"></img>
                </div>
                </Link>
            </div>
        </div>
    );
}

export default Category;