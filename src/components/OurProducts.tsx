import React from 'react'

export default function OurProducts() {
  return (
    <div className="row g-4 pt-4">
                            <div className="col-lg-4 text-start">
                                <h1>Our Products</h1>
                            </div>
                            <div className="col-lg-8 text-end d-none">
                                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                    <li className="nav-item">
                                        <a className="d-flex m-2 py-2 bg-light rounded-pill nav-link active" data-bs-toggle="pill" href="#tab-1">
                                            <span className="text-dark" style={{ width: '100px' }}>All Products</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="d-flex py-2 m-2 bg-light rounded-pill nav-link" data-bs-toggle="pill" href="#tab-2">
                                            <span className="text-dark" style={{ width: '100px' }}>Les plus populaires</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="d-flex m-2 py-2 bg-light rounded-pill nav-link" data-bs-toggle="pill" href="#tab-3">
                                            <span className="text-dark " style={{ width: '100px' }}>Croquez le monde</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="d-flex m-2 py-2 bg-light rounded-pill nav-link" data-bs-toggle="pill" href="#tab-4">
                                            <span className="text-dark" style={{ width: '100px' }}>Nos menus Bergers</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="d-flex m-2 py-2 bg-light rounded-pill nav-link" data-bs-toggle="pill" href="#tab-5">
                                            <span className="text-dark" style={{ width: '130px' }}>Menu MCFIRST</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
  )
}
