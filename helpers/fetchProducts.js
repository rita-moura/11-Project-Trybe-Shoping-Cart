const fetchProducts = async (product) => {
  if (!product) throw new Error('You must provide an url');
  
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
