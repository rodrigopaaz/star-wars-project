export default function usePlanets() {
  const firstOrder = (order, filter) => {
    const isFiltered = filter;
    const negativeOne = -1;
    const ordened = isFiltered.sort((a, b) => {
      const last = b[order.column].toString()
        .toUpperCase() > a[order.column]
        .toString().toUpperCase() ? 1 : 0;

      return /[A-Za-z]/
        .test(a[order.column]) - /[A-Za-z]/.test(b[order.column]) || (a[order.column]
        .toString().toUpperCase() < b[order.column].toString()
        .toUpperCase() ? negativeOne : last);
    });

    return ordened;
  };

  const sortedFilter = (filter, ordem) => {
    const negativeOne = -1;
    const order2 = firstOrder(ordem, filter);
    if (ordem.order === 'ASC') {
      const order = order2.sort((a, b) => (+a[ordem.column] < +b[ordem.column]
        ? negativeOne : 1));
      return order;
    }
    const order = order2.sort((a, b) => (+b[ordem.column] < +a[ordem.column]
      ? negativeOne : 1));
    return order;
  };

  const filterByComparison = (column, comparison, value, newFilter) => {
    if (comparison === 'maior que') {
      const filteredResults = newFilter.filter((e) => Number(e[column]) > Number(value));
      return filteredResults;
    }
    if (comparison === 'menor que') {
      const filteredResults = newFilter.filter((e) => Number(e[column]) < Number(value));
      return filteredResults;
    }
    if (comparison === 'igual a') {
      const filteredResults = newFilter
        .filter((e) => Number(e[column]) === Number(value));
      return filteredResults;
    }
  };
  return ({
    sortedFilter, filterByComparison,
  }
  );
}
