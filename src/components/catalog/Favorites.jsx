import React from 'react';
import './Favorites.css'
import { Link } from 'react-router-dom';

function Favorites(props) {
    return (
        <div className='full_favorites_container'>
            <div className='favorites_container'>
                <div className='favorites_content'>
                    <div className='road'>
                        <div><Link to='/'>Главная</Link></div>
                        <div><Link to='/favorites'>Корзина</Link></div>
                    </div>
                    <div className='favorites_title_product'>
                        <div className='favorites_title'>
                            <strong>
                                Корзина
                            </strong>
                        </div>
                        <div className='favorites_product'>
                            <strong>
                            Нет товаров в избранных.
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favorites;