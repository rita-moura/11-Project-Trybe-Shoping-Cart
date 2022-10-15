const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  test('Verifica se getSavedCartItems é uma função', () => {
    expect(typeof getSavedCartItems).toBe('function');
  });
  test('Verifica se ao executar getSavedCartItems o localStorage.getItem é chamado', () => {
    getSavedCartItems('item');
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  test('Verifica ao executar a getSavedCartItemscom argumento o localStorage.getItem é chamado com a chave cartItems', () => {
    getSavedCartItems('item');
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
  
  //fail('Teste vazio');
});
