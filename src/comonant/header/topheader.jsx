<<<<<<< HEAD
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import './header.css';

function Topheader() {
  return (
    <div className='top_header'>
      <div className='container'>
        <Link to='/' ><img className='logo' src={logo} alt="Logo" /></Link>
        <form action="" className='search' >
          <input type="text" placeholder='Search for products' />
          <button><IoMdSearch /></button>
        </form>
        <div className='header-icon'>
          <div className='icon'>
           <FaRegHeart/>
           <span className='icon-count'>0</span>
          </div>
           <div className='icon'>
           <TiShoppingCart />
           <span className='icon-count'>0</span>
          </div>
     </div>
     </div> 
  </div>
  )
}

export default Topheader;
=======
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import './header.css';

function Topheader() {
  return (
    <div className='top_header'>
      <div className='container'>
        <Link to='/' ><img className='logo' src={logo} alt="Logo" /></Link>
        <form action="" className='search' >
          <input type="text" placeholder='Search for products' />
          <button><IoMdSearch /></button>
        </form>
        <div className='header-icon'>
          <div className='icon'>
           <FaRegHeart/>
           <span className='icon-count'>0</span>
          </div>
           <div className='icon'>
           <TiShoppingCart />
           <span className='icon-count'>0</span>
          </div>
     </div>
     </div> 
  </div>
  )
}

export default Topheader;
>>>>>>> 43915d1bd9613a1a77b68876f6a660109d42c86e
