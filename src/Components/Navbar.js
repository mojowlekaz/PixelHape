import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";


function Navbar(){
        const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return(
        <header>
         <img style={{}} className="image-nav" src={require('/Users/user/pixelhape/src/assets/Layer 1.png')} />
         <nav ref={navRef}> 
         <a className="Home" href="/Home">Home</a>
         <a href="/Mint" className='Mint'>Mint</a>
         <a href="/Hape+Info" className='Hape'>Hape+ Info</a>
         <a href="/Gallery" className='Gallery'>Gallery</a>
         <a href="/RoadMap" className='RoadMap'>RoadMap/Whitepaper</a>
         <button className="nav-btn nav-close-btn" onClick={showNav}>
             <FaTimes/>
         </button>

         </nav>
          <button className="nav-btn" onClick={showNav}>
          <FaBars />
         </button>
        </header>
    )
}
export default Navbar;
// export default function Navbar() {
//     const navRef = useRef();

//     const showNav = () => {
//         navRef.current.classList.toggle("responsive_nav")
//     }
//     return <nav className="nav">
//         <header>
//         <a href="./" className="Title"></a>
//        <img className="image-nav" src={require('./Layer 1.png')} />
//         <ul>
//             <li>
//                 <a className="Home" href="/Home">Home</a>
//             </li>

//             <li>
//             <a href="/Mint" className='Mint'>Mint</a>
//             </li>

//             <li>
//             <a href="/Hape+Info" className='Hape'>Hape+ Info</a>
//             </li>
//             <li>
//             <a href="/Gallery" className='Gallery'>Gallery</a>
//             </li>
//             <li>
//             <a href="/RoadMap" className='RoadMap'>RoadMap/Whitepaper</a>
//             </li>
//             <button className="nav-btn" onClick={showNav}>
//             <FaTimes/>
//         </button>
//         </ul>
//         <button className="nav-btn1" onClick={showNav}>
//             <FaBars />
//         </button>
//         </header>
//     </nav>
    
// }


