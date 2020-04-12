
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;


if (params.has("id")) {
   id = params.get("id");
} else {
   document.location.href = "/";
}

console.log(id)

const baseUrl = "http://flowerpower.julz.no/wp-json/wc/store/products";
const detailsUrl = `${baseUrl}/${id}`;


fetch(detailsUrl)
   .then((response) => {
       return response.json();
   })
   .then((json) => {
       viewProduct(json);
   })
   .catch((error) => {
       console.log(error);
   });

function viewProduct(details) {
   console.dir(details);
   const image = document.querySelector(".details-image");
   image.src = details.images[0].src;
   image.alt = details.name;

   const heading = document.getElementById("name");
   heading.innerText = details.name;

   const price = document.getElementById("price");
   price.innerText = details.prices.price_prefix + " " + details.prices.price;

   const description = document.getElementById("description");
   description.innerHTML = details.description;

   document.title = details.name + " | " + document.title;
}