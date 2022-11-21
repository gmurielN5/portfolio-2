import React, { createContext, useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../Animation/gsap';

export const SmoothScrollContext = createContext();

export const SmoothScrollProvider = ({ children }) => {
    const scrollWrapper = useRef();

    useEffect(() => {
        let locoScroll = null;
        const scrollEl = scrollWrapper.current;

        import('locomotive-scroll').then((LocomotiveScroll) => {
            locoScroll = new LocomotiveScroll.default({
                el: scrollEl,
                smooth: true,
                getDirection: true
            });

            locoScroll.on('scroll', () => {
                ScrollTrigger.update();
            });

            ScrollTrigger.scrollerProxy(scrollEl, {
                scrollTop(value) {
                    return arguments.length
                        ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
                        : locoScroll.scroll.instance.scroll.y;
                },
                scrollLeft(value) {
                    return arguments.length
                        ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
                        : locoScroll.scroll.instance.scroll.x;
                },
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                },
                pinType: scrollEl.style.transform ? 'transform' : 'fixed'
            });

            if (locoScroll) {
                let ctx = gsap.context(() => {
                    let animOne = gsap.timeline();

                    ScrollTrigger.create({
                        trigger: '#sectionOne',
                        scroller: scrollEl,
                        animation: animOne,
                        start: 'top 75%',
                        end: '+=100%',
                        scrub: true
                    });

                    animOne
                        .to('.hero h1', {
                            opacity: 0,
                            x: -250,
                            stagger: 0.3,
                            ease: 'power1.in'
                        })
                        .to('.hero', { autoAlpha: 0 }, '<50%')
                        .revealX('.title')
                        .revealY('.subtitle', '+=1')
                        .revealY('.text', {
                            stagger: 0.3
                        });

                    let animTwo = gsap.timeline();

                    ScrollTrigger.create({
                        trigger: '#sectionTwo',
                        scroller: scrollEl,
                        animation: animTwo,
                        start: 'top 75%',
                        end: '+=50%',
                        scrub: true
                    });

                    animTwo.revealX('.workTitle').revealY('.workSubtitle', '+=1');

                    const sections = gsap.utils.toArray('.panel');
                    const gallery = document.querySelector('.gallery');

                    let horizontalScroll = gsap.to(sections, {
                        xPercent: -100 * (sections.length - 1),
                        ease: 'none',
                        scrollTrigger: {
                            trigger: gallery,
                            scroller: scrollEl,
                            pin: true,
                            scrub: 0.1,
                            snap: 1 / (sections.length - 1),
                            end: () => '+=' + gallery.offsetWidth
                        }
                    });

                    let revealContainers = document.querySelectorAll('.reveal');
                    revealContainers.forEach((container, i) => {
                        let image = container.querySelector('img');
                        let animThree = gsap.timeline({
                            scrollTrigger: {
                                trigger: container,
                                containerAnimation: horizontalScroll,
                                scroller: scrollEl,
                                start: 'left center',
                                toggleActions: 'play pause resume reset'
                            }
                        });
                        //todo text animation ??
                        animThree
                            .set(container, { autoAlpha: 1 })
                            .from(container, 1.5, { opacity: 0, x: 100 })
                            .from(image, 1.5, {
                                clipPath: 'inset(0% 0% 0% 100%)',
                                scale: 1.3,
                                delay: -1.5
                            });
                    });
                    let animFour = gsap.timeline();
                    ScrollTrigger.create({
                        trigger: '#footer',
                        scroller: scrollEl,
                        animation: animFour,
                        start: 'top center',
                        end: 'bottom bottom',
                        scrub: true
                    });
                    animFour
                        .to('.gallery', { autoAlpha: 0 })
                        .from(
                            '.message h3',
                            { clipPath: 'inset(0% 100%  0% 0%)', opacity: 0, duration: 1 },
                            '+=3'
                        )
                        .from(
                            '.message h4',
                            { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0, duration: 1 },
                            '<50%'
                        )
                        .revealY(
                            '.message p',
                            {
                                stagger: 0.3
                            },
                            '+=0.7'
                        )
                        .from(
                            '.form',
                            {
                                opacity: 0
                            },
                            '<'
                        );
                }, scrollEl);
            }

            const lsUpdate = () => {
                locoScroll.update();
            };

            ScrollTrigger.addEventListener('refresh', lsUpdate);
            ScrollTrigger.refresh();
            return () => {
                if (locoScroll) {
                    ScrollTrigger.removeEventListener('refresh', lsUpdate);
                    locoScroll.destroy();
                    locoScroll = null;
                    ctx.revert();
                }
            };
        });
    }, []);

    return (
        <SmoothScrollContext.Provider>
            <div id="smooth-scroll" data-scroll-container ref={scrollWrapper}>
                {children}
            </div>
        </SmoothScrollContext.Provider>
    );
};
