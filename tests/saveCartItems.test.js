const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  test('Verifica se saveCartItems é uma função', () => {
    expect(typeof saveCartItems).toBe('function');
  })
  test('Verifica se ao executar a função saveCartItems com um argumento o localStorage é chamado', () => {
    saveCartItems('item');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  test('Verifica se ao passar o argumento o localStore é chamado com chave e valor', () => {
    saveCartItems('item');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'item');
  });
  // fail('Teste vazio');
});
