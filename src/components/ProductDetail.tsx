// src/components/ProductDetail.tsx
import React from 'react';

const ProductDetail: React.FC = () => {
    return (
        <div className="container-fluid py-5 mt-5">
            <div className="container py-5">
                <div className="row g-4 mb-5">
                    <div className="col-lg-8 col-xl-9">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="border rounded">
                                    <a href="#">
                                        <img src="img/single-item.jpg" className="img-fluid rounded" alt="Image" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h4 className="fw-bold mb-3">Broccoli</h4>
                                <p className="mb-3">Category: Vegetables</p>
                                <h5 className="fw-bold mb-3">3.35 $</h5>
                                <div className="d-flex mb-4">
                                    <i className="fa fa-star text-secondary"></i>
                                    <i className="fa fa-star text-secondary"></i>
                                    <i className="fa fa-star text-secondary"></i>
                                    <i className="fa fa-star text-secondary"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p className="mb-4">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                                <p className="mb-4">Suspendisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish.</p>
                                <div className="input-group quantity mb-5" style={{ width: '100px' }}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control form-control-sm text-center border-0" value="1" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">
                                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                                </a>
                            </div>
                            <div className="col-lg-12">
                                <nav>
                                    <div className="nav nav-tabs mb-3">
                                        <button className="nav-link active border-white border-bottom-0" type="button" role="tab"
                                            id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                                            aria-controls="nav-about" aria-selected="true">Description</button>
                                        <button className="nav-link border-white border-bottom-0" type="button" role="tab"
                                            id="nav-reviews-tab" data-bs-toggle="tab" data-bs-target="#nav-reviews"
                                            aria-controls="nav-reviews" aria-selected="false">Reviews</button>
                                    </div>
                                </nav>
                                <div className="tab-content mb-5">
                                    <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                                        <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                                        <p>Suspendisse ultricies nisi vel quam suscipit.</p>
                                    </div>
                                    <div className="tab-pane" id="nav-reviews" role="tabpanel" aria-labelledby="nav-reviews-tab">
                                        <h5>Reviews</h5>
                                        <p>No reviews yet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-3">
                        {/* Add sidebar or related products here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
