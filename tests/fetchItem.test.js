require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  test('Verifica se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  test('Verifica se fetchItem foi chamada com endpoint correto', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  test('Verifica se a função fetchProducts retorna o esperado', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  })
  test('Verifica se a função fetchProducts retorna o esperado', async () => {
    try {
      await fetchItem();
    } catch (error) {
        expect(error).toEqual(new Error('You must provide an url'));
    };
  })
  // fail('Teste vazio');
});
