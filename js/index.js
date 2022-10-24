const body = document.querySelector("body");

const main = document.createElement("main");

const ul_Products = document.createElement("ul");

body.appendChild(main);
main.appendChild(ul_Products);

const generateList = (dice) => {
  dice.map((elem) => {
    const li = document.createElement("li");
    li.classList.add(elem.id);

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
