import React from 'react'
import '../App.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const tabStyle = {
        overflowX: "hidden !important"
    }
    const productStyle = {
        zIndex: -1
    }
    const cardStyle = {
        position: "relative",
        top: "30px"
    }
    const [api, setApi] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect( ()=>
        async function apiFetchData() {
            try
            {const response = await fetch('https://fakestoreapi.com/products?limit=4')
                
            const data = await response.json()
            setApi(data)}catch(error){
                console.log(error.message)
            }finally{
                setLoading(false)
            }
        
        apiFetchData()}
        , []);


    return (
        <div>
            <div className="tab-pane fade show active w-100" id="home-tab-pane" role="tabpanel" style={tabStyle} aria-labelledby="home-tab"
                tabIndex="0">
                <section className="home " id="home">
                    <div className="position-absolute">
                        <div className="row">
                            <div id="carouselExample" className="carousel slide w-100">
                                <div className="carousel-inner">
                                    <div className="carousel-item active ">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/GW/SVD/Apr/Hero/Unrec-XGL-3-3000._CB561760131_.jpg"
                                            className="d-block w-100  " alt="..." />
                                    </div>
                                    <div className="carousel-item ">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/augatf23/hsbcunrec/WA_WW_2x._CB580708889_.jpg"
                                            className="d-block w-100 " alt="..." />
                                    </div>
                                    <div className="carousel-item ">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/sharooq1/Gw2/5300---Kitchen---Citi-bank-stripe-update--under_699_PC-3000_HDFC._CB561474676_.jpg"
                                            className="d-block w-100 " alt="..." />
                                    </div>
                                    <div className="carousel-item ">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/march/brands/GW/Under_1499_Tallhero_3000x1200._CB561212093_.jpg"
                                            className="d-block w-100 " alt="..." />
                                    </div>
                                    <div className="carousel-item ">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg "
                                            className="d-block w-100 " alt="..." />
                                    </div>
                                    <div className="carousel-item ">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/revised/final/Skincare-PC_Rev._CB561514457_.jpg "
                                            className="d-block w-100 " alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                                    data-bs-slide="prev">
                                    <i className="bx bx-chevron-left text-dark bg-transparent"></i>
                                    <span className="" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                                    data-bs-slide="next">
                                    <i className="bx bx-chevron-right text-dark bg-transparent"></i>
                                    <span className="visually-hidden ">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="product  " id="product">
                    <div className="container  glass " style={productStyle}>
                        <div className="row ">
                            {
                                Loading ?
                                    (<div className="d-flex justify-content-center position-absolute top-50 z-1">
                                        <div className="spinner-border text-primary d-flex justify-content-center " role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div></div>)
                                :
                               ( api.map((data) => {
                                    return <div className="col-sm-6  mt-5 pt-5 col-md-3 col-xs-12 mt-sm-3 mt-xs-1" style={cardStyle} key={data.id}>
                                        <div className="card mt-5 w-auto">
                                            <img src={data.image}
                                                className="card-img-top image-fluid" alt="..."  height={'300px'}/>
                                            <div className="card-body">
                                                <h5 className="card-title">{data.title.slice(0,25)}</h5>
                                                <p className="card-text">{data.description.slice(0,120)}...
                                                </p>
                                                <Link to="/ecomreact/cart" className="btn btn-primary">Add to Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                }))
                            }      
                        </div>
                    </div>
                </div>
                <div className="offerdiv" id="offerdiv">
                    <h1 className="text-center text-uppercase pt-5 mt-md-5 d-flex align-content-center justify-content-center" >
                        <span> <i className='bx bxs-offer bx1'></i></span><span> Offers </span> <span><i className='bx bxs-offer bx1'></i></span></h1>
                    <div className="row mb-2">
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9277c7d894d50bef.jpg?q=20"
                                        className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/25e306273d3609bc.jpg?q=20"
                                        className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/07e1b1bafa69088c.jpg?q=20"
                                        className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ed4591126ff69acb.png?q=20"
                                        className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6ae41fa34edd171d.png?q=20"
                                        className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5a51a6ffa84d75a7.png?q=20"
                                        className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1686434dbad73524.jpg?q=20"
                                        className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <section className="highlight mb-5 container" id="highlight">
                    <div className="row ">
                        <div className="row">
                            <h1 className="text-center text-uppercase">↗️ Top electronics products↗️</h1></div>
                        <div className="col-md-4 mb-3 col-sm-6 col-lg-4 col-xs-12 ">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/4d24acf7af61c8cb.jpg?q=20"
                                alt="" srcSet="" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-3 col-sm-6 col-lg-4 col-xs-12  ">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/38b9889b3507a4dc.jpg?q=20"
                                alt="" srcSet="" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-3 col-sm-6 col-lg-4 col-xs-12  ">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/16fcdf9eafcb5e5d.jpg?q=20"
                                alt="" srcSet="" className="img-fluid w-100" />
                        </div>
                        <div className="row">
                            <h1 className="text-center text-uppercase d-flex justify-content-center align-content-center"> <i className='bx bxs-offer bx1'></i> daily appliances <i className='bx bxs-offer bx1'></i></h1></div>
                        <div className="col-md-4 mb-3 col-sm-6 col-lg-4 col-xs-12  ">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8c847eea35140ed6.jpg?q=20"
                                alt="" srcSet="" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-3 col-sm-6 col-lg-4 col-xs-12  ">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/3c566981dbce57e9.jpg?q=20"
                                alt="" srcSet="" className="img-fluid" />
                        </div>

                        <div className="col-md-4 mb-3 col-sm-6 col-lg-4 col-xs-12  ">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/5f2f515a4cf8eee2.jpg?q=20"
                                alt="" srcSet="" className="img-fluid" />
                        </div>


                    </div>
                </section>
                <div className="bestpick" id="bestpick">

                    <div className="row">
                        <div className="row">
                            <h1 className="text-center text-uppercase">&nbsp;👕👚🎽 Fashion Metamorphosis: Elevate Your Look! 👖🩳🩳</h1></div>
                        <div className="col-md-6 col-sm-6 col-sx-12 mb-2">
                            <Link to="/"><img
                                src="https://images.bewakoof.com/uploads/grid/app/720x420-Midsize-bannner-Combos--1--1704012294.jpg"
                                alt="" srcSet="" className="image-fluid w-100" /></Link>
                        </div>
                        <div className="col-md-6 col-sm-6 col-sx-12 mb-2">
                            <Link to="/"><img
                                src="https://images.bewakoof.com/uploads/grid/app/Official-Merch-store-Desktop-banner-1700470826-1701771559.webp"
                                alt="" srcSet="" className="image-fluid w-100" /></Link>
                        </div>
                        <div className="col-md-6 col-sm-6 col-sx-12 mb-2">
                            <Link to="/"><img
                                src="https://images.bewakoof.com/uploads/grid/app/Customise-Desktop-midsize-banner-1704439012.jpg"
                                alt="" srcSet="" className="image-fluid w-100" /></Link>
                        </div>
                        <div className="col-md-6 col-sm-6 col-sx-12 mb-2">
                            <Link to="/"><img
                                src="https://images.bewakoof.com/uploads/grid/app/Sizes-6xl-Plus-Size-Desktop-midsize-Banner-1706690349.jpg"
                                alt="" srcSet="" className="image-fluid w-100" /></Link>
                        </div>
                    </div>
                </div>
                <div className="homefastfooter w-100 " id="homefastfooter">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="member mb-2 mt-2 ms-3 " id="member">
                                <Link to="/"><img
                                    src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg"
                                    alt="" srcSet="" className="img-fluid" /></Link>
                            </div>
                        </div>
                        <div className="col-12 ">
                            <div className="row">
                                <div className="vote mb-2 mt-2 ms-3 " id="vote">
                                    <Link to="/"><img
                                        src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
                                        alt="" srcSet="" className="img-fluid" /></Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>               </div>
    )
}
