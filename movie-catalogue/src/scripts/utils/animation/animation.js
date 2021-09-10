import gsap from 'gsap';
import {
  heroAnimationTemplate, titleAnimationTemplate, detailAnimationTemplate, cardAnimationTemplate,
} from './animation-template';

const cardAnimation = () => {
  cardAnimationTemplate('.movie-card');

  gsap.utils.toArray('.movie-card').forEach((movieCard) => {
    const hover = gsap.to(movieCard, {
      scale: 1.08, duration: 0.2, paused: true, ease: 'power3.inOut',
    });
    movieCard.addEventListener('mouseenter', () => hover.play());
    movieCard.addEventListener('mouseleave', () => hover.reverse());
  });
};

const detailAnimation = () => {
  // detail content
  detailAnimationTemplate('.detail-img', 0);
  detailAnimationTemplate('.detail-content', 0.5);
  detailAnimationTemplate('.detail-back-home', 1);
};

const homeAnimation = () => {
  gsap.defaults({ ease: 'back' });
  // hero
  heroAnimationTemplate('.hero-container h1', 0);
  heroAnimationTemplate('.hero-container p', 0.5);
  // titles
  titleAnimationTemplate('.home-content__container h1');
  titleAnimationTemplate('.specific-content__container h1');
};
const titleAnimation = () => {
  titleAnimationTemplate('.specific-content__container h1');
  cardAnimationTemplate('.view-more');
  detailAnimationTemplate('.detail-back-home', 0.5);
};

export {
  cardAnimation,
  detailAnimation,
  homeAnimation,
  titleAnimation,
};
