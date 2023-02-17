import {useForm} from "react-hook-form";
import './Registration.css'
import exit from '/src/assets/exit.png'
import mark from '/src/assets/mark.png'
import google from '/src/assets/google.png'
import instagram from '/src/assets/instagram.png'
import facebook from '/src/assets/facebook.png'

const Registration = (props) => {

    const {register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async data => {
        console.log(data)
    }

    console.log(errors)

    return (
        <div className='container'>
            <div className='exit'>
                <img src={exit} alt="" onClick={() => props?.modal.dispatch({ type: "main", active:"false"})}/>
            </div>
            <h2>Регистрация</h2>   
            <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>         
            <div className='name'>
                <h4 htmlFor="fullname">ФИО</h4>
                <input 
                        type="text" 
                        name="fullname" 
                        placeholder="Имя" 
                        {...register('fullName', {
                            required: "Параметр обязателен", 
                            maxLength: {
                                value: 20,
                                message: 'Ваше имя должно быть меньше 20 символов'
                            }, 
                            minLength: {
                                value: 3,
                                message: 'Ваше имя должно быть больше 3 символов'
                            } 
                        })}
                    />
                    {errors.firstName && <span className="error" role="alert">{errors.fullName?.message}</span>}
            </div>
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
            </div>
            <div className='phone'>
                <h4>Телефон</h4>
                <input type="text" placeholder='0 ххх ххх ххх'
                {...register("number",{
                    required: "Обьязательно",
                    maxLength: {
                        value: 10,
                        message: 'Ваше имя должно быть меньше 20 символов'
                    }, 
                })}
                />
                {errors.number && <span className="error" role="alert">{errors.number?.message}</span>}
            </div>
            <div className='new_password'>
                <h4>Создать пароль</h4>
                <input type="password" name="password" placeholder='Введите пароль'
                {...register("password", {
                    required: "Параметр обязателен",
                    minLength: {
                    value: 5,
                    message: "Минимальная длина пароля 5 символов"
                    }
                })}
                />
                {errors.password && <span className="error" role="alert">{errors.password?.message}</span>}
            </div>
            <div className='password'>
                <h4>Подтвердить пароль</h4>
                <input type="password" name="cpassword" placeholder='Введите пароль еще раз'
                {...register("cpassword", {
                    validate: (value) => {
                        if (watch('password') != value) {
                            return "Ваши пароли не совпадают";
                        }
                    },
                    required: 'Параметр обязателен'
                })}
                />
                {errors.cpassword && <span className="error" role="alert">{errors.cpassword?.message}</span>}
            </div>
            <div className="Sign_in">
                    <label htmlFor="submit"></label>
                    <input type="submit" name="submit" value="Зарегестрироваться"/>
                </div>
            </form>
            <div className='forget'>
                <div className='remember'>
                    <img src={mark} alt="" className='mark'/>
                    <p>запомнить меня</p>
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
                <button className='reg'>Войти</button>
            </div>
        </div>
    )

};

export default Registration