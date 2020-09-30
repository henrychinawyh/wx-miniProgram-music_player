/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconPlay = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M341.333333 219.306667 341.333333 816.64 810.666667 517.973333 341.333333 219.306667Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPlay.defaultProps = {
  size: 18,
};

export default IconPlay;
