import {useState,useEffect} from "react"
import {useLocation} from "react-router-dom"//npm install react-router-dom
const ProductDetails=()=>{
    const location=useLocation()
    const {id}=location.state || null
    const [card,setcard]=useState({})
    useEffect(()=>{
        if(id){
          fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setcard(json))
        }

    },[])
    return(
        <div>
            <p>Product details page</p>
            <p>{card.category}</p>
            <img src={card.image} style={{width:"300px",height:"300px"}}/>
            <p>{card.title}</p>
            <p>{card.price}</p>
        </div>
    )
}
export default ProductDetails