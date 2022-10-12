require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Verifica se fetchProducts é uma função', async () => {
    expect(typeof fetchProducts).toBe('function');
  });
  test('Verifica se a fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  test('Verifica se a fetch foi chamada com endpoint correto', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  test('Verifica se a função fetchProducts retorna o esperado', async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  })
});

