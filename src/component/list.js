import axios from 'axios';

import '../style/list.css';

import Aside from './aside.js';
import Background from './background.js';

const List = () => {
    return (
        <>
            <div className='list'>
                <div className='list_box'>
                    
                </div>
            </div>
            <Aside />
            <Background />
        </>
    );
}

export default List;