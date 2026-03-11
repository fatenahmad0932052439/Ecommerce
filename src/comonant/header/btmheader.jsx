<<<<<<< HEAD
import React, { useEffect,useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import './header.css'
 const links=[
    {title:"Home",link:"/"},
    {title:"About",link:"/About"},
    {title:"Accessories",link:"/accessories"},
    {title:"Blog",link:"/blog"},
    {title:"Contact",link:"/contact"},
  ];
function Btmheader() {
const [categories, setCategories] = useState([]);
useEffect(() => {
  fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(data => setCategories(data));
})
 console.log(categories);
  return (
    <div className='btm_header'>
      <div className='coantainer'>
        <nav className='nav'>
          <div className="category_nav">
           <div className="catgory_btn">
            <IoMenuSharp />
            <p>Browse category</p>
            <MdOutlineArrowDropDown/>
           </div>
           <div className='category_nav_list'>
             {categories.map((category)=>(
              <Link to={category.slug}>
                {category.name}
              </Link>
            ))}
           </div>
           </div>
           <div className="nav_links">
            {links.map((link)=>(
              <Link to={link.link}>
                {link.title}
              </Link>
            ))}
           </div>
            <div className="btmheader_icon">
              <Link to="/">
                <PiSignInBold className='icon'/>
              </Link>
              <Link to="/">
                <FaUserPlus className='icon'/>
              </Link>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Btmheader;
=======
import React, { useEffect,useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import './header.css'
 const links=[
    {title:"Home",link:"/"},
    {title:"About",link:"/About"},
    {title:"Accessories",link:"/accessories"},
    {title:"Blog",link:"/blog"},
    {title:"Contact",link:"/contact"},
  ];
function Btmheader() {
const [categories, setCategories] = useState([]);
useEffect(() => {
  fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(data => setCategories(data));
})
 console.log(categories);
  return (
    <div className='btm_header'>
      <div className='coantainer'>
        <nav className='nav'>
          <div className="category_nav">
           <div className="catgory_btn">
            <IoMenuSharp />
            <p>Browse category</p>
            <MdOutlineArrowDropDown/>
           </div>
           <div className='category_nav_list'>
             {categories.map((category)=>(
              <Link to={category.slug}>
                {category.name}
              </Link>
            ))}
           </div>
           </div>
           <div className="nav_links">
            {links.map((link)=>(
              <Link to={link.link}>
                {link.title}
              </Link>
            ))}
           </div>
            <div className="btmheader_icon">
              <Link to="/">
                <PiSignInBold className='icon'/>
              </Link>
              <Link to="/">
                <FaUserPlus className='icon'/>
              </Link>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Btmheader;
>>>>>>> 43915d1bd9613a1a77b68876f6a660109d42c86e
