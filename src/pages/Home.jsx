import React from 'react';
import './Home.css'
import new_collection from './../assets/home/new_collection.png'
import home from './../assets/home/home.png'
import { Link } from 'react-router-dom';

function Main(props) {
    return (
        <div className='home_container'>
            {/* <div className='new_big_img'>
                <div className='new_text_img'>
                    <div className='text_new'>
                        <div>Для нее & для него</div>
                        <div>Онлайн сеть магазин качественных спорт-товаров.</div>
                    </div>
                    <div className='new'>
                        <div>Man sportwears</div>
                        <div className='img_new'>
                            <img src={new_collection} alt="" />
                            <div className='new_coll'>New Collection</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='big_man_img'></div>
                    <div></div>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div> */}

            <div>
                <h1>Спортивный магазин <br /> вашей мечты</h1>
                <div className='to_catalog'><Link to='/Clothes'>Каталог</Link></div>
            </div>
            <div className='img_home'>
                <img src={home} alt="" />
            </div>
        </div>
    );
}

export default Main;