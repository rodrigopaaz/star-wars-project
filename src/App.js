import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FilterContext from './components/StarWarsContext/FilterContext';
import Table from './components/Table';
import useApi from './hooks/useApi';

function App() {
  const [filter, setFilter] = useState([]);
  const { planets: { results } } = useApi();

  const filterPlanets = (planet) => {
    const filteredResults = results.filter((e) => e.name.toUpperCase()
      .includes(planet.toUpperCase()));
    return setFilter(filteredResults);
  };

  return (
    <FilterContext.Provider value={ { filter, filterPlanets } }>
      <div>
        <Header />
        <Table />
      </div>
    </FilterContext.Provider>
  );
}

export default App;
