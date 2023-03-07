import axios from 'axios';

import '../style/login.css';

import Aside from './aside.js';
import Background from './background.js';

const Login = () => {
    return (
        <div className='Login'>
            <div className='login_body'>
                <img/>
                <form>
                    <input type='text' name='id' placeholder='id' />
                    <input type='password' name='password' placeholder='password' />
                    <input type='submit' value='Login' />
                </form>
            </div>
            <Aside />
            <Background />
        </div>
    );
}

export default Login;