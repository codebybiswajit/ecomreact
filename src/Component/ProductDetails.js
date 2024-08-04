import React from 'react'
import '../App.css'
// import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductDetails() {
    // const [link,setLink] = useState('')
    function show_image(src) {
        // console.log(src)
        document.querySelector('.show-img').src = src;
    }
  return (
    <div>
      <div className="container pt-2 pb-2">
            <div className="row shadow bg-white p-5 rounded">
                <div className="col-md-5 shadow h-100 bg-white p-5 rounded-4">
                    <div className="row">
                        <div className="col-md-2 col-sm-1" style={{cursor: 'pointer'}}>
                            <div className="row d-none d-md-block d-lg-block d-sm-none  ">
                                <img src="https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70&amp;"
                                    alt="" className="pt-2 img-fluid small-image " onClick={(e) => show_image(e.target.src)}/>
                            </div>
                            <div className="row d-none d-md-block d-lg-block d-sm-none ">
                                <img src="https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8dv9jzxfdy.jpeg?q=70&amp;"
                                    alt="" className="pt-2 img-fluid small-image " onClick={(e) => show_image(e.target.src)}/>
                            </div>
                            <div className="row d-none d-md-block d-lg-block d-sm-none" role="button">
                                <img src="https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8dtbx7uhm6.jpeg?q=70&amp;"
                                    alt="" className="pt-2 img-fluid small-img " onClick={(e) => show_image(e.target.src)}/>
                            </div>
                            <div className="row d-none d-md-block d-lg-block d-sm-none" role="button">
                                <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/3/w/o/-original-imagh2gwyhf5s3sz.jpeg?q=70&amp;"
                                    alt="" className="pt-2 img-fluid small-img " onClick={(e) => show_image(e.target.src)}/>
                            </div>
                            <div className="row d-none d-md-block d-lg-block d-sm-none" role="button">
                                <img src="https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dekrgjzkg.jpeg?q=70&amp;"
                                    alt="" className="pt-2 img-fluid small-img " onClick={(e) => show_image(e.target.src)}/>
                            </div>
                            <div className="row d-none d-md-block d-lg-block d-sm-none" role="button">
                                <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/s/4/-original-imaguyzqufzat5jp.jpeg?q=70&amp;"
                                    alt="" className="pt-2 img-fluid small-img " onClick={(e) => show_image(e.target.src)}/>
                            </div>

                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-8 ">
                            <div className="row ">
                                <div className="col-md-12 ">
                                    <img src="https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70&amp;"
                                        alt="" className="img-fluid show-img" style={{height: "370px" }}/>

                                </div>
                                <div className="mt-2 d-flex align-items-center justify-content-center">
                                <Link to ="/ecomreact/cart" className="btn btn-primary btn-outline-info text-white me-2">Add to Cart</Link>
                                <Link to="/ecomreact/buyingpage" className="btn btn-light btn-outline-success text-dark  ">Buy
                                    Now</Link></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6  p-5">
                    <div className="row">
                        <h5 className="nav-item fs-6 h5" role="presentation">
                            <button className="nav-link active bh" id="home-tab" data-bs-toggle="tab"
                                data-bs-target="/home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
                                aria-selected="true" disabled>Home/Product/Mobiles And
                                Ascessories/Product_Details</button>
                        </h5>
                        
                    </div>
                    <div className="row">
                        <h3>Apple iPhone 12 Pro Max (Pacific Blue, 128 GB) </h3>
                        <h5 className="ri"> <span className="rating">4.5 <sup><i className='bx bx-star '></i></sup></span> Rating 1,270 Ratings & 102
                            Reviews</h5>
                        <h1><i className='bx bx-rupee'></i>400</h1>
                           
                    </div>
                    <div className="row  fs-6 offers">
                        <h5>Available offers</h5>

                        <h6><b>Bank Offer</b>5% Cashback on Flipkart Axis Bank CardT&C</h6>

                        <h6><b>Bank OfferGet</b>₹25* instant discount for the 1st Flipkart Order using Flipkart UPIT&C
                        </h6>

                        <h6>Buy for 2000 get ₹500 off your Next BuyT&C</h6>

                        <h6><b>Partner Offer </b>Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth
                    ₹20,000* <Link to="/" style={{textDecoration: 'none !important'}}>Know More</Link></h6>
                        <Link to="/" style={{textDecoration: 'none !important'}}>View 5 More</Link>
                    </div>
                    <div className="row pt-5 d-flex justify-center align-items-center">
                        <div className="col-md-1 bg-white bg-gradient-to-tr">
                            <img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg?q=90"
                                alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-5">
                            <h3 className="brand">Brand Warrenty For 1 Year <Link to="/"
                                    style={{textDecoration: 'none !important'}}>Know More</Link></h3>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">Delivery  </div>
                        <div className="col-md-10 text-secondary ">
                            <div className="row">

                                <div className="col-md-6">
                                    <form action="">
                                        <input type="text" className="form-control " placeholder="Pincode" />
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8 w-100">
                                    <h5 className="fs-6">Delivery By Tomorrow | <span style={{color: "green"}}>Free</span>
                                        <span className="text-decoration-line-through">$40</span>
                                    </h5>
                                    <h6><Link to="/" style={{textDecoration: 'none'}}>View Details</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-5  ">
                            <div className="col-md-3 text-secondary">Highilights</div>
                            <br/>
                            <ul>
                                <li>128 GB ROM</li>
                                <li>17.02 cm (6.7 inch) Super Retina XDR Display</li>
                                <li>12MP + 12MP + 12MP | 12MP Front Camera</li>
                                <li>A14 Bionic Chip with Next Generation Neural Engine Processor</li>
                                <li>Ceramic Shield | Industry-leading IP68 Water Resistance
                                    All Screen OLED Display</li>
                                <li>LiDAR Scanner for Improved AR Experiences, Night Mode Portraits</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <div className="col-md-10 text-secondary">Easy Payment Option</div>
                            <br/>
                            <ul>
                                <li>EMI starting from ₹4,216/month</li>
                                <li>Cash on Delivery</li>
                                <li>Net banking & Credit/ Debit/ ATM card</li>
                                <li style={{listStyle: "none"}}><Link to="/" style={{textDecoration: 'none'}}>Know
                                        More</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row shadow rounded-5 p-5">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12 text-center fs-4"> Specification</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <li className="list-unstyled fs-5">General</li>
                                    <div className="text-secondary">
                                        <li className="fs-5">in the box</li>
                                        <li className="fs-5">Model Name</li>
                                        <li className="fs-5">Model Id</li>
                                        <li className="fs-5">Color</li>
                                        <li className="fs-5">Browse Type</li>
                                        <li className="fs-5">Sim Type</li>
                                        <li className="fs-5">Hibrid Sim Slot</li>
                                        <li className="fs-5">Touchscreen</li>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <ul>
                                        <li className=" fs-6">iPhone, USB-C to Lightning Cable, Documentation</li>
                                        <li className=" fs-6">iPhone 12 Pro Max</li>
                                        <li className=" fs-6">MGDA3HN/Link</li>
                                        <li className=" fs-6">Pacific Blue</li>
                                        <li className=" fs-6">Smartphones</li>
                                        <li className=" fs-6">None</li>
                                        <li className=" fs-6">None</li>
                                        <li className=" fs-6">Yes</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
