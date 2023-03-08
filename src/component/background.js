import '../style/background.css';

import {Link} from 'react-router-dom';

const Background = () => {
    return (
        <div className="Background">
            <>
                <div className='board'>
                    <ul className='board_button'>
                        <Link to='/' className='board_home_btn'><li><h4>Home</h4></li></Link>
                    </ul>
                </div>
                <div className='bg_color'></div>
            </>
        </div>
    );
}

export default Background;