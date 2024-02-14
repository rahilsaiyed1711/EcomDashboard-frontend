import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const UpdateProduct = function () {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [catagory, setcatagory] = useState("");
    const [company, setCompany] = useState("");
    
    const navigate = useNavigate();
    const params = useParams();
    useEffect(()=>{
        getProductDetails();
    },[])
    const getProductDetails = async ()=>{
        //console.log(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result= await result.json();
        setName(result.name)
        setPrice(result.price)
        setcatagory(result.catagory)
        setCompany(result.catagory )
       //console.log(result);

    }
    const updateProduct = async () => {
     console.log(name , price, catagory, company);

    }
    return (
        <div className="product">
            <h1 className="heading">UPDATE PRODUCT</h1>
            <input type="text" placeholder="Enter Product Name" className="inputBox" value={name}
                onChange={(e) => { setName(e.target.value) }}
            />
            
            <input type="text" placeholder="Enter Product Price" className="inputBox" value={price}
                onChange={(e) => { setPrice(e.target.value) }}
            />
            
            <input type="text" placeholder="Enter Product Catagories" className="inputBox" value={catagory}
                onChange={(e) => { setcatagory(e.target.value) }}
            />
           
            <input type="text" placeholder="Enter Product Company" className="inputBox" value={company}
                onChange={(e) => { setCompany(e.target.value) }}
            />
            
            <button onClick={updateProduct} className="signbtn" type="submit" >Update Product</button>
        </div>
    )
};


export default UpdateProduct;