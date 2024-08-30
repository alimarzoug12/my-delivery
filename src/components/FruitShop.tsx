// src/components/FruitShop.tsx
import React, { useState } from 'react';

const FruitShop: React.FC = () => {
    const [priceRange, setPriceRange] = useState(0);

    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriceRange(Number(e.target.value));
    };

    return (
        <div className="container-fluid fruite py-5">
            <div className="container py-5">
                <h1 className="mb-4">Fresh Fruits Shop</h1>
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="row g-4">
                            <div className="col-xl-3">
                                <div className="input-group w-100 mx-auto d-flex">
                                    <input
                                        type="search"
                                        className="form-control p-3"
                                        placeholder="keywords"
                                        aria-describedby="search-icon-1"
                                    />
                                    <span id="search-icon-1" className="input-group-text p-3">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col-6"></div>
                            <div className="col-xl-3">
                                <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                    <label htmlFor="fruits">Default Sorting:</label>
                                    <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
                                        <option value="nothing">Nothing</option>
                                        <option value="popularity">Popularity</option>
                                        <option value="organic">Organic</option>
                                        <option value="fantastic">Fantastic</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <h4>Categories</h4>
                                            <ul className="list-unstyled fruite-categorie">
                                                <li>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-apple-alt me-2"></i>Apples</a>
                                                        <span>(3)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-apple-alt me-2"></i>Oranges</a>
                                                        <span>(5)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-apple-alt me-2"></i>Strawberry</a>
                                                        <span>(2)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-apple-alt me-2"></i>Banana</a>
                                                        <span>(8)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-apple-alt me-2"></i>Pumpkin</a>
                                                        <span>(5)</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <h4 className="mb-2">Price</h4>
                                            <input
                                                type="range"
                                                className="form-range w-100"
                                                id="rangeInput"
                                                name="rangeInput"
                                                min="0"
                                                max="500"
                                                value={priceRange}
                                                onChange={handleRangeChange}
                                            />
                                            <output id="amount" name="amount" htmlFor="rangeInput">
                                                {priceRange}
                                            </output>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <h4>Additional</h4>
                                            <div className="mb-2">
                                                <input type="radio" className="me-2" id="Categories-1" name="Categories" value="Organic" />
                                                <label htmlFor="Categories-1"> Organic</label>
                                            </div>
                                            <div className="mb-2">
                                                <input type="radio" className="me-2" id="Categories-2" name="Categories" value="Fresh" />
                                                <label htmlFor="Categories-2"> Fresh</label>
                                            </div>
                                            <div className="mb-2">
                                                <input type="radio" className="me-2" id="Categories-3" name="Categories" value="Exotic" />
                                                <label htmlFor="Categories-3"> Exotic</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <h4>Fruits List</h4>
                                {/* Here you can render the list of fruits dynamically */}
                                <div className="row g-4">
                                    {/* Example fruit card */}
                                    <div className="col-lg-4">
                                        <div className="card">
                                            <img src="path/to/image.jpg" className="card-img-top" alt="Fruit" />
                                            <div className="card-body">
                                                <h5 className="card-title">Fruit Name</h5>
                                                <p className="card-text">$Price</p>
                                                <button className="btn btn-primary">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Repeat for other fruits */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FruitShop;
