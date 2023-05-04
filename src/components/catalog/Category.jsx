import React from 'react';
import './Category.css'
import { Link } from 'react-router-dom';
import man_product from '/src/assets/catalog/man_product.png'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { database } from "../../Firebase";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Category(props) {
    const id = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const q = query(collection(database, "product"), where("id", "==", id.category));
        const allProduct = await getDocs(q)
        let products = []
        allProduct.forEach(product => {
            products.push(product.data())
        })
        setProduct(products)
        console.log(products)
    }

                        
    const viewProducts = product.map((product, index) => {
    return (
        <div>
            <div className="product_container">
                            <div className='product_card'>
                                <Link to='/product/:1'>
                                    <img src={product.photo} alt="" />
                                    <div className='product_name_price'>
                                        <div className='product_name'>{product.name}</div>
                                        <div className='price'>{product.price} KGS</div>
                                    </div>
                                </Link>
                                {/* <div><button>Добавить в корзину</button></div> */}
                            </div>
            </div>
        </div>  
    )
    })
    // const viewProducts = product.map((product, index) => {
    //     return (
    //         <Card text="123123" key={index}>
    //             <Card.Img variant="top" src={product.photo} />
    //             <Card.Body>
    //                 <Card.Title>{product.name}</Card.Title>
    //                 <Card.Text>
    //                 {product.description}
    //                 </Card.Text>
    //             </Card.Body>
    //             <Card.Footer>
    //                 <small className="text-muted">{product.price}$</small>
    //             </Card.Footer>
    //         </Card>
    //     )
    // })
    return (
        <div>
            <div className="category_container">
                        <div className='road'>
                            <div><Link to='/'>Главная</Link></div>
                            <div><Link to='/category'>Одежда</Link></div>
                        </div>
                <CardGroup>
                    {viewProducts}
                </CardGroup>
            </div>
        </div>  
    )
}

export default Category;