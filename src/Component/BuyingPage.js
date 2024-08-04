import React from 'react'
import { Link } from 'react-router-dom'

export default function BuyingPage() {
  return (
    <div>
      <div className="container tp mt-5 bg-dark-subtle bg-gradient text-dark p-5 rounded-1">
            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0" width = "70%">Apple iPhone 12 Pro Max (Pacific Blue)</h6>
                                <small className="text-muted">128 GB ROM <br/>
                                    17.02 cm (6.7 inch) Super Retina XDR Display</small>
                            </div>
                            <span className="text-muted">$400</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0" width = "70%">Delivery Free </h6>
                            </div>
                            <span className="text-muted">$5</span>
                        </li>
                        
                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>PROMOCODE005</small>
                            </div>
                            <span className="text-success">-$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (RUPEE)</span>
                            <strong><i class='bx bx-rupee'></i>400</strong>
                        </li>
                    </ul>

                    <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code"/>
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-info">Redeem</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" novalidate>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="first name" value="" required />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="last name" value="" required />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="username">Phone No </label>
                            <input type="tel" name="tel" id="tel" className="form-control" required placeholder="enter phone no" />
                            <div className="invalid-feedback">
                                Mobile Number is Necessary For Communication
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="ecomreact@gmail.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address htmlFor shipping updates.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="plot no Main St" required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                        </div>

                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="country">Country</label>
                                <select className="custom-select htmlForm-select d-block w-100" id="country" required >
                                    <option value="">Choose...</option>
                                    <option>India</option>
                                    <option>Usa</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="state">State</label>
                                <select className="custom-select htmlForm-select d-block w-100" id="state" required>
                                    <option value="">Choose...</option>
                                    <option>Delhi</option>
                                    <option>Odisha</option>
                                    <option>Kolkata</option>
                                    <option>Karnatak</option>
                                    <option>Bengalur</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="zip">Pin Code</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required />
                                <div className="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="same-address" />
                            <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my
                                billing address</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="save-info" />
                            <label className="custom-control-label" htmlFor="save-info">Save this inhtmlFormation htmlFor next
                                time</label>
                        </div>
                        <hr className="mb-4"/>
                        <Link to="/ecomreact/buy" className="btn btn-success  text-white" type="submit">
                            Continue To Pay</Link>
                        
                        <Link to="/ecomreact/products" className="btn btn-secondary btn-outline-danger text-white" >Close

                        </Link>
                    </form>
                </div>
            </div>
            <h6 className="text-center mt-5"><i className='bx bxs-check-shield fs-5'></i> Safe And Secure Returns Easy
                Returns, 100% Authentic Product</h6>
        </div>
    </div>
  )
}
