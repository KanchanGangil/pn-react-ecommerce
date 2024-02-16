import React from 'react'
import { Link } from 'react-router-dom';

function Product({ product }) {
    console.log(product);
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="bg-light mb-4">
                    <div className="position-relative overflow-hidden">
                        <Link to={`/product/${product._id}`}>
                            <img className="img-fluid w-100" src={product.image.url} alt="" />
                        </Link>
                    </div>
                    <div className="text-center py-4">
                        <Link className="text-decoration-none text-dark fw-medium" to={`/product/${product._id}`}>{product.name}</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2 text-dark fw-bold">
                            <h5>Rs.{product.price}</h5>
                            {/* <h6 className="text-muted ms-2"><del>$123.00</del> </h6> */}
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
        </>
    )
}

export default Product