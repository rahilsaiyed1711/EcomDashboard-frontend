import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const AddProduct = function () {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [catagory, setcatagory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const addProduct = async () => {
        if (!name || !price || !catagory || !company) {
            setError(true);
            return false;
        }
        //console.log(name, price, catagory, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://127.0.0.1:5000/add-product", {
            method: 'post',
            body: JSON.stringify({ name, price, catagory, company, userId }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        //console.log(result);
        if (result) {
            alert("Product Added");
            navigate("/")
        }

    }
    return (
        <div className="product">
            <h1 className="heading">ADD PRODUCT</h1>
            <input type="text" placeholder="Enter Product Name" className="inputBox" value={name}
                onChange={(e) => { setName(e.target.value) }}
            />
            {error && !name && <span className="error-msg">Enter valid name</span>}
            <input type="text" placeholder="Enter Product Price" className="inputBox" value={price}
                onChange={(e) => { setPrice(e.target.value) }}
            />
            {error && !price && <span className="error-msg">Enter valid price</span>}
            <input type="text" placeholder="Enter Product Catagories" className="inputBox" value={catagory}
                onChange={(e) => { setcatagory(e.target.value) }}
            />
            {error && !catagory && <span className="error-msg">Enter valid catagory</span>}
            <input type="text" placeholder="Enter Product Company" className="inputBox" value={company}
                onChange={(e) => { setCompany(e.target.value) }}
            />
            {error && !company && <span className="error-msg">Enter valid company</span>}
            <button onClick={addProduct} className="signbtn" type="submit" >Add Product</button>
        </div>
    )
};


export default AddProduct;