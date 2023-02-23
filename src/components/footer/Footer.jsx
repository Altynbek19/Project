import '/src/components/footer/Footer.css'
import twitter from '/src/assets/footer/twitter.png'
import facebook from '/src/assets/footer/facebook.png'
import instagram from '/src/assets/footer/instagram.png'

const Footer = (Props) => {
    return (
        <footer>
            <div>
                <div className='more_inf'>
                    <ul>
                        <strong>О компании</strong>
                        <a>О нас</a>
                        <a>Новости</a>
                        <a>Наши партнеры</a>
                    </ul>
                    <ul>
                        <strong>О покупке</strong>
                        <a>Доставка и оплата</a>
                        <a>Возврат</a>
                        <a>Гарантия</a>
                    </ul>
                    <ul>
                        <strong>Бренды</strong>
                        <a>Adidas</a>
                        <a>Nike</a>
                        <a>New Balance</a>
                        <a>Puma</a>
                        <a>Fila</a>
                    </ul>
                    <ul>
                        <strong>Наши контакты</strong>
                        <a>+996 772 11 11 11</a>
                        <a>+996 505 11 11 11</a>
                        <a>+996 552 11 11 11</a>
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
                            <img src={twitter} alt="" />
                            <img src={facebook} alt="" />
                            <img src={instagram} alt="" />
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