import React, { useContext } from 'react';
import useApi from '../hooks/useApi';
import useFilter from '../hooks/useFilter';
import FilterContext from './StarWarsContext/FilterContext';

export default function Header() {
  const { planets: { results }, error, loading } = useApi();
  const { filterPlanets } = useContext(FilterContext);
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
      <label htmlFor="coluna">
        Coluna
        <select name="colula" id="coluna">
          {results
            ? Object.keys(results[0]).map((e) => (
              <option
                key={ e }
                value={ e }
              >
                {e}
              </option>))
            : null}
        </select>
      </label>
    </div>
  );
}
