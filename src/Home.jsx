import React from 'react'
import Banner from './component/banner/Banner'
import Footer from './component/Footer/Footer'
import Header from './component/header/Header'
import Product from './component/products/Products'
import './Home.css'
const Home = () => {
  return (
    <div className='homecontainer'>
      {/* Header */}
      <section className="header">
        <Header />
      </section>
    
    <div className="banner">
        <Banner />
    </div>
      {/* banner end */}
      <main>
        <p>
          <Product />
        </p>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Home