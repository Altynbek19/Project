import React from 'react';
import { Link } from 'react-router-dom';
import kids_product from '/src/assets/catalog/kids_poduct.png'
import './Kids_catalog.css'

function Kids_catalog(props) {
    return (
        <div className='kids_catalog_container'>
            <div className='road'>
                <div><Link to='/'>Главная</Link></div>
                <div><Link to='/Clothes'>Одежда</Link></div>
                <div><Link to='/kids_catalog'>Для детей</Link></div>
            </div>
            <div className='kids_title'>Для детей</div>
            <div>
                <div>
                    <div className='kids_product_first_line'>
                        <div className='kids_product_card'>
                            <img src={kids_product} alt="" />
                            <div className='kids_product_name_price'>
                                <div className='kids_product_name'>Женские баскетбольные шорты</div>
                                <div className='kids_price'>3 600 KGS</div>
                            </div>
                        </div>
                        <div className='kids_product_card'>
                            <img src={kids_product} alt="" />
                            <div className='kids_product_name_price'>
                                <div className='kids_product_name'>Женские баскетбольные шорты</div>
                                <div className='kids_price'>3 600 KGS</div>
                            </div>
                        </div>
                        <div className='kids_product_card'>
                            <img src={kids_product} alt="" />
                            <div className='kids_product_name_price'>
                                <div className='kids_product_name'>Женские баскетбольные шорты</div>
                                <div className='kids_price'>3 600 KGS</div>
                            </div>
                        </div>
                    </div>
                    <div className='kids_product_first_line'>
                        <div className='kids_product_card'>
                            <img src={kids_product} alt="" />
                            <div className='kids_product_name_price'>
                                <div className='kids_product_name'>Женские баскетбольные шорты</div>
                                <div className='kids_price'>3 600 KGS</div>
                            </div>
                        </div>
                        <div className='kids_product_card'>
                            <img src={kids_product} alt="" />
                            <div className='kids_product_name_price'>
                                <div className='kids_product_name'>Женские баскетбольные шорты</div>
                                <div className='kids_price'>3 600 KGS</div>
                            </div>
                        </div>
                        <div className='kids_product_card'>
                            <img src={kids_product} alt="" />
                            <div className='kids_product_name_price'>
                                <div className='kids_product_name'>Женские баскетбольные шорты</div>
                                <div className='kids_price'>3 600 KGS</div>
                            </div>
                        </div>
                    </div>
                    <div className='kids_product_first_line'>
                        <div className='kids_product_card'>
                            <img src={kids_product} alt="" />
                            <div className='kids_product_name_price'>
                                <div className='kids_product_name'>Женские баскетбольные шорты</div>
                                <div className='kids_price'>3 600 KGS</div>
                            </div>
                        </div>
                        <div className='kids_product_card'>
                            <img src={kids_product} alt="" />
                            <div className='kids_product_name_price'>
                                <div className='kids_product_name'>Женские баскетбольные шорты</div>
                                <div className='kids_price'>3 600 KGS</div>
                            </div>
                        </div>
                        <div className='kids_product_card'>
                            <img src={kids_product} alt="" />
                            <div className='kids_product_name_price'>
                                <div className='kids_product_name'>Женские баскетбольные шорты</div>
                                <div className='kids_price'>3 600 KGS</div>
                            </div>
                        </div>
                    </div>
                    <div className='kids_product_first_line'>
                        <div className='kids_product_card'>
                            <img src={kids_product} alt="" />
                            <div className='kids_product_name_price'>
                                <div className='kids_product_name'>Женские баскетбольные шорты</div>
                                <div className='kids_price'>3 600 KGS</div>
                            </div>
                        </div>
                        <div className='kids_product_card'>
                            <img src={kids_product} alt="" />
                            <div className='kids_product_name_price'>
                                <div className='kids_product_name'>Женские баскетбольные шорты</div>
                                <div className='kids_price'>3 600 KGS</div>
                            </div>
                        </div>
                        <div className='kids_product_card'>
                            <img src={kids_product} alt="" />
                            <div className='kids_product_name_price'>
                                <div className='kids_product_name'>Женские баскетбольные шорты</div>
                                <div className='kids_price'>3 600 KGS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kids_catalog;