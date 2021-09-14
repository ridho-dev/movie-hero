import $ from 'jquery';

const windowWidth = $(window).width();
function changedSizeCheck() {
  $(window).resize(() => {
    if (windowWidth !== $(window).width()) {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  });
}

const homeResponsive = () => {
  let sliceCount = 10;

  changedSizeCheck();

  if (windowWidth <= 650) {
    sliceCount = 10;
  } else if (windowWidth <= 900) {
    sliceCount = 9;
  } else if (windowWidth <= 1200) {
    sliceCount = 8;
  }

  return sliceCount;
};

export { homeResponsive };
