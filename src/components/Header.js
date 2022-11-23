import React, { useContext, useState } from 'react';
import useApi from '../hooks/useApi';
import useFilter from '../hooks/useFilter';
import FilterContext from './StarWarsContext/FilterContext';

export default function Header() {
  const { planets: { results }, error, loading } = useApi();
  const { filterPlanets, filterByColumn, handleMultipleFilters } = useContext(FilterContext);
  const planetDetails = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  const [columnFilter,
    setColumnFilter] = useState({ column: 'population',
    comparison: 'maior que',
    value: 0 });
  const { column, comparison,
    value: columnValue } = columnFilter;

  const handleFilter = (name, value) => {
    setColumnFilter({ ...columnFilter, [name]: value });
  };

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
          {planetDetails.map((e) => (
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
        } }
      >
        Filter

      </button>
    </div>
  );
}