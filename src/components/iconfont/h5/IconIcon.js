/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconIcon = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M552.96 268.6976h61.44v40.96h-61.44z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M655.36 268.6976v40.96a245.76 245.76 0 0 1 0 491.52H368.64a245.76 245.76 0 0 1 0-491.52h122.88v-40.96h-122.88a286.72 286.72 0 0 0 0 573.44h286.72a286.72 286.72 0 0 0 0-573.44z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M474.9312 303.7184l-86.8352-86.8352a20.48 20.48 0 1 1 28.8768-28.8768l86.8352 86.8352a20.48 20.48 0 0 1-28.8768 28.8768zM409.6 412.0576h286.72a20.48 20.48 0 0 1 0 40.96H409.6a20.48 20.48 0 0 1 0-40.96zM409.6 555.4176h286.72a20.48 20.48 0 0 1 0 40.96H409.6a20.48 20.48 0 0 1 0-40.96zM409.6 678.2976h286.72a20.48 20.48 0 1 1 0 40.96H409.6a20.48 20.48 0 0 1 0-40.96zM327.68 412.0576a20.48 20.48 0 1 1-20.48 20.48 20.48 20.48 0 0 1 20.48-20.48zM327.68 555.4176a20.48 20.48 0 1 1-20.48 20.48 20.48 20.48 0 0 1 20.48-20.48zM327.68 678.2976a20.48 20.48 0 1 1-20.48 20.48 20.48 20.48 0 0 1 20.48-20.48z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </svg>
  );
};

IconIcon.defaultProps = {
  size: 18,
};

export default IconIcon;
