import React from 'react';
import './Clothes.css'
import { Link } from 'react-router-dom';

function Clothes(props) {
    return (
        <div className='clothes_container'>
            <div className='road'>
                <div><Link to='/'>Главная</Link></div>
                <div><Link to='/Clothes'>Одежда</Link></div>
            </div>
            <div className='man_woman_clothes'>
                <Link to='/man_catalog'>
                    <div className='man_clothes'>
                        <div className='for_man'>Для него</div>
                    </div>
                </Link>
                <Link to='/woman_catalog'>
                    <div className='woman_clothes'>
                        <div className='for_woman'>Для неё</div>
                    </div>
                </Link>
            </div>
            <div className='kids_clothes_container'>
                <Link to='/kids_catalog'>
                    <div className='kids_clothes'>
                        <div className='for_kids'>Для детей</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Clothes;