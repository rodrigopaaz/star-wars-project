import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FilterContext from './components/StarWarsContext/FilterContext';
import Table from './components/Table';
import useApi from './hooks/useApi';

function App() {
  const [filter, setFilter] = useState('');
  const { planets: { results } } = useApi();

  const filterPlanets = (planet) => {
    const filteredResults = results.filter((e) => e.name.toUpperCase()
      .includes(planet.toUpperCase()));
    return setFilter(filteredResults);
  };
  const newFilter = filter !== '' ? filter : results;
  const filterByColumn = (column, comparison, value) => {
    if (comparison === 'maior que') {
      const filteredResults = newFilter.filter((e) => Number(e[column]) > Number(value));
      return setFilter(filteredResults);
    }
    if (comparison === 'menor que') {
      const filteredResults = newFilter.filter((e) => Number(e[column]) < Number(value));
      return setFilter(filteredResults);
    }
    if (comparison === 'igual a') {
      const filteredResults = newFilter
        .filter((e) => Number(e[column]) === Number(value));
      return setFilter(filteredResults);
    }
  };

  return (
    <FilterContext.Provider
      value={ { filter,
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
