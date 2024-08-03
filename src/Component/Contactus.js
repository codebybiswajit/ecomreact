import React from 'react'

export default function Contactus() {
    return (
        <div>
            <section className="contactus bg-dark text-white w-100  container-fluid" id="cu" style={{overflowX: 'hidden !important'}} >
                <div className="container pt-5
                    pb-5">
                    <div className="  row ">
                        <div className="col-md-2 d-none d-md-block d-sm-none"></div>
                        <div className="col-md-8">
                            <div className="row bg-secondary bg-gradient rounded">

                                <div className="col-md-6 d-none d-md-block d-lg-block d-sm-none">
                                    <img src="https://cdn-icons-png.flaticon.com/512/13658/13658441.png" alt=""
                                        srcSet="" className="img-fluid " />
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <form action="" className="bg-secondary bg-gradient rounded p-3">
                                        <div className="row ">
                                            <div className="col-md-6">
                                                <input type="text" className="form-control mb-2" placeholder="First Name" />
                                            </div>
                                            <div className="col-md-6 ">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <input type="tel" className="form-control mb-2" placeholder="Mobile Number" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" className="form-control" placeholder="Enter Your Email" />
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-12">
                                                <textarea name="message" id="message" cols="30" rows="10"
                                                    className="form-control" style={{resize:'none !important'}} 
                                                    placeholder="Message">Hello there, </textarea>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-12 w-100">
                                                <button className="btn btn-success w-100" type="submit"
                                                >Sent</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}
