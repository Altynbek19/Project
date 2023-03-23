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
                <div className='all_man_product'>
                    <div className='product_first_line'>
                        <Link to='/product/:1'>
                            <div className='product_card'>
                                <img src={man_product} alt="" />
                                <div className='product_name_price'>
                                    <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                    <div className='price'>2 880 KGS</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/product/:2'>
                            <div className='product_card'>
                                <img src={man_product} alt="" />
                                <div className='product_name_price'>
                                    <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                    <div className='price'>2 880 KGS</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/product/:3'>
                            <div className='product_card'>
                                <img src={man_product} alt="" />
                                <div className='product_name_price'>
                                    <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                    <div className='price'>2 880 KGS</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='product_second_line'>
                        <Link to='/product/:4'>
                            <div className='product_card'>
                                <img src={man_product} alt="" />
                                <div className='product_name_price'>
                                    <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                    <div className='price'>2 880 KGS</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/product/:5'>
                            <div className='product_card'>
                                <img src={man_product} alt="" />
                                <div className='product_name_price'>
                                    <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                    <div className='price'>2 880 KGS</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/product/:6'>
                            <div className='product_card'>
                                <img src={man_product} alt="" />
                                <div className='product_name_price'>
                                    <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                    <div className='price'>2 880 KGS</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='product_third_line'>
                        <Link to='/product/:7'>
                            <div className='product_card'>
                                <img src={man_product} alt="" />
                                <div className='product_name_price'>
                                    <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                    <div className='price'>2 880 KGS</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/product/:8'>
                            <div className='product_card'>
                                <img src={man_product} alt="" />
                                <div className='product_name_price'>
                                    <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                    <div className='price'>2 880 KGS</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/product/:9'>
                            <div className='product_card'>
                                <img src={man_product} alt="" />
                                <div className='product_name_price'>
                                    <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                    <div className='price'>2 880 KGS</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='product_fourth_line'>
                        <Link to='/product/:10'>
                            <div className='product_card'>
                                <img src={man_product} alt="" />
                                <div className='product_name_price'>
                                    <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                    <div className='price'>2 880 KGS</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/product/:11'>
                            <div className='product_card'>
                                <img src={man_product} alt="" />
                                <div className='product_name_price'>
                                    <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                    <div className='price'>2 880 KGS</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/product/:12'>
                            <div className='product_card'>
                                <img src={man_product} alt="" />
                                <div className='product_name_price'>
                                    <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
                                    <div className='price'>2 880 KGS</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Man_catalog;