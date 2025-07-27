import {NavLink} from 'react-router-dom';
import '../index.css'
const Error=()=>{
    return(
        <div className="err-page">
            <h1 className="err-page-txt-upper">404</h1>
            <figure className="err-page-img">
                <img className="err-page-txt-image" src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="error"/>
            </figure>
            <div className="err-page-txt">
                <h1 className="err-page-txt-h1">Look like you're lost</h1>
                <p className="err-page-txt-p">the page you are looking for is not available</p>
                <NavLink className="err-page-txt-btn" to='/'>Go to Home</NavLink>
                
            </div>
        </div>
    )
}
export default Error;