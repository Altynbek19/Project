import logo from '/src/assets/header/logo.png'
import basket from '/src/assets/header/basket_icon.png'
import save from '/src/assets/header/save_icon.png'
import user_profile from '/src/assets/header/user-profile.png'
import icon_search from '/src/assets/header/search.png'
import filtersearch from '/src/assets/header/filtersearch.png'
import menu from '/src/assets/header/menu.png'
import '/src/components/header/Header.css'
import { Link } from 'react-router-dom'

const Header = (Props) => {
    return (
        <header className='header_black'>
            <div className="header_logo">
                <div className='logo'>
                <Link to='/'><img src={logo} alt="" /></Link>
                </div>
                <div className='search_logo'>
                    <input type="text"/>
                </div>
                <div className='profile'>
                    <Link to='/basket'><img className='basket' src={basket} alt="" /></Link>
                    <Link to='/favorites'><img className='save' src={save} alt="" /></Link>
                    <Link to='/profile'><img className='user_profile' src={user_profile} alt="" /></Link>
                </div>
                <div className='menu'>
                    <img src={menu} alt="" />
                </div>
            </div>
                <div className='product_container'>
                <ul className='product_black'>
                        <Link to="/Clothes">Одежда</Link>
                        <Link to="*">Фитнес</Link>
                        <Link to="*">Акксессуары</Link>
                        <Link to="*">Скидки</Link>
                        <Link to="*">Горнолыжная одежда</Link>
                    </ul>
                </div>
        </header>
    );
};

export default Header