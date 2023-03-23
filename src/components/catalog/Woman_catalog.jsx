import React from 'react';
import woman_product from '../../assets/catalog/woman_product.png'
import { Link } from 'react-router-dom';
import './Woman_catalog.css'

function Woman_catalog(props) {
    return (
        <div className='woman_catalog_container'>
            <div className='road'>
                <div><Link to='/'>Главная</Link></div>
                <div><Link to='/Clothes'>Одежда</Link></div>
                <div><Link to='/woman_catalog'>Для неё</Link></div>
            </div>
            <div className='woman_title'>Для неё</div>
            <div>
                <div>
                    <div className='woman_product_first_line'>
                        <div className='woman_product_card'>
                            <img src={woman_product} alt="" />
                            <div className='woman_product_name_price'>
                                <div className='woman_product_name'>Женские баскетбольные шорты</div>
                                <div className='woman_price'>3 600 KGS</div>
                            </div>
                        </div>
                        <div className='woman_product_card'>
                            <img src={woman_product} alt="" />
                            <div className='woman_product_name_price'>
                                <div className='woman_product_name'>Женские баскетбольные шорты</div>
                                <div className='woman_price'>3 600 KGS</div>
                            </div>
                        </div>
                        <div className='woman_product_card'>
                            <img src={woman_product} alt="" />
                            <div className='woman_product_name_price'>
                                <div className='woman_product_name'>Женские баскетбольные шорты</div>
                                <div className='woman_price'>3 600 KGS</div>
                            </div>
                        </div>
                    </div>
                    <div className='woman_product_second_line'>
                        <div className='woman_product_card'>
                            <img src={woman_product} alt="" />
                            <div className='woman_product_name_price'>
                                <div className='woman_product_name'>Женские баскетбольные шорты</div>
                                <div className='woman_price'>3 600 KGS</div>
                            </div>
                        </div>
                        <div className='woman_product_card'>
                            <img src={woman_product} alt="" />
                            <div className='woman_product_name_price'>
                                <div className='woman_product_name'>Женские баскетбольные шорты</div>
                                <div className='woman_price'>3 600 KGS</div>
                            </div>
                        </div>
                        <div className='woman_product_card'>
                            <img src={woman_product} alt="" />
                            <div className='woman_product_name_price'>
                                <div className='woman_product_name'>Женские баскетбольные шорты</div>
                                <div className='woman_price'>3 600 KGS</div>
                            </div>
                        </div>
                    </div>
                    <div className='woman_product_third_line'>
                        <div className='woman_product_card'>
                            <img src={woman_product} alt="" />
                            <div className='woman_product_name_price'>
                                <div className='woman_product_name'>Женские баскетбольные шорты</div>
                                <div className='woman_price'>3 600 KGS</div>
                            </div>
                        </div>
                        <div className='woman_product_card'>
                            <img src={woman_product} alt="" />
                            <div className='woman_product_name_price'>
                                <div className='woman_product_name'>Женские баскетбольные шорты</div>
                                <div className='woman_price'>3 600 KGS</div>
                            </div>
                        </div>
                        <div className='woman_product_card'>
                            <img src={woman_product} alt="" />
                            <div className='woman_product_name_price'>
                                <div className='woman_product_name'>Женские баскетбольные шорты</div>
                                <div className='woman_price'>3 600 KGS</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='woman_product_fourth_line'>
                        <div className='woman_product_card'>
                            <img src={woman_product} alt="" />
                            <div className='woman_product_name_price'>
                                <div className='woman_product_name'>Женские баскетбольные шорты</div>
                                <div className='woman_price'>3 600 KGS</div>
                            </div>
                        </div>
                        <div className='woman_product_card'>
                            <img src={woman_product} alt="" />
                            <div className='woman_product_name_price'>
                                <div className='woman_product_name'>Женские баскетбольные шорты</div>
                                <div className='woman_price'>3 600 KGS</div>
                            </div>
                        </div>
                        <div className='woman_product_card'>
                            <img src={woman_product} alt="" />
                            <div className='woman_product_name_price'>
                                <div className='woman_product_name'>Женские баскетбольные шорты</div>
                                <div className='woman_price'>3 600 KGS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Woman_catalog;