import { useState, useEffect } from 'react';
import users from '@data/users';

export const useGetUsers = query => {
  const [cache, setCache] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    if (users?.length) {
      if (!query) {
        setData([...users]);
      } else if (cache[query]) {
        setData([...cache[query]]);
      } else {
        const filtered = users?.filter(obj =>
          Object.entries(obj).some(
            ([key, value]) =>
              key !== 'avatar' && String(value).toLowerCase().includes(query),
          ),
        );
        setCache(v => ({ ...v, [query]: filtered }));
        setData([...filtered]);
      }
    } else {
      setData([]);
    }
  }, [query, cache]);

  return { data };
};
