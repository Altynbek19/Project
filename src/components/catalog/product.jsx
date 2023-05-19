import React from 'react';
import product_1_main from'../../assets/catalog/product_1_main.png'
import product_1_font from '../../assets/catalog/product_1_font.png'
import product_1_top from '../../assets/catalog/product_1_top.png'
import product_1_behind from '../../assets/catalog/product_1_behind.png'
import star_full from '../../assets/catalog/star_full.png'
import star_half from '../../assets/catalog/star_half.png'
import recommendations_1 from '../../assets/catalog/recommendations_1.png'
import recommendations_2 from '../../assets/catalog/recommendations_2.png'
import recommendations_3 from '../../assets/catalog/recommendations_3.png'
import recommendations_4 from '../../assets/catalog/recommendations_4.png'
import recommendations_5 from '../../assets/catalog/recommendations_5.png'
import './Product.css'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { collection, query, getDocs, where} from "firebase/firestore";
import { database } from "../../Firebase";
import { useState, useContext } from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ContextBox } from '../../App';

function Product(props) {
    const id = useParams()
    console.log(id)
    const [products, setProducts] = useState([])
    const [box, setBox] = useContext(ContextBox)

    useEffect(() => {
        getData();
    }, [])
    
    async function getData() {
        console.log(id.id)
        const q = query(collection(database, "product"), where("idName", "==", id.id));
        const querySnapshot = await getDocs(q);
        let product = []
        querySnapshot.forEach((doc) => {
            product.push({...doc.data(), id: doc.id})
        });
        setProducts(product)
    }

    function addToCart(event) {
        
        alert("Товар добавлен в корзину");
        const currentCard = event.currentTarget.closest('.card')

        if (box.find(item => item.id === currentCard.querySelector('.id-card').dataset.id)) {
            const index = box.findIndex(item => item.id === currentCard.querySelector('.id-card').dataset.id)
            let nexBox = box;
            nexBox[index].count++;
            setBox(nexBox)
        } else {
            setBox([
                ...box,
                {
                    image: currentCard.querySelector('.card-img-top').getAttribute('src'),
                    title: currentCard.querySelector('.card-title').innerHTML,
                    // description: currentCard.querySelector('.card-text').innerHTML,
                    price: currentCard.querySelector('.price').innerHTML,
                    id: currentCard.querySelector('.id-card').dataset.id,
                    count: 1
                }
            ])
            alert("Товар добавлен в корзину");
        }
    }

    const showAllProduct = products.map((product, index) => {
        return (
            <div className='product_page'>
                            <div className='road'>
                                <div><Link to='/'>Главная</Link></div>
                                <div><Link to='/category'>Одежда</Link></div>
                            </div>
                <div className='product_box'>
                    <div className="id-card" data-id={product.id}></div>
                    <div className='product_full_img'>
                        <div className='big_img_product'><img src={product?.photo} className='card-img-top' alt="" /></div>
                    </div>
                    <div className='product_info'>
                        <div className='card_product'>
                            <h1 className='card-title'>{product.name}</h1>
                            <div className='card-footer'>
                                <div className='info'>
                                    <strong className='price'><span>{product.price}</span>  KGS</strong>
                                </div>
                                <input type="submit" onClick={addToCart} value='Добавить в корзину' className='add_cart'/>    
                            </div>             
                        </div>
                    </div>
                </div>
                
            </div>
        );
    // return (
    //     <div className='product_page'>
    //             <div className='road'>
    //                 <div><Link to='/'>Главная</Link></div>
    //                 <div><Link to='/category'>Одежда</Link></div>
    //             </div>
    //         <div className='product_box'>
    //                 <Card text="123123" key={index}>
    //                             <div className="id-card" data-id={product.id}></div>
    //                             <div className='product_full_img'>
    //                                 <Card.Img variant="top" src={product.photo} />
    //                             </div>
    //                         <div className='cardbody'>
    //                             <Card.Body className='card_body_product'>
    //                                 <div className='name'>
    //                                     <Card.Title>
    //                                         <h1>{product.name}</h1>
    //                                     </Card.Title>
    //                                 </div>
    //                                 <Card.Footer>
    //                                     <div className='info'>
    //                                         <div className='price'>
    //                                             <span className="price-product" >Цена: {product.price}</span>som
    //                                         </div>
    //                                     </div>
    //                                     <div> <input type="submit" onClick={addToCart} value='Добавить в корзину' className='add_cart'/></div>
    //                                 </Card.Footer>
    //                             </Card.Body>
    //                             <div className='line'> </div>
    //                         </div>
    //                 </Card>
    //         </div>
    //     </div>
    // );
    })
    return (
        <div>
            <div className="product_page_container">
                <CardGroup className='all_product_page'>
                    {showAllProduct}
                <div className='about_product'>
                        <h1>О товаре</h1>
                        <p>Легендарный и вневременной дизайн RS-Z LTH TRAINERS  всегда будет в моде. 
                            Кроссовки PUMA RS-Z LTH TRAINERS - это культовый силуэт, теперь готовый к суровым условиям.
                        </p>
                        <div className='about_product_info'>
                            <div className='ul_li_p'>
                                <ul>
                                    <li>Натуральные материалы</li>
                                </ul>
                                <p>Верх, частично выполненный из натуральной кожи, поддерживает оптимальный микроклимат.</p>
                            </div>
                            <div>
                                <ul>
                                    <li>Сцепление с поверхностью</li>
                                </ul>
                                <p>Резиновая подметка для оптимального сцепления.</p>
                            </div>
                            <div>
                                <ul>
                                    <li>Комфорт</li>
                                </ul>
                                <p>Стельки SoftFoam+ обеспечивают дополнительную амортизацию. Мягкий валик вокруг щиколотки для максимального комфортной посадки.</p>
                            </div>
                            <div>
                                <ul>
                                    <li>Сохранение тепла</li>
                                </ul>
                                <p>Теплая подкладка из флиса шерпа в области щиколотки.</p>
                            </div>
                        </div>
                </div>
                </CardGroup>
            </div>
        </div>
    )










    // return (
    //     <div className='product_page'>
    //         <div className='road'>
    //             <div><Link to='/'>Главная</Link></div>
    //             <div><Link to='/category'>Одежда</Link></div>
    //         </div>
    //         <div className='product_box'>
    //             <div className='product_full_img'>
    //                 <div className='product_img'>
    //                     <img className='product_font' src={product_1_font} alt=""/>
    //                     <img className='product_main' src={product_1_main} alt="" />
    //                     <img className='product_top' src={product_1_top} alt="" />
    //                     <img className='product_behind' src={product_1_behind} alt="" />
    //                 </div>
    //                 <div className='big_img_product'><img src={product_1_font} alt="" /></div>
    //             </div>
    //             <div className='product_info'>
    //                 <div className='card_product'>
    //                     <h1>КРОССОВКИ PUMA RS-Z LTH
    //                         TRAINERS
    //                     </h1>
    //                     <div className='info'>
    //                         <strong>14 800 KGS</strong>
    //                         <div className='color'>
    //                             <div className='color_white'></div>
    //                             <div className='color_black'></div>
    //                         </div>
    //                         <div className='select_input'>
    //                         <select name="user_city">
    //                         <option value="">Выберите размер</option>
    //                         <option value="1">37</option>
    //                         <option value="2">38</option>
    //                         <option value="3">39</option>
    //                         <option value="4">40</option>
    //                         <option value="5">41</option>
    //                         <option value="6">42</option>
    //                         <option value="7">43</option>
    //                         <option value="8">44</option>
    //                         <option value="9">45</option>
    //                         </select>
    //                         <select name="user_city">
    //                         <option value="">Выберите количество</option>
    //                         <option value="1">1</option>
    //                         <option value="2">2</option>
    //                         <option value="3">3</option>
    //                         </select>
    //                         </div>
    //                     </div>
    //                     <input type="submit" value='Добавить в корзину' className='add_cart'/>                   
    //                 </div>
    //                 <div className='review'>
    //                     <div className='review_mess'>Отзывы (33)</div>
    //                     <div className='star'>
    //                         <img src={star_full} alt="" />
    //                         <img src={star_full} alt="" />
    //                         <img src={star_full} alt="" />
    //                         <img src={star_full} alt="" />
    //                         <img src={star_half} alt="" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className='about_product'>
    //                 <h1>О товаре</h1>
    //                 <p>Легендарный и вневременной дизайн RS-Z LTH TRAINERS  всегда будет в моде. 
    //                     Кроссовки PUMA RS-Z LTH TRAINERS - это культовый силуэт, теперь готовый к суровым условиям.
    //                 </p>
    //                 <div className='about_product_info'>
    //                     <div className='ul_li_p'>
    //                         <ul>
    //                             <li>Натуральные материалы</li>
    //                         </ul>
    //                         <p>Верх, частично выполненный из натуральной кожи, поддерживает оптимальный микроклимат.</p>
    //                     </div>
    //                     <div>
    //                         <ul>
    //                             <li>Сцепление с поверхностью</li>
    //                         </ul>
    //                         <p>Резиновая подметка для оптимального сцепления.</p>
    //                     </div>
    //                     <div>
    //                         <ul>
    //                             <li>Комфорт</li>
    //                         </ul>
    //                         <p>Стельки SoftFoam+ обеспечивают дополнительную амортизацию. Мягкий валик вокруг щиколотки для максимального комфортной посадки.</p>
    //                     </div>
    //                     <div>
    //                         <ul>
    //                             <li>Сохранение тепла</li>
    //                         </ul>
    //                         <p>Теплая подкладка из флиса шерпа в области щиколотки.</p>
    //                     </div>
    //                 </div>
    //         </div>
    //         <div className='recommendations'>
    //             <h1>Вам может понравиться</h1>
    //             <div className='all_recommendations_product'>
    //                 <div className='recommendations_product'>
    //                     <div className='recommendations_product_1'>
    //                         <img src={recommendations_1} alt="" />
    //                         <p>Кроссовки RS-X³ Puzzle</p>
    //                         <strong>12 990 KGS</strong>
    //                     </div>
    //                     <div className='recommendations_product_2'>
    //                         <img src={recommendations_2} alt="" />
    //                         <p>Кроссовки RS-X³ Puzzle</p>
    //                         <strong>12 990 KGS</strong>
    //                     </div>
    //                     <div className='recommendations_product_3'>
    //                         <img src={recommendations_3} alt="" />
    //                         <p>Кроссовки RS-X³ Puzzle</p>
    //                         <strong>12 990 KGS</strong>
    //                     </div>
    //                     <div className='recommendations_product_4'>
    //                         <img src={recommendations_4} alt="" />
    //                         <p>Кроссовки RS-X³ Puzzle</p>
    //                         <strong>12 990 KGS</strong>
    //                     </div>
    //                 </div>
    //                 <div className='recommendations_product_5'>
    //                     <img src={recommendations_5} alt="" />
    //                     <p>Кроссовки RS-X³ Puzzle</p>
    //                     <strong>12 990 KGS</strong>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default Product;