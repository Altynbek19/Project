import React from 'react';
import {useForm} from "react-hook-form";
import exit from '/src/assets/exit.png'

const Password_recovery_pass = (props) => {

    const {register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async data => {
        console.log(data)
    }

    console.log(errors)


    return (
        <div className='cc'>
            <h2>Восстановить пароль</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        <input className="Sign_in_input" type="submit" name="submit" value="Отправить запрос"/>
                </div>
            </form>
        </div>
    );
}

export default Password_recovery_pass;