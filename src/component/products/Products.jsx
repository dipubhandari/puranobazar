import GradeIcon from '@mui/icons-material/Grade';
import React, { useEffect, useState } from 'react'
// import ProductDetails from './Productdata';
import './Product.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useStepperContext } from '@mui/material';
const Product = (props) => {

    // finding the add data from database
    const [ProductDetails, setProductDetails] = useState([{}])
    useEffect(() => {
        async function fetch() {
            await axios.get('/products')
                .then((response) => {
                    console.log(response)
                    //    var base64Flag = 'data:image/jpeg;base64,';
                    //    var imageStr = setProductDetails(response.imag.data.data)
                    setProductDetails(response.data)
                })

        }
        fetch()
    }, [])
    // search functionality
    const search = props.searchProduct

    useEffect(() => {
        async function find() {
            const find = await axios.get(`/search/${search}`)
                .then((response) => {
                    console.log(response.data)
                    setProductDetails(response.data)
                })
        }
        find()
    }, [search])


    return (
        <div className='container'>
            {/*  */}
            {ProductDetails.map((product, index) => {
                return <Link to={`/product-detail/${product._id}`} className='link'>

                    <div className='data '>

                        <span className="datapic">
                            <img src={`/uploads/${product.images}`} alt="" className="image" />
                        </span>
                        <div className='footer-data'>
                            <span className='price'>Rs.{product.price}</span>

                            <span className='data-name'>{product.name}</span>
                            <section className="productfooter">
                                <p className='location'>{product.district}</p>
                                <p className='date'>{product.date}</p>
                            </section>
                        </div>

                    </div>
                </Link >
            })}




        </div >

    )
}

export default Product