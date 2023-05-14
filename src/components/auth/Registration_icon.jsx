import {useForm} from "react-hook-form";
import './Registration_icon.css'
import reg_image from '/src/assets/auth/reg_image.png'
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword ,sendEmailVerification   } from 'firebase/auth';
import {signInWithGoogle} from '../../Firebase'
import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useReducer } from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import Button from "../../components/ui/Button"


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
const [modal, dispatch] = useReducer(reducer, {
    active: false,
    content: 'registration'
});  
const [user, loading, error] = useAuthState(auth);

function reducer(state, action) {
    switch (action.type) {
        case 'modal':
            return {
                ...state,
                active: action.modal
            };
        case 'content':
            return {
                ...state,
                content: action.content
            };
        default:
            return state
    }
}

const modalState = {
    props: modal,
    dispatch: dispatch,
}

async function openModal(content) {
    await dispatch({type: 'content', content: content})
    await dispatch({type: 'modal', modal: true})
}
const signOut = () => {
    auth.signOut();
};

if (user) {
    if (user.emailVerified){
        return (
            <div className="container_data">
                <h1>Ваши данные</h1>
                <div>Ваша почта: {user.email}</div>
                <div onClick={signOut}>
                    <Button text='Выйти с аккаунта' />
                </div>
            </div>
        );
        }else 
        return (
            <div className="container center-flex">
                <h1>Профиль</h1>
                <div>Чтобы войти вам нужно подтвердить почту</div>
                <div>Ваша почта: {user.email}</div>
                <div onClick={signOut}>
                    <Button text='Выйти с аккаунта' />
                </div>
            </div>
        );
} else 
return (
    <div className='cc'>
        <div className="reg_box">
                <div className="auth_reg">
                    <Link to='/profile'><h2 >Войти</h2></Link> 
                    <Link to='/register_icon'><h2 className="h2_reg">Регистрация</h2></Link>  
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
        </div>
        <div className="img_box">
            <img src={reg_image} alt="" />
        </div>
    </div>
)

};



export default Registration