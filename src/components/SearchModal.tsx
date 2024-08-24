import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store'; // Adjust this import according to your store setup

export default function SearchModal() {
  const [searchTerm, setSearchTerm] = useState('');
  const products = useSelector((state: RootState) => state.shop.products); // Adjust according to your Redux store structure

  // Filter products by title based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Modal Search Start */}
      <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="modalShopLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="modalShopLabel">Search by keyword</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="input-group w-75 mx-auto d-flex">
                <input
                  type="search"
                  className="form-control p-3"
                  placeholder="Enter product title"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span id="search-icon-1" className="input-group-text p-3">
                  <i className="fa fa-search"></i>
                </span>
              </div>
              <div className="mt-4">
                {filteredProducts.length > 0 ? (
                  <ul className="list-group">
                    {filteredProducts.map((product) => (
                      <li key={product.title} className="list-group-item">
                        {product.title}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-center mt-3">No products found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Search End */}
    </div>
  );
}
