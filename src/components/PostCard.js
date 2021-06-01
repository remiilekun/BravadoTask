import React from 'react';
import styled from '@emotion/native';
import { PostSummary } from './PostSummary';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  padding: 8px;
`;

export const PostCard = props => {
  return (
    <Wrapper>
      <PostSummary {...props} />
    </Wrapper>
  );
};
