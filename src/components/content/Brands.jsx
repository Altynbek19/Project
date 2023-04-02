import React from 'react';
import './Brands.css'
import { Link } from 'react-router-dom';

function Brands(props) {
    return (
        <div className='brands_container'>
            <div className='road'>
                <div><Link to='/'>Главная</Link></div>
                <div><Link to='/brands'>Бренды</Link></div>
            </div>
            <h1 className='title_brands'>Бренды</h1>
            <div className='text_brands'>
                <div className='nike_container'>
                    <div className='nike_img'></div>
                    <div className='nike'><strong>Nike</strong> - американская <br /> транснациональная компания, <br /> специализирующаяся на <br /> спортивной одежде и обуви.</div>
                </div>
                <div className='adidas_container'>
                    <div className='adidas'><strong>Adidas AG</strong> - немецкая <br /> транснациональная компания по <br /> производству спортивной одежды, <br /> обуви и аксессуаров. Это <br /> крупнейший производитель <br /> спортивной одежды в Европе и <br /> второй по величине в мире после <br /> Nike.</div>
                    <div className='adidas_img'></div>
                </div>
                <div className='puma_container'>
                    <div className='puma_img'></div>
                    <div className='puma'><strong>Puma SE</strong> — промышленная компания <br /> Германии, специализирующаяся на <br /> выпуске спортивной обуви, одежды, <br /> инвентаря и парфюмерии под торговой <br /> маркой Puma.</div>
                </div>
                <div className='reebok_container'>
                    <div className='reebok'><strong>Reebok International <br /> Limited</strong> — американская компания по <br /> производству спортивной одежды, обуви <br /> и аксессуаров.</div>
                    <div className='reebok_img'></div>
                </div>
            </div>
        </div>
    );
}

export default Brands;