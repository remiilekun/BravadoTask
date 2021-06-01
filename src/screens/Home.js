import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { FlatList, TouchableOpacity, Linking } from 'react-native';
import styled from '@emotion/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PageWrapper, PostCard, Searchbar } from '@components';
import USERS from '@data/users';

const SearchbarWrapper = styled.View`
  margin-bottom: 20px;
`;

const ItemSeparator = styled.View`
  height: 16px;
`;

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');

  const navigateToUrl = url => {
    if (url) {
      const route = url.replace(/.*?:\/\//g, '');
      const searchQuery = route.match(/\/([^\/]+)\/?$/)[1];
      setQuery(searchQuery);
    }
  };

  const handleOpenURL = useCallback(({ url }) => {
    navigateToUrl(url);
  }, []);

  useEffect(() => {
    Linking.getInitialURL().then(navigateToUrl);
    Linking.addEventListener('url', handleOpenURL);
    return () => {
      Linking.removeEventListener('url', handleOpenURL);
    };
  }, [handleOpenURL]);

  const handlePostPress = summary => {
    navigation.navigate('ViewPost', {
      summary,
    });
  };

  const data = useMemo(() => {
    if (USERS?.length) {
      return USERS?.filter(o =>
        Object.entries(o).some(entry =>
          String(entry[1]).toLowerCase().includes(query),
        ),
      );
    }
    return [];
  }, [query]);

  return (
    <SafeAreaView>
      <PageWrapper>
        <SearchbarWrapper>
          <Searchbar value={query} onChangeText={setQuery} />
        </SearchbarWrapper>

        <FlatList
          data={data}
          initialNumToRender={10}
          ItemSeparatorComponent={() => <ItemSeparator />}
          keyExtractor={item => item.email}
          removeClippedSubviews={true}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => handlePostPress(item)}>
              <PostCard summary={item} query={query} />
            </TouchableOpacity>
          )}
        />
      </PageWrapper>
    </SafeAreaView>
  );
};

export default HomeScreen;
