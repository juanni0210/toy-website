const productContainer = document.querySelector(".productsection");
const searcharea = document.getElementById("searcharea");





// load all products before users do any searching
function preloader() {
    displayProducts(productsArr);
};
window.addEventListener("load", preloader);




// search products
searcharea.addEventListener("keyup", handleSearch);

function handleSearch(e) {
    let userInput = e.target.value;
    let filteredProducts = searchProduct(userInput, productsArr);
    displayProducts(filteredProducts);
}

function searchProduct(text, data) {
    let filteredData = [];
    for (let i = 0; i < data.length; i++) {
        text = text.toLowerCase();
        let title = data[i].title.toLowerCase();
        let price = data[i].price.toLowerCase();
        if (title.includes(text) || price.includes(text)) {
            filteredData.push(data[i]);
        }
    }
    return filteredData;
}


function displayProducts(data) {
    productContainer.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let productCard = `<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 imgbox">
                                <div class="card">
                                    <img src="${data[i].imgUrl}" class="card-img-top" alt="${data[i].imgAlt}">
                                    <div class="card-body">
                                        <h5 class="card-text">${data[i].title}</h5>
                                        <p>$${data[i].price}</p>
                                    </div>
                                </div>
                            </div>`;
        productContainer.innerHTML += productCard;
    }
}