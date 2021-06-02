import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, TouchableOpacity, Linking } from 'react-native';
import styled from '@emotion/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PageWrapper, UserCard, Searchbar } from '@components';
import { useDebounce, useGetUsers } from '@hooks';

const SearchbarWrapper = styled.View`
  margin-bottom: 20px;
`;

const ItemSeparator = styled.View`
  height: 16px;
`;

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query);
  const { data } = useGetUsers(debouncedQuery);

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

  const handleUserPress = summary => {
    navigation.navigate('ViewUser', {
      summary,
    });
  };

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
          removeClippedSubviews={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => handleUserPress(item)}>
              <UserCard summary={item} query={debouncedQuery} />
            </TouchableOpacity>
          )}
        />
      </PageWrapper>
    </SafeAreaView>
  );
};

export default HomeScreen;
