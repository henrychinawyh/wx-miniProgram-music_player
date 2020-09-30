/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconGengduo2 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M363.229916 275.453327h497.82454a43.350032 43.350032 0 1 0 0-86.700064H363.229916a43.350032 43.350032 0 0 0 0 86.700064zM861.054456 471.930121H363.229916a43.350032 43.350032 0 0 0 0 86.700063h497.82454a43.350032 43.350032 0 0 0 0-86.700063zM861.054456 755.099753H363.229916a43.350032 43.350032 0 0 0 0 86.700064h497.82454a43.350032 43.350032 0 1 0 0-86.700064z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M201.707698 232.103295m-76.585056 0a76.585056 76.585056 0 1 0 153.170112 0 76.585056 76.585056 0 1 0-153.170112 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M201.707698 513.878501m-76.585056 0a76.585056 76.585056 0 1 0 153.170112 0 76.585056 76.585056 0 1 0-153.170112 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <path
        d="M201.707698 795.653708m-76.585056 0a76.585056 76.585056 0 1 0 153.170112 0 76.585056 76.585056 0 1 0-153.170112 0Z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </svg>
  );
};

IconGengduo2.defaultProps = {
  size: 18,
};

export default IconGengduo2;
