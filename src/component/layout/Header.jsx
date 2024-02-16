import { Link } from 'react-router-dom'


function Header() {
    return (
        <>
            {/* top-bar-start */}
            <div className='container-fluid'>
                <div className='row bg-secondary-subtle px-5'>
                    <div className='col-md-6 d-none d-lg-block'>
                        <nav className="nav">
                            <Link className="nav-link active toptext" aria-current="page" href="/">About</Link>
                            <Link className="nav-link toptext" href="/">Contact</Link>
                            <Link className="nav-link toptext" href="/">Help</Link>
                            <Link className="nav-link toptext" href="/">FAQs</Link>
                        </nav>
                    </div>
                    <div className='col-md-6 text-center'>
                        <div className=' d-flex justify-content-end'>
                            <div className="dropdown me-2">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    My Account
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Sign In</a></li>
                                    <li><a className="dropdown-item" href="/">Sign Up</a></li>
                                </ul>
                            </div>
                            <div className="dropdown me-2">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    USD
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">EUR</a></li>
                                    <li><a className="dropdown-item" href="/">GBP</a></li>
                                    <li><a className="dropdown-item" href="/">CAD</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    EN
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">FR</a></li>
                                    <li><a className="dropdown-item" href="/">AR</a></li>
                                    <li><a className="dropdown-item" href="/">RU</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex'>
                    <div className='col-lg-4'>
                        <a href="" className='text-decoration-none'>
                            <img src="/images/ecom-img.jpeg" alt="" />
                        </a>
                    </div>
                    <div className='col-lg-4 col-6 text-left'>
                        <form action="">
                            <div className='input-group'>
                                <input type="text" className='form-control' placeholder='Search for products' />

                                <span className='input-group-text bg-transparent text-primary'>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </span>

                            </div>
                        </form>
                    </div>
                    <div className='col-lg-4 col-6 d-inline-flex justify-content-end'>
                        <span>
                            <p className='m-0 fs-5'>Customer Service</p>
                            <h5 className='m-0 fs-5'>+012 345 6789</h5>
                        </span>
                    </div>
                </div>
            </div>
            {/* top-bar-end */}
            {/* nav-bar-start */}
            <div className='container-fluid bg-dark mb-5'>
                <div className='row px-xl-5'>
                    <div className='col-lg-3 d-none d-lg-block'>
                        <div className="dropdown">
                            <button className="btn  catbutton bg-primary fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className='fa fa-bars me-3'></i>
                                Categories
                                <i className='fa fa-angle-down text-dark ms-5'></i>
                            </button>
                            <ul className="dropdown-menu">

                                <li><a className="dropdown-item" href="/">Men Dresses</a></li>
                                <li><a className="dropdown-item" href="/">Women Dresses</a></li>
                                <li><a className="dropdown-item" href="/">Kids Dresses</a></li>
                                <li><a className="dropdown-item" href="/">Shirts</a></li>
                                <li><a className="dropdown-item" href="/">Jeans</a></li>
                                <li><a className="dropdown-item" href="/">Swimwear</a></li>
                                <li><a className="dropdown-item" href="/">Sleepwear</a></li>
                                <li><a className="dropdown-item" href="/">Jumpsuits</a></li>
                                <li><a className="dropdown-item" href="/">Blazers</a></li>
                                <li><a className="dropdown-item" href="/">Jackets</a></li>
                                <li><a className="dropdown-item" href="/">Shoes</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-9'>
                        <nav className="navbar navbar-expand-lg bgdark">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="/shop">Shop</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="/detail">Shop detail</a>
                                        </li>
                                        <li className="nav-item">
                                            <div className="dropdown">
                                                <button className="btn btn-dark" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Pages
                                                    <i className='fa fa-angle-down text-white ms-2'></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="/cart">Shopping Cart</a></li>
                                                    <li><a className="dropdown-item" href="#">Checkout</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white " href='/'>Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {/* nav-bar-end */}
        </>
    )
}

export default Header