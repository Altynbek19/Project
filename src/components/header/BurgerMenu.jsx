import { useState } from 'react'; 
import './BurgerMenu.css'; 
 
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
        <div className="btnclose" onClick={handleToggle}>X</div> 
        <ul className="burger-menu-list"> 
          <li className="burger-menu-item"><a href="/catalog" className="burger-menu-link">Каталог</a></li> 
          <li className="burger-menu-item has-subheader"> 
            <div className="burger-menu-link"> 
              Доставки 
              <div className="burger-menu-subheader-icon"></div> 
            </div> 
            <div className="burger-menu-subheader"> 
              <ul className="burger-menu-subheader-list"> 
                <li className="burger-menu-subheader-item"><a href="" className="burger-menu-subheader-link">Каталог</a></li> 
                <li className="burger-menu-subheader-item"><a href="#" className="burger-menu-subheader-link">Доставка</a></li> 
              </ul> 
            </div> 
          </li> 
          <li className="burger-menu-item"><a href="#" className="burger-menu-link">Акции</a></li> 
          <li className="burger-menu-item"><a href="#" className="burger-menu-link">Под заказ</a></li> 
        </ul> 
      </div> 
    </div> 
  ); 
} 
 
export default BurgerMenu;
