import Button from "../components/ui/Button";
import {useReducer} from 'react'
import Modal from "../components/Modal";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '..//firebase'

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
        return (
            <div className="container center-flex">
                Главная страница
                <div>Поздравляю, вы вошли в свой аккаунт {user.displayName}</div>
                <div>Ваша почта: {user.email}</div>
                <div onClick={signOut}>
                    <Button text='Выйти с аккаунта' />
                </div>
            </div>
        )
    } else {
        
        return (
            <div className="container_center-flex">
                <div onClick={() => openModal('authorization')}>
                    <Button text='Авторизация' />
                </div>
                <div onClick={() => openModal('registration')}>
                    <Button text='Регистрация' />
                </div>
                <div onClick={() => openModal('password_recovery_email')}>
                    <Button text='Восстановление пароля(e-mail)' />
                </div>
                <div onClick={() => openModal('password_recovery_pass')}>
                    <Button text='Восстановление пароля(пароль)' />
                </div>
                
                <Modal modal={modalState}/>
            </div>
        );
    
};
}
export default Main;