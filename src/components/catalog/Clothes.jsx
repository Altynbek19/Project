import React from 'react';
import './Clothes.css'
import { Link } from 'react-router-dom';
import { collection, query, getDocs} from "firebase/firestore";
import { database } from "../../Firebase";
import {useState, useEffect} from "react"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Clothes(props) {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getData();
    }, [])

    console.log(categories)

    async function getData() {
        const q = query(collection(database, "category"));
        const querySnapshot = await getDocs(q);
        let category = []
        querySnapshot.forEach((doc) => {
           category.push({...doc.data(), id: doc.id})
           console.log(doc.id)
        });
        setCategories(category)
    }

    const showAllCategory = categories.map((category, index) => {
    return (
        // <div className='catalog_container'>
        //     <div className='kids_clothes_container'>
        //             <Link to={`/category/${category.id}`}>
        //                 <div className='kids_clothes'>
        //                         <img src={category.photo} alt="" />
        //                     <div className='for_kids'>{category.name}</div>
        //                 </div>
        //             </Link>
        //         </div>
        // </div>
        <div className='catalog_container'>
            <Link to={`/category/${category.id}`}>
                    <Card text="qwerty" key={index}>
                        <Card.Img variant="top" src={category?.photo} />
                        <Card.Body>
                            <Card.Title>{category.name}</Card.Title>
                            <Card.Text>
                                {category.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
        </div>
        // <div className='clothes_container'>
        //     <div className='road'>
        //         <div><Link to='/'>Главная</Link></div>
        //         <div><Link to='/Clothes'>Одежда</Link></div>
        //     </div>
        //     <div className='man_woman_clothes'>
                // <Link to='/man_catalog'>
                //     <div className='man_clothes'>
                //         <div className='for_man'>Для него</div>
                //     </div>
                // </Link>
        //         <Link to='/woman_catalog'>
        //             <div className='woman_clothes'>
        //                 <div className='for_woman'>Для неё</div>
        //             </div>
        //         </Link>
        //     </div>
        //     <div className='kids_clothes_container'>
        //         <Link to='/kids_catalog'>
        //             <div className='kids_clothes'>
        //                 <div className='for_kids'>Для детей</div>
        //             </div>
        //         </Link>
        //     </div>
        // </div>
        
    );
    })
    return (
        <div>
            <div className="all_catalog_container">
                <div className='road'>
                    <div><Link to='/'>Главная</Link></div>
                    <div><Link to='/Clothes'>Одежда</Link></div>
                </div>
                <CardGroup>
                    {showAllCategory}
                </CardGroup>
            </div>
        </div>
    )
}

export default Clothes;