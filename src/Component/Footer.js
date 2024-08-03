import React from 'react'
import '../App.css'


export default function Footer() {
  return (
    <div>
        {/* <!-- place footer here --> */}
        <section name="" id="footer" className="footer bg-secondary bg-gradient text-black">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="col-md-12 pt-5 mb-3">
                            <img src="https://codebybiswajit.github.io/secondportfolio/freelancer-biswajit-high-resolution-logo-transparent%20(1).png"
                                alt="" srcSet=""  width="148"
                                className="d-inline-block align-text-top img-fluid bg-dark p-2"/>
                        </div>
                        <div className="col-md-12 text-light">
                            All in One | Shopping," a great place to find quality items at affordable prices. One of the
                            things that sets "All in One Shopping" apart is their commitment to providing a wide variety
                            of products that cater to different needs and preferences. Whether you're looking for the
                            latest electronics, stylish fashion items, or practical home goods, you're sure to find
                            something that suits your taste and budget.
                        </div>
                    </div>
                    <div className="col-md-4 pt-5 ">
                        <div className="col-md-12 fs-3">
                            Group Companies
                        </div>
                        <div className="col-md-12">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <a href="#" className="nav-link fota">All in One | Shoping</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.amazon.in/" className="nav-link fota">Amazon</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.myntra.com/" className="nav-link fota">Myntra</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.flipkart.com/" className="nav-link fota">Flipkart</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.shopsy.in/" className="nav-link fota">Shopsy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 pt-5 text-white">
                        <div className="col inner-li next pt-1">
                            <h5 className="mb-3 text-uppercase fs-3 text-dark">Address</h5>
                            <ul className="w3ls-footer-bottom-list navbar-nav">
                                <li className="nav-item">
                                    <span className="material-symbols-outlined me-3">
                                        location_on
                                    </span>
                                    38345 W 10 Mile Rd. Suite #110 <br/> Farmington Hills, MI 48335
                                </li>
                                <li className="nav-item"><span className="material-symbols-outlined me-3">
                                        mail
                                    </span>
                                    <a href="mailto:freelancerbiswajit@gmail.com">
                                        freelancerbiswajit@gmail.com
                                    </a>
                                </li>
                                <li className="nav-item"><span className="material-symbols-outlined me-3">call</span> +91
                                    1600-1498-1652
                                </li>
                                <li className="nav-item"><span className="material-symbols-outlined me-3">schedule</span>Working
                                    Hours : 8:00 a.m -
                                    9:00 p.m
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="  footer copyright py-2  bg-dark text-white">
            <div className="container d-flex justify-content-between">
                <div className="text-start text-sm-center">
                    <p>© 2024 All in One | Shoping. All Rights Reserved | Created by Freelancer Biswajit
                    </p>
                </div>
                <div className="d-flex">
                    <li className="bg-transparent bg-md-secondary text-sm-white rounded-circle  me-2 p-1">
                        <a href="#" className="rounded"><i className='bx bxl-twitter  '></i></a>
                    </li>
                    <li className="bg-transparent bg-md-secondary text-sm-white rounded-circle  me-2 p-1">
                        <a href="#"><i className='bx bxl-facebook  '></i></a>
                    </li>
                    <li className="bg-transparent bg-md-secondary text-sm-white rounded-circle  me-2 p-1">
                        <a href="#"><i className='bx bxl-instagram  '></i></a>
                    </li>
                    <li className="bg-transparent bg-md-secondary text-sm-white rounded-circle  me-2 p-1">
                        <a href="#"><i className='bx bxl-linkedin  '></i></a>
                    </li>
                </div>
            </div>
        </section>

    </div>
  )
}
