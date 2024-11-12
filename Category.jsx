import{useState,useEffect} from 'react'
 import {Link} from 'react-router-dom'

const Category=()=>{
    const[categories,setcategories]=useState([])
    const[filterdata,setfilterdata]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>console.log(json))
            
    },[])
    const handlecategory=async()=>{
        let response=await fetch('https://fakestoreapi.com/products/categories')
        let data=await response.json()
        setcategories(data)
    }
    useEffect(()=>{
        handlecategory()
    },[])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>res.json())
        .then(json=>console.log(json))
    })
    const handlefiltercategory=async(data)=>{
        let response=await fetch(`https://fakestoreapi.com/products/category/${data}`)
        let data2=await response.json()
        setfilterdata(data2)
    }
    return(
        <div>
            <h1>Fetching</h1>
            <div>
                {
                    categories.map((data)=>{
                        return(
                            <button onClick={()=>handlefiltercategory(data)}>{data}</button>
                        )

                    })
                }
            </div>
            <div style={{display:'grid',gridTemplateColumns:"400PX 400PX 400PX"}}>
            {
                filterdata.map((data)=>{
                    return(
                        <Link to="/Productdetails" state={{id:data.id}}>
                            <div key={data.id}>
                                <p>{data.Category}</p>
                                <p>{data.id}</p>
                                <img src={data.image} style={{width:"200px",height:"200px"}}/>
                                <p>{data.title}</p>
                                <p>{data.description}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
        </div>
    )
    

}
export default Category