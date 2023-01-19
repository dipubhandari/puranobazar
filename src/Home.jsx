import React from 'react'
import useState from "react";
import Banner from './component/banner/Banner'
import Footer from './component/Footer/Footer'
import Header from './component/header/Header'
import Product from './component/products/Products'
import './Home.css'


const Home = (props) => {
  // state for search product get from header
  const [searchProduct, setProduct] = React.useState('')
  // function for search product get from header
  const Find = (key) => {
    setProduct(key)

  }
  return (
    <div className='homecontainer'>


      <Header search={Find} />
      <div className="banner">
        <Banner />
      </div>
      {/* banner end */}
      <main>
        <p>
          <Product searchProduct={searchProduct} isloggedIn={props.isloggedIn} />
        </p>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Home