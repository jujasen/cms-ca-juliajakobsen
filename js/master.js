const baseUrl = "http://flowerpower.julz.no/wp-json/wc/store/products";

fetch(baseUrl)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        displayProducts(json);
    })
    .catch((error) => {
        /*window.location.replace('./error.html');*/
        console.log(error);
    });

let html = "";

function displayProducts(json) {
    console.dir(json);

    const results = json;

    results.forEach(function(result) {
        
        html += `<div class="card">
            <img class="image" src="${result.images[0].src}" alt="${result.images[0].name}">
            <div class="details">
                <h4 class="name">${result.name}</h4>
                <p>${result.prices.price_prefix} ${result.prices.price}</p>                                       
                <a class="details-button" href="details.html?id=${result.id}">View product</a>
            </div>
        </div>`

    });
    
    const output = document.querySelector(".results");

    output.innerHTML = html;

}

