import '../Styles/Home/Home.css'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { BiMap, BiPhoneCall, BiMessageDetail } from 'react-icons/bi'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';

function Home() {
    const [value, setValue] = useState(500)
    function reportWindowSize() {
        let size = window.innerWidth;
        setValue(size)
    }
    window.addEventListener("resize", reportWindowSize);
    console.log(value);
    return (
        <div className='main_home_content'>
            <main className='content'>
                <p className='fitness'>FITNESS</p>
                <section className='home_content'>
                    <p style={{ color: 'white' }}>1/3</p>
                    <div style={{ borderBottom: '1px solid #FAFF05', width: '80px' }}></div>
                    <header className='home_header'>INSIDE ALL-START, <br />GAMEDAY GOAT & <br />MORE.</header>
                    <button className='home_button'>START NOW</button>
                </section>
                <figure className='home_image'>
                    <div className='img'></div>
                    <figcaption className='back_frame'>hello</figcaption>
                </figure>
            </main>
            <div className='info_block'>
                <header className='bellafit'>BELLAFIT</header>
                <div className='bellafit_info'>
                    <p>Unrivaled group fitness classes. Unparalleled personal training.
                        Studios </p>
                    <p>that inspire you to perform and luxury amenities that keep you feeling
                        your best.</p><p>10,000+ classes at your fingertips.
                            World-class trainers and fitness brands, all in one place.</p>
                </div>
                <button className='shop_button'>SHOP PACKAGE</button>
            </div>
            <div className='back_image'>
                <div></div>
                {value > 415 ?
                    <main className='front_content'>
                        <section className='aside_content'>
                            <hr style={{ backgroundColor: '#FAFF05', height: '2px', border: 'none' }} />
                            <h1>stretch <br />&recovery</h1>
                            <p>
                                If your goals are to improve your overall health and wellness,
                                we have everything you need. We have cardio equipment
                                spanning two floors including 8 stepmills.
                            </p>
                        </section>
                        <section className='center_content'>
                            <hr style={{ backgroundColor: '#FAFF05', height: '2px', border: 'none' }} />
                            <h1>personal <br />trening</h1>
                            <p>
                                If your goals are to improve your overall health and wellness,
                                we have everything you need. We have
                                cardio equipment spanning two floors including 8 stepmills.
                            </p>
                            <div className='inner_content'>
                                <button style={{ color: 'red', fontWeight: 'bold', border: 'none', background: 'none' }}>START NOW</button>
                                <div className='circle'><HiOutlineArrowNarrowRight style={{ fontSize: '30px' }} color="red" /></div>
                            </div>

                        </section>
                        <section className='aside_content'>
                            <hr style={{ backgroundColor: '#FAFF05', height: '2px', border: 'none' }} />
                            <h1>group <br />treniing</h1>
                            <p >
                                If your goals are to improve your overall health and wellness,
                                we have everything you need.
                                We have cardio equipment spanning two floors including 8 stepmills.
                            </p>

                        </section>
                    </main> :
                    <main className='front_content'>
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                            <SwiperSlide><section className='center_content'>
                                <hr style={{ backgroundColor: '#FAFF05', height: '2px', border: 'none' }} />
                                <h1>personal <br />trening</h1>
                                <p>
                                    If your goals are to improve your overall health and wellness,
                                    we have everything you need. We have
                                    cardio equipment spanning two floors including 8 stepmills.
                                </p>
                                <div className='inner_content'>
                                    <button style={{ color: 'red', fontWeight: 'bold', border: 'none', background: 'none' }}>START NOW</button>
                                    <div className='circle'><HiOutlineArrowNarrowRight style={{ fontSize: '30px' }} color="red" /></div>
                                </div>

                            </section></SwiperSlide>
                            <SwiperSlide><section className='aside_content'>
                                <hr style={{ backgroundColor: '#FAFF05', height: '2px', border: 'none' }} />
                                <h1>stretch <br />&recovery</h1>
                                <p>
                                    If your goals are to improve your overall health and wellness,
                                    we have everything you need. We have cardio equipment
                                    spanning two floors including 8 stepmills.
                                </p>
                            </section></SwiperSlide>
                            <SwiperSlide><section className='aside_content'>
                                <hr style={{ backgroundColor: '#FAFF05', height: '2px', border: 'none' }} />
                                <h1>group <br />treniing</h1>
                                <p >
                                    If your goals are to improve your overall health and wellness,
                                    we have everything you need.
                                    We have cardio equipment spanning two floors including 8 stepmills.
                                </p>

                            </section></SwiperSlide>
                        </Swiper>



                    </main>

                }
            </div>
            <div className='last_block'>
                <main className='rule_block'>
                    <section>
                        <div className='header'>
                            <div></div>
                            <h1>WEIGHT TRAINING</h1>
                        </div>
                        <p>From bodybuilding to powerlifting and everything in between, the Fitness Factory has the equipment.</p>
                    </section>
                    <section>
                        <div className='header'>
                            <div></div>
                            <h1>GERERAL FITNESS</h1>
                        </div>
                        <p>
                            If your goals are to improve your overall health and wellness, we have everything you need.  We have cardio equipment spanning two floors including 8 stepmills
                        </p>
                    </section>
                    <section>
                        <div className='header'>
                            <div></div>
                            <h1>FUNCTIONAL TRAINING</h1>
                        </div>
                        <p>With 60 feet of turf with a sled, stackable plyometric boxes, weighted medicine balls, battle ropes, squat racks</p>
                    </section>
                </main>
            </div>
            <footer>
                <main className='footer_content'>
                    <figure className='logo'>
                        <Link to={'/'} className='circle'>
                            <div className='vertical_lines'></div>
                            <div className='vertical_lines'></div>
                            <div className='horizontal_line'></div>
                        </Link>
                        <figcaption><Link to={'/'}>BellaFit</Link></figcaption>
                    </figure>
                    <ul>
                        <li>ABOUT US</li>
                        <li>BLOG</li>
                        <li>SHOP</li>
                        <li>CONTACT</li>
                        <li>SALE</li>
                    </ul>
                    <ul>
                        <li>CARDIO CLASSED</li>
                        <li>HARD TRENING</li>
                        <li>STRETCHING</li>
                        <li>IRON TRENING</li>
                        <li>LIGHT BOXING</li>
                        <li>YOGA</li>
                    </ul>
                    <ul>
                        <li>FACEBOOK</li>
                        <li>INSTAGRAM</li>
                        <li>TWITTER</li>
                    </ul>
                    <ul className='with_icons'>
                        <li> <BiMap size={'20px'} color={'#FAFF05'} />132 DARTMOUTH STREET BOSTON, MASSACHUSETTS 02156 UNITED STATES</li>
                        <li> <BiPhoneCall size={'20px'} color={'#FAFF05'} />+1012 3456 789</li>
                        <li><BiMessageDetail size={'20px'} color={'#FAFF05'} />BELLAFIT@GMAIL.COM</li>
                    </ul>
                </main>
                <hr style={{ backgroundColor: 'grey', height: '2px', border: 'none' }} />
                <div className='last_footer_cont'>
                    <h5>COOKIES POLICY</h5>
                    <h5> LEGAL TERMS</h5>
                    <h5 >PRIVACY POLICY</h5>
                </div>
            </footer>
        </div>
    )
}

export default Home