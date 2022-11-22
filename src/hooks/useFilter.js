/* import { useState } from 'react';
import useApi from './useApi';

export default function useFilter() {
  const [filter, setFilter] = useState([]);
  const { planets: { results } } = useApi();

  const filterPlanets = (planet) => {
    const filteredResults = results.filter((e) => e.name.includes(planet));
    return setFilter(filteredResults);
  };

  return {
    filter, setFilter, filterPlanets,
  };
}
 */
