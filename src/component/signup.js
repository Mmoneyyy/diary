import axios from 'axios';

import '../style/signup.css';

import Aside from './aside.js';
import Background from './background.js';

const Signup = () => {
    return (
        <div className='Signup'>
            <div className='signup_body'>
                <form>
                    <img className='blue_logo' src='img/blue_logo.png' />
                    <input type='text' name='id' placeholder='id' />
                    <input type='password' name='password' placeholder='password' />
                    <input type='submit' value='Signup' />
                </form>
            </div>
            <Aside />
            <Background />
        </div>
    );
}

export default Signup;