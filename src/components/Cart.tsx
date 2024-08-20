
import React from 'react';

type Product = {
    id: string;
    title: string;
    urlImage: string;
    price: string;
}

type CartProps = {
    addProduct: Product[];
}

    export default function Cart({addProduct}:CartProps){
        console.log("carts",addProduct)
        React.useEffect(() => {
            console.log("Cart updated:", addProduct);
        }, [addProduct]);

    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <h1 className="text-center text-white display-6">Cart</h1>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                {/* <th scope="col">Price</th>                                 */}
                            </tr>
                        </thead>
                        <tbody>
                        {addProduct.length > 0 ? (
                                addProduct.map((product, index) => (
                                    <tr key={index}>
                                        <th scope="row">
                                            <div className="d-flex align-items-center">
                                                <img src={product.urlImage} className="img-fluid me-5 rounded-circle" style={{ width: '80px', height: '80px' }} alt={product.title} />
                                            </div>
                                        </th>
                                        <td>
                                            <p className="mb-0 mt-4">{product.title}</p>                                            
                                        </td>
                                        {/* <td>
                                            <p className="mb-0 mt-4">{product.price} $</p>
                                        </td>                                         */}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="text-center">
                                        <p className="mb-0">Your cart is empty</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="mt-5">
                    <input type="text" className="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Coupon Code" />
                    <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">Apply Coupon</button>
                </div>
                <div className="row g-4 justify-content-end">
                    <div className="col-8"></div>
                    <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                        <div className="bg-light rounded">
                            <div className="p-4">
                                <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                                <div className="d-flex justify-content-between mb-4">
                                    <h5 className="mb-0 me-4">Subtotal:</h5>
                                    <p className="mb-0">$96.00</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h5 className="mb-0 me-4">Shipping</h5>
                                    <div>
                                        <p className="mb-0">Flat rate: $3.00</p>
                                    </div>
                                </div>
                                <p className="mb-0 text-end">Shipping to Tunisia.</p>
                            </div>
                            <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                <h5 className="mb-0 ps-4 me-4">Total</h5>
                                <p className="mb-0 pe-4">$99.00</p>
                            </div>
                            <button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">Proceed Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
