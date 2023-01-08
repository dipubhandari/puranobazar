import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'; import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import React, { useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import './post.css'
import Footer from '../Footer/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import district, { ward } from './data'
import axios from 'axios'
import Header from '../header/Header';

const Post = () => {
    // const getting the form data

    const [input, setInput] = React.useState({})


    const [sellNotification, setSellNotification] = useState()

    //   getting email from localstrorage
    const email = JSON.parse(localStorage.getItem('user')).email
    console.log(email)

    // handle funtion on change inputs

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value

        setInput({ ...input, [name]: value })
        console.log(input)

    }
    // handle image
    const file1 = function (e) {
        const name = e.target.name
        const value = e.target.files
        console.log(input)
        setInput({ ...input, [name]: value })
    }
    async function sell(e) {
        e.preventDefault()
        const formData = new FormData()

        formData.append('name', input.name)
        formData.append('price', input.price)
        // checking if there is data in input file or not so that no 
        if (input.file) {
            for (let i = 0; i < input.file.length; i++) {
                formData.append("file", input.file[i]);
            }
        }

        formData.append('email', email)
        formData.append('description', input.description)

        formData.append('categories', input.categories)
        formData.append('district', input.district)
        formData.append('ward', input.ward)
        // checking the all inputs are entered or not 
        if (!(input.file && input.district && input.name)) {
            notify('Please check all the fields')
        }
        else {

            const post = await axios.post('http://localhost:5000/selling', formData)
                .then((response) => {
                    console.log(response.data.result)
                    notify(response.data.result)

                    setInput('')
                    // setInput()
                }).catch((problem) => {
                    console.log(problem)
                })
            // }
        }
    }


    const notify = (event) => toast(event);


    return (
        <div>
            <Header />
            <ToastContainer />
            {/* Post  */}
            <form action="" encType='multipart/form-data'>
                {/* <input type="text" name='name' /> */}

                <section className="post">
                    <div className=''>
                        <h1 className='heading'> <DriveFolderUploadIcon /> SELL PRODUCT AND EARN <CurrencyRupeeIcon /></h1>

                        <select name="categories" id=""

                            onChange={handleChange}>
                            <option value="mobile">Mobile</option>
                            <option value="garment">Clothes</option>
                            <option value="books">Books</option>
                            <option value="device">Devices</option>
                            <option value="other">Others</option>
                        </select>

                        <select name="district" id=""
                            onChange={handleChange}>

                            {
                                district.map((e) => {
                                    return <>

                                        <option value={e}>{e}</option></>
                                })
                            }
                        </select>

                        <select name="ward" id="" onChange

                            ={handleChange}
                        >
                            {
                                ward.map((e) => {
                                    return <>

                                        <option value={e}>Ward No.{e}</option></>
                                })
                            }
                        </select>


                    </div>
                    <div className='post-main'>
                        <input type="text" placeholder='Write product name'
                            value={input.name || ''} className='postinput'
                            name='name' onChange={handleChange} />

                        <input type="number" placeholder='Enter you want to sell Price'
                            value={input.price || ''} className='postinput'
                            name='price' onChange={handleChange}
                        />
                        <label htmlFor="file"><CloudUploadIcon /> <b className='upload-topic'>upload file</b></label>
                        <input type="file" id='file' name="file" multiple required
                            onChange={file1}
                            className='file' />

                        <textarea name="description" onChange={handleChange} id="" placeholder='Enter about the product / full features / and so on'
                            value={input.description || ''} cols='44' rows="10" pl></textarea>
                        {/*
                        //     className='fileicon'  id="" />
                        // <input type="file" name="file"
                        //     className='fileicon' multiple id="" /><input type="file" name="file"
                        //         className='fileicon' multiple id="" />
                        // <input type="file" name="file"
                        //     className='fileicon' multiple id="" />
                        // <input type="file" name="file"
                        //     className='fileicon' multiple id="" />
                        // <input type="file" name="file"
                        //     className='fileicon' multiple id="" />
                        // <input type="file" name="file"
                        //     className='fileicon' multiple id="" />
                        // <input type="file" name="file"
                        //     className='fileicon' multiple id="" /> */}
                    </div>
                </section>
                <input type="submit" onClick={sell}


                    className='sell-btn' value='Sell This Product' />
            </form>
            {sellNotification}
            <Footer />
        </div>
    )
}

export default Post