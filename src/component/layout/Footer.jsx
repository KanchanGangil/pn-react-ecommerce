import React from 'react'

function Footer() {
    return (
        <>
            {/* footer-start */}
            <div className="container-fluid bg-dark text-white mt-5 pt-5">
                <div className="row px-xl-5 pt-5">
                    <div className="col-lg-4 col-md-12 mb-5 pe-5 pe-xl-5">
                        <h5 className="text-uppercase mb-4">Get In Touch</h5>
                        <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
                        <p className="mb-2">
                            <i className="fa-solid fa-location-dot text-primary me-3"></i>
                            Morar, Gwalior
                        </p>
                        <p className="mb-2">
                            <i className="fa-solid fa-envelope text-primary me-3"></i>
                            kanchangangil08@gmail.com
                        </p>
                        <p className="mb-0">
                            <i className="fa-solid fa-phone text-primary me-3"></i>
                            +012 345 67890
                        </p>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h5 className="text-uppercase mb-4">Quick Shop</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className=" text-white mb-2 text-decoration-none" href="/">
                                        <i className="fa-solid fa-angle-right me-2"></i>
                                        Home
                                    </a>
                                    <a className=" text-white mb-2 text-decoration-none" href="/">
                                        <i className="fa-solid fa-angle-right me-2"></i>
                                        Our Shop
                                    </a>
                                    <a className=" text-white mb-2 text-decoration-none" href="/">
                                        <i className="fa-solid fa-angle-right me-2"></i>
                                        Shop Detail
                                    </a>
                                    <a className=" text-white mb-2 text-decoration-none" href="/">
                                        <i className="fa-solid fa-angle-right me-2"></i>
                                        Shooping Cart
                                    </a>
                                    <a className=" text-white mb-2 text-decoration-none" href="/">
                                        <i className="fa-solid fa-angle-right me-2"></i>
                                        Checkout
                                    </a>
                                    <a className=" text-white mb-2 text-decoration-none" href="/">
                                        <i className="fa-solid fa-angle-right me-2"></i>
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="text-uppercase mb-4">MY ACCOUNT</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className=" text-white mb-2 text-decoration-none" href="/">
                                        <i className="fa-solid fa-angle-right me-2"></i>
                                        Home
                                    </a>
                                    <a className=" text-white mb-2 text-decoration-none" href="/">
                                        <i className="fa-solid fa-angle-right me-2"></i>
                                        Our Shop
                                    </a>
                                    <a className=" text-white mb-2 text-decoration-none" href="/">
                                        <i className="fa-solid fa-angle-right me-2"></i>
                                        Shop Detail
                                    </a>
                                    <a className=" text-white mb-2 text-decoration-none" href="/">
                                        <i className="fa-solid fa-angle-right me-2"></i>
                                        Shooping Cart
                                    </a>
                                    <a className=" text-white mb-2 text-decoration-none" href="/">
                                        <i className="fa-solid fa-angle-right me-2"></i>
                                        Checkout
                                    </a>
                                    <a className=" text-white mb-2 text-decoration-none" href="/">
                                        <i className="fa-solid fa-angle-right me-2"></i>
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="text-uppercase mb-4">Newsletter</h5>
                                <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                                <form action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Your Email Address" />
                                        <div className="input-group-append">
                                            <button className="btn btn-warning">Sign up</button>
                                        </div>
                                    </div>
                                </form>
                                <h6 className="text-uppercase text-white mt-4 mb-3">Follow Us</h6>
                                <div className="d-flex">
                                    <a className="btn btn-warning btn-square me-2" href="/">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a className="btn btn-warning btn-square me-2" href="/">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a className="btn btn-warning btn-square me-2" href="/">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a className="btn btn-warning btn-square me-2" href="/">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer-end */}
        </>
    )
}

export default Footer