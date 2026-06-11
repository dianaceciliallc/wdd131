const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productsTag = document.getElementById("product-name")

const troughProducts = function (products) {
    products.forEach((product) => {
        const opt_tag = document.createElement('option');
        opt_tag.value = product.id;
        opt_tag.textContent = product.name;
        productsTag.appendChild(opt_tag);
    });
};

troughProducts(products)