import React, { useEffect, useRef } from 'react';
import img1 from '../components/image/img1.jpg';
import img2 from '../components/image/img2.jpg';
import img3 from '../components/image/img3.jpg';
import img4 from '../components/image/img4.jpg';
import '../styles/Slider.css';

function Slider() {
    const carouselRef = useRef(null);
    const sliderRef = useRef(null);
    const thumbnailBorderRef = useRef(null);
    const timeRef = useRef(null);

    useEffect(() => {
        const nextDom = document.getElementById('next');
        const prevDom = document.getElementById('prev');
        const carouselDom = carouselRef.current;
        const sliderDom = sliderRef.current;
        const thumbnailBorderDom = thumbnailBorderRef.current;
        const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
        const timeDom = timeRef.current;

        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

        let timeRunning = 3000;
        let timeAutoNext = 11000;

        nextDom.onclick = () => {
            showSlider('next');
        };

        prevDom.onclick = () => {
            showSlider('prev');
        };

        let runTimeOut;
        let runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);

        function showSlider(type) {
            const sliderItemsDom = sliderDom.querySelectorAll('.carousel .list .item');
            const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

            if (type === 'next') {
                sliderDom.appendChild(sliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add('next');
            } else {
                sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselDom.classList.add('prev');
            }

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove('next');
                carouselDom.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextDom.click();
            }, timeAutoNext);
        }

        return () => {
            clearTimeout(runNextAuto);
            clearTimeout(runTimeOut);
        };
    }, []);

    return (
        <div>
            <header>
                <nav>
                    <a href="/">Home</a>
                    <a href="/">Contacts</a>
                    <a href="/">Info</a>
                </nav>
            </header>

            <div className="carousel" ref={carouselRef}>
                <div className="list" ref={sliderRef}>
                    <div className="item">
                        <img src={img1} alt="img1" />
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">DESIGN SLIDER</div>
                            <div className="topic">ANIMAL</div>
                            <div className="des">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={img2} alt="img2" />
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">DESIGN SLIDER</div>
                            <div className="topic">ANIMAL</div>
                            <div className="des">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={img3} alt="img3" />
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">DESIGN SLIDER</div>
                            <div className="topic">ANIMAL</div>
                            <div className="des">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={img4} alt="img4" />
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">DESIGN SLIDER</div>
                            <div className="topic">ANIMAL</div>
                            <div className="des">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="thumbnail" ref={thumbnailBorderRef}>
                    <div className="item">
                        <img src={img1} alt="thumbnail1" />
                        <div className="content">
                            <div className="title">Name Slider</div>
                            <div className="description">Description</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={img2} alt="thumbnail2" />
                        <div className="content">
                            <div className="title">Name Slider</div>
                            <div className="description">Description</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={img3} alt="thumbnail3" />
                        <div className="content">
                            <div className="title">Name Slider</div>
                            <div className="description">Description</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={img4} alt="thumbnail4" />
                        <div className="content">
                            <div className="title">Name Slider</div>
                            <div className="description">Description</div>
                        </div>
                    </div>
                </div>

                <div className="arrows">
                    <button id="prev">&lt;</button>
                    <button id="next">&gt;</button>
                </div>
                <div className="time" ref={timeRef}></div>
            </div>
        </div>
    );
}

export default Slider;
