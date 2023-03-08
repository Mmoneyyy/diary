import axios from 'axios';

import '../style/add.css';

import Aside from './aside.js';
import Background from './background.js';

const Add = () => {
    return (
        <div className='Add'> 
            <div className='add'>
                <form>
                    <input className='date_input' type='text' name='date' placeholder='date' />
                    <input className='content_input' type='text' name='content' placeholder='content' />
                    <input className='add_button' type='submit' value='Add' />
                </form>
            </div>
            <Aside />
            <Background />
        </div>
    );
}

export default Add;