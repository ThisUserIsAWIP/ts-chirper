import { Link } from 'react-router-dom';
import * as React from 'react'

const Navbar = (props: NavbarProps) => {
    return (
        <div className='bg-dark'>
            <Link to = {'/'} className='btn btn-outline-primary m-2'>Chirps</Link>
            <Link to = {'/post'} className='btn btn-outline-primary m-2'>Post</Link>
        </div>
    )
}
interface NavbarProps { };

interface NavbarState { };
export default Navbar;