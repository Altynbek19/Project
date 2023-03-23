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
                <div className='all_kids_product'>
                    <div className='kids_product_first_line'>
                        <Link to='/product/:1'>
                            <div className='kids_product_card'>
                                <img src={kids_product} alt="" />
                                <div className='kids_product_name_price'>
                                    <div className='kids_product_name'>Свободные шорты для <br /> детей Nike</div>
                                    <div className='kids_price'>6 640 KGS</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/product/:2'>
                            <div className='kids_product_card'>
                                <img src={kids_product} alt="" />
                                <div className='kids_product_name_price'>
                                    <div className='kids_product_name'>Свободные шорты для <br /> детей Nike</div>
                                    <div className='kids_price'>6 640 KGS</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/product/:3'>
                            <div className='kids_product_card'>
                                <img src={kids_product} alt="" />
                                <div className='kids_product_name_price'>
                                    <div className='kids_product_name'>Свободные шорты для <br /> детей Nike</div>
                                    <div className='kids_price'>6 640 KGS</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='kids_product_second_line'>
                        <Link to='/product/:4'>
                            <div className='kids_product_card'>
                                <img src={kids_product} alt="" />
                                <div className='kids_product_name_price'>
                                    <div className='kids_product_name'>Свободные шорты для <br /> детей Nike</div>
                                    <div className='kids_price'>6 640 KGS</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/product/:5'>
                            <div className='kids_product_card'>
                                <img src={kids_product} alt="" />
                                <div className='kids_product_name_price'>
                                    <div className='kids_product_name'>Свободные шорты для <br /> детей Nike</div>
                                    <div className='kids_price'>6 640 KGS</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/product/:6'>
                            <div className='kids_product_card'>
                                <img src={kids_product} alt="" />
                                <div className='kids_product_name_price'>
                                    <div className='kids_product_name'>Свободные шорты для <br /> детей Nike</div>
                                    <div className='kids_price'>6 640 KGS</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='kids_product_third_line'>
                        <Link to='/product/:7'>
                            <div className='kids_product_card'>
                                <img src={kids_product} alt="" />
                                <div className='kids_product_name_price'>
                                    <div className='kids_product_name'>Свободные шорты для <br /> детей Nike</div>
                                    <div className='kids_price'>6 640 KGS</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/product/:8'>
                            <div className='kids_product_card'>
                                <img src={kids_product} alt="" />
                                <div className='kids_product_name_price'>
                                    <div className='kids_product_name'>Свободные шорты для <br /> детей Nike</div>
                                    <div className='kids_price'>6 640 KGS</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/product/:9'>
                            <div className='kids_product_card'>
                                <img src={kids_product} alt="" />
                                <div className='kids_product_name_price'>
                                    <div className='kids_product_name'>Свободные шорты для <br /> детей Nike</div>
                                    <div className='kids_price'>6 640 KGS</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='kids_product_fourth_line'>
                        <Link to='/product/:10'>
                            <div className='kids_product_card'>
                                <img src={kids_product} alt="" />
                                <div className='kids_product_name_price'>
                                    <div className='kids_product_name'>Свободные шорты для <br /> детей Nike</div>
                                    <div className='kids_price'>6 640 KGS</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/product/:11'>
                            <div className='kids_product_card'>
                                <img src={kids_product} alt="" />
                                <div className='kids_product_name_price'>
                                    <div className='kids_product_name'>Свободные шорты для <br /> детей Nike</div>
                                    <div className='kids_price'>6 640 KGS</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/product/:12'>
                            <div className='kids_product_card'>
                                <img src={kids_product} alt="" />
                                <div className='kids_product_name_price'>
                                    <div className='kids_product_name'>Свободные шорты для <br /> детей Nike</div>
                                    <div className='kids_price'>6 640 KGS</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kids_catalog;