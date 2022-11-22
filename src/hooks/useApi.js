import { useEffect, useState } from 'react';

export default function useApi() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState([]);
  const [erro, setErro] = useState(null);

  const planetsApi = async () => {
    try {
      setLoading(true);
      const URL = 'https://swapi.dev/api/planets';
      const request = await fetch(URL);
      const response = await request.json();
      setPlanets(response);
    } catch (error) {
      setErro(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    planetsApi();
  }, []);

  return {
    planets, erro, loading, planetsApi,
  };
}
