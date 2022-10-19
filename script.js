// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

// Requisito 5 - responsável por retirar o item clicado da lista do carrinho de compras///
const cartItemClickListener = () => {
  const getLiCart = document.querySelector('.cart__item');
  getLiCart.remove();
};

const verifyLocalStorage = () => {
  if (!localStorage.cartItems) localStorage.setItem('cartItems', '[]');
};

const infoLocalStorage = (id, title, price, getKeyLocalStorage) => {
  verifyLocalStorage();
  const getLocalStorage = JSON.parse(getKeyLocalStorage('cartItems'));
  const objectSaveLocalStorage = { 
    id,
    title,
    price, 
  };
  getLocalStorage.push(objectSaveLocalStorage);
  return saveCartItems(JSON.stringify(getLocalStorage));
};

// {id: "MLB2863633145", title: "Pc Gamer Completo I5 16gb Ssd Monitor + Kit Gamer ", price: 2567}

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
 const createCartItemElement = ({ id, title, price }) => {
  infoLocalStorage(id, title, price, getSavedCartItems);
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// Requisito 4 - responsável por incluir o elemento clicado no carrinho//
const getOlCartItems = document.querySelector('.cart__items');
const getCartId = ({ target }) => {
  const eventId = target.parentNode.childNodes[0].innerText;
  fetchItem(eventId).then((element) => {
    getOlCartItems.appendChild(createCartItemElement(element));
  });
};

const addLocalStorageCart = (getInfoLocalStorage) => {
  const getLocalStorage = JSON.parse(getInfoLocalStorage);
  getLocalStorage.forEach((element) => getOlCartItems.appendChild(createCartItemElement(element)));
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  
  const getButtonCart = document.querySelectorAll('.item__add');
  getButtonCart.forEach((element) => element.addEventListener('click', getCartId));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

// Requisito 11 - adiciona texto carregando... ate a requisição da API terminar //
const removeLoading = () => {
  const getDivLoading = document.querySelector('.loading');
  getDivLoading.remove();
};

// Requisito 2 - reponsável por renderizar os produtos da Api no HTML ////
const renderProductApi = async () => {
    const response = await fetchProducts('computador');
    const getSectionItens = document.querySelector('.items');
    response.forEach((element) => {
      getSectionItens.appendChild(createProductItemElement(element));
    });
    removeLoading();
};

// Requisito 10 - reponsável por limpar o crrinho de compras quando clicar no botão ///
const cartItemClearButtonOl = () => {
  const getOlCart = document.querySelector('.cart__items');
  getOlCart.innerText = '';
};

const clearButtonCart = () => {
  const getClearButtonCart = document.querySelector('.empty-cart');
  getClearButtonCart.addEventListener('click', cartItemClearButtonOl);
};

clearButtonCart();
window.onload = () => {
  renderProductApi();
  verifyLocalStorage();
  addLocalStorageCart(getSavedCartItems('cartItems'));
 };
