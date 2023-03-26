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
import {useParams} from "react-router-dom"
import { Link } from 'react-router-dom';

function Product(props) {
    const {id} = useParams()
    console.log(id)

    return (
        <div className='product_page'>
            <div className='road'>
                <div><Link to='/'>Главная</Link></div>
                <div><Link to='/Clothes'>Одежда</Link></div>
            </div>
            <div className='product_box'>
                <div className='product_full_img'>
                    <div className='product_img'>
                        <img className='product_font' src={product_1_font} alt=""/>
                        <img className='product_main' src={product_1_main} alt="" />
                        <img className='product_top' src={product_1_top} alt="" />
                        <img className='product_behind' src={product_1_behind} alt="" />
                    </div>
                    <div className='big_img_product'><img src={product_1_font} alt="" /></div>
                </div>
                <div className='product_info'>
                    <div className='card_product'>
                        <h1>КРОССОВКИ PUMA RS-Z LTH
                            TRAINERS
                        </h1>
                        <div className='info'>
                            <strong>14 800 KGS</strong>
                            <div className='color'>
                                <div className='color_white'></div>
                                <div className='color_black'></div>
                            </div>
                            <div className='select_input'>
                            <select name="user_city">
                            <option value="">Выберите размер</option>
                            <option value="1">37</option>
                            <option value="2">38</option>
                            <option value="3">39</option>
                            <option value="4">40</option>
                            <option value="5">41</option>
                            <option value="6">42</option>
                            <option value="7">43</option>
                            <option value="8">44</option>
                            <option value="9">45</option>
                            </select>
                            <select name="user_city">
                            <option value="">Выберите количество</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </select>
                            </div>
                        </div>
                        <input type="submit" value='Добавить в корзину' className='add_cart'/>                   
                    </div>
                    <div className='review'>
                        <div className='review_mess'>Отзывы (33)</div>
                        <div className='star'>
                            <img src={star_full} alt="" />
                            <img src={star_full} alt="" />
                            <img src={star_full} alt="" />
                            <img src={star_full} alt="" />
                            <img src={star_half} alt="" />
                        </div>
                    </div>
                </div>
            </div>
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
            <div className='recommendations'>
                <h1>Вам может понравиться</h1>
                <div className='all_recommendations_product'>
                    <div className='recommendations_product'>
                        <div className='recommendations_product_1'>
                            <img src={recommendations_1} alt="" />
                            <p>Кроссовки RS-X³ Puzzle</p>
                            <strong>12 990 KGS</strong>
                        </div>
                        <div className='recommendations_product_2'>
                            <img src={recommendations_2} alt="" />
                            <p>Кроссовки RS-X³ Puzzle</p>
                            <strong>12 990 KGS</strong>
                        </div>
                        <div className='recommendations_product_3'>
                            <img src={recommendations_3} alt="" />
                            <p>Кроссовки RS-X³ Puzzle</p>
                            <strong>12 990 KGS</strong>
                        </div>
                        <div className='recommendations_product_4'>
                            <img src={recommendations_4} alt="" />
                            <p>Кроссовки RS-X³ Puzzle</p>
                            <strong>12 990 KGS</strong>
                        </div>
                    </div>
                    <div className='recommendations_product_5'>
                        <img src={recommendations_5} alt="" />
                        <p>Кроссовки RS-X³ Puzzle</p>
                        <strong>12 990 KGS</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;