/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconPause = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M597.333333 810.666667h170.666667V213.333333h-170.666667M256 810.666667h170.666667V213.333333H256v597.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconPause.defaultProps = {
  size: 18,
};

export default IconPause;
