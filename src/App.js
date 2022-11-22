import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import useApi from './hooks/useApi';

function App() {
  const { planets, erro, loading, planetsApi } = useApi();
  console.log(planets);
  return (
    <div>
      <Header />
      <Table />
    </div>
  );
}

export default App;
