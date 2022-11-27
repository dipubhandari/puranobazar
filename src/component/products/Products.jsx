import GradeIcon from '@mui/icons-material/Grade';
import React, { useState } from 'react'
import ProductDetails from './Productdata';
import './Product.css'
import { Link } from 'react-router-dom';
const Product = (props) => {

    // all the product fetch from api
    // const [ProductDetails,setProductDetails] = useState([])

    return (
        <div className='container'>
            {/*  */}
            {ProductDetails.map((product, index) => {
                return <Link to={`/product-detail/${product.id}`} className='link'>

                    <div className='data link'>
                       
                        <span className="datapic">
                            <img src={product.img} alt="" className="image" />
                        </span>
                        <div>
                            <span className='price'>Rs.{product.mrp}</span>

                            <span className='data-name'>{product.name}</span>
                            <section className="productfooter">
                                <p className='location'>Noida</p>
                                <p className='date'>23 jan 2022</p>
                            </section>
                        </div>
                         
                    </div>
                </Link >
            })}




        </div >

    )
}

export default Product