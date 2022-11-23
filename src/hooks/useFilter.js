import { useEffect, useState } from 'react';
import useApi from './useApi';

export default function useFilter(array, column, comparison, value) {
  const [filter, setFilter] = useState([]);
  const { planets: { results } } = useApi();

  useEffect(() => {
    const biggerThan = () => {
      const filteredResults = filter.length > 1 ? array : results
        .filter((e) => Number(e[column]) > Number(value));
      return filteredResults;
    };

    const lessThan = () => {
      const filteredResults = filter.length < 1 ? array : results
        .filter((e) => Number(e[column]) < Number(value));
      return filteredResults;
    };

    const equalTo = () => {
      const filteredResults = filter.length === 1 ? array : results
        .filter((e) => Number(e[column]) === Number(value));
      return filteredResults;
    };
    const filterByColumn = () => {
      try {
        if (comparison === 'maior que') {
          setFilter(biggerThan());
        }
        if (comparison === 'menor que') {
          setFilter(lessThan());
        }
        if (comparison === 'igual a') {
          setFilter(equalTo());
        }
      } catch (error) {
        setFilter(error);
      }
    };
    filterByColumn();
  }, [array, column, comparison, value, filter, results]);
  return {
    filter, setFilter,
  };
}
