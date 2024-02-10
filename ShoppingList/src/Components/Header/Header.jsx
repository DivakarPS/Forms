import './Header.css'

import HeaderImg from '../../../assets/HeaderImg.avif'


function Header(){
    return (
        <div className='header-wrapper'>
            <h1 className='header-text'>
                Shopping List
            </h1>
            <div className='header-img-wrapper'>
                <img 
                    src={HeaderImg} 
                    className='header-img'
                />
            </div>
        </div>
    )
}

export default Header;