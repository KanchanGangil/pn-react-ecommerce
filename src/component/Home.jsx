import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getcategories } from '../Redux/Action/CategoryAction';
import Loader from './layout/Loader';
import { getproduct } from '../Redux/Action/ProductAction';
import Product from './Product/Product';

function Home() {
    const dispatch = useDispatch();
    const { categories, error, loading } = useSelector((state) => state.cat)
    const { products } = useSelector((state) => state.p)
    console.log(products);

    useEffect(() => {
        dispatch(getcategories())
        dispatch(getproduct())
    }, [dispatch])
    return (
        <>
            {/* carousal-start */}
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-8 px-5 py-3'>
                        <div id="carouselExampleDark" className="carousel carousel-dark slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" style={{ height: "430px" }} data-bs-interval="10000">
                                    <img src="/images/carousel-1.jpg" className="d-block w-100 h-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Men Fashion</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="/images/carousel-2.jpg" className="d-block w-100 h-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Women Fashion</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/carousel-3.jpg" className="d-block w-100 h-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Kids Fashion</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className='col-lg-4 py-3 pe-5'>
                        <div className="product-offer mb-4" style={{ height: "200px" }}>
                            <img className="img-fluid" src="/images/offer-1.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-uppercase text-white mb-3">save 20%</h6>
                                <h1 className="mb-3 text-white">Special Offer</h1>
                                <Link className="btn btn-warning" to='/'>Shop Now</Link>
                            </div>
                        </div>
                        <div className="product-offer " style={{ height: "200px" }}>
                            <img className="img-fluid" src="/images/offer-2.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-uppercase text-white">save 20%</h6>
                                <h1 className="mb-3 text-white">Special Offer</h1>
                                <Link className="btn btn-warning" to='/'>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* carousal-end */}
            {/* Featured start */}
            <div className="container-fluid py-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa-solid fa-check text-primary m-0 me-3" ></h1>
                            <h5 className="fw-semibold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa-solid fa-truck-fast text-primary m-0 me-3" ></h1>
                            <h5 className="fw-semibold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa-solid fa-arrow-right-arrow-left text-primary m-0 me-3" ></h1>
                            <h5 className="fw-semibold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa-solid fa-phone-volume text-primary m-0 me-3" ></h1>
                            <h5 className="fw-semibold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Featured end */}
            {/* category-start */}
            <div className="contanier-fluid pt-2" >
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="text-dark pe-3"> Categories</span>
                </h2>
                <div className="row px-xl-5 pb-3">
                    {
                        loading ? <Loader /> : (
                            categories.map((cat) =>
                                <>
                                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                                        <a className="text-decoration-none" href="/">
                                            <div className="cat-item d-flex align-items-center mb-4">
                                                <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                                    <img className="img-fluid" src={cat.image.url} alt="" />
                                                </div>
                                                <div className="flex-fill ps-3">
                                                    <h6>{cat.cname}</h6>
                                                    <small className="text-body">100 Products </small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </>

                            )
                        )
                    }


                </div>
            </div>
            {/* category-end */}
            {/* products-start */}
            <div className="container-fluid pt-3 pb-3">
                <h2 className="position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="pe-3 text-dark">Featured Products</span>
                </h2>
                <div className="row px-xl-5">
                    {
                        loading ? <Loader /> : (
                            products.map((p) =>
                                <>
                                    <Product product={p} />
                                </>
                            )
                        )
                    }

                </div>
            </div>
            {/* products-end */}
            {/* offer-start */}
            <div className="container-fluid pt-5 pb-3">
                <div className="row px-xl-5">
                    <div className="col-md-6">
                        <div className="product-offer" style={{ height: "300px" }}>
                            <img className="img-fluid" src="/images/offer-1.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a className="btn btn-warning" href="/">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-offer" style={{ height: "300px" }}>
                            <img className="img-fluid" src="/images/offer-2.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a className="btn btn-warning" href="/">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* offer-end */}
            {/* recent-products-start */}
            <div className="container-fluid pt-5 pb-3">
                <h2 className="position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="pe-3 text-dark">Recent Products</span>
                </h2>
                <div className="row px-xl-5">
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="bg-light mb-4">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/images/product-1.jpg" alt="" />
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
                                <img className="img-fluid w-100" src="/images/product-2.jpg" alt="" />
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
                                <img className="img-fluid w-100" src="/images/product-3.jpg" alt="" />
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
                                <img className="img-fluid w-100" src="/images/product-4.jpg" alt="" />
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
                                <img className="img-fluid w-100" src="/images/product-5.jpg" alt="" />
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
                                <img className="img-fluid w-100" src="/images/product-6.jpg" alt="" />
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
                                <img className="img-fluid w-100" src="/images/product-7.jpg" alt="" />
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
                                <img className="img-fluid w-100" src="/images/product-8.jpg" alt="" />
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
            {/* recent-products-end */}
        </>
    )
}

export default Home