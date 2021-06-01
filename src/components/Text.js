import React from 'react';
import { Text as RNText } from 'react-native';
import styled from '@emotion/native';
import { pluckDeep } from '@lib/utils';

export const Text = styled(props => (
  <RNText {...props} allowFontScaling={false} />
))`
  background-color: ${({ theme, backgroundColor = 'transparent' }) =>
    pluckDeep(backgroundColor)(theme.colors) || backgroundColor};
  color: ${({ theme, color = 'black' }) =>
    pluckDeep(color)(theme.colors) || color};
  font-family: ${({ theme, fontWeight }) =>
    theme.font.family[fontWeight || 'normal']};
  font-size: ${({ theme, fontSize = '16px' }) =>
    theme.font.size[fontSize] || fontSize};
  text-align: ${({ theme, textAlign = 'left' }) => theme.font.align[textAlign]};
`;
