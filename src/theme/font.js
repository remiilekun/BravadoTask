import { scale } from 'react-native-size-matters';

export const font = {
  size: {
    xxs: `${scale(10)}px`,
    xs: `${scale(12)}px`,
    msm: `${scale(13)}px`,
    sm: `${scale(14)}px`,
    md: `${scale(16)}px`,
    lg: `${scale(18)}px`,
    xl: `${scale(20)}px`,
    '2xl': `${scale(24)}px`,
    '3xl': `${scale(28)}px`,
    '4xl': `${scale(32)}px`,
    '5xl': `${scale(36)}px`,
    '6xl': `${scale(48)}px`,
    '7xl': `${scale(64)}px`,
  },
  family: {
    medium: 'Inter-Medium',
    normal: 'Inter-Regular',
    semibold: 'Inter-SemiBold',
  },
  align: {
    left: 'left',
    right: 'right',
    center: 'center',
  },
};
