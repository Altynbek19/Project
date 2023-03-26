import React from 'react';
import { Link } from 'react-router-dom';

function Menu({header, items}) {
    return (
        <div className='menu'>
            <div className="blur"></div>
            <div className="menu_content">{header}</div>
            <ul>
                {items.map(item =>
                    <div className='product_container'>
                        <ul className='product'>
                            <Link to="/Clothes">Одежда</Link>
                            <Link to="*">Фитнес</Link>
                            <Link to="*">Акксессуары</Link>
                            <Link to="*">Скидки</Link>
                            <Link to="*">Горнолыжная одежда</Link>
                        </ul>
                    </div> 
                )}
            </ul>
        </div>
    );
}

export default Menu;