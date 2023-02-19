import React from 'react';
import exit from '/src/assets/exit.png'

function Password_recovery_pass(props) {
    return (
        <div className='cc'>
            <h2>Восстановить пароль</h2>
            <div className='new_password'>
                <h4>Ввести новый пароль</h4>
                <input type="text" placeholder='Введите пароль'/>
            </div>
            <div className='password'>
                <h4>Подтвердить новый пароль</h4>
                <input type="text" placeholder='Введите пароль'/>
            </div>
            <button className='Sign_in'>Войти</button>
        </div>
    );
}

export default Password_recovery_pass;