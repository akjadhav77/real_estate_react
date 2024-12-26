import React from 'react'
import galleryCSS from './Gallery.module.css'

import galleryImg1 from '../../assets/Gallery01.jpg'
import galleryImg2 from '../../assets/Gallery02.jpg'
import galleryImg3 from '../../assets/Gallery03.jpg'
import galleryImg4 from '../../assets/Gallery04.jpg'
import galleryImg5 from '../../assets/Gallery05.jpg'
import galleryImg6 from '../../assets/Gallery06.jpg'

const Gallery = () => {
  return (
    <div className={`${galleryCSS.gallery_wrapper} section`}>
        <h2>Gallery</h2>
        <p className={galleryCSS.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quaerat dolor eaque modi quam incidunt?</p>

        <div className={galleryCSS.gallery_cards}>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg1} alt="gallery-Img" />
                <div className={galleryCSS.gallery_content}>
                    <h3>Choose Your Dream</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quae.</p>
                </div>
            </div>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg2} alt="gallery-Img" />
                <div className={galleryCSS.gallery_content}>
                    <h3>High Tech House</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quae.</p>
                </div>
            </div>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg3} alt="gallery-Img" />
                <div className={galleryCSS.gallery_content}>
                    <h3>Modern Homes</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quae.</p>
                </div>
            </div>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg4} alt="gallery-Img" />
                <div className={galleryCSS.gallery_content}>
                    <h3>Housing Prices</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quae.</p>
                </div>
            </div>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg5} alt="gallery-Img" />
                <div className={galleryCSS.gallery_content}>
                    <h3>Rent Abroad</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quae.</p>
                </div>
            </div>
            <div className={galleryCSS.gallery_card}>
                <img src={galleryImg6} alt="gallery-Img" />
                <div className={galleryCSS.gallery_content}>
                    <h3>Houses From Future</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quae.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery