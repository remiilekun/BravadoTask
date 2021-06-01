import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/native';
import { UserSummary } from './UserSummary';
import { Text } from './Text';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  padding: 8px;
`;

const ContentDivider = styled.View`
  background-color: #000000;
  height: 1px;
  margin: 8px 0;
  width: 100%;
`;

export const UserCard = ({ content, query, summary, ...props }) => {
  return (
    <Wrapper {...props}>
      <UserSummary {...summary} query={query} />
      {content ? (
        <>
          <ContentDivider />
          <Text fontSize="sm" fontWeight="medium">
            {content}
          </Text>
        </>
      ) : null}
    </Wrapper>
  );
};

UserCard.propTypes = {
  content: PropTypes.string,
  query: PropTypes.string,
  summary: PropTypes.shape({
    address: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

UserCard.defaultProps = {
  content: '',
  query: '',
};
