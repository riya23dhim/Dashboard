import {NavLink} from 'react-router-dom';

const Servererror=()=>{
    const handleClick=()=>{
        window.location.reload();
    }
    return(
        <div className="err-pages">

            <figure className="err-page-imgs">
                <img className="err-page-txt-images" src="./stitch.gif" alt="error"/>
                <img src="./stitchtext.png" />
          
            </figure>
            <div className="err-page-txts ">
                
                <NavLink className="px-4 py-3 hover:drop-shadow-lg hover:drop-shadow-cyan-600/30 hover:scale-[1.02] hover:bg-cyan-600/90 bg-cyan-600/80 rounded-md  text-gray-200 " to='/'>Go to Home</NavLink>
                <button  className="px-8 py-3  hover:drop-shadow-lg hover:drop-shadow-cyan-600/30 hover:scale-[1.02] hover:bg-cyan-600/90 bg-cyan-600/80 rounded-md  text-gray-200 " type="button " onClick={handleClick}>Refresh</button>

            </div>
        </div>
    )
}
export default Servererror;