import GradeIcon from '@mui/icons-material/Grade';
import React, { useEffect, useState } from 'react'
// import ProductDetails from './Productdata';
import './Product.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useStepperContext } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Product = (props) => {

    // finding the add data from database
    const [ProductDetails, setProductDetails] = useState([{ images: [{ filename: '' }] }])


    useEffect(() => {
        async function fetch() {
            await axios.get('/products')
                .then((response) => {
                    setProductDetails(response.data)
                    console.log(response.data)
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
                    setProductDetails(response.data)
                }).catch(err => {

                })
        }
        find()
    }, [search])


    return (
        <div className='container'>
            {/*  */}
            {ProductDetails.map((product, index) => {
                return <Link to={`/product-detail/${product._id}`} className='link' key={index}>

                    <div className='data '>
                        <span className='fav' type='button'><FavoriteIcon /></span>
                        <span className='liked' type='button'><FavoriteIcon /></span>

                        <span className="datapic">

                            <img src={`/uploads/${product.images[0].filename}`} alt="loa" className="image" />

                        </span>
                        <div className='footer-data'>
                            <span className='price'>Rs.{product.price}</span>

                            <span className='data-name'>{product.name}...</span>
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