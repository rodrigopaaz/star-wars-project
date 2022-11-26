import React from 'react';
import { findByRole, findByTestId, render, screen } from '@testing-library/react';
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
 userEvent.click(filterButton);

 userEvent.clear(filter);

 userEvent.type(filterValue, '1');
 userEvent.click(filterButton)
 userEvent.clear(filterValue)

 userEvent.selectOptions(filterPopulation, 'rotation_period')
 userEvent.selectOptions(filterComparison, 'menor que')
 userEvent.click(filterButton)

 userEvent.selectOptions(filterPopulation, 'diameter')
 userEvent.selectOptions(filterComparison, 'igual a')
 userEvent.click(filterButton);

 userEvent.selectOptions(filterPopulation, 'surface_water')
 userEvent.selectOptions(filterComparison, 'maior que')
 userEvent.type(filterValue, '12');
 userEvent.click(filterButton)

 const removeButton = await screen.findAllByRole('button', {name: /remove/i})
 const removeAllFilters =  await screen.findByTestId('button-remove-filters')
expect(removeButton[1]).toBeInTheDocument()
expect(removeAllFilters).toBeInTheDocument()

const removeDiv = await screen.findAllByTestId('filter');
expect(removeDiv[0]).toHaveTextContent('population')
expect(removeDiv[0]).toBeInTheDocument()

userEvent.click(removeButton[5])
userEvent.click(removeButton[0])
expect(removeButton[0]).toBeInTheDocument()


const planetsName2 = await screen.findAllByTestId('planet-name')

expect(planetsName2[0]).toHaveTextContent(/tatooine/i)

userEvent.click(removeAllFilters);



});

test('Verifica se só é possível adicionar um filtro por tipo',async()=>{
  jest.spyOn(global, 'fetch')
  global.fetch.mockResolvedValue(mockFetch())
  render(<App />);
 const filter = await screen.findByTestId('name-filter');
 expect(filter).toBeInTheDocument();

 const filterPopulation = await screen.findByTestId('column-filter');
 expect(filterPopulation).toBeInTheDocument();

 const filterComparison = await screen.findByTestId('comparison-filter');
 expect(filterComparison).toBeInTheDocument();

 const filterValue = await screen.findByTestId('value-filter');
 expect(filterValue).toBeInTheDocument();
 
 const filterButton = await screen.findByTestId('button-filter');
 expect(filterButton).toBeInTheDocument();

 expect(filterPopulation).toHaveTextContent('population')

 userEvent.selectOptions(filterPopulation, 'population')
 userEvent.click(filterButton)

 expect(filterPopulation).not.toHaveTextContent('population')

 const removeButton = await screen.findAllByRole('button', {name: /remove/i})
 const removeAllFilters =  await screen.findByTestId('button-remove-filters')
expect(removeButton[1]).toBeInTheDocument()
expect(removeAllFilters).toBeInTheDocument()

const removeDiv = await screen.findAllByTestId('filter');
expect(removeDiv[0]).toHaveTextContent('population')
expect(removeDiv[0]).toBeInTheDocument()


screen.logTestingPlaygroundURL()

userEvent.click(removeButton[1])
expect(removeButton[0]).toBeInTheDocument()
expect(removeButton[1]).not.toBeInTheDocument()

userEvent.click(removeAllFilters);

})

test('Verifica o funcionamento das funções', async () => { 
  jest.spyOn(global, 'fetch')
  global.fetch.mockResolvedValue(mockFetch())
  render(<App />);
 const filter = await screen.findByTestId('name-filter');
 expect(filter).toBeInTheDocument();

 const filterPopulation = await screen.findByTestId('column-filter');
 expect(filterPopulation).toBeInTheDocument();

 const filterComparison = await screen.findByTestId('comparison-filter');
 expect(filterComparison).toBeInTheDocument();

 const filterValue = await screen.findByTestId('value-filter');
 expect(filterValue).toBeInTheDocument();
 
 const filterButton = await screen.findByTestId('button-filter');
 expect(filterButton).toBeInTheDocument();

 const Planets = await screen.findByText(/alderaan/i)
 expect(Planets).toBeInTheDocument()


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
 expect(filterPopulation).toBeInTheDocument();

 const filterComparison = await screen.findByTestId('comparison-filter');
 expect(filterComparison).toBeInTheDocument();

 const filterValue = await screen.findByTestId('value-filter');
 expect(filterValue).toBeInTheDocument();
 
 const filterButton = await screen.findByTestId('button-filter');
 expect(filter).toBeInTheDocument();

 const Planets = await screen.findByText(/alderaan/i)
 expect(Planets).toBeInTheDocument()

 const tableRows = await screen.findAllByRole('table');
 expect((tableRows)).toHaveLength(1)

 userEvent.click(filterButton)


 })
 test('Verifica as ordens crescente e decrescente do filtro', async () => { 
  jest.spyOn(global, 'fetch')
  global.fetch.mockResolvedValue(mockFetch())
  render(<App />);
 const filter = await screen.findByTestId('name-filter');
 expect(filter).toBeInTheDocument();

 const filterPopulation = await screen.findByTestId('column-filter');
 expect(filterPopulation).toBeInTheDocument();

const cresFilter = await screen.findByTestId('column-sort-input-asc')
expect(cresFilter).toBeInTheDocument();


const decresFilter = await screen.findByTestId('column-sort-input-desc')
expect(decresFilter).toBeInTheDocument();

const orderSelect = await screen.findByTestId('column-sort')
expect(orderSelect).toBeInTheDocument();

const orderButton = await screen.findByTestId('column-sort-button')
expect(orderButton).toBeInTheDocument();

userEvent.selectOptions(orderSelect, 'rotation_period')
 userEvent.click(cresFilter)
 userEvent.click(orderButton)

 const planetsName = await screen.findAllByTestId('planet-name')

 expect(planetsName[0]).toHaveTextContent(/bespin/i)

 userEvent.selectOptions(orderSelect, 'population')
 userEvent.click(decresFilter)
 userEvent.click(orderButton)

 userEvent.selectOptions(orderSelect, 'surface_water')
 userEvent.click(decresFilter)
 userEvent.click(orderButton)


 userEvent.selectOptions(orderSelect, 'orbital_period')
 userEvent.click(cresFilter)
 userEvent.click(orderButton)

 const planetsName2 = await screen.findAllByTestId('planet-name')

 expect(planetsName2[0]).toHaveTextContent(/Bespin/i)
 

 })
})
