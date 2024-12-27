import React from 'react'
import footerCSS from './Footer.module.css'
import post01 from './../../assets/Project.jpg'
import post02 from './../../assets/Project2.jpg'

const Footer = () => {
  return (
    <footer className={`${footerCSS.footer_wrapper} section`}>
        <div className={footerCSS.footer_links}>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
            <div className={footerCSS.footer_input}>
                <input type="text"  placeholder='Your email' />
                <button>Subscribe</button>
            </div>
        </div>
        <div className={footerCSS.footer_links}>
            <h3>Other Links</h3>
            <p><a href="">Blog</a></p>
            <p><a href="">Contact</a></p>
            <p><a href="">About</a></p>
            <p><a href="">Service</a></p>
        </div>
        <div className={footerCSS.footer_links}>
            <h3>Follow Us</h3>
            <p><a href="">Facebook</a></p>
            <p><a href="">Instagram</a></p>
            <p><a href="">YouTube</a></p>
            <p><a href="">Twitter</a></p>
        </div>
        <div className={footerCSS.footer_links}>
            <h3>Destinations</h3>
            <p>High Tech Houses</p>
            <p>Modern Interiors</p>
            <p>Housing Prices</p>
        </div>
        <div className={footerCSS.footer_links}>
            <h3>All Posts</h3>
            <div className={footerCSS.footer_posts}>
                <img src={post01} alt="Footer-post"/>
                <p>Dream Houses</p>
            </div>
            <div className={footerCSS.footer_posts}>
                <img src={post02} alt="Footer-post"/>
                <p>Dream Houses</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer