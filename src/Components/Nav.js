import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../Styles/Nav/Nav.css'
import { FiSearch, FiHeart, FiUser } from 'react-icons/fi'
import { AiOutlineShopping } from 'react-icons/ai'

function Nav() {
    const [discout, setDiscout] = useState(20)
    const [cart, setCart] = useState(2)
    return (
        <main className='main_nav_content'>
            <div className='offer'>
                <p>Sign In & Get 20% Off $100+ Or 25% Off $150+</p>
            </div>
            <section className='nav_contents'>
                <figure className='logo'>
                    <Link to={'/home'} className='circle'>
                        <div className='vertical_lines'></div>
                        <div className='vertical_lines'></div>
                        <div className='horizontal_line'></div>
                    </Link>
                    <figcaption><Link to={'/home'}>BellaFit</Link></figcaption>
                </figure>
                <nav className='nav_links'>
                    <Link to={'/about'}>About Us</Link>
                    <Link to={'/Sale'}>Sale <sup style={{ position: 'absolute', color: '#C4140F', fontSize: '14px', marginLeft: '3px', }}>{discout}%</sup></Link>
                    <Link to={'/Blog'}>Blog</Link>
                    <Link to={'/shop'}>Shop</Link>
                    <Link to={'/contact'}>Contact</Link>
                </nav>
                <div className='icons'>
                    <FiSearch />
                    <FiHeart />
                    <div style={{ marginRight: '12px' }}>
                        <div className='div'>
                            <AiOutlineShopping />
                            <sup style={{ position: 'absolute', backgroundColor: 'yellow', width: '18px' }}>{cart}</sup>
                        </div>
                    </div>
                    <FiUser />
                </div>

            </section>
            <section>
                <Outlet />
            </section>
        </main>
    )
}

export default Nav