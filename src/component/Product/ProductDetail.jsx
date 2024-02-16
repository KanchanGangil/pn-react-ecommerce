import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproductdetails } from '../../Redux/Action/ProductAction'
import { Link, useParams } from 'react-router-dom'



function ProductDetail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { products, loading } = useSelector((state) => state.pdetail)
    console.log(products);

    useEffect(() => {
        dispatch(getproductdetails(id))
    }, [dispatch, id])
    const [quantity, setQuantity] = useState(0)
    const increaseQty = () => {
        if (products.stock <= quantity) return
        const qty = quantity + 1
        setQuantity(qty)
    }

    const decreaseQty = () => {
        if (1 >= quantity) return
        const qty = quantity - 1
        setQuantity(qty)
    }

    const addToCartHandler = () => {

    }

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
            {/* shop detail start */}
            <div className='container-fluid pb-5'>
                <div className='row px-xl-5'>
                    <div className='col-lg-5 mb-3'>
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={products?.image?.url} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={products?.image?.url} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={products?.image?.url} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-7 h-auto mb-3">
                        <div className="h-100 bg-light p-3">
                            <h3>{products.name}</h3>
                            <div className="d-flex mb-3">
                                <div className="text-primary me-2">
                                    <small className="fa-solid fa-star text-primary me-1"></small>
                                    <small className="fa-solid fa-star text-primary me-1"></small>
                                    <small className="fa-solid fa-star text-primary me-1"></small>
                                    <small className="fa-solid fa-star text-primary me-1"></small>
                                    <small className="fa-solid fa-star text-primary me-1"></small>
                                    <small className="text-dark">(99 Reviews)</small>
                                </div>
                            </div>
                            <h3 className="fw-semibold mb-4">Rs.{products.price}</h3>
                            <p className="mb-4">{products.description}</p>
                            {/* size start */}
                            {/* <div className="d-flex mb-3">
                                <strong className="text-dark me-3">Sizes:</strong>
                                <form className="d-flex">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input me-2" id="size-1" name="size" />
                                        <label className="custom-control-label me-3" htmlFor="size-1">XS</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input me-2" id="size-2" name="size" />
                                        <label className="custom-control-label me-3" htmlFor="size-2">S</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input me-2" id="size-3" name="size" />
                                        <label className="custom-control-label me-3" htmlFor="size-3">M</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input me-2" id="size-4" name="size" />
                                        <label className="custom-control-label me-3" htmlFor="size-4">L</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input me-2" id="size-5" name="size" />
                                        <label className="custom-control-label me-3" htmlFor="size-5">XL</label>
                                    </div>


                                </form>
                            </div> */}
                            {/* size end */}
                            {/* color start */}
                            {/* <div className="d-flex mb-3">
                                <strong className="text-dark me-3">Colors:</strong>
                                <form className="d-flex">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input me-2" id="color-1" name="size" />
                                        <label className="custom-control-label me-3" htmlFor="color-1">Black</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input me-2" id="color-2" name="size" />
                                        <label className="custom-control-label me-3" htmlFor="color-2">White</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input me-2" id="color-3" name="size" />
                                        <label className="custom-control-label me-3" htmlFor="color-3">Red</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input me-2" id="color-4" name="size" />
                                        <label className="custom-control-label me-3" htmlFor="color-4">Blue</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input me-2" id="color-5" name="size" />
                                        <label className="custom-control-label me-3" htmlFor="color-5">Green</label>
                                    </div>


                                </form>
                            </div> */}
                            {/* color end */}
                            {/* add to cart start */}
                            <div className="d-flex align-items-center mb-4 pt-2">
                                <div className="input-group mr-3" style={{ width: "130px" }}>
                                    <div className="input-group-btn">
                                        <button onClick={decreaseQty} className="btn btn-primary btn-minus">
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control bg-light border-0 text-center" value={quantity} />
                                    <div className="input-group-btn me-3">
                                        <button onClick={increaseQty} className="btn btn-primary btn-plus">
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <Link to='/cart'>
                                    <button onClick={addToCartHandler} className="btn btn-primary px-3">
                                        <i className="fa-solid fa-cart-shopping me-1"></i>
                                        Add To Cart
                                    </button>
                                </Link>
                            </div>
                            {/* add to cart end */}
                            <div className="d-flex pt-2">
                                <strong className="text-dark me-2">Share on:</strong>
                                <div className="d-inline-flex">
                                    <a className="text-dark px-2" href>
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                    <a className="text-dark px-2" href>
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a className="text-dark px-2" href>
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a className="text-dark px-2" href>
                                        <i className="fa-brands fa-pinterest"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                        {/* product description start */}


                    </div>
                </div>
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="bg-light p-3">
                            <div className="row flex ">
                                <div className="mb-3">
                                    <details open>
                                        <summary className="mb-3">Description</summary>
                                        <p>{products.description}
                                        </p>
                                    </details>
                                </div>
                                <div className="mb-0">
                                    <details>
                                        <summary className="mb-3">Information</summary>
                                        <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item px-0 text-body">
                                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                                    </li>
                                                    <li className="list-group-item px-0 text-body">
                                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                                    </li>
                                                    <li className="list-group-item px-0 text-body">
                                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                                    </li>
                                                    <li className="list-group-item px-0 text-body">
                                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item px-0 text-body">
                                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                                    </li>
                                                    <li className="list-group-item px-0 text-body">
                                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                                    </li>
                                                    <li className="list-group-item px-0 text-body">
                                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                                    </li>
                                                    <li className="list-group-item px-0 text-body">
                                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* product description end */}
            </div>
            {/* shop detail end */}
            {/* you-may-like-start */}
            <div className="container-fluid pt-5 pb-3">
                <h2 className="position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="pe-3 text-dark fw-bold">YOU MAY ALSO LIKE</span>
                </h2>
                <div className="row px-xl-5">
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="bg-light mb-4">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/public/images/product-1.jpg" alt="" />
                            </div>
                            <div className="text-center py-4">
                                <a className="text-decoration-none text-dark fw-medium" href="/">Product Name Goes Here</a>
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
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="bg-light mb-4">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/public/images/product-2.jpg" alt="" />
                            </div>
                            <div className="text-center py-4">
                                <a className="text-decoration-none text-dark fw-medium" href="/">Product Name Goes Here</a>
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
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="bg-light mb-4">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/public/images/product-3.jpg" alt="" />
                            </div>
                            <div className="text-center py-4">
                                <a className="text-decoration-none text-dark fw-medium" href="/">Product Name Goes Here</a>
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
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="bg-light mb-4">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/public/images/product-4.jpg" alt="" />
                            </div>
                            <div className="text-center py-4">
                                <a className="text-decoration-none text-dark fw-medium" href="/">Product Name Goes Here</a>
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
            </div>
            {/* you-may-like-end */}
        </>
    )
}

export default ProductDetail