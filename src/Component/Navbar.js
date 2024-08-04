import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const modalBorder = {
        borderRadious: ".4em",
        border: " .4em ridge red"
    }
    return (
        <div>
            <header>
                <div className="container-fluid bg-dark">
                    <nav className="navbar navbar-expand-lg py-0 ">
                        <div className="container-fluid">
                            <Link className="navbar-brand x" to="/ecomreact/">
                                <img src="https://codebybiswajit.github.io/secondportfolio/freelancer-biswajit-high-resolution-logo-transparent%20(1).png"
                                    alt="" srcSet="" width="148" className="img-fluid d-inline-block align-text-top" />
                            </Link>

                            <div className="collapse navbar-collapse " id="navbarNav">
                                <ul className="navbar-nav me-auto  my-lg-0 navbar-nav-scroll">
                                    <li className="nav-item d-flex  align-items-center x">
                                        <i className='bx bx-current-location text-white'></i>
                                        <a className="nav-link text-white" aria-current="page" href="#address" >Delivering
                                            To Address <b>Update Location</b></a>
                                    </li>
                                </ul>
                                <form className="container-fluid">

                                    <div className="input-group fc">
                                        <span className="input-group-text fc" id="basic-addon1">
                                            <button className="btn btn-white dropdown-toggle" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                All
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-black">
                                                <li><a className="dropdown-item" href="/ecomreact/home">Home</a></li>
                                                <li><a className="dropdown-item" href="/ecomreact/about">About Us</a></li>
                                                <li><a className="dropdown-item" href="/ecomreact/products">Products</a></li>
                                                <li><a className="dropdown-item" href="/ecomreact/blog">Blogs</a></li>
                                                <li><a className="dropdown-item" href="/ecomreact/contactus">Contacts</a></li>
                                            </ul>
                                        </span>
                                        <input type="text" className="form-control fc"
                                            placeholder="Search freelancerbiswajit.github.io" aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                        <span className="input-group-text fc" id="basic-addon2"><i className='bx bx-search-alt fs-3'
                                            role="button"></i></span>
                                    </div>
                                </form>
                                <ul className="navbar-nav me-auto my-lg-0 navbar-nav-scroll">
                                    <li className="nav-item1">


                                        <button type="button" className="btn bg-transparent text-white" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                            Hello,
                                            sign in <b>Account & Lists</b>
                                        </button>


                                        <div className="modal bxde" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-body">
                                                        <div className="login-wrap">
                                                            <div className="login-html">
                                                                <input id="tab-1" type="radio" name="tab" className="sign-in" checked readOnly /><label htmlFor="tab-1"
                                                                    className="tab">Sign In</label>
                                                                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2"
                                                                    className="tab">Sign Up</label>
                                                                <div className="login-form">
                                                                    <div className="sign-in-htm">
                                                                        <div className="group">
                                                                            <label htmlFor="user" className="label">Username</label>
                                                                            <input id="signinUserName" type="text" className="input" />
                                                                        </div>
                                                                        <div className="group">
                                                                            <label htmlFor="pass" className="label">Password</label>
                                                                            <input id="password" type="password" className="input" data-type="password" />
                                                                        </div>
                                                                        <div className="group">
                                                                            <input id="check" type="checkbox" className="check" checked readOnly />
                                                                            <label htmlFor="check"><span className="icon"></span> Keep
                                                                                me Signed in</label>
                                                                        </div>
                                                                        <div className="group">
                                                                            <input type="submit" className="button" value="Sign In" />
                                                                        </div>
                                                                        <div className="hr"></div>
                                                                        <div className="foot-lnk">
                                                                            <a href="#forgot">Forgot Password?</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="sign-up-htm">
                                                                        <div className="group">
                                                                            <label htmlFor="user" className="label">Username</label>
                                                                            <input id="signupUserName" type="text" className="input" />
                                                                        </div>
                                                                        <div className="group">
                                                                            <label htmlFor="pass" className="label">Password</label>
                                                                            <input id="signupPassword" type="password" className="input" data-type="password" />
                                                                        </div>
                                                                        <div className="group">
                                                                            <label htmlFor="pass" className="label">Repeat
                                                                                Password</label>
                                                                            <input id="pass" type="password" className="input" data-type="password" />
                                                                        </div>
                                                                        <div className="group">
                                                                            <label htmlFor="pass" className="label">Email
                                                                                Address</label>
                                                                            <input id="conformed_SignupPassword" type="text" className="input" />
                                                                        </div>
                                                                        <div className="group">
                                                                            <input type="submit" className="button" value="Sign Up" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="nav-item x">
                                        <button type="button" className="btn bg-transparent text-white" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal1">
                                            Returns <b>&Orders</b>
                                        </button>


                                        <div className="modal fade text-white " id="exampleModal1" tabIndex="-1"
                                            aria-labelledby="exampleModal1Label" aria-hidden="true">
                                            <div className="modal-dialog rounded-4" style={modalBorder}>
                                                <div className="modal-content bg-dark text-white" style={modalBorder}>
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModal1Label">Returns & Orders
                                                        </h1>
                                                        <button type="button" className="btn-close btn-close-white"
                                                            data-bs-dismiss="modal"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        You Haven't Order Enything
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-danger"
                                                            data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> </li>
                                </ul>


                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="/ecomreact/cart"><i className='bx bx-cart-add text-white fs-1 x' role="button"></i></a></div>
                        </div>
                    </nav>


                </div>
                <div className="nav-main m-0 bg-dark-subtle container-fluid">
                    <nav className=" navbar-expand-lg ">
                        <button className="navbar-toggler" type="button" data-bs-theme="dark" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="material-symbols-outlined">
                                widgets
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className='navbar-nav m-1 d-flex align-items-center justify-content-center align-content-center'>
                                <li>
                                    <Link className='nav-item text-decoration-none ' to='/ecomreact/home'>Home</Link>
                                </li>
                                <li>
                                    <Link className='nav-item text-decoration-none' to='/ecomreact/about'>About</Link>
                                </li>
                                <li>
                                    <Link className='nav-item text-decoration-none' to='/ecomreact/products'>Products</Link>
                                </li>
                                <li>
                                    <Link className='nav-item text-decoration-none' to='/ecomreact/blog'>Blogs</Link>
                                </li>
                                <li>
                                    <Link className='nav-item text-decoration-none' to='/ecomreact/contactus'>Contact Us</Link>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>

            </header>
        </div>
    )
}
