import React, { createContext, useCallback, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    (async () => {
      const value = await AsyncStorage.getItem('bookmarks');
      if (value) {
        return setBookmarks(JSON.parse(value));
      }
    })();
  }, []);

  const toggleBookmark = useCallback(
    async val => {
      try {
        let newBookmarks = [];
        if (bookmarks.includes(val)) {
          newBookmarks = [...bookmarks.filter(id => id !== val)];
        } else {
          newBookmarks = [...bookmarks, val];
        }
        setBookmarks(newBookmarks);
        await AsyncStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      } catch (e) {
        console.log({ e });
      }
    },
    [bookmarks, setBookmarks],
  );

  const value = useMemo(
    () => ({
      bookmarks,
      toggleBookmark,
    }),
    [bookmarks, toggleBookmark],
  );

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
};
