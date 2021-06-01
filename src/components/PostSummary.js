import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/native';
import FastImage from 'react-native-fast-image';
import Bookmark from '@assets/svg/bookmark.svg';
import Bookmarked from '@assets/svg/bookmarked.svg';
import { useBookmarks } from '@hooks';
import { Text } from './Text';

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Details = styled.View`
  flex-direction: column;
  margin-right: 12px;
  flex: 1;
`;

const Gap = styled.View`
  height: ${({ height = '5px' }) => height};
`;

const ImageWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.grey[50]};
  border-radius: 4px;
  flex-shrink: 0;
`;

const Image = styled(FastImage)`
  height: 105px;
  width: 105px;
`;

const Subtitle = styled(props => (
  <Text fontSize="msm" fontWeight="semibold" {...props} />
))``;

const BookmarkWrapper = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const PostSummary = ({ address, avatar, email, name, title }) => {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const isBookmarked = bookmarks?.includes(email);

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
        <Image
          source={{
            uri: avatar,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />

        <BookmarkWrapper
          activeOpacity={0.9}
          onPress={() => toggleBookmark(email)}>
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
