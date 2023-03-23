import React from 'react';
import basket_image from '/src/assets/header/basket/basket_image.png';
import { Link } from 'react-router-dom';
import './Basket.css'

function Basket(props) {
    return (
        <div className='full_basket_container'>
            <div className='basket_container'>
                <div className='basket_content'>
                    <div className='road'>
                        <div><Link to='/'>Главная</Link></div>
                        <div><Link to='/basket'>Корзина</Link></div>
                    </div>
                    <div className='basket_title_product'>
                        <div className='basket_title'>
                            <strong>
                                Корзина
                            </strong>
                        </div>
                        <div className='basket_product'>
                            <strong>
                            Нет товаров в корзинке.
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Basket;