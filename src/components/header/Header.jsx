import logo from '/src/assets/header/logo.png'
import basket from '/src/assets/header/basket_icon.png'
import save from '/src/assets/header/save_icon.png'
import user_profile from '/src/assets/header/user-profile.png'
import icon_search from '/src/assets/header/search.png'
import filtersearch from '/src/assets/header/filtersearch.png'
import profile from './../../assets/auth/profile.jpg'
import '/src/components/header/Header.css'
import { Link } from 'react-router-dom'
import React from 'react';
import { useReducer } from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../../Firebase'


function Header(props) {
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
                <header className='header_black'>
                    <div className="header_logo">
                        <div className='logo'>
                        <Link to='/'><img src={logo} alt="" /></Link>
                        </div>
                        <div className='search_logo'>
                            <input type="text"/>
                        </div>
                        <div className='profile'>
                            <Link to='/basket'><img className='basket' src={basket} alt="" /></Link>
                            <Link to='/favorites'><img className='save' src={save} alt="" /></Link>
                            <Link to='/profile'><img className='user_profile' src={profile} alt="" /></Link>
                        </div>
                    </div>
                        <div className='product_container'>
                            <ul className='product_black'>
                                <Link to="/category">Все товары</Link>
                                <Link to="/category/eg8WVQibxIjnKFgIqnR7">Фитнес</Link>
                                <Link to="/category/5z04t9tPCTtpyeamADqC">Акксессуары</Link>
                                <Link to="/category/GkU75LBVU7XJ54b7cuMi">Скидки</Link>
                                <Link to="/category/q7qOlgxEVLovEpJyEogo">Горнолыжная одежда</Link>
                            </ul>
                        </div>
                </header>
            );
            }else 
            return (
                <header className='header_black'>
                    <div className="header_logo">
                        <div className='logo'>
                        <Link to='/'><img src={logo} alt="" /></Link>
                        </div>
                        <div className='search_logo'>
                            <input type="text"/>
                        </div>
                        <div className='profile'>
                            <Link to='/basket'><img className='basket' src={basket} alt="" /></Link>
                            <Link to='/favorites'><img className='save' src={save} alt="" /></Link>
                            <Link to='/profile'><img className='user_profile' src={user_profile} alt="" /></Link>
                        </div>
                    </div>
                        <div className='product_container'>
                            <ul className='product_black'>
                                <Link to="/category">Все товары</Link>
                                <Link to="/category/eg8WVQibxIjnKFgIqnR7">Фитнес</Link>
                                <Link to="/category/5z04t9tPCTtpyeamADqC">Акксессуары</Link>
                                <Link to="/category/GkU75LBVU7XJ54b7cuMi">Скидки</Link>
                                <Link to="/category/q7qOlgxEVLovEpJyEogo">Горнолыжная одежда</Link>
                            </ul>
                        </div>
                </header>
            );
    } else 
    return (
        <header className='header_black'>
                    <div className="header_logo">
                        <div className='logo'>
                        <Link to='/'><img src={logo} alt="" /></Link>
                        </div>
                        <div className='search_logo'>
                            <input type="text"/>
                        </div>
                        <div className='profile'>
                            <Link to='/basket'><img className='basket' src={basket} alt="" /></Link>
                            <Link to='/favorites'><img className='save' src={save} alt="" /></Link>
                            <Link to='/profile'><img className='user_profile' src={user_profile} alt="" /></Link>
                        </div>
                    </div>
                        <div className='product_container'>
                            <ul className='product_black'>
                                <Link to="/category">Все товары</Link>
                                <Link to="/category/eg8WVQibxIjnKFgIqnR7">Фитнес</Link>
                                <Link to="/category/5z04t9tPCTtpyeamADqC">Акксессуары</Link>
                                <Link to="/category/GkU75LBVU7XJ54b7cuMi">Скидки</Link>
                                <Link to="/category/q7qOlgxEVLovEpJyEogo">Горнолыжная одежда</Link>
                            </ul>
                        </div>
                </header>
    );
}

// const Header = (Props) => {
//     return (
//         <header className='header_black'>
//             <div className="header_logo">
//                 <div className='logo'>
//                 <Link to='/'><img src={logo} alt="" /></Link>
//                 </div>
//                 <div className='search_logo'>
//                     <input type="text"/>
//                 </div>
//                 <div className='profile'>
//                     <Link to='/basket'><img className='basket' src={basket} alt="" /></Link>
//                     <Link to='/favorites'><img className='save' src={save} alt="" /></Link>
//                     <Link to='/profile'><img className='user_profile' src={user_profile} alt="" /></Link>
//                 </div>
//                 <div className='menu'>
//                     <img src={menu} alt="" />
//                 </div>
//             </div>
//                 <div className='product_container'>
//                     <ul className='product_black'>
//                         <Link to="/category">Все товары</Link>
//                         <Link to="/category/eg8WVQibxIjnKFgIqnR7">Фитнес</Link>
//                         <Link to="/category/5z04t9tPCTtpyeamADqC">Акксессуары</Link>
//                         <Link to="/category/GkU75LBVU7XJ54b7cuMi">Скидки</Link>
//                         <Link to="/category/q7qOlgxEVLovEpJyEogo">Горнолыжная одежда</Link>
//                     </ul>
//                 </div>
//         </header>
//     );
// };

export default Header