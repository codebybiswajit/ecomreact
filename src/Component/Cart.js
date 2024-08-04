import React from 'react'

export default function Cart() {
  return (
    <div>
       <div class="container mt-5 mb-5 p-2 bg-dark-subtle bg-gradient">
            <div class="d-flex justify-content-center row card-holder">
                <div class="col-md-8">
                    <div class="p-2">
                        <h4>Shopping cart</h4>
                        <div class="d-flex flex-row align-items-center pull-right"><span class="mr-1 float-end">Sort
                                by:</span><span class="mr-1 font-weight-bold">Price</span><i class='bx bx-chevron-down'
                                style={{cursor: 'pointer'}}></i></div>
                    </div>
                    <div
                        class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded card-item">
                        <div class="mr-1"><img class="rounded cart_image"
                                src="https://th.bing.com/th/id/OIP.8QyP63oYyBti3Gf8PeBFZwHaHR?rs=1&pid=ImgDetMain"
                                width="70" alt='item_picture'/></div>
                        <div class="d-flex flex-column align-items-center product-details"><span
                                class="font-weight-bold">Basic T-shirt</span>
                            <div class="d-flex flex-row product-desc">
                                <div class="size mr-1"><span class="text-grey">Size:</span><span
                                        class="font-weight-bold">&nbsp;M</span></div>
                                <div class="color"><span class="text-grey">Color:</span><span
                                        class="font-weight-bold">&nbsp;Red</span></div>
                            </div>
                        </div>
                        <div class="d-flex flex-row align-items-center qty"><i class="bx bx-minus text-danger"></i>
                            <h5 class="text-grey mt-1 mr-1 ml-1">2</h5><i class="bx bx-plus text-success"></i>
                        </div>
                        <div>
                            <h5 class="text-grey">$20.00</h5>
                        </div>
                        <div class="d-flex align-items-center"><i class="bx bx-trash mb-1 text-danger"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
