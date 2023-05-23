import { useContext } from "react";
import { NavLink } from "react-router-dom"
import {ShoppingCartContext} from '../../Context/index'
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {

  const {count} = useContext(ShoppingCartContext)
  const activeClass = isActive => isActive ? 'underline underline-offset-4' : "";

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full text-sm py-8 px-4 font-light top-0">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to='/'
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/all'
            className={({ isActive }) => activeClass(isActive)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) => activeClass(isActive)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) => activeClass(isActive)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            className={({ isActive }) => activeClass(isActive)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            className={({ isActive }) => activeClass(isActive)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            className={({ isActive }) => activeClass(isActive)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          hello@jeici.com
        </li>
        <li>
          <NavLink 
            to='/my-orders' 
            className={({ isActive }) => activeClass(isActive)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) => activeClass(isActive)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => activeClass(isActive)}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex justify-between items-center">
          <ShoppingCartIcon className="w-[24px] h-[24px] mr-1" />
          { count }
        </li>
      </ul>
    </nav>
  )
}

export default Navbar