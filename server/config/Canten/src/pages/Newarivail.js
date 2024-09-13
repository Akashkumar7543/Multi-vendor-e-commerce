import React, { useState } from "react";
import "./NewArrival.css"; // You can create this CSS file for styling
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

const Newarivail = () => {
  const [nav, setNav] = useState(false);
  const handleClose = () => {
    const offcanvasElement = document.getElementById("offcanvasExample");
    const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
    offcanvas.hide();
  };

  return (
    <>
      <a
        className="btn btn-primary"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
        style={{ width: "10%", padding: "6px", margin: "4px" }} // Add padding
      >
        
      </a>

      <div
        className="offcanvas offcanvas-start"
        style={{ height: "100%", overflowY: "auto", width: "20%" }} // Apply styles for height and overflowY
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h1 class="offcanvas-title" id="offcanvasExampleLabel">
            Filters
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{
              color: "black",
              backgroundColor: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleClose}
          ></button>
        </div>
        <ul>
          <li>Price</li>
          <hr />
          <select style={{ padding: "4px 0px 2px 2px" }}>
            <option value="option1">10000</option>
            <option value="option2">20000</option>
            <option value="option3">30000</option>
          </select>
          <span style={{ padding: "4px 0px 2px 2px", margin: "10px" }}>to</span>
          <select style={{ padding: "4px 0px 2px 2px" }}>
            <option value="option1">40000</option>
            <option value="option2">60000</option>
            <option value="option3">90000</option>
          </select>
        </ul>
        <ul>
          <li>Brand</li>
          <hr />
          <li>
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
            />
            <label for="myCheckbox" class="checkbox-label">
              Apple
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
            />
            <label for="myCheckbox" class="checkbox-label">
              Samsung
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
            />
            <label for="myCheckbox" class="checkbox-label">
              Vivo
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
            />
            <label for="myCheckbox" class="checkbox-label">
              Oppo
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
            />
            <label for="myCheckbox" class="checkbox-label">
              Realme
            </label>
          </li>
        </ul>

        <ul>
          <li>Ram</li>
          <hr />
          <li>
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
            />
            <label for="myCheckbox" class="checkbox-label">
              4GB
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
            />
            <label for="myCheckbox" class="checkbox-label">
              8GB
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
            />
            <label for="myCheckbox" class="checkbox-label">
              16GB
            </label>
          </li>
        </ul>
        <ul>
          <li>Battery Capacity</li>
          <hr />
          <li>
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
            />
            <label for="myCheckbox" class="checkbox-label">
              1000 - 1900 mAh
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
            />
            <label for="myCheckbox" class="checkbox-label">
              2000 - 2900 mAh
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
            />
            <label for="myCheckbox" class="checkbox-label">
              3000 - 3900 mAh
            </label>
          </li>
        </ul>
        <ul>
          <li>Internal Storage</li>
          <hr />
          <li>
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
            />
            <label for="myCheckbox" class="checkbox-label">
              256 GB & Above
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
            />
            <label for="myCheckbox" class="checkbox-label">
              128 GB - 256 GB
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
            />
            <label for="myCheckbox" class="checkbox-label">
              64 GB - 128
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
            />
            <label for="myCheckbox" class="checkbox-label">
              64 GB - 128
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="myCheckbox"
              className="custom-checkbox"
            />
            <label for="myCheckbox" class="checkbox-label">
              64 GB - 128
            </label>
          </li>
        </ul>
      </div>

      <div className="container-mobile">
        <div className="card-mobile">
          <img
            src="https://th.bing.com/th/id/OIP.E59IuFo1KWdxPRUOpcDUhgHaHh?w=177&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Mobile Phone"
          />
        </div>
        <div className="options">
          <div className="details">
            <h2>REDMI 13C(StarShine Green, 128GB)</h2>
          </div>
          <div className="option-item">
            <li>
              {" "}
              <span className="rating-value">4.2</span>
              <span className="rating-info">
                <span className="ratings-count">1043 ratings</span>
                <span className="review-count">63 reviews</span>
              </span>
            </li>
            <li>6 GB RAM | 128 GB ROM | Expandable upto 1 TB </li>
            <li>17.12 cm (6.74 inch) HD+ Display</li>
            <li>50 MP REAR Camera | 8 MP Front Camera</li>
            <li>5000 mAH Battery</li>
            <li>Helio G85 Processor</li>
            <li>
              1 Year Manufacturer Warranty for Phone and 6 months for in the Box
              Accessories
            </li>
          </div>
        </div>
        <div className="options price">
          <div className="details">
            <h2>$8799</h2>
            <p className="discount">
              <span className="discount-line">13700</span>{" "}
              <span className="green">37% Off</span>
            </p>

            <p className="delivery">
              Free Delivery by <span>5th March</span>
            </p>
            <p className="offer">
              <span className="green">Bank Offer</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container-mobile">
        <div className="card-mobile">
          <img
            src="https://th.bing.com/th/id/OIP.E59IuFo1KWdxPRUOpcDUhgHaHh?w=177&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Mobile Phone"
          />
        </div>
        <div className="options">
          <div className="details">
            <h2>REDMI 13C(StarShine Green, 128GB)</h2>
          </div>
          <div className="option-item">
            <li>
              {" "}
              <span className="rating-value">4.2</span>
              <span className="rating-info">
                <span className="ratings-count">1043 ratings</span>
                <span className="review-count">63 reviews</span>
              </span>
            </li>
            <li>6 GB RAM | 128 GB ROM | Expandable upto 1 TB </li>
            <li>17.12 cm (6.74 inch) HD+ Display</li>
            <li>50 MP REAR Camera | 8 MP Front Camera</li>
            <li>5000 mAH Battery</li>
            <li>Helio G85 Processor</li>
            <li>
              1 Year Manufacturer Warranty for Phone and 6 months for in the Box
              Accessories
            </li>
          </div>
        </div>
        <div className="options price">
          <div className="details">
            <h2>$8799</h2>
            <p className="discount">
              <span className="discount-line">13700</span>{" "}
              <span className="green">37% Off</span>
            </p>

            <p className="delivery">
              Free Delivery by <span>5th March</span>
            </p>
            <p className="offer">
              <span className="green">Bank Offer</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container-mobile">
        <div className="card-mobile">
          <img
            src="https://th.bing.com/th/id/OIP.E59IuFo1KWdxPRUOpcDUhgHaHh?w=177&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Mobile Phone"
          />
        </div>
        <div className="options">
          <div className="details">
            <h2>REDMI 13C(StarShine Green, 128GB)</h2>
          </div>
          <div className="option-item">
            <li>
              {" "}
              <span className="rating-value">4.2</span>
              <span className="rating-info">
                <span className="ratings-count">1043 ratings</span>
                <span className="review-count">63 reviews</span>
              </span>
            </li>
            <li>6 GB RAM | 128 GB ROM | Expandable upto 1 TB </li>
            <li>17.12 cm (6.74 inch) HD+ Display</li>
            <li>50 MP REAR Camera | 8 MP Front Camera</li>
            <li>5000 mAH Battery</li>
            <li>Helio G85 Processor</li>
            <li>
              1 Year Manufacturer Warranty for Phone and 6 months for in the Box
              Accessories
            </li>
          </div>
        </div>
        <div className="options-price">
          <div className="details-price">
            <h2>$8799</h2>
            <p className="discount-price">
              <span className="discount-line">13700</span>{" "}
              <span className="green">37% Off</span>
            </p>

            <p className="delivery">
              Free Delivery by <span>5th March</span>
            </p>
            <p className="offer">
              <span className="green">Bank Offer</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container-mobile">
        <div className="card-mobile">
          <img
            src="https://th.bing.com/th/id/OIP.E59IuFo1KWdxPRUOpcDUhgHaHh?w=177&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Mobile Phone"
          />
        </div>
        <div className="options">
          <div className="details">
            <h2>REDMI 13C(StarShine Green, 128GB)</h2>
          </div>
          <div className="option-item">
            <li>
              {" "}
              <span className="rating-value">4.2</span>
              <span className="rating-info">
                <span className="ratings-count">1043 ratings</span>
                <span className="review-count">63 reviews</span>
              </span>
            </li>
            <li>6 GB RAM | 128 GB ROM | Expandable upto 1 TB </li>
            <li>17.12 cm (6.74 inch) HD+ Display</li>
            <li>50 MP REAR Camera | 8 MP Front Camera</li>
            <li>5000 mAH Battery</li>
            <li>Helio G85 Processor</li>
            <li>
              1 Year Manufacturer Warranty for Phone and 6 months for in the Box
              Accessories
            </li>
          </div>
        </div>
        <div className="options-price">
          <div className="details-price">
            <h2>$8799</h2>
            <p className="discount-price">
              <span className="discount-line">13700</span>{" "}
              <span className="green">37% Off</span>
            </p>

            <p className="delivery">
              Free Delivery by <span>5th March</span>
            </p>
            <p className="offer">
              <span className="green">Bank Offer</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container-mobile">
        <div className="card-mobile">
          <img
            src="https://th.bing.com/th/id/OIP.E59IuFo1KWdxPRUOpcDUhgHaHh?w=177&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Mobile Phone"
          />
        </div>
        <div className="options">
          <div className="details">
            <h2>REDMI 13C(StarShine Green, 128GB)</h2>
          </div>
          <div className="option-item">
            <li>
              {" "}
              <span className="rating-value">4.2</span>
              <span className="rating-info">
                <span className="ratings-count">1043 ratings</span>
                <span className="review-count">63 reviews</span>
              </span>
            </li>
            <li>6 GB RAM | 128 GB ROM | Expandable upto 1 TB </li>
            <li>17.12 cm (6.74 inch) HD+ Display</li>
            <li>50 MP REAR Camera | 8 MP Front Camera</li>
            <li>5000 mAH Battery</li>
            <li>Helio G85 Processor</li>
            <li>
              1 Year Manufacturer Warranty for Phone and 6 months for in the Box
              Accessories
            </li>
          </div>
        </div>
        <div className="options-price">
          <div className="details-price">
            <h2>$8799</h2>
            <p className="discount-price">
              <span className="discount-line">13700</span>{" "}
              <span className="green">37% Off</span>
            </p>

            <p className="delivery">
              Free Delivery by <span>5th March</span>
            </p>
            <p className="offer">
              <span className="green">Bank Offer</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container-mobile">
        <div className="card-mobile">
          <img
            src="https://th.bing.com/th/id/OIP.E59IuFo1KWdxPRUOpcDUhgHaHh?w=177&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Mobile Phone"
          />
        </div>
        <div className="options">
          <div className="details">
            <h2>REDMI 13C(StarShine Green, 128GB)</h2>
          </div>
          <div className="option-item">
            <li>
              {" "}
              <span className="rating-value">4.2</span>
              <span className="rating-info">
                <span className="ratings-count">1043 ratings</span>
                <span className="review-count">63 reviews</span>
              </span>
            </li>
            <li>6 GB RAM | 128 GB ROM | Expandable upto 1 TB </li>
            <li>17.12 cm (6.74 inch) HD+ Display</li>
            <li>50 MP REAR Camera | 8 MP Front Camera</li>
            <li>5000 mAH Battery</li>
            <li>Helio G85 Processor</li>
            <li>
              1 Year Manufacturer Warranty for Phone and 6 months for in the Box
              Accessories
            </li>
          </div>
        </div>
        <div className="options-price">
          <div className="details-price">
            <h2>$8799</h2>
            <p className="discount-price">
              <span className="discount-line">13700</span>{" "}
              <span className="green">37% Off</span>
            </p>

            <p className="delivery">
              Free Delivery by <span>5th March</span>
            </p>
            <p className="offer">
              <span className="green">Bank Offer</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container-mobile">
        <div className="card-mobile">
          <img
            src="https://th.bing.com/th/id/OIP.E59IuFo1KWdxPRUOpcDUhgHaHh?w=177&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Mobile Phone"
          />
        </div>
        <div className="options">
          <div className="details">
            <h2>REDMI 13C(StarShine Green, 128GB)</h2>
          </div>
          <div className="option-item">
            <li>
              {" "}
              <span className="rating-value">4.2</span>
              <span className="rating-info">
                <span className="ratings-count">1043 ratings</span>
                <span className="review-count">63 reviews</span>
              </span>
            </li>
            <li>6 GB RAM | 128 GB ROM | Expandable upto 1 TB </li>
            <li>17.12 cm (6.74 inch) HD+ Display</li>
            <li>50 MP REAR Camera | 8 MP Front Camera</li>
            <li>5000 mAH Battery</li>
            <li>Helio G85 Processor</li>
            <li>
              1 Year Manufacturer Warranty for Phone and 6 months for in the Box
              Accessories
            </li>
          </div>
        </div>
        <div className="options-price">
          <div className="details-price">
            <h2>$8799</h2>
            <p className="discount-price">
              <span className="discount-line">13700</span>{" "}
              <span className="green">37% Off</span>
            </p>

            <p className="delivery">
              Free Delivery by <span>5th March</span>
            </p>
            <p className="offer">
              <span className="green">Bank Offer</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newarivail;
