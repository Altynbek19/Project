import logo from '/src/assets/header/logo_white.png'
import basket from '/src/assets/header/basket_icon.png'
import save from '/src/assets/header/save_icon_white.png'
import user_profile from '/src/assets/header/user_profile_white.png'
import icon_search from '/src/assets/header/search.png'
import filtersearch from '/src/assets/header/filtersearch.png'
import menu from '/src/assets/header/menu_white.png'
import '/src/components/header/Header_white.css'
import {Link} from 'react-router-dom'

const Header_white = (Props) => {
    return (
        <header>
            <div className="header_logo">
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='search_logo'>
                    <input type="text"/>
                </div>
                <div className='profile'>
                    <img className='basket' src={basket} alt="" />
                    <img className='save' src={save} alt="" />
                    <img className='user_profile' src={user_profile} alt="" />
                </div>
                <div className='menu'>
                    <img src={menu} alt="" />
                </div>
            </div>
                <ul className='product'>
                    <Link to="/product/12">Одежда</Link>
                    <Link to="/category" href="">Фитнес</Link>
                    <a href="">Акксессуары</a>
                    <a href="">Скидки</a>
                    <a href="">Горнолыжная одежда</a>
                </ul>
        </header>
    );
};

export default Header_white