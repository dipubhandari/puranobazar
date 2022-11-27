import React from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Header from '../header/Header'
import './productdetails.css'
import Footer from '../Footer/Footer'
import { useState } from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
const Productdetails = () => {
    // images for the data or items in array

    const image0 = 'https://images.hindustantimes.com/tech/img/2022/04/07/960x540/IMG_3281_1648269515816_1649300859649.jpg'
    const image1 = 'http://www.imgmobile.com/upfile/2020072819473848.jpg'
    const image2 = 'https://image.coolblue.nl/content/297fa85c9c6041b65709b0999833dfbb'

    const image3 = 'http://www.imgmobile.com/upfile/2020072819473848.jpg'
    const image4 = 'https://image.coolblue.nl/content/297fa85c9c6041b65709b0999833dfbb'
    const [currentproductImage] = React.useState([image1, image0, image2, image3, image4])

    const [index, setIndex] = useState(0)

    console.log(index)

    return (
        <div className='product_detail_container'>

            <Header />

            <section className="product_details_main">


                <section className="left___section">

                    <section className="images">
                        <ArrowCircleLeftIcon
                            onClick={() => {
                                if (index > 0) {
                                    setIndex(index - 1)
                                }
                            }}
                            className='arrow' />
                       
                        <img
                            src={currentproductImage[index]}
                           
                            alt="loadi"
                        />

                        <ArrowCircleRightIcon

                            type='button'
                            onClick={() => {
                                if (index < currentproductImage.length - 1) {
                                    setIndex(index + 1)
                                }

                            }}
                            className='arrow' value='Next'
                        />

                    </section>
                    <section className="small_img">
                        <span className='imgdiv'><img src={currentproductImage[0]} alt="loadi" /></span> <span className='imgdiv'><img src={currentproductImage[1]} alt="loadi" /></span>
                        <span className='imgdiv'><img src="https://856259.smushcdn.com/1853233/wp-content/uploads/2020/06/eCommerce-product-photography-hero-4-1.jpg?lossy=0&strip=0&webp=1" alt="loadi" /></span>
                        <span className='imgdiv'><img src="" alt="loadi" /></
                        span>
                        <span className='imgdiv'><img src="https://www.91-img.com/pictures/151966-v6-xiaomi-redmi-11-prime-5g-mobile-phone-medium-1.jpg?tr=q-80" alt="loadi" /></span>
                    </section>

                    <section className="productdes">
                        <p>
                            {/* <ArrowBackIcon />
                            <ArrowForwardIosIcon /> */}
                            The Description of the pro is here
                            The Description of the pro is here
                            The Description of the pro is here
                            The Description of the pro is here
                            The Description of the pro is here
                            The Description of the pro is here
                            The Description of the pro is here
                            The Description of the pro is here
                        </p>
                    </section>
                </section>


                <section className="right___section">
                    <section className="details">
                        <h4 className='price'>Rs. 00</h4>
                        <p className='data-detail'>Copy ben </p>
                        <span className='detail--footer'><p className='location'>Ilam</p><p className='date'>62 oct</p></span>
                    </section>



                    <section className="seller-detail">


                        <span className='seller--topic'>Seller Description</span>

                        <span className="profile">
                            <div className="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7tUEDHCN9kceiRx8WDfc9r0oLpxgSzTaiQLNyO6BNMVEAFNFvq-3UO6IXRYGPytb490&usqp=CAU" width='40px'
                                height='50px' alt="" /></div>
                            <div className="sellernameandtime">
                                <span className="name">Bipana</span>
                                <span className="join in">member since 29 jan 2022</span>
                            </div>
                        </span>

                        <button className='chatbutton'>Chat with seller</button>

                    </section>


                    <section className="map">


                    </section>


                </section>

            </section>
            <Footer />
        </div>
    )
}

export default Productdetails