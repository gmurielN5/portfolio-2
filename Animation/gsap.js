import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.defaults({
        duration: 1,
        ease: 'power4.Out'
    });

    gsap.registerEffect({
        name: 'revealY',
        effect: (targets, config) => {
            return gsap.from(targets, { opacity: 0, y: 100, stagger: config.stagger });
        },
        stagger: { stagger: 0 },
        extendTimeline: true
    });
    gsap.registerEffect({
        name: 'revealX',
        effect: (targets) => {
            return gsap.from(targets, { opacity: 0, x: 250 });
        },
        extendTimeline: true
    });
}

// export anything that you might need a reference to
export * from 'gsap';
export * from 'gsap/ScrollTrigger';
