import Button from "../components/ui/Button";
import { useReducer } from 'react'
import Modal from "../components/Modal";
import Authorization_icon from "../components/auth/Authorization_icon";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../Firebase'

const Main = (props) => {
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
                // <div className="container center-flex">
                //     Главная страница
                //     <div>Поздравляю, вы вошли в свой аккаунт {user.displayName}</div>
                //     <div>Ваша почта: {user.email}</div>
                //     <div onClick={signOut}>
                //         <Button text='Выйти с аккаунта' />
                //     </div>
                // </div>
            )
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
            )
    } else 
        
        return (
            <div className="container_center-flex">
                {/* <div onClick={() => openModal('authorization')}>
                    <Button text='Авторизация' />
                </div> */}
                {/* <div onClick={() => openModal('registration')}>
                    <Button text='Регистрация' />
                </div>
                <div onClick={() => openModal('password_recovery_email')}>
                    <Button text='Восстановление пароля(e-mail)' />
                </div>
                <div onClick={() => openModal('password_recovery_pass')}>
                    <Button text='Восстановление пароля(пароль)' />
                </div>
                 */}
                 <Authorization_icon />
                <Modal modal={modalState}/>
            </div>
    );
};

export default Main;