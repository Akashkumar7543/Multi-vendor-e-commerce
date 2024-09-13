import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import "../Appp.css";
// import shoesimage from "./shoes.jpg";
import axios from "axios";
function Cart() {
    const [book, setBook] = useState({
		name: "Multivendor",
		author: "AKASH KUMAR ",
		img: "https://stylemixthemes.com/wp/wp-content/uploads/sites/2/2020/01/multi-vendor-ecommerce-website.jpg",
		price: 4050,
	});

	const initPayment = (data) => {
		const options = {
			key: "rzp_test_YkjUOMagr2LMMH",
			amount: data.amount,
			currency: data.currency,
			name: book.name,
			description: "Test Transaction",
			image: book.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:4000/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:4000/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: book.price });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};
  return (
    <div>
      
      <div className="shopping-cart">
        <div className="shopping-background">
          {/* The Shopping-cart1 class has all the Products i.e Shirts, Pants, Watches and also the coupon Section */}
          <div className="shopping-cart1">
            <div className="table-responsive">
              <table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                  <tr className="small text-uppercase">
                    <th scope="col">Product</th>
                    <th scope="col" width="120">
                      Quantity
                    </th>
                    <th scope="col" width="120" className="text-center">
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-right d-none d-md-block"
                      width="200"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <figure className="itemside align-items-center">
                        <div className="aside">
                          <img
                            src="https://i.imgur.com/1eq5kmC.png"
                            className="img-sm"
                            alt="Product 1"
                          />
                        </div>
                        <figcaption className="info">
                          <a
                            href="#"
                            className="title text-dark"
                            data-abc="true"
                          >
                            Tshirt with round neck
                          </a>
                          <p className="text-muted small">
                            SIZE: L <br /> Brand: MAXTRA
                          </p>
                        </figcaption>
                      </figure>
                    </td>
                    <td>
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </td>
                    <td>
                      <div className="price-wrap text-center">
                        <var className="price">Rs 1000</var>
                        <small className="text-muted"> 9.20 each </small>
                      </div>
                    </td>
                    <td className="text-center d-none d-md-block">
                      <a href="#" className="btn btn-light" data-abc="true">
                        Remove
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <figure className="itemside align-items-center">
                        <div className="aside">
                          <img
                            src="https://i.imgur.com/hqiAldf.jpg"
                            className="img-sm"
                            alt="Product 2"
                          />
                        </div>
                        <figcaption className="info">
                          <a
                            href="#"
                            className="title text-dark"
                            data-abc="true"
                          >
                            Flower Formal T-shirt
                          </a>
                          <p className="text-muted small">
                            SIZE: L <br /> Brand: ADDA
                          </p>
                        </figcaption>
                      </figure>
                    </td>
                    <td>
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </td>
                    <td>
                      <div className="price-wrap text-center">
                        <var className="price">Rs 250</var>
                        <small className="text-muted"> 12 each </small>
                      </div>
                    </td>
                    <td className="text-center d-none d-md-block">
                      <a
                        href="#"
                        className="btn btn-light btn-round"
                        data-abc="true"
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <figure className="itemside align-items-center">
                        <div className="aside">
                          <img
                            src="https://i.imgur.com/UwvU0cT.jpg"
                            className="img-sm"
                            alt="Product 3"
                          />
                        </div>
                        <figcaption className="info">
                          <a
                            href="#"
                            className="title text-dark"
                            data-abc="true"
                          >
                            Printed White Tshirt
                          </a>
                          <p className="small text-muted">
                            SIZE: M <br /> Brand: Cantabil
                          </p>
                        </figcaption>
                      </figure>
                    </td>
                    <td>
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </td>
                    <td>
                      <div className="price-wrap text-center">
                        <var className="price">Rs 900</var>
                        <small className="text-muted"> 6 each</small>
                      </div>
                    </td>
                    <td className="text-center d-none d-md-block">
                      <a
                        href="#"
                        className="btn btn-light btn-round"
                        data-abc="true"
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <figure className="itemside align-items-center">
                        <div className="aside">
                          <img
                            src="https://i.imgur.com/UwvU0cT.jpg"
                            className="img-sm"
                            alt="Product 3"
                          />
                        </div>
                        <figcaption className="info">
                          <a
                            href="#"
                            className="title text-dark"
                            data-abc="true"
                          >
                            Printed White Tshirt
                          </a>
                          <p className="small text-muted">
                            SIZE: M <br /> Brand: Cantabil
                          </p>
                        </figcaption>
                      </figure>
                    </td>
                    <td>
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </td>
                    <td>
                      <div className="price-wrap text-center">
                        <var className="price">Rs 500</var>
                        <small className="text-muted"> 6 each</small>
                      </div>
                    </td>
                    <td className="text-center d-none d-md-block">
                      <a
                        href="#"
                        className="btn btn-light btn-round"
                        data-abc="true"
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* Additional content for coupon and total price */}
              <div
                className="col-lg-3"
                style={{ width: "100%", padding: "0.6rem" }}
              >
                <div className="card mb-3">
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label>Have coupon?</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control coupon"
                            name=""
                            placeholder="Coupon code"
                          />
                          <span className="input-group-append">
                            <button className="btn btn-primary btn-apply coupon">
                              Apply
                            </button>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Container2 class has the payment method and shipping address and the total amount to be paid  */}
          <div className="container2">
            <div>
              <h5>Shipping Address</h5>
              <hr />
              <p> Akash kumar
(332)
PEARL REGENCY, AG Cooperative Colony, Kadru, Ashok Nagar
Ranchi, JHARKHAND 834002
India</p>
              <button className="btn btn-primary">Change Address</button>
            </div>
            <hr />
            <h5>Order Summary</h5>
            <hr />
            <div className="container2-inside">
              <p>Subtotal</p>
              <p>Rs. 3,550</p>
            </div>
            <div className="container2-inside">
              <p>Shipping</p>
              <p>Rs. 500</p>
            </div>
            <div className="container2-inside">
            <p class="bold-text">Total</p>
<p class="bold-text">Rs. 4,050</p>
            </div>
            <h5>Payment Info</h5>
            <hr />
            {/* <div className="container2-inside-cart">
              <p>Credit Card</p>
              <div className="container2-inside-cart-credit-card">
                <p>**** 1234</p>
                <p style={{ fontSize: "16px" }}>VISA</p>
              </div>
            </div> */}
            <button onClick={handlePayment} className="btn btn-primary button-pay-now">Pay Now</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Cart;
