import React, { useContext, useEffect, useState } from 'react';
import FilterContext from '../StarWarsContext/FilterContext';

export default function FilterSort() {
  const { sortTable, setFilter } = useContext(FilterContext);

  const planetDetails = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  const [sortFilter,
    setSortFilter] = useState({ column: planetDetails[0], order: 'ASC' });

  const [orderBySort, setOrderBySort] = useState();

  useEffect(() => {
    /* setAddFilter(handleNewFilter);
    console.log(handleNewFilter, 'handle'); */
    if (orderBySort) {
      sortTable(orderBySort);
      setSortFilter(orderBySort);
    }
  }, [orderBySort]);
  //

  const handleSort = (name, value) => {
    setSortFilter({ ...sortFilter, [name]: value });
  };

  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={ ({ target: { name, value } }) => handleSort(name, value) }
        name="column"
      >
        {planetDetails.map((e) => (
          <option
            key={ e }
            value={ e }
          >
            {e}
          </option>))}
      </select>
      <input
        type="radio"
        value="ASC"
        name="order"
        data-testid="column-sort-input-asc"
        onChange={ ({ target: { name, value } }) => handleSort(name, value) }

      />
      <input
        type="radio"
        value="DESC"
        name="order"
        data-testid="column-sort-input-desc"
        onChange={ ({ target: { name, value } }) => handleSort(name, value) }

      />
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => {
          setOrderBySort(sortFilter);
          setFilter('');
        } }
      >
        Ordenar
      </button>
    </div>
  );
}
