import React from 'react'

function Cart() {
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
            {/* cart main area  start */}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className='table table-light table-borderless table-hover text-center mb-0'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className='align-middle'>
                                <tr>
                                    <td className='align-middle'>
                                        <img src="/images/product-1.jpg" style={{ width: "50px" }} alt="product" />
                                        Product Name
                                    </td>
                                    <td className="align-middle">$150</td>
                                    <td className='align-middle'>
                                        <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                            <div className="input-group-btn">
                                                <button className='btn btn-sm btn-primary btn-minus'>
                                                    <i className='fa fa-minus'></i>
                                                </button>
                                            </div>
                                            <input type="text" className='form-control form-control-sm border-0 text-center' placeholder='1' />
                                            <div className="input-group-btn">
                                                <button className='btn btn-sm btn-primary btn-minus'>
                                                    <i className='fa fa-plus'></i>
                                                </button>
                                            </div>
                                            <input type="text" className='form-control form-control-sm border-0 text-center' />
                                        </div>
                                    </td>
                                    <td className='align-middle'>$150</td>
                                    <td className="align-middle">
                                        <button className='btn btn-sm btn-danger'>
                                            <i className='fa fa-times'></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='align-middle'>
                                        <img src="/images/product-1.jpg" style={{ width: "50px" }} alt="product" />
                                        Product Name
                                    </td>
                                    <td className="align-middle">$150</td>
                                    <td className='align-middle'>
                                        <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                            <div className="input-group-btn">
                                                <button className='btn btn-sm btn-primary btn-minus'>
                                                    <i className='fa fa-minus'></i>
                                                </button>
                                            </div>
                                            <input type="text" className='form-control form-control-sm border-0 text-center' placeholder='1' />
                                            <div className="input-group-btn">
                                                <button className='btn btn-sm btn-primary btn-minus'>
                                                    <i className='fa fa-plus'></i>
                                                </button>
                                            </div>
                                            <input type="text" className='form-control form-control-sm border-0 text-center' />
                                        </div>
                                    </td>
                                    <td className='align-middle'>$150</td>
                                    <td className="align-middle">
                                        <button className='btn btn-sm btn-danger'>
                                            <i className='fa fa-times'></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='align-middle'>
                                        <img src="/images/product-1.jpg" style={{ width: "50px" }} alt="product" />
                                        Product Name
                                    </td>
                                    <td className="align-middle">$150</td>
                                    <td className='align-middle'>
                                        <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                            <div className="input-group-btn">
                                                <button className='btn btn-sm btn-primary btn-minus'>
                                                    <i className='fa fa-minus'></i>
                                                </button>
                                            </div>
                                            <input type="text" className='form-control form-control-sm border-0 text-center' placeholder='1' />
                                            <div className="input-group-btn">
                                                <button className='btn btn-sm btn-primary btn-minus'>
                                                    <i className='fa fa-plus'></i>
                                                </button>
                                            </div>
                                            <input type="text" className='form-control form-control-sm border-0 text-center' />
                                        </div>
                                    </td>
                                    <td className='align-middle'>$150</td>
                                    <td className="align-middle">
                                        <button className='btn btn-sm btn-danger'>
                                            <i className='fa fa-times'></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='align-middle'>
                                        <img src="/images/product-1.jpg" style={{ width: "50px" }} alt="product" />
                                        Product Name
                                    </td>
                                    <td className="align-middle">$150</td>
                                    <td className='align-middle'>
                                        <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                            <div className="input-group-btn">
                                                <button className='btn btn-sm btn-primary btn-minus'>
                                                    <i className='fa fa-minus'></i>
                                                </button>
                                            </div>
                                            <input type="text" className='form-control form-control-sm border-0 text-center' placeholder='1' />
                                            <div className="input-group-btn">
                                                <button className='btn btn-sm btn-primary btn-minus'>
                                                    <i className='fa fa-plus'></i>
                                                </button>
                                            </div>
                                            <input type="text" className='form-control form-control-sm border-0 text-center' />
                                        </div>
                                    </td>
                                    <td className='align-middle'>$150</td>
                                    <td className="align-middle">
                                        <button className='btn btn-sm btn-danger'>
                                            <i className='fa fa-times'></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='align-middle'>
                                        <img src="/images/product-1.jpg" style={{ width: "50px" }} alt="product" />
                                        Product Name
                                    </td>
                                    <td className="align-middle">$150</td>
                                    <td className='align-middle'>
                                        <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                            <div className="input-group-btn">
                                                <button className='btn btn-sm btn-primary btn-minus'>
                                                    <i className='fa fa-minus'></i>
                                                </button>
                                            </div>
                                            <input type="text" className='form-control form-control-sm border-0 text-center' placeholder='1' />
                                            <div className="input-group-btn">
                                                <button className='btn btn-sm btn-primary btn-minus'>
                                                    <i className='fa fa-plus'></i>
                                                </button>
                                            </div>
                                            <input type="text" className='form-control form-control-sm border-0 text-center' />
                                        </div>
                                    </td>
                                    <td className='align-middle'>$150</td>
                                    <td className="align-middle">
                                        <button className='btn btn-sm btn-danger'>
                                            <i className='fa fa-times'></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='align-middle'>
                                        <img src="/images/product-1.jpg" style={{ width: "50px" }} alt="product" />
                                        Product Name
                                    </td>
                                    <td className="align-middle">$150</td>
                                    <td className='align-middle'>
                                        <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                            <div className="input-group-btn">
                                                <button className='btn btn-sm btn-primary btn-minus'>
                                                    <i className='fa fa-minus'></i>
                                                </button>
                                            </div>
                                            <input type="text" className='form-control form-control-sm border-0 text-center' placeholder='1' />

                                            <div className="input-group-btn">
                                                <button className='btn btn-sm btn-primary btn-minus'>
                                                    <i className='fa fa-plus'></i>
                                                </button>
                                            </div>
                                            <input type="text" className='form-control form-control-sm border-0 text-center' />
                                        </div>
                                    </td>
                                    <td className='align-middle'>$150</td>
                                    <td className="align-middle">
                                        <button className='btn btn-sm btn-danger'>
                                            <i className='fa fa-times'></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    {/* Checout process */}
                    <div className="col-lg-4">
                        <form className='mb-30' action="">
                            <div className="input-group">
                                <input type="text" className='form-control border-0 p-4' placeholder='Coupon Code' />
                                <div className="input-group-append">
                                    <button className='btn btn-primary'>Apply Coupon</button>
                                </div>
                            </div>
                        </form>
                        <h5 className='section-title  text-uppercase mt-3'>
                            <span className='pr-3'>Cart Summary</span>
                        </h5>
                        <div className="bg-light p-30 mb-5">
                            <div className="border-bottom pb-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>SubTotal</h6>
                                    <h6>$150</h6>
                                </div>
                            </div>
                            <div className="border-bottom pb-2">
                                <div className="d-flex justify-content-between mb-3 mt-2">
                                    <h6>Shiping</h6>
                                    <h6>$10</h6>
                                </div>
                                <div className="pt-2">
                                    <div className="d-flex justify-content-between mt-2">
                                        <h5>Total</h5>
                                        <h5>$160</h5>
                                    </div>
                                    <button className="btn btn-block btn-primary font-weight-bold my-3 py-3 w-100">Proceed To Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cart main area  end */}
        </>
    )
}

export default Cart