import {useForm} from "react-hook-form";
import './Registration.css'
import exit from '/src/assets/auth/exit.png'
import mark from '/src/assets/mark.png'
import google from '/src/assets/auth/google.png'
import instagram from '/src/assets/auth/instagram.png'
import facebook from '/src/assets/auth/facebook.png'
import reg_image from '/src/assets/auth/reg_image.png'
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword ,sendEmailVerification   } from 'firebase/auth';
import {signInWithGoogle} from '../../Firebase'
import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";


const Registration = (props) => {
    const {register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
            sendEmailVerification(userCredential.user)
            await setDoc(doc(database, "users", data.email), data);
        } catch (error) {
            console.log(error)
        }
    }

    console.log(errors)
// 


    return (
        <div className="container_reg_image">
            <div className="container_1">
                <div className='container'>
                    <div className="choose_log_in_register">
                        <Link to='/sign_in_icon'><h3 className='choose_log_in_2'>Войти</h3></Link>   
                        <Link to='/register_icon'><h3 className='choose_register_2'>Регистрация</h3></Link> 
                    </div>  
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
                    {errors.fullName && <span className="error" role="alert">{errors.fullName?.message}</span>}
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
                {errors.email && <span className="error" role="alert">{errors.email?.message}</span>}
            </div>
            {/* <div className='phone'>
                <h4>Телефон</h4>
                <input type="text" name="password" placeholder='+996 ххх хх хх хх'
                {...register("number", {
                    required: "Параметр обязателен",
                    maxLength: {
                    value: 13,
                    message: "Минимальная длина пароля 13 символов"
                    }
                })}
                />
                {errors.password && <span className="error" role="alert">{errors.number?.message}</span>}
            </div> */}
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
                    <input className="Sign_in_input" type="submit" name="submit" value="Зарегестрироваться"/>
            </div>
            </form>
            <div className='register'>
                <div className="a_have_not">
                    <Link to='/sign_in'><a href="" >У меня есть аккаунт</a></Link>
                </div>
                <button className='reg'>Войти</button>
            </div>
                </div>
            </div>
            <div className="container_2">
                    <img src={reg_image} alt="" className="reg_image"/>
            </div>
        </div>
    )

};

export default Registration