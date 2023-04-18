import '/src/components/footer/Footer.css'
import twitter from '/src/assets/footer/twitter.png'
import facebook from '/src/assets/footer/facebook.png'
import instagram from '/src/assets/footer/instagram.png'
import { Link } from 'react-router-dom'

const Footer = (Props) => {
    return (
        <footer>
            <div>
                <div className='more_inf'>
                    <ul>
                        <strong>О компании</strong>
                        <Link to='/about_us'>О нас</Link>
                        <a>Новости</a>
                        <a>Наши партнеры</a>
                    </ul>
                    <ul>
                        <strong>О покупке</strong>
                        <a>Доставка и оплата</a>
                        <Link to='/return'>Возврат</Link>
                        <Link to='/guarantee'>Гарантия</Link>
                    </ul>
                    <ul>
                        <strong><Link to='/brands'>Бренды</Link></strong>
                        <Link to='/brands'>Adidas</Link>
                        <Link to='/brands'>Nike</Link>
                        <Link to='/brands'>Reebok</Link>
                        <Link to='/brands'>Puma</Link>
                    </ul>
                    <ul>
                        <strong>Наши контакты</strong>
                        <a href='tel:+996772111111'>+996 772 11 11 11</a>
                        <a href='tel:+996772111111'>+996 505 11 11 11</a>
                        <a href='tel:+996772111111'>+996 552 11 11 11</a>
                    </ul>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='container_contact'>
                <div className='contact'>
                    <div className='img_content'>
                        <div className='img_contact'>
                            <img src={twitter} alt="" className='image_cont'/>
                            <img src={facebook} alt="" className='image_cont'/>
                            <img src={instagram} alt="" className='image_cont'/>
                        </div>
                        <div className='content'>
                            <p>Only Sport 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer