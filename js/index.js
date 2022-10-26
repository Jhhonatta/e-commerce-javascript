const body = document.querySelector("body");

const main = document.createElement("main");

const ul_Products = document.createElement("ul");

body.appendChild(main);

const generateList = (dice) => {
  dice.map((elem) => {
    const li = document.createElement("li");
    li.classList.add(elem.id);
    li.id = elem.id;

    const img = document.createElement("img");
    img.classList.add("imgProduct");
    img.src = elem.img;
    li.appendChild(img);

    const name = document.createElement("p");
    name.innerText = elem.name;

    const price = document.createElement("p");
    price.innerText = `Valor: R$ ${elem.value},00`;

    const category = document.createElement("p");
    category.innerText = `Categoria: ${elem.category}`;

    const button = document.createElement("button");
    button.innerText = elem.addCart;

    li.append(name, price, category, button);
    ul_Products.appendChild(li);
  });
};

generateList(data);

const cartDiv = document.createElement("div");
cartDiv.classList.add("cartFull");

let sum = 0;

const createCart = () => {
  const div_titleCart = document.createElement("div");
  div_titleCart.classList.add("titleCart");

  const titleCart = document.createElement("p");

  titleCart.innerText = "Carrinho de compras";
  div_titleCart.appendChild(titleCart);

  const div_spaceProducts = document.createElement("div");
  div_spaceProducts.classList.add("spaceProducts");

  const div_totalPrice = document.createElement("div");
  div_totalPrice.classList.add("totalPrice");

  const priceTotal = document.createElement("p");
  priceTotal.textContent = `Valor total: ${sum}`;

  priceTotal.classList.add("priceTotal");

  div_totalPrice.appendChild(priceTotal);

  cartDiv.append(div_titleCart, div_spaceProducts, div_totalPrice);
};

createCart();

ul_Products.addEventListener("click", function (e) {
  if (e.target.innerText == "Adicionar ao carrinho") {
    addToCart(e.path[1].id, data);
    addPrice();
  }
});

main.append(ul_Products, cartDiv);

let arrayCart = [];

const addToCart = (id, data) => {
  data.forEach((elem) => {
    if (elem.id == id) {
      arrayCart.push(elem);
    }
  });
};

const addPrice = () => {
  sum = arrayCart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.value,
    0
  );
  let newPrice = document.querySelector(".priceTotal");
  newPrice.innerHTML = `Valor total: ${sum}`;
};
