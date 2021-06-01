import React from 'react';
import styled from '@emotion/native';
import Search from '@assets/svg/search.svg';

const Wrapper = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  flex-direction: row;
  padding: 10px 12px;
  width: 100%;
`;

const Input = styled.TextInput`
  padding: 0 10px;
`;

export const Searchbar = props => {
  return (
    <Wrapper>
      <Search />
      <Input placeholder="Search..." {...props} />
    </Wrapper>
  );
};
