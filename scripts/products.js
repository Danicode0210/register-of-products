
let serverData = 'http://localhost:4000/products';


/* Obtener la data y pintarla */
const getProducts = async (url) => {
    let getProducts = document.getElementById('containerProducts')
    getProducts.innerHTML = '';
    const res = await fetch(url)
    const data = await res.json();

    data.forEach(product => {
        const { description, category, price, image } = product;
        getProducts.innerHTML += `
        <div class=" mt-3">
        <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="image-product">
            <div class="card-body">
                <h5 class="card-title">Categoría:${category}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text">$${price}</p>
                <a href="#" class="btn btn-primary">Añadir al carrito</a>
            </div>
            </div>
    </div>
        `

    });
}

getProducts(serverData)



/* Agregar nuevo producto */

let formulario = document.getElementById('form')
formulario.addEventListener('submit',  async (e)=>{
    /* Prevenir en evento */
    e.preventDefault();
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;
    let price = document.getElementById('price').value;
    let image = document.getElementById('image').value;

    await fetch(serverData ,{
        method:'POST',
        body:JSON.stringify({
            description,
            category,
            price,
            image
        }),

        headers:{
            "Content-type":"application/json; charset =UTF-8"
        } 
    })
})