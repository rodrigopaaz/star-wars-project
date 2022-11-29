import React, { useContext, useState, useEffect } from 'react';
import FilterSort from './pages/FilterSort';
import FilterContext from './StarWarsContext/FilterContext';

export default function Header() {
  const { setFilter } = useContext(FilterContext);
  const { filterPlanets, filterByColumn } = useContext(FilterContext);

  const planetDetails = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  const [filteredArray, setFilteredArray] = useState([planetDetails]);
  const newArray = planetDetails.filter((e) => !filteredArray.includes(e));
  const [columnFilter,
    setColumnFilter] = useState({ column: planetDetails[0],
    comparison: 'maior que',
    value: 0 });
  const { column, comparison,
    value: columnValue } = columnFilter;

  const handleFilter = (name, value) => {
    setColumnFilter({ ...columnFilter, [name]: value });
  };

  const [addFilter, setAddFilter] = useState([]);
  const [handleNewFilter, setHandleNewFilter] = useState([]);

  const removeSingleFilter = (filter) => {
    if (filter === addFilter[0]) {
      setFilter('');
      return setAddFilter([]);
    }
    const newFilter = addFilter.filter((e) => !e.column.includes(filter.column)); // remove o array
    setHandleNewFilter(newFilter);
    setFilteredArray(filteredArray.filter((e) => e !== filter.column));
    setColumnFilter({ column: newArray[0],
      comparison: 'maior que',
      value: 0 });
  };

  useEffect(() => {
    handleNewFilter.forEach((e) => filterByColumn(e.column, e.comparison, e.columnValue));
  }, [handleNewFilter]);

  return (
    <div>
      <label htmlFor="name-filter">
        Projeto Star Wars- Trybe
        <input
          type="text"
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => filterPlanets(value) }
        />
      </label>
      <label htmlFor="column">
        Coluna
        <select
          name="column"
          id="coluna"
          data-testid="column-filter"
          onChange={ ({ target: { name, value } }) => handleFilter(name, value) }
          value={ column }
        >
          {newArray.map((e) => (
            <option
              key={ e }
              value={ e }
            >
              {e}
            </option>))}
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          data-testid="comparison-filter"
          name="comparison"
          id="comparison"
          onChange={ ({ target: { name, value } }) => handleFilter(name, value) }
          value={ comparison }
        >
          <option value="maior que">
            maior que
          </option>
          <option value="menor que">
            menor que
          </option>
          <option value="igual a">
            igual a
          </option>
        </select>
      </label>
      <label htmlFor="value_filter">
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          value={ columnValue }
          onChange={ ({ target: { name, value } }) => handleFilter(name, value) }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          filterByColumn(column, comparison, columnValue);
          setAddFilter([...addFilter, { column, comparison, columnValue }]);
          if (!filteredArray.includes(column)) {
            setFilteredArray([...filteredArray, column]);
          }
          return setColumnFilter({ column: newArray[1],
            comparison: 'maior que',
            value: 0 });
        } }
      >
        Filter

      </button>

      <FilterSort />

      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => {
          setFilter('');
          setAddFilter([]);
          setFilteredArray(filteredArray.filter((e) => e === planetDetails));
        } }
      >
        Remove Filters
      </button>

      {addFilter.map((e) => (
        <div
          data-testid="filter"
          key={ column + Math.random() }
        >
          <p>{e.column}</p>
          <p>{e.comparison}</p>
          <p>{e.columnValue}</p>
          <button
            type="button"
            onClick={ () => {
              setFilter('');
              removeSingleFilter(e);
            } }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
