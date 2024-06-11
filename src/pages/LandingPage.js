import React from 'react'
import './LandingPage.css'

function LandingPage() {
    return (
        <>
            <div className='homepage'>


                <div className='LandingPage'>
                    <div className='LandingPage-content'>
                        <div className='navbar'>
                            <div className='app-name'>
                                Investor App
                            </div>
                            <div className='navbar-item'>
                                <div className='active'>Home</div>
                                <div className='links'>About App</div>
                                <div className='links'>FAQs</div>
                                <div className='links'>Preview</div>
                            </div>
                            <button>
                                Download
                            </button>
                        </div>
                        <div className='landing-main'>
                            <div className="landing-main-content">
                                <div className='landing-main-heading-1'>
                                    Revolutionizing social<br />  media for
                                </div>
                                <div className='landing-main-heading-2'>
                                    <span className='span-one'>Entrepreneurs and </span><br></br><span className='span-one'>Investors</span>
                                </div>
                                <div className='landing-main-paragraph'>
                                    <p>Turn your vision into reality. Join the exclusive network connecting ambitious entrepreneurs with the investors.</p>
                                </div>
                                <div className='landing-btn'>
                                    <button className='download-btn'>
                                        Download Now
                                    </button>
                                    <button className='See-in-Action'>
                                        See in Action
                                    </button>
                                </div>
                            </div>
                            <div className='landing-main-social'>
                                <div className='landing-main-social-image'>
                                    <img src="/854shots-so-1@2x.png" alt="" />
                                </div>
                                <div className='landing-main-social-black-image'>
                                    <img src="/total users.png" alt="" />
                                </div>
                                <div className='social-content'>
                                    <div className='social-one'>
                                        <div className='headding'>
                                            Invistore
                                        </div>
                                        <div className='count'>
                                            51K
                                        </div>
                                        <div className='lines'>
                                            <div className='line'></div>
                                        </div>

                                    </div>
                                    <div className='social-one'>
                                        <div className='headding'>
                                            Entrepreneurs
                                        </div>
                                        <div className='count'>
                                            81K
                                        </div>
                                        <div className='lines'>
                                            <div className='line1'></div>
                                        </div>

                                    </div>
                                    <div className='social-one'>
                                        <div className='headding'>
                                            Viewers
                                        </div>
                                        <div className='count'>
                                            490
                                        </div>
                                        <div className='lines'>
                                            <div className='line2'></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='landing-image'>
                        <img src="/rectangle-3.svg" alt="" />
                    </div>
                </div>
                <div className='section-two'>
                    <img src="/rectangle-620.svg" alt="" />
                    <div className='section-two-content'>
                        <div className='section-two-box'>
                            <div className='paragraph'>
                                <p>
                                    Let Our Powerful Features Do the Talking: See How They Solve Your Problems
                                </p>
                            </div>
                            <img src='30shots-so-1@2x.png' alt="" />
                        </div>

                    </div>
                </div>
                <div className='section-three'>
                    <div className='section-three-content'>
                        <div className='section-three-box'>
                            <div className='icon'>
                                <img src="/read-icon3.svg" alt="" />

                            </div>
                            <div className='paragraph'>
                                <div className='p-heading'>
                                    Share Your Vision. Inspire Others.
                                </div>
                                <div className='p-p'>
                                    Showcase your expertise, tell your startup story, or offer valuable insights. Engaging video content helps you connect and build a following.
                                </div>
                            </div>
                        </div>
                        <div className='section-three-box-color'>
                            <div className='icon'>
                               
                                <img src="/read-icon4.svg" alt="" />
                            </div>
                            <div className='paragraph'>
                                <div className='p-heading'>
                                    Share Your Vision. Inspire Others.
                                </div>
                                <div className='p-p'>
                                    Showcase your expertise, tell your startup story, or offer valuable insights. Engaging video content helps you connect and build a following.
                                </div>
                            </div>
                        </div>
                        <div className='section-three-box'>
                            <div className='icon'>
                                <img src="/read-icon3.svg" alt="" />
                            </div>
                            <div className='paragraph'>
                                <div className='p-heading'>
                                    Share Your Vision. Inspire Others.
                                </div>
                                <div className='p-p'>
                                    Showcase your expertise, tell your startup story, or offer valuable insights. Engaging video content helps you connect and build a following.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default LandingPage
