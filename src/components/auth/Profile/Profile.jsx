import React from 'react';
import './Profile.css'
import Button from "../../ui/Button";
import { useReducer } from 'react'
import Modal from "../../../components/Modal";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../../../Firebase'
import profile from './../../../assets/auth/profile.jpg'

function Profile(props) {
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
                <div className="container center-flex">
                    <h1>Ваши данные</h1>
                    <div>Ваша почта: {user.email}</div>
                    <div onClick={signOut}>
                        <Button text='Выйти с аккаунта' />
                    </div>
                </div>
            )
            }else 
            return (
                <div className="container center-flex">
                    Главная страница
                    <div>Вам нужно подтвердить почту</div>
                    <div>Ваша почта: {user.email}</div>
                    <div onClick={signOut}>
                        <Button text='Выйти с аккаунта' />
                    </div>
                </div>
            )
    } else 
    return (
        <div className='profile_container'>
            <h1>Вы еще не вошли в аккаунт</h1>
            
        </div>
    );
}

export default Profile;