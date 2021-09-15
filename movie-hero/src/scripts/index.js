import nProgress from 'nprogress';
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/nprogress.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', (event) => {
  app.renderPage();
});

window.addEventListener('load', (event) => {
  app.renderPage();
  swRegister();
  nProgress.set(0.9);
  nProgress.done(true);
});

nProgress.configure({ easing: 'ease', speed: 500 });
nProgress.start();
nProgress.set(0.7);
