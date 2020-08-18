import React from 'react'
import './Login.css'
import imgspotify from './spotify.jpg'
import {loginUrl} from './spotify'
export default function Login() {
    return (
        <div className="login">
            <img src = {imgspotify} alt=""/>
            <a href = {loginUrl}>LOGIN</a>
        </div>
    )
}
