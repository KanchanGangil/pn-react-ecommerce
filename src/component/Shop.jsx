import React from 'react'

function Shop() {
    return (
        <>
            {/* breadcrump start */}
            <div className='container-fluid'>
                <div className='row px-xl-5'>
                    <div className='col-12'>
                        <nav className='breadcrumb bg-light mb-3 py-3'>
                            <a className="breadcrumb-item text-dark text-decoration-none" href="/">Home</a>
                            <a className="breadcrumb-item text-dark text-decoration-none" href="/shop">Shop</a>
                            <span className="breadcrumb-item active">Shop List</span>

                        </nav>
                    </div>
                </div>
            </div>
            {/* breadcrump end */}
            {/* shop start */}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    {/* shop sidebar start */}
                    <div className="col-lg-3 col-md-4">
                        {/* price start */}
                        <h5 className="section-title position-relative text-uppercase mb-3">
                            <span className="text-dark fw-semibold pe-3">Filter by price</span>
                        </h5>
                        <div className="bg-light p-4 mb-5">
                            <form action="">
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" checked id="price-all" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-all" style={{ marginLeft: "-110px" }}>All Price</label>
                                    <span className="badge border fw-normal text-dark">1000</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-1" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-1" style={{ marginLeft: "-110px" }}>$0 - $100</label>
                                    <span className="badge border fw-normal text-dark">150</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-2" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-2" style={{ marginLeft: "-90px" }}>$100 - $200</label>
                                    <span className="badge border fw-normal text-dark">295</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-3" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-3" style={{ marginLeft: "-90px" }}>$200 - $300</label>
                                    <span className="badge border fw-normal text-dark">246</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-4" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-4" style={{ marginLeft: "-90px" }}>$300 - $400</label>
                                    <span className="badge border fw-normal text-dark">145</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-5" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-5" style={{ marginLeft: "-90px" }}>$400 - $500</label>
                                    <span className="badge border fw-normal text-dark">168</span>
                                </div>
                            </form>
                        </div>
                        {/* price end */}
                        {/* color start */}
                        <h5 className="section-title position-relative text-uppercase mb-3">
                            <span className="text-dark fw-semibold pe-3">Filter by color</span>
                        </h5>
                        <div className="bg-light p-4 mb-5">
                            <form action="">
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" checked id="price-all" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-all" style={{ marginLeft: "-110px" }}>All color</label>
                                    <span className="badge border fw-normal text-dark">1000</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-1" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-1" style={{ marginLeft: "-110px" }}>Black</label>
                                    <span className="badge border fw-normal text-dark">150</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-2" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-2" style={{ marginLeft: "-90px" }}>White</label>
                                    <span className="badge border fw-normal text-dark">295</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-3" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-3" style={{ marginLeft: "-90px" }}>Red</label>
                                    <span className="badge border fw-normal text-dark">246</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-4" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-4" style={{ marginLeft: "-90px" }}>Blue</label>
                                    <span className="badge border fw-normal text-dark">145</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-5" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-5" style={{ marginLeft: "-90px" }}>Green</label>
                                    <span className="badge border fw-normal text-dark">168</span>
                                </div>
                            </form>
                        </div>
                        {/* color end */}
                        {/* size start */}
                        <h5 className="section-title position-relative text-uppercase mb-3">
                            <span className="text-dark fw-semibold pe-3">Filter by size</span>
                        </h5>
                        <div className="bg-light p-4 mb-5">
                            <form action="">
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" checked id="price-all" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-all" style={{ marginLeft: "-110px" }}>All size</label>
                                    <span className="badge border fw-normal text-dark">1000</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-1" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-1" style={{ marginLeft: "-110px" }}>XS</label>
                                    <span className="badge border fw-normal text-dark">150</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-2" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-2" style={{ marginLeft: "-90px" }}>S</label>
                                    <span className="badge border fw-normal text-dark">295</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-3" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-3" style={{ marginLeft: "-90px" }}>M</label>
                                    <span className="badge border fw-normal text-dark">246</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-4" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-4" style={{ marginLeft: "-90px" }}>L</label>
                                    <span className="badge border fw-normal text-dark">145</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-tems-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-5" style={{ width: "20px" }} />
                                    <label className="custom-control-label" htmlFor="price-5" style={{ marginLeft: "-90px" }}>XL</label>
                                    <span className="badge border fw-normal text-dark">168</span>
                                </div>
                            </form>
                        </div>
                        {/* size end */}
                    </div>
                    {/* shop sidebar end */}
                    {/* shop product start */}
                    <div className="col-lg-9 col-md-8">
                        <div className="row pb-3">
                            <div className="col-12 pb-1">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div>
                                        <button className="btn btn-sm btn-light">
                                            <i className="fa-solid fa-table-cells-large"></i>
                                        </button>
                                        <button className="btn btn-sm btn-light">
                                            <i className="fa-solid fa-bars"></i>
                                        </button>
                                    </div>
                                    <div className="ms-2 d-flex">
                                        <div className="dropdown me-3">
                                            <button className="btn btn-light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Sorting
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Latest</a></li>
                                                <li><a className="dropdown-item" href="#">Popularity</a></li>
                                                <li><a className="dropdown-item" href="#">Best Rating</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <button className="btn btn-light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Showing
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">10</a></li>
                                                <li><a className="dropdown-item" href="#">20</a></li>
                                                <li><a className="dropdown-item" href="#">30</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                                <div className="bg-light mb-4">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid w-100" src="/images/product-1.jpg" alt="" />
                                        <div className="text-center py-4">
                                            <a className="text-decoration-none text-dark fw-mediumbold" href="/">Product Name Goes Here</a>
                                            <div className="d-flex align-items-center justify-content-center mt-2 text-dark fw-bold">
                                                <h5>$123.00</h5>
                                                <h6 className="text-muted ms-2"><del>$123.00</del> </h6>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mb-1">
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small>(99)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                                <div className="bg-light mb-4">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid w-100" src="/images/product-2.jpg" alt="" />
                                        <div className="text-center py-4">
                                            <a className="text-decoration-none text-dark fw-mediumbold" href="/">Product Name Goes Here</a>
                                            <div className="d-flex align-items-center justify-content-center mt-2 text-dark fw-bold">
                                                <h5>$123.00</h5>
                                                <h6 className="text-muted ms-2"><del>$123.00</del> </h6>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mb-1">
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small>(99)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                                <div className="bg-light mb-4">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid w-100" src="/images/product-3.jpg" alt="" />
                                        <div className="text-center py-4">
                                            <a className="text-decoration-none text-dark fw-mediumbold" href="/">Product Name Goes Here</a>
                                            <div className="d-flex align-items-center justify-content-center mt-2 text-dark fw-bold">
                                                <h5>$123.00</h5>
                                                <h6 className="text-muted ms-2"><del>$123.00</del> </h6>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mb-1">
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small>(99)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                                <div className="bg-light mb-4">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid w-100" src="/images/product-4.jpg" alt="" />
                                        <div className="text-center py-4">
                                            <a className="text-decoration-none text-dark fw-mediumbold" href="/">Product Name Goes Here</a>
                                            <div className="d-flex align-items-center justify-content-center mt-2 text-dark fw-bold">
                                                <h5>$123.00</h5>
                                                <h6 className="text-muted ms-2"><del>$123.00</del> </h6>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mb-1">
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small>(99)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                                <div className="bg-light mb-4">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid w-100" src="/images/product-5.jpg" alt="" />
                                        <div className="text-center py-4">
                                            <a className="text-decoration-none text-dark fw-mediumbold" href="/">Product Name Goes Here</a>
                                            <div className="d-flex align-items-center justify-content-center mt-2 text-dark fw-bold">
                                                <h5>$123.00</h5>
                                                <h6 className="text-muted ms-2"><del>$123.00</del> </h6>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mb-1">
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small>(99)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                                <div className="bg-light mb-4">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid w-100" src="/images/product-6.jpg" alt="" />
                                        <div className="text-center py-4">
                                            <a className="text-decoration-none text-dark fw-mediumbold" href="/">Product Name Goes Here</a>
                                            <div className="d-flex align-items-center justify-content-center mt-2 text-dark fw-bold">
                                                <h5>$123.00</h5>
                                                <h6 className="text-muted ms-2"><del>$123.00</del> </h6>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mb-1">
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small>(99)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                                <div className="bg-light mb-4">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid w-100" src="/images/product-7.jpg" alt="" />
                                        <div className="text-center py-4">
                                            <a className="text-decoration-none text-dark fw-mediumbold" href="/">Product Name Goes Here</a>
                                            <div className="d-flex align-items-center justify-content-center mt-2 text-dark fw-bold">
                                                <h5>$123.00</h5>
                                                <h6 className="text-muted ms-2"><del>$123.00</del> </h6>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mb-1">
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small>(99)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                                <div className="bg-light mb-4">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid w-100" src="/images/product-8.jpg" alt="" />
                                        <div className="text-center py-4">
                                            <a className="text-decoration-none text-dark fw-mediumbold" href="/">Product Name Goes Here</a>
                                            <div className="d-flex align-items-center justify-content-center mt-2 text-dark fw-bold">
                                                <h5>$123.00</h5>
                                                <h6 className="text-muted ms-2"><del>$123.00</del> </h6>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mb-1">
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small>(99)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                                <div className="bg-light mb-4">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid w-100" src="/images/product-9.jpg" alt="" />
                                        <div className="text-center py-4">
                                            <a className="text-decoration-none text-dark fw-mediumbold" href="/">Product Name Goes Here</a>
                                            <div className="d-flex align-items-center justify-content-center mt-2 text-dark fw-bold">
                                                <h5>$123.00</h5>
                                                <h6 className="text-muted ms-2"><del>$123.00</del> </h6>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mb-1">
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small className="fa-solid fa-star text-primary me-1"></small>
                                                <small>(99)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <nav>
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled ">
                                            <a className="page-link bg-light" href="#">Previous</a>
                                        </li>
                                        <li className="page-item disabled">
                                            <a className="page-link text-white" href="#" style={{ backgroundColor: "#FFD333" }}>1</a>
                                        </li>
                                        <li className="page-item disabled">
                                            <a className="page-link text-primary bg-light" href="#">2</a>
                                        </li>
                                        <li className="page-item disabled">
                                            <a className="page-link text-primary bg-light" href="#">3</a>
                                        </li>
                                        <li className="page-item disabled">
                                            <a className="page-link text-primary bg-light" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* shop product endsz */}
                </div>
            </div>
            {/* shop end */}
        </>
    )
}

export default Shop