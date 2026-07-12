let result = document.querySelector(".result");
let show = "";

fetch("https://dummyjson.com/carts")
.then(res => res.json())
.then(data => {

    data.carts.forEach(cart => {

        let product = cart.products[0];

        show += `
        <div class="col-12 col-sm-6 col-lg-3 mb-4">
            <div class="card h-100">
                <img src="${product.thumbnail}" class="card-img-top">
                <div class="card-body">
                    <h5>Brand: ${product.title}</h5>
                    <p>Price: ${product.price}</p>
                    
                    
                    <button class="btn btn-success px-4 m-4">Buy</button><button class="btn btn-warning px-4">Cart</button>
                </div>
            </div>
        </div>
        `;

    });

    result.innerHTML = show;

});