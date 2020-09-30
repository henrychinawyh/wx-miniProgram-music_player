/* eslint-disable */

import React from 'react';

import IconSuijibofang01 from './IconSuijibofang01';
import IconDanquxunhuan from './IconDanquxunhuan';
import IconIcon from './IconIcon';
import IconBofangHuaban from './IconBofangHuaban';
import IconFenxiang3 from './IconFenxiang3';
import IconV from './IconV';
import IconGengduo2 from './IconGengduo2';
import IconPlay from './IconPlay';
import IconPause from './IconPause';
import IconXiayiqu from './IconXiayiqu';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'suijibofang01':
      return <IconSuijibofang01 {...rest} />;
    case 'danquxunhuan':
      return <IconDanquxunhuan {...rest} />;
    case 'icon-':
      return <IconIcon {...rest} />;
    case 'bofang_huaban':
      return <IconBofangHuaban {...rest} />;
    case 'fenxiang3':
      return <IconFenxiang3 {...rest} />;
    case 'V':
      return <IconV {...rest} />;
    case 'gengduo-2':
      return <IconGengduo2 {...rest} />;
    case 'play':
      return <IconPlay {...rest} />;
    case 'pause':
      return <IconPause {...rest} />;
    case 'xiayiqu':
      return <IconXiayiqu {...rest} />;
  }

  return null;
};

export default IconFont;
