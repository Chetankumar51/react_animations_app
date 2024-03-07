import React from 'react';
import '../styles/branding.css';
import reactimg from '../assets/Group 271.svg';
import brandlogo from '../assets/Group 272.svg'

const Branding = () => {
  return (
    <div>
        <div className="container">


            <div className="section">

                    <div className="main">
                    <div className="main_brand">
                        <button className='logo_button' >Brand logo</button>
                    </div>
                    <div className="drag">
                       <div className='main_drag' >Click to browse or drag and drop your files</div>
                    </div>
                    </div>

                <div className="main">
                    <div className="main_brand">
                        <button className='logo_button' >Brand logo</button>
                    </div>
                    <div className="drag">
                       <div className='main_drag' >Click to browse or drag and drop your files</div>
                    </div>
                </div>

            </div>


            <div className="section1 mt-3">

               <div className="main2">
                    <p>Dimensions: 160 x 40 (min)</p>
                    <h5>Example placement:</h5>
                    <div>
                        <img src={reactimg} alt="" />
                    </div>
                </div> 

                <div className="main2">
                    <p>Dimensions: 540 x 240 (min)</p>
                    <h5>Example placement:</h5>
                    <div>
                        <img src={brandlogo} alt="" />
                    </div>
                </div>

            </div>


           
        </div>
    </div>
  )
}

export default Branding