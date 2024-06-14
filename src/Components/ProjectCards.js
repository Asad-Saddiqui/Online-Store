import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, Divider, Button } from 'antd';
import { CommentOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { EnvironmentOutlined, HomeOutlined, ShareAltOutlined, ExpandOutlined, HeartOutlined, PictureFilled, VideoCameraFilled, LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Pagination, Navigation } from 'swiper/modules';
import images from '../assets/image-6@2x.png';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Rate, Badge } from 'antd';
export default function PropertyCards() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
    }, []);

    return (
        <div className='propertyCards'>
            <div className='propertyCards-content'>
                <h2 className="howit-title" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="500"> Let our Features Do the talk</h2>


                <div className="swiper-container-1">
                    <div className="swiper-navigation-buttonss">
                        <button ref={prevRef} className="swiper-button-prev1">
                            <ArrowLeftOutlined />
                        </button>
                        <button ref={nextRef} className="swiper-button-next2">
                            <ArrowRightOutlined />
                        </button>
                    </div>

                    <Swiper
                        slidesPerView={5}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        breakpoints={{
                            // when window width is >= 320px
                            120: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },

                            762: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            1092: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },

                            1600: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            },

                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {Array(6).fill().map((_, idx) => (
                            <SwiperSlide className="swiper-slide" key={idx}>
                                <div className="my-card">
                                    <img src={images} alt="" />
                                    <h2>
                                        Entrepreneurs & Investors
                                        Videos
                                    </h2>
                                    <p>Let's empower investors and entrepreneurs to share top-notch video content, offering expert insights, actionable advice,. <span style={{ color:"#6165F3"}}>read more</span></p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </div>
    );
}
