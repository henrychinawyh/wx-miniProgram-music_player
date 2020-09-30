/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconSuijibofang01 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M63.839469 734.681662c0-7.621585 6.167466-13.790074 13.790074-13.790074l170.093956 0c20.010753 0 38.836517-8.29492 52.989865-22.461571l389.285121-389.802914c19.378349-19.365046 45.125757-29.006637 72.488964-29.006637l150.593833 0-72.987315-74.010621c-5.386684-5.386684-5.386684-15.136745 0-20.522406 5.387707-5.386684 14.113439-5.386684 19.500123 0l96.512101 96.526427c2.505054 2.491751 4.054339 5.952572 4.054339 9.776667s-1.549286 7.312546-4.054339 9.803273l-96.512101 96.567359c-2.693342 2.693342-6.221702 4.175089-9.749038 4.175089-3.52836 0-7.05672-1.090844-9.750061-3.784186-5.386684-5.386684-5.386684-13.601786 0-18.987447l72.987315-71.950705L762.486426 307.213917c-19.99745 0-38.823214 7.284917-52.989865 21.424962L320.211441 717.418486c-19.378349 19.364023-45.112454 31.05325-72.488964 31.05325L77.62852 748.471736C70.006935 748.471736 63.839469 742.30427 63.839469 734.681662zM77.62852 307.213917l165.379585 0c22.717398 0 44.950771 8.187473 61.029982 24.25338l108.578927 108.053971c2.693342 2.693342 6.221702 3.784186 9.749038 3.784186 3.52836 0 7.05672-1.480724 9.749038-4.160763 5.387707-5.399987 5.387707-14.193257 0-19.579941L323.538209 311.994804c-21.519106-21.505803-50.121538-32.373315-80.529081-32.373315L77.62852 279.621489c-7.621585 0-13.790074 6.181793-13.790074 13.803377C63.839469 301.033148 70.006935 307.213917 77.62852 307.213917zM840.092945 838.911538c2.693342 2.693342 6.221702 4.040013 9.750061 4.040013 3.527336 0 7.05672-1.346671 9.749038-4.040013l96.512101-96.526427c2.505054-2.477424 4.054339-5.951549 4.054339-9.749038 0-3.824095-1.549286-7.271614-4.054339-9.776667l-96.512101-96.500844c-5.386684-5.386684-14.112416-5.386684-19.500123 0-5.386684 5.387707-5.386684 15.136745 0 20.523429l72.987315 74.010621L767.200798 720.892611c-23.054065 0-44.721551-10.019191-61.029982-26.313296L597.590865 585.502038c-5.386684-5.386684-14.112416-5.655813-19.4991-0.270153-5.387707 5.386684-5.387707 13.978363 0 19.365046l108.577904 109.561301c21.506826 21.4925 50.109258 34.31248 80.529081 34.31248l145.880485 0-72.987315 71.964008C834.706261 825.822428 834.706261 833.524854 840.092945 838.911538z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconSuijibofang01.defaultProps = {
  size: 18,
};

export default IconSuijibofang01;