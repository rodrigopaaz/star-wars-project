import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FilterContext from './components/StarWarsContext/FilterContext';
import Table from './components/Table';
import useApi from './hooks/useApi';
import usePlanets from './hooks/usePlanets';

function App() {
  const [filter, setFilter] = useState(''); // req2
  const { planets: { results } } = useApi();// req2
  const { sortedFilter, filterByComparison } = usePlanets();

  const sortTable = (element) => {
    const sort = sortedFilter(filter || results, element);
    setFilter(sort);
  };
  const [orderedFilter, setOrderedFilter] = useState(results);

  const filterPlanets = (planet) => {
    const filteredResults = results.filter((e) => e.name.toUpperCase()
      .includes(planet.toUpperCase()));
    return setFilter(filteredResults);
  };
  const newFilter = filter || results;
  const filterByColumn = (column, comparison, value) => {
    const orderedByComparison = filterByComparison(column, comparison, value, newFilter);
    return setFilter(orderedByComparison);
  };

  return (
    <FilterContext.Provider
      value={ { filter,
        sortTable,
        results,
        orderedFilter,
        setOrderedFilter,
        setFilter,
        filterPlanets,
        filterByColumn } }
    >
      <div>
        <Header />
        <Table />
      </div>
    </FilterContext.Provider>
  );
}

export default App;
