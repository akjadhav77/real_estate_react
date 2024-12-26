import React from 'react'
import featureCSS from './Features.module.css'

const Features = () => {
  return (
    <div className={`${featureCSS.features_wrapper} section`} id='features'>
        <div className={featureCSS.features_cards}>
            <div className={featureCSS.features_card}>
                <i className='ri-home-9-fill'></i>
                <div className={featureCSS.features_content}>
                    <h3>Bright Projects</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et omnis molestiae eligendi at recusandae.</p>
                </div>
            </div>
            <div className={featureCSS.features_card}>
                <i className='ri-home-wifi-fill'></i>
                <div className={featureCSS.features_content}>
                    <h3>Comfortable Homes</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et omnis molestiae eligendi at recusandae.</p>
                </div>
            </div>
            <div className={featureCSS.features_card}>
                <i className='ri-building-4-fill'></i>
                <div className={featureCSS.features_content}>
                    <h3>Reliable Company</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et omnis molestiae eligendi at recusandae.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features