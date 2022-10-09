import React,{useState} from 'react'
import { apis } from '../endpoints'

function AddProduct() {
    const[name,setName] = useState("")
    const[price,setPrice] = useState("")
    const[category,setCategory] = useState("")
    const[company,setCompany] = useState("")
    const[err,setErr] = useState(false)

    const addProduct = async () =>{
        if(!name || !price || !category || !company){
            setErr(true)
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch(apis.addProduct,{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json();
        setName('')
        setPrice('')
        setCompany('')
        setCategory('')
        alert('Product has been added successfully!')
        console.log(result)
    }
  return (
    <div className='product'>
        <h1>Add Product
            <input value={name} onChange={(e)=>{setName(e.target.value)}} className='input-box' type="text" placeholder='Enter product name' />
            {err && !name && <span className='err'>Enter valid name</span>}
            <input value={price} onChange={(e)=>{setPrice(e.target.value)}} className='input-box' type="text" placeholder='Enter product price' />
            {err && !price && <span className='err'>Enter valid price</span>}
            <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className='input-box' type="text" placeholder='Enter product category' />
            {err && !category && <span className='err'>Enter valid category</span>}
            <input value={company} onChange={(e)=>{setCompany(e.target.value)}} className='input-box' type="text" placeholder='Enter product company' />
            {err && !company && <span className='err'>Enter valid company</span>}
            <button onClick={addProduct} className='signup-btn'>Add Product</button>
            
        </h1>
    </div>
  )
}

export default AddProduct