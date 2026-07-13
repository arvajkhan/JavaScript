let result = document.querySelector(".result");
let show = "";           
let allProducts = [];  
fetch("https://dummyjson.com/carts")
    .then(res => res.json())
    .then(data => {
        data.carts.forEach(cart => {
            let product = cart.products[0];
            // Product store karo
            allProducts.push(product);
            show += `
                <div class="col-12 col-sm-6 col-lg-3 mb-4">
                    <div class="card h-100">
                        <img src="${product.thumbnail}" class="card-img-top">
                        <div class="card-body">
                            <h5>Brand: ${product.title}</h5>
                            <p>Price: ${product.price}</p>
                            <button class="btn btn-success px-4 m-4">
                                Buy
                            </button>
                            <button class="btn btn-warning px-4">
                                Cart
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        result.innerHTML = show;
    });


function btn() {

    let searchValue = document.querySelector("#search").value.toLowerCase();
    let   filteredData = allProducts.filter((product)=>{
        return product.title.toLowerCase() === searchValue ||
             product.price == searchValue;
    })
   
    let output = "";
    filteredData.forEach(product => {
        output += `
            <div class="col-12 col-sm-6 col-lg-3 mb-4">
                <div class="card h-100">
                    <img src="${product.thumbnail}" class="card-img-top">
                    <div class="card-body">
                        <h5>Brand: ${product.title}</h5>
                        <p>Price: ${product.price}</p>
                    </div>
                </div>
            </div>
        `;
    });


    result.innerHTML = output;
}