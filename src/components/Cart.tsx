import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { shopActions } from '../slices/shopSlice';
import { RootState } from '../store';
import Footer from './Footer';
import NavbarSansSearch from './NavbarSansSearch';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.shop.products);
  const totalAmount = useSelector((state: RootState) => state.shop.totalAmount);
  const dispatch = useDispatch();

  const handleDeleteItem = (title: string) => {
    dispatch(shopActions.deleteItem(title));
  };
  const handleremoveItem = (title: string) => {
    dispatch(shopActions.removeItem(title));
  };
  const handleaddItem = (title: string) => {
    const productToAdd = cartItems.find(item => item.title === title);
    if (productToAdd) {
      dispatch(shopActions.addItem({ id: productToAdd.id, title: productToAdd.title, urlImage: productToAdd.urlImage, price: productToAdd.price }));
    }
  };
  

  // Ensure totalAmount is a number and has a default value if null or undefined
  const formattedTotalAmount = totalAmount ? totalAmount.toFixed(2) : '0.00';

  return (
    <div>
      <NavbarSansSearch />
    <div className="container-fluid py-5">
      <div className="container py-5">
        <h1 className="text-center text-white display-6">Cart</h1>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.urlImage}
                        className="img-fluid rounded-circle"
                        style={{ width: '80px', height: '80px' }}
                        alt={item.title}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price.default}</td>
                    <td className='fw-bold'>
                    <button
                        className="btn border border-grey m-2 px-1 py-0 rounded-2"
                        onClick={() => handleremoveItem(item.title)}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="btn border border-grey m-2 px-1 py-0 rounded-2"
                        onClick={() => handleaddItem(item.title)}
                      >
                        +
                      </button>
                      </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteItem(item.title)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center">
                    Your cart is empty
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-5">
          <input
            type="text"
            className="border-0 border-bottom rounded me-5 py-3 mb-4"
            placeholder="Coupon Code"
          />
          <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">
            Apply Coupon
          </button>
        </div>
        <div className="row g-4 justify-content-end">
          <div className="col-8"></div>
          <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
            <div className="bg-light rounded">
              <div className="p-4">
                <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                <div className="d-flex justify-content-between mb-4">
                  <h5>Subtotal:</h5>
                  <p>${formattedTotalAmount}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <h5>Shipping</h5>
                  <p>Flat rate: $3.00</p>
                </div>
                <p className="mb-0 text-end">Shipping to Tunisia.</p>
              </div>
              <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                <h5>Total</h5>
                <p>${(Number(formattedTotalAmount) + 3.00).toFixed(2)}</p>
              </div>
              <Link to="/checkout" className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Cart;