import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styled from '@emotion/native';
import FastImage from 'react-native-fast-image';
import Bookmark from '@assets/svg/bookmark.svg';
import Bookmarked from '@assets/svg/bookmarked.svg';
import escapeRegExp from 'lodash.escaperegexp';
import { useBookmarks } from '@hooks';
import { Text } from './Text';

const subtitleProps = { fontSize: 'msm', fontWeight: 'semibold' };

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

const BookmarkWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 8px;
`;

const HighlightedText = memo(({ text = '', highlight = '', textProps }) => {
  if (!highlight.trim()) {
    return <Text {...textProps}>{text}</Text>;
  }
  const regex = new RegExp(`(${escapeRegExp(highlight)})`, 'gi');
  const parts = text.split(regex);
  return (
    <Text {...textProps}>
      {parts
        .filter(part => part)
        .map((part, i) =>
          regex.test(part) ? (
            <Text key={i} backgroundColor="yellow" {...textProps}>
              {part}
            </Text>
          ) : (
            <Text key={i} {...textProps}>
              {part}
            </Text>
          ),
        )}
    </Text>
  );
});

export const UserSummary = ({
  address,
  avatar,
  city,
  email,
  name,
  query,
  title,
}) => {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const isBookmarked = bookmarks?.includes(email);

  return (
    <Wrapper>
      <Details>
        <View>
          <HighlightedText
            text={name}
            highlight={query}
            textProps={{
              color: 'black',
              fontSize: 'lg',
              fontWeight: 'semibold',
            }}
          />
        </View>
        <Gap />
        <View>
          <HighlightedText
            text={email}
            highlight={query}
            textProps={subtitleProps}
          />
        </View>
        <Gap />
        <View>
          <HighlightedText
            text={title}
            highlight={query}
            textProps={subtitleProps}
          />
        </View>
        <Gap />
        <View>
          <HighlightedText
            text={`${address}, ${city}`}
            highlight={query}
            textProps={subtitleProps}
          />
        </View>
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

UserSummary.propTypes = {
  address: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  query: PropTypes.string,
  title: PropTypes.string.isRequired,
};

UserSummary.defaultProps = {
  query: '',
};
