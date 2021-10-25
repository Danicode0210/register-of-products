


const getProducts = async (url) =>{

    let getProducts = document.getElementById('containerProducts')
    getProducts.innerHTML='';
    const res = await fetch(url)
    const data = await res.json();

    data.forEach( product => {
        
        const {description,category,price,image} = product;
        getProducts.innerHTML += `
        <div class="container ">
        <a href="#" class="enlace-detalle-mascota">
            <div class="card bg-dark text-white gradiente">                
                <img src="${image}" class="card-img" alt="...">
                <div class="card-img-overlay">
                        <h5 class="card-title body2Bold">${description}</h5>
                        <h5 class="card-title body2Bold">${category}</h5>
                        <p class="card-text body2Regular">${price}</p>
                </div>
            </div>
        </a>
    </div>
        `
        
    });


}

getProducts('http://localhost:4005/products')