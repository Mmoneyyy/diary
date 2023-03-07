import '../style/aside.css'

import {Link} from 'react-router-dom';

const Aside = () => {
    return (
        <div className="Aside">
            <aside className="aside_body">
                <Link to='/'><img className="logo" src="img/logo.png" /></Link>
                <div className="aside_button">
                    <Link to='/login'>
                        <img className='img' src='img/login.png' />
                        <p>Login</p>
                        <span>{">"}</span>
                    </Link>
                    <Link>
                        <img className='img' src='img/signup.png' />
                        <p>Signup</p>
                        <span>{">"}</span>
                    </Link>
                </div>
            </aside>
        </div>
    );
}

export default Aside;