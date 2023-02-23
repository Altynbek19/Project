import logo from '/src/assets/header/logo.png'
import basket from '/src/assets/header/basket_icon.png'
import save from '/src/assets/header/save_icon.png'
import user_profile from '/src/assets/header/user-profile.png'
import icon_search from '/src/assets/header/search.png'
import '/src/components/header/Header.css'

const Header = (Props) => {
    return (
        <header>
            <div className="header_logo">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='profile'>
                    <img className='basket' src={basket} alt="" />
                    <img className='save' src={save} alt="" />
                    <img className='user_profile' src={user_profile} alt="" />
                </div>
            </div>
                <ul className='product'>
                    <a href="">Одежда</a>
                    <a href="">Фитнес</a>
                    <a href="">Акксессуары</a>
                    <a href="">Скидки</a>
                    <a href="">Новое поступление</a>
                    <div>
                        <input type="text" />
                    </div>
                </ul>
        </header>
    );
};

export default Header