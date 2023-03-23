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
                    <Link to='/'><img src={logo} alt="" /></Link>
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
                    <Link to="/Clothes">Одежда</Link>
                    <Link to="*">Фитнес</Link>
                    <Link to="*">Акксессуары</Link>
                    <Link to="*">Скидки</Link>
                    <Link to="*">Горнолыжная одежда</Link>
                </ul>
        </header>
    );
};

export default Header_white