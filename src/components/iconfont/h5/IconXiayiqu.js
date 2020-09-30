/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconXiayiqu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M216.7 844.3V179.7l445 332.3-445 332.3z m590.6 0h-80V179.7h80v664.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconXiayiqu.defaultProps = {
  size: 18,
};

export default IconXiayiqu;
