import React from 'react'
import '../App.css'

export default function About() {
  return (
    <div>
      <section className="aboutus m-5 p-4 ms-0 me-0 ps-0 pe-0 w-100 " style={{ overflowX: "hidden !important" }} id="aboutus">
        <h1 className="text-center">About Us</h1>
        <div className=" m-5 ">
          <div className="row ">
            <div className="col-md-6">
              <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-write-an-about-us-wip1.png?v=1618511825"
                alt="" srcSet="" className="img-fluid rounded" />
            </div>
            <div className="col-md-6 col-sm-3 col-xs-3  text-secondary">"All in One Shopping," a great place to
              find quality items at affordable
              prices. One of the things that sets "All in One Shopping" apart is their commitment to
              providing a wide variety of products that cater to different needs and preferences.
              Whether you're looking for the latest electronics, stylish fashion items, or practical
              home goods, you're sure to find something that suits your taste and budget.
              <br />
              One of the things that I appreciate about "All in One Shopping" is their dedication to
              quality. They understand that customers want to feel confident in their purchases, which
              is why they only work with reputable suppliers and manufacturers. This means that you
              can trust that every item you purchase from them is of the highest quality.
              <br />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12 col-sm-3 col-xs-3 text-sm-center text-md-start">
              <br />
              Another thing that I love about "All in One Shopping" is their customer service. They
              understand that shopping online can be impersonal, which is why they go out of their way
              to provide a personalized experience. Whether you have a question about a product or
              need help with an order, their team is always available to assist you.
              <br />
              Overall, "All in One Shopping" is a great place to find quality items at affordable
              prices. Their commitment to quality, variety, and customer service is unmatched, and I
              highly recommend checking them out the next time you're in the market for something new.
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
