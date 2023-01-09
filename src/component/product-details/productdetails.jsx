import React from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Header from '../header/Header'
import './productdetails.css'
import Footer from '../Footer/Footer'
import { useState } from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Googlemyap from '../Googelmap/map';
const Productdetails = () => {
    // images for the data or items in array

    const [currentproductdetails, setdetails] = useState({})

    let [image, setimage] = useState([]);
    // const image0 = productdetails.image[0]
    // small images
    const [currentproductImage, setcurrentimage] = React.useState([])

    const [index, setIndex] = useState(0)
    // const [curreShow] = useState()
    const location = useLocation()
    // products email who posted 
    const [email, setEMAILS] = useState('')
    //fetching the data based on url in the id

    useEffect(() => {
        async function getData() {
            const path = location.pathname.split('/')
            const id = path[path.length - 1]
            await axios.get(`/get-product-details/${id}`)
                .then((response) => {
                    setdetails(response.data.data)
                    setEMAILS(response.data.data.email)
                    const file = response.data.data
                    // setimage(response.data.data.images[0].filename)
                    const images = response.data.data.images.map((a, id) => {
                        return a.filename
                    })

                    setcurrentimage(images)
                    setimage(images)
                }).catch((er) => { })

        }
        getData()
    }, [])

    // getting the detail of the seller
    // console.log(currentproductdetails.email)

    const [seller, setSellerDetails] = useState({ name: "name", email: 'email' })

    useEffect(() => {

        const getSellerInfo = async (email) => {

            await axios.get(`/getuser/${email}`).then((response) => {
                (setSellerDetails(response.data[0]))
            })
        }
        getSellerInfo(email)
        console.log(image)
    }, [email])



    return (
        <div className='product_detail_container'>

            {/* <Header /> */}
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
                            src={`/uploads/${image[index]}`}

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
                        {/* <span className='imgdiv'> */}
                        {
                            currentproductImage.map((ele, z) => {
                                return <span className='imgdiv' id={(index == z) ? 'now' : null}>
                                    <img src={`/uploads/${image[z]}`} alt="" />
                                </span>
                            })
                        }
                    </section>

                    <section className="productdes">
                        <p>
                            {/* <ArrowBackIcon />
                            <ArrowForwardIosIcon /> */}
                            {currentproductdetails.description}
                        </p>
                    </section>
                </section>


                <section className="right___section">
                    <section className="details">
                        <h4 className='price'>Rs.{currentproductdetails.price}</h4>
                        <p className='data-detail'>{currentproductdetails.name} </p>
                        <span className='detailfooter'><p className='location'>{currentproductdetails.district}</p><p className='date'>{currentproductdetails.date}</p></span>
                    </section>



                    <section className="seller-detail">


                        <span className='seller--topic'>Seller Description</span>

                        <span className="profile">
                            <div className="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7tUEDHCN9kceiRx8WDfc9r0oLpxgSzTaiQLNyO6BNMVEAFNFvq-3UO6IXRYGPytb490&usqp=CAU" width='40px'
                                height='50px' alt="" /></div>
                            <div className="sellernameandtime">
                                <span className="name">{seller.name}</span>
                                <span className="join in">Contact: {seller.email}</span>
                            </div>
                        </span>

                        <button className='chatbutton'>Chat with seller</button>

                    </section>
                    <span className="name">Location of product</span>


                    <section className="map">


                        {/* google map */}
                        <Googlemyap />
                    </section>


                </section>

            </section>
            <Footer />
        </div>
    )
}

export default Productdetails