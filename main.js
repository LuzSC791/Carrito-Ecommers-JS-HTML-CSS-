const catalogue = document.querySelector('.catalogue');
const productSelect = document.querySelector('.product');
const navOption = document.querySelector('.nav-option')
// const body = document.querySelector('.nav-options')
const api = async() =>{
    try {
            const url = await fetch('https://api.escuelajs.co/api/v1/products')
            const products = await(url.json())
            let aux;
            products.map( (pro,i) =>{
                // debugger
                let divProduct = document.createElement('div')
                let dataProduct = document.createElement('div')
                let divSelect = document.createElement('div') //datos izq
                let imgSelect = document.createElement('img') //img izq
                let btnTrolleySelect = document.createElement('button')
                let imgProduct = document.createElement('img')
                let buttonTrolley = document.createElement('button')
                // pProduct.appendChild(document.createTextNode(`Precio: ${pro.price}, Categoria: ${pro.category.name}`))
                pro['status'] = true;
                // console.log(pro);
                dataProduct.innerHTML = (`<p><b>Precio:</b> ${pro.price}</p> <p><b>Categoria:</b> ${pro.category.name}</p> <p><b>Desacripcion:</b> ${pro.description}</p> <p> <b>Folio:</b> ${pro.id}</p>`)
                imgProduct.setAttribute('src',pro.images)
                divProduct.appendChild(imgProduct)
                divProduct.appendChild(dataProduct)
                imgProduct.classList.add('img-product')
                // imgProduct.setAttribute('class',pro.images)
                dataProduct.classList.add('data-product')
                divProduct.classList.add('container-product')
                divProduct.appendChild(dataProduct)
                buttonTrolley.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-17l-3.431 14h-2.102l2.541-11h-16.812l4.615 13h13.239l3.474-14h2.178l.494-2h-4.196z"/></svg>`
                // div.classList.add('data-product')
                // catalogue.appendChild(div)
                buttonTrolley.classList.add('btn-trolley')
                divProduct.appendChild(buttonTrolley)
                catalogue.appendChild(divProduct)
                // buttonTrolley.setAttribute("disable","true")
                // buttonTrolley.disabled=true

                //Lado izq
                divProduct.addEventListener('click', () =>{
                    productSelect.innerHTML = "";
                    imgSelect.setAttribute('src',products[i].images)
                    divSelect.innerHTML = (`<p><b>Precio:</b> ${products[i].price}</p> <p><b>Categoria:</b> ${products[i].category.name}</p> <p><b>Desacripcion:</b> ${products[i].description}</p> <p> <b>Folio:</b> ${products[i].id}</p>`)
                    productSelect.appendChild(imgSelect) //Pocision en la que se acomodan
                    productSelect.appendChild(divSelect)
                    imgSelect.classList.add('img-productSelect')
                    divSelect.classList.add('div-select')
                    btnTrolleySelect.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-17l-3.431 14h-2.102l2.541-11h-16.812l4.615 13h13.239l3.474-14h2.178l.494-2h-4.196z"/></svg>`
                    btnTrolleySelect.classList.add('btn-trolleyS')
                    productSelect.appendChild(btnTrolleySelect);
                    // productSelect.appendChild(document.createTextNode(`Precio: ${pro[].price}, Categoria: ${pro[].category.name}`))
                });
                buttonTrolley.addEventListener('click', () =>{
                    pushArr(i,products)
                    products[i].status == true ? buttonTrolley.disabled = false : buttonTrolley.disabled = true;
                    products[i].status == true ? btnTrolleySelect.disabled = false : btnTrolleySelect.disabled = true;
                });
                btnTrolleySelect.addEventListener('click', () =>{
                    pushArr(i,products)
                    products[i].status == true ? buttonTrolley.disabled = false : buttonTrolley.disabled = true;
                    products[i].status == true ? btnTrolleySelect.disabled = false : btnTrolleySelect.disabled = true;
                });
            });
            
            let arrAux = [];
            let addTR
            const pushArr = (i,products) =>{
                const options = document.createElement('div'); //desplega añadidos al carrito
                options.classList.add('options');
                const contOptions = document.createElement('div'); //desplega añadidos al carrito
                contOptions.classList.add('contOption');
                const imgOption = document.createElement('img');
                imgOption.classList.add('img-option')
                const btnDelete = document.createElement('button')
                btnDelete.classList.add('btn-delete')
                divTotal = document.createElement('div');
                divTotal.classList.add('total')

                arrAux =[...arrAux,i];
                const addTrolley = arrAux.map ((e)=>{
                    products[e].status = false;
                    return products[e];
                });
                console.log(addTrolley);
                console.log(addTrolley.length);
                let count = 0;
                addTrolley.map(tro =>{
                    imgOption.setAttribute('src',tro.images);
                    count += tro.price
                    options.innerHTML = (`<p><b>Precio:</b> ${tro.price}</p> <p><b>Categoria:</b> ${tro.category.name}</p> <p><b>Desacripcion:</b> ${tro.description}</p> <p> <b>Folio:</b> ${tro.id}</p> <hr/>
                    `);
                    btnDelete.innerHTML = `<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z" fill-rule="nonzero"/> </svg>`
                    console.log(count)
                    contOptions.appendChild(imgOption);
                    contOptions.appendChild(options);
                    contOptions.appendChild(btnDelete);
                    navOption.appendChild(contOptions);
                });
                divTotal.innerHTML = `<p><b>TOTAL:${count}</p></b>`;
                navOption.appendChild(divTotal);
            }
            
    } catch (err) {
        console.log(err)
    }
}
api()