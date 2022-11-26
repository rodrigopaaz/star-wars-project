import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FilterContext from './components/StarWarsContext/FilterContext';
import Table from './components/Table';
import useApi from './hooks/useApi';

function App() {
  const [filter, setFilter] = useState('');
  const { planets: { results } } = useApi();

  const [isOrdered, setIsOrdered] = useState([]);
  const [orderedFilter, setOrderedFilter] = useState(results);

  const firstOrder = (ordem) => {
    const isFiltered = filter || results;
    const negativeOne = -1;
    const ordened = isFiltered.sort((a, b) => {
      const last = b[ordem.column].toString()
        .toUpperCase() > a[ordem.column]
        .toString().toUpperCase() ? 1 : 0;

      return /[A-Za-z]/
        .test(a[ordem.column]) - /[A-Za-z]/.test(b[ordem.column]) || (a[ordem.column]
        .toString().toUpperCase() < b[ordem.column].toString()
        .toUpperCase() ? negativeOne : last);
    });

    return ordened;
  };

  const sortTable = (ordem) => {
    const negativeOne = -1;
    const order2 = firstOrder(ordem);
    if (ordem.order === 'ASC') {
      const order = order2.sort((a, b) => (+a[ordem.column] < +b[ordem.column]
        ? negativeOne : 1));
      setFilter(order);
      return setFilter(order);
    }
    if (ordem.order === 'DESC') {
      const order = order2.sort((a, b) => (+b[ordem.column] < +a[ordem.column]
        ? negativeOne : 1));
      setFilter(order);
      return setFilter(order);
    }
  };

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
        sortTable,
        results,
        isOrdered,
        orderedFilter,
        setOrderedFilter,
        setIsOrdered,
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
