import React from 'react';
import exit from '/src/assets/exit.png'

function Password_recovery_email(props) {
    return (
        <div className='cc'>
            <h2>Восстановить пароль</h2>
            <div className='e-mail'>
                <h4>E-mail</h4>
                <input type="text" placeholder='Введите e-mail'/>
            </div>
            <button className='Sign_in'>Отправить запрос</button>
        </div>
    );
}

export default Password_recovery_email;