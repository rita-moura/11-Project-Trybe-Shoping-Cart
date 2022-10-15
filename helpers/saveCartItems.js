const saveCartItems = (item) => {
  // seu código aqui
  if (!item) throw new Error('error');
  localStorage.setItem('cartItems', item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
