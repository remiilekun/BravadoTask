import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/native';
import FastImage from 'react-native-fast-image';
import Bookmark from '@assets/svg/bookmark.svg';
import Bookmarked from '@assets/svg/bookmarked.svg';
import { Text } from './Text';

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Details = styled.View`
  flex-direction: column;
  margin-right: 12px;
`;

const Gap = styled.View`
  height: ${({ height = '5px' }) => height};
`;

const ImageWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.grey[50]};
  border-radius: 4px;
`;

const Subtitle = styled(props => (
  <Text fontSize="msm" fontWeight="semibold" {...props} />
))``;

const BookmarkWrapper = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const PostSummary = ({
  address,
  avatar,
  email,
  isBookmarked,
  name,
  title,
}) => {
  return (
    <Wrapper>
      <Details>
        <Text color="black" fontSize="lg" fontWeight="semibold">
          {name}
        </Text>
        <Gap />
        <Subtitle>{email}</Subtitle>
        <Gap />
        <Subtitle>{title}</Subtitle>
        <Gap />
        <Subtitle>{address}</Subtitle>
      </Details>

      <ImageWrapper>
        <FastImage
          style={{ width: 105, height: 105 }}
          source={{
            uri: avatar,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />

        <BookmarkWrapper>
          {isBookmarked ? <Bookmarked /> : <Bookmark />}
        </BookmarkWrapper>
      </ImageWrapper>
    </Wrapper>
  );
};

PostSummary.propTypes = {
  address: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
