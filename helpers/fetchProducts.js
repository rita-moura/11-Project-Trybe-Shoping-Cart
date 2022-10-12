const fetchProducts = async (product) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
  const data = await response.json();
  const { results } = data;
  return results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
