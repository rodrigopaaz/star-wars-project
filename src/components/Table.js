import React, { useContext } from 'react';
import useApi from '../hooks/useApi';
import FilterContext from './StarWarsContext/FilterContext';

export default function Table() {
  const { filter } = useContext(FilterContext);
  const { planets: { results } } = useApi();

  const filteredResult = filter.length >= 1 ? filter : results;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Rotation Period
            </th>
            <th>
              Orbital Period
            </th>
            <th>
              Diameter
            </th>
            <th>
              Climate
            </th>
            <th>
              Gravity
            </th>
            <th>
              Terrain
            </th>
            <th>
              Surface Water
            </th>
            <th>
              Population
            </th>
            <th>
              Films
            </th>
            <th>
              Created
            </th>
            <th>
              Edited
            </th>
            <th>
              URL
            </th>
          </tr>
        </thead>
        <tbody>
          {results ? filteredResult.map((e) => (
            <tr key={ e.name }>
              <th>
                {e.name}
              </th>
              <th>
                {e.rotation_period}
              </th>
              <th>
                {e.orbital_period}
              </th>
              <th>
                {e.diameter}
              </th>
              <th>
                {e.climate}
              </th>
              <th>
                {e.gravity}
              </th>
              <th>
                {e.terrain}
              </th>
              <th>
                {e.surface_water}
              </th>
              <th>
                {e.population}
              </th>
              <th>
                {e.films}
              </th>
              <th>
                {e.created}
              </th>
              <th>
                {e.edited}
              </th>
              <th>
                {e.url}
              </th>

            </tr>))

            : null}
        </tbody>
      </table>
    </div>
  );
}
