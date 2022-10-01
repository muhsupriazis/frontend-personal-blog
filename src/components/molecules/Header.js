import React from 'react'
import {Link} from 'react-router-dom'
import { foto } from '../../assets'
import {Search } from '../atoms'

const Header = () => {
  return (
    <header className='flex justify-between items-center shadow-md'>
      <div className='flex h-14 items-center gap-4' >
          <div className='hover:bg-blue-100 group p-4 flex justify-center items-center'>
            <svg className='group-hover:text-blue-800' width='24px' height='24px' role='presentation' viewBox='0 0 24 24'>
              <path fill="currentColor" fillRule="evenodd" d="M4 5.01C4 4.451 4.443 4 5.01 4h1.98C7.549 4 8 4.443 8 5.01v1.98C8 7.549 7.557 8 6.99 8H5.01C4.451 8 4 7.557 4 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 13.549 7.557 14 6.99 14H5.01C4.451 14 4 13.557 4 12.99v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C14 7.549 13.557 8 12.99 8h-1.98C10.451 8 10 7.557 10 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C20 7.549 19.557 8 18.99 8h-1.98C16.451 8 16 7.557 16 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm-12 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 19.549 7.557 20 6.99 20H5.01C4.451 20 4 19.557 4 18.99v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98z"></path>
            </svg>
          </div>
          <nav>
              <ul className='flex gap-1 items-center'>
                <li><Link className='hover:bg-blue-100 py-[.5em] px-[.5em] text-sm rounded-sm hover:text-blue-800' to='article' >Article</Link></li>
                <li><Link className='hover:bg-blue-100 py-[.5em] px-[.5em] text-sm rounded-sm hover:text-blue-800' to='experience' >Experience</Link></li>
                <li><Link className='hover:bg-blue-100 py-[.5em] px-[.5em] text-sm rounded-sm hover:text-blue-800' to='license' >License</Link></li>
                <li><Link className='hover:bg-blue-100 py-[.5em] px-[.5em] text-sm rounded-sm hover:text-blue-800' to='portfolio' >Portfolio</Link></li>
                <li className='ml-2 bg-blue-600 group relative text-white py-[.5em] px-[.8em] font-[300] rounded-sm hover:bg-blue-800 text-sm' to='create' >Create New &darr;
                  <ul className='hidden rounded overflow-hidden group-hover:flex flex-col bg-white shadow-md text-black absolute z-10'>
                    <li><Link className='inline-block w-full py-2 px-4 hover:bg-blue-100 hover:text-blue-800' to='/create/article'>Article</Link></li>
                    <li><Link className='inline-block w-full py-2 px-4 hover:bg-blue-100 hover:text-blue-800' to='/create/experience'>Experience</Link></li>
                    <li><Link className='inline-block w-full py-2 px-4 hover:bg-blue-100 hover:text-blue-800' to='/create/license'>License</Link></li>
                    <li><Link className='inline-block w-full py-2 px-4 hover:bg-blue-100 hover:text-blue-800' to='/create/portfolio'>Portfolio</Link></li>
                  </ul>
                </li>
              </ul>
          </nav>
          
      </div>
      <div className='flex items-center gap-4 px-4'>
        <div>
          <Search placeholder='Search'/>
        </div>
        <img className='w-10 h-10 rounded-full' src={ foto } alt='hello'/>
      </div>
    </header>
  )
}
export default Header