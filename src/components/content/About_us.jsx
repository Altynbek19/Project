import React from 'react';
import img_about_us from '../../assets/content/about_us.png'
import background_img_about_us from '../../assets/content/background_about_us.png'
import tagline_img_about_us from '../../assets/content/tagline.png'
import './About_us.css'
import { Link } from 'react-router-dom';

function About_us(props) {
    return (
        <div className='about_us'>
            <div className='text_about_us_container'>
                <div className='road'>
                    <div><Link to='/'>Главная</Link></div>
                    <div><Link to='/about_us'>О нас</Link></div>
                </div>
                <div className='about_us_img_text'>
                    <div className='img_about_us'>
                        <img src={img_about_us} alt="" />
                    </div>
                    <div className='text_about_us'>
                        <div className='title_about'>О нас</div>
                        <div>
                            <p>В интернет-магазине ты найдёшь стильную одежду и обувь для мужчин, женщин и детей. Каждая коллекция в каталоге, — это микс спортивной эстетики, современных технологий и дерзкого вайба.</p>
                            <p>Заряжайся энергией спорта в аутфитах от бренда. Здесь есть всё для эффективных тренировок: технологичная экипировка, суперудобные беговые кроссовки и футбольные бутсы, спортивные костюмы, олимпийки, легинсы и топы.</p>
                            <p>Мы задаём тренды уличной моды и воплощаем их в топовых кроссовках, спортивных штанах, толстовках и худи, которые идеально впишутся в твой ритм жизни. Врывайся в мир стритстайла вместе с нами.</p>
                            <p>На сайте тебя ждут трендовые новинки, бестселлеры и эксклюзивы, представленные только в онлайне — выбирай крутые кроссовки, хитовые модели RS-X или нестареющую чёрно-белую классику.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container_about_us'>
                <img src={tagline_img_about_us} alt="" />
            </div>
        </div>
    );
}

export default About_us;