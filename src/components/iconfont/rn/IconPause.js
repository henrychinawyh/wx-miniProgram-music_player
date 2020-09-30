/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconPause = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M597.333333 810.666667h170.666667V213.333333h-170.666667M256 810.666667h170.666667V213.333333H256v597.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPause.defaultProps = {
  size: 18,
};

export default IconPause;
