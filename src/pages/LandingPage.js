import React from 'react'
import './LandingPage.css'
import ProjectCards from '../Components/ProjectCards'
import { useState } from 'react';
import { SettingOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import { Collapse, Select } from 'antd';
const { Panel } = Collapse;
const text = `
It is alomost completely automated as a system . You can schedule plan and create
calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
a smooth business plan for your and your teamateswith one click!
`;
function LandingPage() {
    const [activeKey, setActiveKey] = useState(['5']);

    const onChange = (key) => {
        console.log(key);
        setActiveKey([]);
        setActiveKey(key);
    };

    const genExtra = () => (
        <SettingOutlined
            onClick={(event) => {
                // If you don't want click extra trigger collapse, you can prevent this:
                // event.stopPropagation();
            }}
        />
    );
    const items = [
        {
            key: '1',
            label: 'What is the purpose of this App?',
            children: <div style={{ width: "50%", color: "#786F77" }}>{text}</div>,
            // extra: genExtra(),
        },
        {
            key: '2',
            label: 'How this app can help me get a Job?',
            children: <div style={{ width: "50%", color: "#786F77" }}>{text}</div>,

        },
        {
            key: '3',
            label: 'Can I find Investors In this App?',
            children: <div style={{ width: "50%", color: "#786F77" }}>{text}</div>,

        },
        {
            key: '4',
            label: 'Can I find Investors In this App?',
            children: <div style={{ width: "50%", color: "#786F77" }}>{text}</div>,

        },
        {
            key: '5',
            label: 'Is this App free to use? ', children: <div style={{ width: "50%", color: "#786F77" }}>{text}</div>,
        },
        {
            key: '6',
            label: 'What kind of Videos I can Post?',
            children: <div style={{ width: "50%", color: "#786F77" }}>{text}</div>,

        },
        {
            key: '7',
            label: 'Can I share my videos on other platforms?',
            children: <div style={{ width: "50%", color: "#786F77" }}>{text}</div>,

        },
    ];
    const expandIcon = ({ isActive }) => isActive ? <UpOutlined /> : <DownOutlined />;

    return (
        <>
            <div className='homepage'>


                <div className="rectangle-div" >
                    <div className='image'>
                        <img src='/rectangle-3.png' alt="" />
                    </div>
                    <div className="component-parent">

                        <div className="frame-parent">
                            <div className="investor-app-parent">
                                <b className="investor-app">Investor App</b>
                                <div className="home-parent">
                                    <b className="home">Home</b>
                                    <div className="investor-app">About App</div>
                                    <div className="investor-app">FAQs</div>
                                    <div className="investor-app">Preview</div>
                                </div>
                                <div className="frame-wrapper">
                                    <div className="download-wrapper">
                                        <b className="investor-app">Download</b>
                                    </div>
                                </div>
                            </div>
                            <div className="frame-group">
                                <div className="frame-container">
                                    <div className="frame-container">
                                        <div className="revolutionizing-social-media-container">
                                            <span>{`Revolutionizing social media for `}</span>
                                            <span className="entrepreneurs-and-investors">
                                                Entrepreneurs and Investors
                                            </span>
                                        </div>
                                        <div className="frame-child" />
                                        <div className="turn-your-vision">
                                            Turn your vision into reality. Join the exclusive network
                                            connecting ambitious entrepreneurs with the investors.
                                        </div>
                                        <div className="frame-item" />
                                        <div className="frame-div">
                                            <div className="download-parent">
                                                <img className="download-icon" alt="" src="/download.svg" />
                                                <b className="investor-app">Download Now</b>
                                            </div>
                                            <div className="play-circle-parent">
                                                <img className="download-icon" alt="" src="/playcircle.svg" />
                                                <b className="investor-app">See in Action</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="group-wrapper">
                                    <div className="group-div">
                                        <div className="shots-so-1-wrapper">
                                            <img
                                                className="shots-so-1-icon"
                                                alt=""
                                                src="/854shots-so-1@2x.png"
                                            />
                                        </div>
                                        <div className="total-users">
                                            <div className="bg" />
                                            <img className="component-1-icon" alt="" src="/component-1@2x.png" />
                                            <b className="connecting">Connecting</b>
                                            <div className="people">People</div>
                                            <img className="circle-icon" alt="" src="/circle.svg" />
                                        </div>
                                        <div className="rating-board">
                                            <div className="rating-board-child" />
                                            <div className="div">
                                                <div className="investors">Investors</div>
                                                <div className="k">51K</div>
                                                <div className="child" />
                                                <div className="item" />
                                            </div>
                                            <div className="div1">
                                                <div className="viewers">Viewers</div>
                                                <div className="div2">490</div>
                                                <div className="child" />
                                                <div className="child1" />
                                            </div>
                                            <div className="div3">
                                                <div className="entrepreneurs">Entrepreneurs</div>
                                                <div className="k">81K</div>
                                                <div className="child" />
                                                <div className="child3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
            <div className='section2-Videos'>
                <div className='section2-content'>
                    <div className='section2-content1'>
                        <div className='section2-content1-con'>
                            <div className='section2-content1-headding'>
                                Effortless Event Creation. Streamline Your Job Hunt.
                            </div>
                            <div className='con-para'>
                                Network and Land Your Dream Job:  Host Exclusive Events & Discover Curated Openings on Your Phone.  Our Platform Connects You with Cutting-Edge Startups and Uses Smart Filters to Match Your Skills and Aspirations with the Perfect Role.
                            </div>
                            <div className='section2-list'>
                                <div className='list-box'>

                                </div>

                                <div clsssName="headding-list">

                                    <span className='heading_'>Captivate Investors:</span> No expensive equipment needed. Produce polished videos and clear podcasts that showcase your brand story and expertise.

                                </div>
                            </div>
                            <div className='section2-list'>
                                <div className='list-box'>

                                </div>

                                <div clsssName="headding-list">

                                    <span className='heading_'>Captivate Investors:</span> No expensive equipment needed. Produce polished videos and clear podcasts that showcase your brand story and expertise.

                                </div>
                            </div>
                            <div className='section2-list'>
                                <div className='list-box'>

                                </div>

                                <div clsssName="headding-list">

                                    <span className='heading_'>Captivate Investors:</span> No expensive equipment needed. Produce polished videos and clear podcasts that showcase your brand story and expertise.

                                </div>
                            </div>
                        </div>
                        <div className='section2-content1-image'>
                            <img src="/205shots-so-1@2x.png" alt="" />
                        </div>
                    </div>
                    <div className='section2-content1'>
                        <div className='section2-content1-image2'>
                            <img src="/253shots-so-1@2x.png" alt="" />
                        </div>
                        <div className='section2-content1-con'>
                            <div className='section2-content1-headding'>
                                Post a Video Easily. Host a Podcast
                            </div>
                            <div className='con-para'>
                                Ditch the Scripts: Create Professional Brand Videos & Podcasts on Your Phone. Instantly Showcase Your Startup's Passion and Expertise to a Global Network of Investors Seeking the Next Big Thing.

                            </div>
                            <div className='section2-list'>
                                <div className='list-box'>

                                </div>

                                <div clsssName="headding-list">

                                    <span className='heading_'>Captivate Investors:</span> No expensive equipment needed. Produce polished videos and clear podcasts that showcase your brand story and expertise.

                                </div>
                            </div>
                            <div className='section2-list'>
                                <div className='list-box'>

                                </div>

                                <div clsssName="headding-list">

                                    <span className='heading_'>Captivate Investors:</span> No expensive equipment needed. Produce polished videos and clear podcasts that showcase your brand story and expertise.

                                </div>
                            </div>
                            <div className='section2-list'>
                                <div className='list-box'>

                                </div>

                                <div clsssName="headding-list">

                                    <span className='heading_'>Captivate Investors:</span> No expensive equipment needed. Produce polished videos and clear podcasts that showcase your brand story and expertise.

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className='section3'>
                <img src="/image-14@2x.png" alt="" className='image-section3' />
                <div className='section3-content'>
                    <div className='section3-content-app'>
                        Investor App
                    </div>
                    <div className='section-con'>
                        Join the Worldwide Community of Entrepreneurs and Investors
                    </div>
                    <div className="section3-para">
                        If you're a startup or an investor seeking businesses to invest in, you'll find everything from inception to fruition right here. Even if you're simply curious about the latest in the business world, you're welcome to join us as a viewer.
                    </div>
                    <div className='sectio3-flex'>
                        <div className='sectio3bx1'>
                            <span className='section3line'>|</span> <span className="count"><b>50M+</b><br /><span className="conten-para">Entrepreneurs and Investor on Our App</span></span>
                        </div>
                        <div className='sectio3bx1'>
                            <span className='section3line'>|</span> <span className="count"><b>999.999%</b><br /><span className="conten-para">Chance of getting your dream Role</span></span>
                        </div>
                        <div className='sectio3bx1'>
                            <span className='section3line'>|</span> <span className="count"><b>2000+</b><br /><span className="conten-para">Posted everyday on  Our App</span></span>
                        </div>
                        <div className='sectio3bx1'>
                            <span className='section3line'>|</span > <span className="count"><b>50M+</b><br /><span className="conten-para">Entrepreneurs and Investor on Our App</span></span>
                        </div>

                    </div>
                </div>
            </div>

            <ProjectCards />

            <div className='section4-heading' >
                <div className='mysection'>
                    <h2>More than a Social App</h2>
                    <p>Beyond Profiles: Building the Future of Startups</p>
                </div>

            </div>
            <div className="section5">
                <div className='section5-con'>
                    <div className="con-1">
                        <div className='conRactangular'>

                        </div>
                        <div className='con-section'>
                            <h2>Entrepreneur and Investor Bridge</h2>
                            <p>Empower entrepreneurs and investors to connect, share insights, and showcase ventures through video creation on your app.
                                {/* <br></br> */}
                                Drive collaborative learning and expertise-sharing by enabling users to easily create podcasts within your app.</p>
                            <div className='section5-ico'>
                                <h2>Available on</h2>
                                <img src="/icbaselineapple.svg" alt="" srcset="" />
                                <img src="/mageplaystore.svg" alt="" srcset="" />
                            </div>
                        </div>

                    </div>
                    <div className="con-2">
                        <img src="/Group 1321314675.png" alt="" />

                    </div>
                </div>
            </div>
            <div className='section4-heading' >
                <div className='mysection'>
                    <h2>Innovations Beyond Social Media</h2>
                    <p>Beyond Profiles: Building the Future of Startups</p>
                </div>
            </div>
            <div className="section5">
                <div className='section6-con'>
                    <div className="con-1">
                        <h2>Entrepreneur-Investor Collaboration Through Location Integration </h2>
                        <div className='section6-btn'>
                            Explore More
                        </div>
                        <p>
                            Integration location features into your app enriches user experience and fosters seamless connections, empowering entrepreneurs and investors alike. With this integration, users can easily locate each other on Google Maps, facilitating direct connections and fostering collaboration.
                        </p>
                        <div className='section6-button' >
                            Downloaad
                        </div>
                    </div>
                    <div className="con-2">
                        <img src="/MacBook Pro Tilted Screen Mockup.png" alt="" />

                    </div>
                </div>
            </div>
            <div className="section5">
                <div className='section7-con'>
                    <div className="con-1">
                        <h2>What we are offering is Outside the world.</h2>

                        <p>
                            Discover the transformative power of our app, where we're committed to turning your darkest future into a shining beacon of opportunity. When we say it, we mean it. Download our app now and unlock connections with potential entrepreneurs and investors eagerly awaiting your ideas.
                        </p>
                        <div className="blue-box">
                            Entrepreneurs & Investors Videos
                        </div>
                        <div className="list-c6">
                            Business Podcasts
                        </div>
                        <hr></hr>
                        <div className="list-c6">
                            Hosting Events
                        </div>
                        <hr></hr>
                        <div className="list-c6">
                            Dream Jobs
                        </div>
                    </div>
                    <div className="con-2">
                        <img src="/Group 1321314670.png" alt="" />

                    </div>
                </div>
            </div>
            <div className='section4-heading' >
                <div className='mysection'>
                    <h2>What we are offering is Outside the world.</h2>
                    <p>Discover the transformative power of our app, where we're committed to turning your darkest future into a shining beacon of opportunity. When we say it, we mean it. Download our app now and unlock connections with potential entrepreneurs and investors eagerly awaiting your ideas.</p>
                </div>
            </div>
            <div className='section4-heading' >
                <div className='mysection'>
                    <h2>Frequently asked questions</h2>
                    <p>We`re happy to answer your questions</p>
                </div>
            </div>
            <div className="section5">
                <div className='section7-con'>
                    <div className="section8-con">
                        <Collapse
                            activeKey={activeKey}
                            onChange={onChange}
                            expandIcon={expandIcon}
                            expandIconPosition="end"
                        >
                            {items.map(item => (
                                <Panel header={item.label} key={item.key} extra={item.extra}>
                                    {item.children}
                                </Panel>
                            ))}
                        </Collapse>

                    </div>

                </div>
            </div>
            <div className='section10'>
                <div className='section10-con'>
                    <button className="section10-con-btn">DOWNLOAD</button>
                    <div className="section10-con-headding">
                        Download the <span>Investor App</span> Now
                    </div>
                    <p>Download our app and join the community of millions of Entrepreneurs and <br></br> Investors out there.</p>

                    <div className="download-parent">
                        <img className="download-icon" alt="" src="/download.svg" />
                        <b className="investor-app">Download Now</b>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='footer-con'>
                    <div className="footer-items">
                        <div className='footer-item'>
                            <h2 className="Investor-footer">Investor App</h2>
                            <p className="para">Revolutionizing Investor-Entrepreneur Social Media</p>
                            <div>
                                <button className="footerbtn">Download</button>
                            </div>
                        </div>
                        <div className='footer-item'>
                            <h2 className="footer-content">
                                Company
                            </h2>
                            <div className='fo-links'>About</div>
                            <div className='fo-links'>Home</div>
                            <div className='fo-links'>Contact</div>

                        </div>
                        <div className='footer-item'>
                            <h2 className="footer-content">
                                Support Us
                            </h2>
                            <div className='fo-links'>Help Center</div>
                            <div className='fo-links'>FAQ's</div>

                        </div>
                        <div className='footer-item'>
                            <h2 className="footer-content">
                                Resources
                            </h2>

                            <div className='fo-links'>Privacy Policy</div>
                            <div className='fo-links'>Contact</div>
                            <div className='fo-links'>Term of services</div>
                        </div>
                        <div className='footer-item'>
                            <h2 className="footer-content">
                                Address
                            </h2>

                            <div className='fo-links-con'>101 Marlow Street. #12-05 Clife
                                Parkview. NYC 059020.
                                <span> View on Maps</span></div>
                            <div className='fo-links'>Inquiries</div>
                            <div className='fo-links-numbr'>+12 1214 1211<br></br>
                                hello@azitadarvishi.com</div>
                            <div className='fo-links'>
                                <img src="/social-icon.svg" alt="" />
                            </div>

                        </div>


                    </div>
                </div>

            </div>
            <div className="copyRight">
                <div className="copayRight-con">
                    © 2024 Investor. All rights reserved     |     Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice and Responsible Disclosure
                </div>
            </div>


        </>
    )
}

export default LandingPage
