import React from 'react';
import {Link} from "react-router-dom";
import './_404.scss'

export default function NotFound() {
    return (
        <div id='oopss'>
            <div id='error-text'>
                <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404"/>
                <span>Страница  404</span>
                <p className="p-a">
                    .Данная страница не найдена</p>
                <Link to={'/'} className="back">... Вернуться домой</Link>
            </div>
        </div>
    )
}


