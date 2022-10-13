const saveCartItems = (item) => {
  // seu código aqui
  JSON.stringify(localStorage.setItem('cartItems', item));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
