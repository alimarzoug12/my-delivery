import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { shopActions } from '../slices/shopSlice';
import { RootState } from '../store';
import Footer from './Footer';
import NavbarSansSearch from './NavbarSansSearch';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap'; // Bootstrap modal

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.shop.products);
  const totalAmount = useSelector((state: RootState) => state.shop.totalAmount);
  const email = useSelector((state: RootState) => state.user.email); 
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [modalMessage, setModalMessage] = useState(''); // Modal message
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/signin');
    }
  }, [isLoggedIn, navigate]);

  const handleDeleteItem = (title: string) => {
    dispatch(shopActions.deleteItem(title));
  };

  const handleRemoveItem = (title: string) => {
    dispatch(shopActions.removeItem(title));
  };

  const handleAddItem = (title: string) => {
    const productToAdd = cartItems.find(item => item.title === title);
    if (productToAdd) {
      dispatch(
        shopActions.addItem({
          id: productToAdd.id,
          title: productToAdd.title,
          urlImage: productToAdd.urlImage,
          price: productToAdd.price,
        })
      );
    }
  };

  const handleShop = async () => {
    const itemsToSave = cartItems.map(item => ({
      title: item.title,
      quantity: item.quantity,
    }));

    try {
      const response = await axios.post('http://localhost:4000/api/v1/shop', { email, title: itemsToSave, totalAmount: totalWithShipping });
      console.log('Items saved successfully:', response.data);

      dispatch(shopActions.clearShop()); 

      
      setModalMessage('Thank you for shopping! Your order has been placed successfully.');
      setShowModal(true);

      
      setTimeout(() => {
        setShowModal(false);
        navigate('/');
      }, 3000);
      
    } catch (error) {
      console.error('Error saving items:', error);
    }
  };

  
  const formattedTotalAmount = totalAmount ? totalAmount.toFixed(2) : '0.00';
  const shippingCost = 3.00;
  const totalWithShipping = (Number(formattedTotalAmount) + shippingCost).toFixed(2);

  return (
    <div>
      <NavbarSansSearch />

      {/* Modal for success message */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-success">Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowModal(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

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
                      <td>${item.price.default.toFixed(2)}</td>
                      <td className="fw-bold">
                        <button
                          className="btn border border-grey m-2 px-1 py-0 rounded-2"
                          onClick={() => handleRemoveItem(item.title)}
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          className="btn border border-grey m-2 px-1 py-0 rounded-2"
                          onClick={() => handleAddItem(item.title)}
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
                  <h1 className="display-6 mb-4">
                    Cart <span className="fw-normal">Total</span>
                  </h1>
                  <div className="d-flex justify-content-between mb-4">
                    <h5>Subtotal:</h5>
                    <p>${formattedTotalAmount}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5>Shipping</h5>
                    <p>Flat rate: ${shippingCost.toFixed(2)}</p>
                  </div>
                  <p className="mb-0 text-end">Shipping to Tunisia.</p>
                </div>
                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                  <h5>Total</h5>
                  <p>${totalWithShipping}</p>
                </div>
                <button
                  onClick={handleShop}
                  className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                >
                  Shop
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
