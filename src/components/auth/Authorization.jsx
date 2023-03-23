import {useForm} from "react-hook-form";
import './Authorization.css'
import reg_image from '/src/assets/auth/reg_image.png'
import exit from '/src/assets/auth/exit.png'
import mark from '/src/assets/mark.png'
import google from '/src/assets/auth/google.png'
import instagram from '/src/assets/auth/instagram.png'
import facebook from '/src/assets/auth/facebook.png'
import {signInWithGoogle} from '../../Firebase'
import { Link } from "react-router-dom";

const Authorization = (props) => {

    const {register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async data => {
        console.log(data)
    }

    console.log(errors)


    return (
        <div className="container_reg_image">
            <div className="container_1">
                <div className='container'>
                    <div className="choose_log_in_register">
                        <Link to='/sign_in'><h3 className='choose_log_in'>Войти</h3></Link>   
                        <Link to='/register'><h3 className='choose_register'>Регистрация</h3></Link> 
                    </div>  
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
                            <input className="sign_in_input" type="submit" name="submit" value="Войти"/>
                    </div>
                    </form>
                    <div className='forget'>
                        <div className='remember'>
                            <input  className="remember_inp" type="checkbox" />
                            <h5>Запомнить меня</h5>
                        </div>
                        <div><a href="#" className='forget_pass'>Забыли пароль?</a></div>
                    </div>      
                    <div className="contact_social_net">
                        <div className='contact_auth'>
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
                </div>
            </div>
            <div className="container_2">
                    <img src={reg_image} alt="" className="reg_image"/>
            </div>
        </div>
    )

};

export default Authorization