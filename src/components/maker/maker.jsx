import React from 'react';
import { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import {useNavigate} from 'react-router-dom';

const Maker = ({authService}) => {
    const history=useNavigate();
    const onLogout=()=>{
        authService.logout();
    };
    
    useEffect(()=>{
        authService.onAuthChange(user =>{
            if(!user){
                history('/');
            }
        });
    })
    return(
        <section className={styles.Maker}>
            <Header onLogout={onLogout} />
            <Footer />
        </section>
    )
};

export default Maker;