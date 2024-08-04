import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
// import ProductDetails from './ProductDetails'

export default function Products() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const listStyle = {
        listStyle: "none"

    }

    // async function productApiResponse() {
    //     await fetch('https://fakestoreapi.com/products?limit=24')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data); // Now you should see the fetched data
    //             setProducts(data);
    //         })
    //         .catch(error => {
    //             console.log(error.message || 'Api Responce Error');
    //         });
    // }
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await
                    fetch('https://fakestoreapi.com/products?limit=8');
                const data = await response.json();
                // console.log(data)
                setProducts(data);
            } catch (error) {
                console.log(error.message || 'Internal Server Error ' || 'Internet Connection Error ' || 'Api Response error');
            } finally {
                setIsLoading(false)
            }
        }
        fetchData();
    }, []);
    return (
        <div>

            <section className="product  pb-5 mb-5" id="product">
                <div className="glass container ">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 ">
                            <div className="row" style={{ flexDirection: " row !important" }}>
                                <div className="bg-body-tertiary bg-opacity-50 container pt-3 text-black w-50">
                                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions"
                                        aria-labelledby="offcanvasWithBothOptionsLabel">
                                        <div className="offcanvas-header">
                                            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Filters</h5>
                                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            <hr />
                                            <h4>Catagory</h4>
                                            <div className="container text-secondary">
                                                Mobiles And Ascessories
                                            </div>
                                            <h4>Brand</h4>
                                            <div className="container text-secondary" style={listStyle}>
                                                <li> <input type="checkbox" name="" id="" />Apple</li>
                                                <li> <input type="checkbox" name="" id="" />Xiaomi</li>
                                                <li> <input type="checkbox" name="" id="" />Realme</li>
                                                <li> <input type="checkbox" name="" id="" />Vivo</li>
                                                <li> <input type="checkbox" name="" id="" />Oppo</li>
                                            </div>
                                            <h4>Ratings</h4>
                                            <div className="container text-secondary" style={listStyle}>
                                                <li> <input type="checkbox" name="" id="" />4 &diams; Plus</li>
                                                <li> <input type="checkbox" name="" id="" />3 &diams; Plus</li>
                                            </div>
                                            <h4>Ram</h4>
                                            <div className="container text-secondary" style={listStyle}>
                                                <li> <input type="checkbox" name="" id="" />1Gb And More</li>
                                                <li> <input type="checkbox" name="" id="" />2Gb and More </li>
                                                <li> <input type="checkbox" name="" id="" />4Gb And More</li>
                                                <li> <input type="checkbox" name="" id="" />8Gb and More </li>

                                            </div>
                                            <h4>Storage</h4>
                                            <div className="container text-secondary" style={listStyle}>
                                                <li> <input type="checkbox" name="" id="" />64 Gb And More</li>
                                                <li> <input type="checkbox" name="" id="" />128 Gb and More </li>
                                                <li> <input type="checkbox" name="" id="" />256 Gb And More</li>
                                                <li> <input type="checkbox" name="" id="" />512 Gb and More </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sortby" id="sortBy">
                                    <div className="btn-flex d-flex justify-content-center align-content-center w-100">
                                        <button className="btn btn-info btn-outline-warning text-white w-50" type="button" data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Filter</button>
                                        <button className="btn btn-info btn-outline-warning text-white w-50" type="button" data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasWithBothOptions1" aria-controls="offcanvasWithBothOptions">Sort
                                            By</button>
                                    </div>
                                    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions1"
                                        aria-labelledby="offcanvasWithBothOptionsLabel">
                                        <div className="offcanvas-header">
                                            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Sort By</h5>
                                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            <input type="checkbox" name="" id="" className="me-1" />Relevance <br />
                                            <hr />
                                            <input type="checkbox" name="" id="" className="me-1" />Popularity <br />
                                            <hr />
                                            <input type="checkbox" name="" id="" className="me-1" />Price Low-high <br />
                                            <hr />
                                            <input type="checkbox" name="" id="" className="me-1" />Pice High-Low <br />
                                            <hr />
                                            <input type="checkbox" name="" id="" className="me-1" />Newest First <br />
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row container">
                                <h5 className="text-primary">Showing 1 ... 8 of 74 Result</h5>
                            </div>
                            <hr />


                            {
                                isLoading ? (
                                    <div className="d-flex justify-content-center">
                                        <div className="spinner-border text-success d-flex justify-content-center" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div></div>
                                ) :
                                (
                                        products.map((product) => {
                                            return <div className="row m-2 border border-dark-subtle mt-1 " id='S' key={product.id}>
                                                <div className="col-md-3">
                                                    <img src={product.image} alt=""
                                                        className="img-fluid w-75 h-100  mt-1" />
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <h3 className="fs-2">{product.title}</h3>
                                                                <p className="card-text">
                                                                    <li style={listStyle} className='text-justify'>Category : {product.category}</li>
                                                                    <li style={listStyle} className='text-justify'>{product.description}</li>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12 pt-2 mb-2 m-2 p-2">
                                                                <Link to='/ecomreact/product/productdetails' className="btn btn-secondary btn-outline-info text-white me-2">View
                                                                    Details</Link>
                                                                <Link to="/ecomreact/cart" className="btn btn-info btn-outline-secondary text-white me-2">Add to
                                                                    Cart</Link>
                                                                <Link to="/ecomreact/buyingpage" className="btn btn-primary btn-outline-success text-white">Buy</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="col-md-12">
                                                        <h1 className="card-head fs-3">{product.price}</h1>
                                                    </div>
                                                    <li className="nav-link fs-5" role="button" style={{ listStyle: "none", fontSize: "12px !important" }}> Delivery
                                                        Free</li>
                                                    <li className="nav-link fs-5 " role="button"
                                                        style={{ listStyle: "none", fontSize: "12px !important", color: "green" }}> Save
                                                        Extra With
                                                        Combo offers</li>
                                                    <li className="nav-link fs-6"
                                                        style={{ listStyle: 'none', color: 'red', fontSize: '12px !important', cursor: 'pointer' }}>
                                                        Only
                                                        One Left </li>
                                                    <li className="nav-link fs-5" role="button" style={{ listStyle: "none", fontSize: "12px !important" }}> Delivery
                                                        Free</li>
                                                    <li className="nav-link fs-6" role='banner' style={{ listStyle: "none", fontSize: "10px !important" }}> <span className='rating me-1'>{product.rating.rate}<sup><i class='bx bx-star '></i></sup></span> Total rating {product.rating.count}</li>

                                                </div>
                                            </div>

                                        }))
                            }
                            {/* <div className="col-md-12 mt-2 mb-2">
                                <ul className="d-flex nav-underline ps-1 pe-1" style={{ listStyle: "none", transition: '5s ease' }}>
                                    <li className="nav-item p-1 ps-2 pe-2" style={{ backgroundColor: "aliceblue" }}><Link href="#"
                                        className="nav-link text-dark">1</Link></li>
                                    <li className="nav-item"><Link href="#" className="nav-link text-dark">2</Link></li>
                                    <li className="nav-item"><Link href="#" className="nav-link text-dark">3</Link></li>
                                    <li className="nav-item"><Link href="#" className="nav-link text-dark">4</Link></li>
                                    <li className="nav-item"><Link href="#" className="nav-link text-dark">5</Link></li>
                                    <li className="nav-item"><Link href="#" className="nav-link text-dark">6</Link></li>
                                    <li className="nav-item"><Link href="#" className="nav-link text-dark">.</Link></li>
                                    <li className="nav-item"><Link href="#" className="nav-link text-dark">.</Link></li>
                                    <li className="nav-item"><Link href="#" className="nav-link text-dark">.</Link></li>
                                    <li className="nav-item"><Link href="#" className="nav-link text-dark">24</Link></li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                </div>
            </section>
        </div>
    )
}
