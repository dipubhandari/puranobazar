import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'; import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import React from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import './post.css'
import Footer from '../Footer/Footer'
import district, { ward } from './data'
import axios from 'axios'

const Post = () => {
    // const getting the form data

    const [input, setInput] = React.useState({})


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
        const value = e.target.files[0]
        setInput({ ...input, [name]: value })
    }
    async function sell(e) {
        e.preventDefault()
        const formData = new FormData()

        // formData.append('file', input.file)
        // formData.append('file2', input.file2)
        // formData.append('file3', input.file3)
        formData.append('name', input.name)
        formData.append('price', input.price)

        formData.append('file', input.file)
        formData.append('email', email)
        formData.append('description', input.description)
        // formData.append('file5', input.file5)
        // formData.append('file6', input.file6)
        // formData.append('file7', input.file7)
        // formData.append('file8', input.file8)
        formData.append('categories', input.categories)
        formData.append('district', input.district)
        formData.append('ward', input.ward)
        console.log(input)
        console.log(input)
        const post = await axios.post('http://localhost:5000/selling', formData)
            .then((response) => {
                console.log(response.data)
            }).catch((problem) => {
                console.log(problem)
            })
    }

    return (
        <div>

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
                        <input type="text" placeholder='Enter the name'
                            value={input.name || ''} className='postinput'
                            name='name' onChange={handleChange} />

                        <input type="number" placeholder='Enter Price'
                            value={input.price || ''} className='postinput'
                            name='price' onChange={handleChange}
                        />
                        <label htmlFor="file"><CloudUploadIcon /> <b className='upload-topic'>upload file</b></label>
                        <input type="file" id='file' name="file" multiple onChange={file1}
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
                <input type="button" onClick={sell}


                    className='sell-btn' value='Sell This Product' />
            </form>
            <Footer />
        </div>
    )
}

export default Post