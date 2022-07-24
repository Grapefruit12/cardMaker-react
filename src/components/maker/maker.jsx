import React from 'react';
import { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import {useNavigate} from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useState } from 'react';

const Maker = ({authService}) => {
    const [cards, setCards] =useState([
        {
            id:'1',
            name: 'Ellie',
            company: 'Samsung',
            theme: 'dark',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null,
        },
        {
            id:'2',
            name: 'Ellie2',
            company: 'Samsung',
            theme: 'light',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null,
        },
        {
            id:'3',
            name: 'Ellie3',
            company: 'Samsung',
            theme: 'colorful',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null,
        },
    ]);
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
    });

    const addCard=card=>{
        const updated=[...cards, card];
        setCards(updated);
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
                <div className={styles.container}>
                    <Editor cards={cards} addCard={addCard}/>
                    <Preview cards={cards}/>
                </div>
            <Footer />
        </section>
    );
};

export default Maker;