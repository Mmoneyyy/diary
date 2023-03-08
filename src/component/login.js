import axios from 'axios';

import '../style/login.css';

import Aside from './aside.js';
import Background from './background.js';

const Login = () => {
    return (
        <div className='Login'>
            <div className='login_body'>
                <form>
                    <img className='blue_logo' src='img/blue_logo.png'/>
                    <input type='id' name='id' placeholder='id' />
                    <input type='password' name='password' placeholder='password' />
                    <input className='login_signup_btn' type='submit' value='Login' />
                </form>
            </div>
            <Aside />
            <Background />
        </div>
    );
}

export default Login;