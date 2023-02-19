import React from 'react';
import {useForm} from "react-hook-form";
import exit from '/src/assets/exit.png'

const Password_recovery_email = (props) => {

    const {register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async data => {
        console.log(data)
    }

    console.log(errors)

    return (

        
        <div className='cc'>
            <h2>Восстановить пароль</h2>
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
                <button className='Sign_in'>Отправить запрос</button>
            </form>
        </div>
    );
}

export default Password_recovery_email;