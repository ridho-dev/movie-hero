import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: 'back' });

const heroAnimationTemplate = (elementSelector, showingDelay) => {
  gsap.set(elementSelector, { y: 100 });
  ScrollTrigger.batch(elementSelector, {
    onEnter: (batch) => gsap.to(batch,
      {
        y: 0, autoAlpha: 1, overwrite: true, duration: 0.7, delay: showingDelay,
      }),
    onLeave: (batch) => gsap.set(batch,
      {
        y: -100, autoAlpha: 0, overwrite: true, duration: 0.7, delay: showingDelay,
      }),
    onEnterBack: (batch) => gsap.to(batch,
      {
        y: 0, autoAlpha: 1, overwrite: true, duration: 0.7, delay: showingDelay,
      }),
    onLeaveBack: (batch) => gsap.to(batch,
      {
        opacity: 0, y: -100, delay: showingDelay,
      }),
  });
};

const titleAnimationTemplate = (elementSelector, showingDelay) => {
  gsap.set(elementSelector, { x: -100 });
  ScrollTrigger.batch(elementSelector, {
    onEnter: (batch) => gsap.to(batch,
      {
        x: 0, autoAlpha: 1, overwrite: true, duration: 0.7, delay: showingDelay,
      }),
    onLeave: (batch) => gsap.set(batch,
      {
        x: -100, autoAlpha: 0, overwrite: true, duration: 0.7, delay: showingDelay,
      }),
    onEnterBack: (batch) => gsap.to(batch,
      {
        x: 0, autoAlpha: 1, overwrite: true, duration: 0.7, delay: showingDelay,
      }),
    onLeaveBack: (batch) => gsap.to(batch,
      {
        opacity: 0, x: -100, delay: showingDelay,
      }),
  });
};

const detailAnimationTemplate = (elementSelector, showingDelay) => {
  gsap.fromTo(elementSelector, {
    y: '100px', opacity: 0,
  }, {
    duration: 0.7, y: '0px', opacity: 1, ease: 'back', delay: showingDelay,
  });
};

const cardAnimationTemplate = (elementSelector) => {
  gsap.set(elementSelector, { y: 100 });
  ScrollTrigger.batch(elementSelector, {
    onEnter: (batch) => gsap.to(batch,
      {
        y: 0, autoAlpha: 1, stagger: 0.15, overwrite: true, duration: 0.7,
      }),
    onLeave: (batch) => gsap.set(batch,
      {
        y: -100, autoAlpha: 0, stagger: 0.15, overwrite: true, duration: 0.7,
      }),
    onEnterBack: (batch) => gsap.to(batch,
      {
        y: 0, autoAlpha: 1, stagger: 0.15, overwrite: true, duration: 0.7,
      }),
    onLeaveBack: (batch) => gsap.to(batch,
      {
        opacity: 0, y: 100, stagger: 0.15,
      }),
  });
};

export {
  heroAnimationTemplate,
  titleAnimationTemplate,
  detailAnimationTemplate,
  cardAnimationTemplate,
};
