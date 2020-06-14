import React, { Fragment } from 'react';
import ImgFullsize from './img-fullsize';
import ImgFrame from './img-sample';
import ImgMarge from './img-marge';
import ImgResize from './img-resize';
import ImgSideCover from './img-side-cover';

function ImgSampleLayout() {
  return (
    <Fragment>
      <ImgFullsize></ImgFullsize>
      <ImgFrame></ImgFrame>
      <ImgMarge></ImgMarge>
      <ImgResize></ImgResize>
      <ImgSideCover></ImgSideCover>
    </Fragment>
  );
}

export default ImgSampleLayout;
