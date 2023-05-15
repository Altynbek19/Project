import { useState } from 'react'; 
import './BurgerMenu.css'; 
import { Link } from 'react-router-dom';
import burger_close from './../../assets/header/burger_close.png'
 
function BurgerMenu() { 
  const [isOpen, setIsOpen] = useState(false); 
 
  const handleToggle = () => setIsOpen(!isOpen); 
 
  return ( 
    <div className="burger-menu"> 
      <div className="burger-menu-icon" onClick={handleToggle}> 
        <div className={`burger-menu-line ${isOpen ? 'open' : ''}`}></div> 
        <div className={`burger-menu-line ${isOpen ? 'open' : ''}`}></div> 
        <div className={`burger-menu-line ${isOpen ? 'open' : ''}`}></div> 
      </div> 
      <div className={`burger-menu-content ${isOpen ? 'open' : ''}`}> 
        <div className="btnclose" onClick={handleToggle}>
          <img src={burger_close} alt="" />
        </div> 
        <ul className="burger-menu-list"> 
          <li className="burger-menu-item"><a href="/profile" className="burger-menu-link">Профиль</a></li> 
          <li className="burger-menu-item"><a href="/category" className="burger-menu-link">Каталог</a></li> 
          <li className="burger-menu-item has-subheader"> 
            <div className="burger-menu-link"> 
              <a href='/basket'>Корзина </a>
            </div> 
            <div className="burger-menu-subheader"> 
              <ul className="burger-menu-subheader-list"> 
                <li className="burger-menu-subheader-item"><a href="/category" className="burger-menu-subheader-link">Каталог</a></li>
                <li className="burger-menu-subheader-item"><a href="/basket" className="burger-menu-subheader-link">Корзина</a></li>
              </ul> 
            </div> 
          </li> 
          <li className="burger-menu-item"><a href="/favorites" className="burger-menu-link">Избранные</a></li> 
        </ul> 
      </div> 
    </div> 
  ); 
} 
 
export default BurgerMenu;
