import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import mockFetch from './fetch';
import userEvent from '@testing-library/user-event';

describe(('Testes do projeto StarWars'), ()=>{
test('Verifica o correto funcionamento da aplicação', async () => {
  jest.spyOn(global, 'fetch')
  global.fetch.mockResolvedValue(mockFetch())
  render(<App />);
 const filter = await screen.findByTestId('name-filter');
 expect(filter).toBeInTheDocument();

 const filterPopulation = await screen.findByTestId('column-filter');
 expect(filter).toBeInTheDocument();

 const filterComparison = await screen.findByTestId('comparison-filter');
 expect(filter).toBeInTheDocument();

 const filterValue = await screen.findByTestId('value-filter');
 expect(filter).toBeInTheDocument();
 
 const filterButton = await screen.findByTestId('button-filter');
 expect(filter).toBeInTheDocument();

 const Planets = await screen.findByText(/alderaan/i)
 expect(Planets).toBeInTheDocument()

 const tableRows = await screen.findAllByRole('table');
 expect((tableRows)).toHaveLength(1)

 userEvent.type(filter, 'Tatooine');
 userEvent.clear(filter);

 userEvent.type(filterValue, '1');
 userEvent.click(filterButton)

 userEvent.selectOptions(filterPopulation, 'population')
 userEvent.selectOptions(filterComparison, 'menor que')
 userEvent.click(filterButton)

 userEvent.selectOptions(filterPopulation, 'population')
 userEvent.selectOptions(filterComparison, 'igual a')
 userEvent.click(filterButton)



});
test('Verifica o funcionamento das funções', async () => { 
  jest.spyOn(global, 'fetch')
  global.fetch.mockResolvedValue(mockFetch())
  render(<App />);
 const filter = await screen.findByTestId('name-filter');
 expect(filter).toBeInTheDocument();

 const filterPopulation = await screen.findByTestId('column-filter');
 expect(filter).toBeInTheDocument();

 const filterComparison = await screen.findByTestId('comparison-filter');
 expect(filter).toBeInTheDocument();

 const filterValue = await screen.findByTestId('value-filter');
 expect(filter).toBeInTheDocument();
 
 const filterButton = await screen.findByTestId('button-filter');
 expect(filter).toBeInTheDocument();

 const Planets = await screen.findByText(/alderaan/i)
 expect(Planets).toBeInTheDocument()

 const tableRows = await screen.findAllByRole('table');
 expect((tableRows)).toHaveLength(1)

 userEvent.selectOptions(filterPopulation, 'diameter')
 userEvent.selectOptions(filterComparison, 'maior que')
 userEvent.type(filterValue, '9000')
 userEvent.click(filterButton)

 userEvent.selectOptions(filterPopulation, 'population')
 userEvent.selectOptions(filterComparison, 'menor que')
 userEvent.type(filterValue, '1000000')
 userEvent.click(filterButton)

 userEvent.selectOptions(filterPopulation, 'rotation_period')
 userEvent.selectOptions(filterComparison, 'igual a')
 userEvent.type(filterValue, '23')
 userEvent.click(filterButton)


 })

 test('Verifica o funcionamento dos filtros caso não seja selecionado filtro algum', async () => { 
  jest.spyOn(global, 'fetch')
  global.fetch.mockResolvedValue(mockFetch())
  render(<App />);
 const filter = await screen.findByTestId('name-filter');
 expect(filter).toBeInTheDocument();

 const filterPopulation = await screen.findByTestId('column-filter');
 expect(filter).toBeInTheDocument();

 const filterComparison = await screen.findByTestId('comparison-filter');
 expect(filter).toBeInTheDocument();

 const filterValue = await screen.findByTestId('value-filter');
 expect(filter).toBeInTheDocument();
 
 const filterButton = await screen.findByTestId('button-filter');
 expect(filter).toBeInTheDocument();

 const Planets = await screen.findByText(/alderaan/i)
 expect(Planets).toBeInTheDocument()

 const tableRows = await screen.findAllByRole('table');
 expect((tableRows)).toHaveLength(1)

 userEvent.click(filterButton)


 })
})
