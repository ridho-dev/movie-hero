import $ from 'jquery';

const detailResponsive = () => {
  const windowWidth = $(window).width();
  function changedSizeCheck() {
    $(window).resize(() => {
      if (windowWidth !== $(window).width()) {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }
    });
  }
  changedSizeCheck();

  const detailAddInfo = document.querySelector('.detail__add-info');
  const detailImg = document.querySelector('.detail-img');
  const detailContent = document.querySelector('.detail-content');

  if (windowWidth <= 650) {
    detailAddInfo.after(detailImg);
  } else {
    detailContent.before(detailImg);
  }
};

export { detailResponsive };
