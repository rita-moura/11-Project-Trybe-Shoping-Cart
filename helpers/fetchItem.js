const fetchItem = async (id) => {
  if (!id) {
      throw new Error('You must provide an url');
  }
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await response.json();
  return data;  
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
