import React from 'react';
import { FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PageWrapper, PostCard, Searchbar } from '@components';
import { useQuery } from 'react-query';
import axios from 'axios';

const SearchbarWrapper = styled.View`
  margin-bottom: 20px;
`;

const ItemSeparator = styled.View`
  height: 16px;
`;

const HomeScreen = ({ navigation }) => {
  const { isLoading, data, refetch } = useQuery('posts', async () => {
    const { data } = await axios.get(
      'https://gist.githubusercontent.com/allaud/093aa499998b7843bb10b44ea6ea02dc/raw/c400744999bf4b308f67807729a6635ced0c8644/users.json',
    );
    return data;
  });

  const handlePostPress = summary => {
    navigation.navigate('ViewPost', {
      summary,
    });
  };

  return (
    <SafeAreaView>
      <PageWrapper>
        <SearchbarWrapper>
          <Searchbar />
        </SearchbarWrapper>

        <FlatList
          initialNumToRender={10}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={refetch}
              tintColor="#000"
            />
          }
          data={data}
          ItemSeparatorComponent={() => <ItemSeparator />}
          keyExtractor={item => item.email}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => handlePostPress(item)}>
              <PostCard summary={item} />
            </TouchableOpacity>
          )}
        />
      </PageWrapper>
    </SafeAreaView>
  );
};

export default HomeScreen;
