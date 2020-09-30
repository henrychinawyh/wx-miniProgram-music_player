/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconPlay = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M341.333333 219.306667 341.333333 816.64 810.666667 517.973333 341.333333 219.306667Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconPlay.defaultProps = {
  size: 18,
};

export default IconPlay;
