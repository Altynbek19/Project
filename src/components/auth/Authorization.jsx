import {useForm} from "react-hook-form";
// import './Authorization.css'
import mark from '/src/assets/mark.png'
import google from '/src/assets/auth/google.png'
import instagram from '/src/assets/auth/instagram.png'
import facebook from '/src/assets/auth/facebook.png'
import {signInWithGoogle} from '../../Firebase'

const Authorization = (props) => {

    const {register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async data => {
        console.log(data)
    }

    console.log(errors)


    return (
        <div className='cc'>
            <h2 className=''>Войти</h2>   
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='e-mail'>
                <h4>E-mail</h4>
                <input type="text" placeholder='Введите e-mail'
                {...register("email", {
                    required: "Обьязательно",
                    pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Ваш email не подходит под нужный формат"
                    }
                })}
                />
                {errors.email && <span className="error" role="alert">{errors.email?.message}</span>}
            </div>
            <div className='password'>
                <h4>Подтвердить пароль</h4>
                <input type="password" name="cpassword" placeholder='Введите пароль'
                {...register("cpassword", {
                    validate: (value) => {
                        if (watch('password') != value) {
                            return "Вы ввели неправильный пароль";
                        }
                    },
                    required: 'Параметр обязателен'
                })}
                />
                {errors.cpassword && <span className="error" role="alert">{errors.cpassword?.message}</span>}
            </div>
            <div className="Sign_in">
                    <label htmlFor="submit"></label>
                    <input className="Sign_in_input" type="submit" name="submit" value="Войти"/>
            </div>
            </form>
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
                        <img onClick={signInWithGoogle} src={google} alt="" />
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