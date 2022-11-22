import React from 'react';
import useApi from '../hooks/useApi';

export default function Header() {
  const { planets: { results }, error, loading } = useApi();
  return (
    <div>
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
