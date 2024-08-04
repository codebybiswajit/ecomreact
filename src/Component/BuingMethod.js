import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function BuingMethod() {
  return (
    <div>
      <div class="container mb-3">
            <div class="row">
                <div class="col-md-2"></div>
            <div class="col-md-8">
            <div class="row p-3 w-max bg-dark-subtle bg-gradient rounded-1 mb-2  form mt-5 ms-1 me-1">
                <h1>Payment Method</h1>
                
                <select name="paymentmethod" id="paymentmethod"class = "form-select w-25 ms-1">
                    <option value="payment-way" >Credeit Card</option>
                    <option value="payment-way" >Debit Card</option>
                    <option value="payment-way">UPI</option>
                    <option value="payment-way">Payment On Delivery (POD)S</option>
                    
                </select>
            </div>
        </div><div class="col-md-2"></div>
        </div>
            
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                <form action="" class="bg-dark-subtle p-5 w-max bg-gradient rounded-1">
                    <h4 class="mb-3 text-center">Payment Details</h4>
                    <div class="row"  >
                        <img src="https://sitegreat.b-cdn.net/wp-content/uploads/2020/04/Logos-01-1536x319.png" alt="" srcset=""  className='w-50'/>
                    </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="cc-name">Name on card</label>
                                <input type="text" class="form-control" id="cc-name" placeholder="" required="" />
                                <small class="text-muted">Full name as displayed on card</small>
                                <div class="invalid-feedback">
                                    Name on card is required
                                </div>
                            </div>
                            <div class="col-md-6 mb-3 ">
                                <label for="cc-number">Card number</label>
                                <input type="text" class="form-control" id="cc-number" placeholder="" required="" />
                                <div class="invalid-feedback">
                                    Credit card number is required
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 mb-3 w-50">
                                <label for="cc-expiration">Expiration</label>
                                <input type="text" class="form-control" id="cc-expiration" placeholder="" required="" />
                                <div class="invalid-feedback">
                                    Expiration date required
                                </div>
                            </div>
                            <div class="col-md-3 mb-3 w-50">
                                <label for="cc-expiration">CVV</label>
                                <input type="text" class="form-control" id="cc-cvv" placeholder="" required="" />
                                <div class="invalid-feedback">
                                    Security code required
                                </div>
                            </div>
                        </div>
                    
                    <input type="submit" value="Pay Now" class="btn btn-success" />
                    <Link to="/ecomreact/buyingpage" class="btn btn-outline-danger text-white ms-2">Back</Link>
                </form></div>
                <div class="col-md-2"></div>
            </div>
                
            </div>
    </div>
  )
}
