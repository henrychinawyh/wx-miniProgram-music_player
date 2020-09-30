/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconBofangHuaban = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M448 352l213.33 160L448 672V352m-31.87-96.06c-16.58 0-32.13 13.1-32.13 32.06v448c0 18.95 15.55 32.06 32.13 32.06 6.49 0 13.14-2.01 19.07-6.46l298.67-224c17.07-12.8 17.07-38.4 0-51.2l-298.67-224c-5.93-4.45-12.58-6.46-19.07-6.46z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconBofangHuaban.defaultProps = {
  size: 18,
};

export default IconBofangHuaban;
