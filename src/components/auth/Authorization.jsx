import './Authorization.css'
import exit from '/src/assets/exit.png'
import mark from '/src/assets/mark.png'
import google from '/src/assets/google.png'
import instagram from '/src/assets/instagram.png'
import facebook from '/src/assets/facebook.png'

const Authorization = (props) => {




    return (
        <div className='cc'>
            <h2 className=''>Войти</h2>            
            <div className='e-mail'>
                <h4>E-mail</h4>
                <input type="text" placeholder='Введите e-mail'/>
            </div>
            <div className='password'>
                <h4>Пароль</h4>
                <input type="password" placeholder='Введите пароль'/>
            </div>
            <button className='Sign_in'>Войти</button>
            <div className='forget'>
                <div className='remember'>
                    <input  className="remember_inp" type="checkbox" />
                    <h5>Запомнить меня</h5>
                </div>
                <div><a href="#" className='forget_pass'>Забыли пароль?</a></div>
            </div>

            <div>
                <div className='contact'>
                    <p>Войти с помощью</p>
                </div>
                <div className='social_net'>
                    <div>
                        <img src={google} alt="" />
                    </div>
                    <div>
                        <img src={instagram} alt="" />
                    </div>
                    <div>
                        <img src={facebook} alt="" />
                    </div>
                </div>
            </div>
            <div className='register'>

                <div>
                    <p>Нет аккаунта?</p>
                </div>
                <button className='reg'>Зарегистрироваться</button>

            </div>
        </div>
    )

};

export default Authorization