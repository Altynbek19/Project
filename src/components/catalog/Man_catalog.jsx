import React from 'react';
import './Man_catalog.css'
import { Link } from 'react-router-dom';
import man_product from '/src/assets/catalog/man_product.png'

function Man_catalog(props) {
    return (
        <div className='man_catalog_container'>
            <div className='road'>
                <div><Link to='/'>Главная</Link></div>
                <div><Link to='/Clothes'>Одежда</Link></div>
                <div><Link to='/man_catalog'>Для него</Link></div>
            </div>
            <div className='man_title'>Для него</div>
            <div>
                <div>
                    <div className='product_first_line'>
                        <div className='product_card'>
                            <img src={man_product} alt="" />
                            <div className='product_name_price'>
                                <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                <div className='price'>2 880 KGS</div>
                            </div>
                        </div>
                        <div className='product_card'>
                            <img src={man_product} alt="" />
                            <div className='product_name_price'>
                                <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                <div className='price'>2 880 KGS</div>
                            </div>
                        </div>
                        <div className='product_card'>
                            <img src={man_product} alt="" />
                            <div className='product_name_price'>
                                <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                <div className='price'>2 880 KGS</div>
                            </div>
                        </div>
                    </div>
                    <div className='product_second_line'>
                        <div className='product_card'>
                            <img src={man_product} alt="" />
                            <div className='product_name_price'>
                                <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                <div className='price'>2 880 KGS</div>
                            </div>
                        </div>
                        <div className='product_card'>
                            <img src={man_product} alt="" />
                            <div className='product_name_price'>
                                <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                <div className='price'>2 880 KGS</div>
                            </div>
                        </div>
                        <div className='product_card'>
                            <img src={man_product} alt="" />
                            <div className='product_name_price'>
                                <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                <div className='price'>2 880 KGS</div>
                            </div>
                        </div>
                    </div>
                    <div className='product_third_line'>
                        <div className='product_card'>
                            <img src={man_product} alt="" />
                            <div className='product_name_price'>
                                <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                <div className='price'>2 880 KGS</div>
                            </div>
                        </div>
                        <div className='product_card'>
                            <img src={man_product} alt="" />
                            <div className='product_name_price'>
                                <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                <div className='price'>2 880 KGS</div>
                            </div>
                        </div>
                        <div className='product_card'>
                            <img src={man_product} alt="" />
                            <div className='product_name_price'>
                                <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                <div className='price'>2 880 KGS</div>
                            </div>
                        </div>
                    </div>
                    <div className='product_fourth_line'>
                        <div className='product_card'>
                            <img src={man_product} alt="" />
                            <div className='product_name_price'>
                                <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                <div className='price'>2 880 KGS</div>
                            </div>
                        </div>
                        <div className='product_card'>
                            <img src={man_product} alt="" />
                            <div className='product_name_price'>
                                <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                <div className='price'>2 880 KGS</div>
                            </div>
                        </div>
                        <div className='product_card'>
                            <img src={man_product} alt="" />
                            <div className='product_name_price'>
                                <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                <div className='price'>2 880 KGS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Man_catalog;