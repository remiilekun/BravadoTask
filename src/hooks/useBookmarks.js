import { useContext } from 'react';
import { BookmarkContext } from '@contexts/BookmarkContext';

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);

  if (!context) {
    throw new Error('useBookmarks must be used within the BookmarksProvider');
  }

  return context;
};
