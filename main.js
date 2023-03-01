const catalogue = document.querySelector('.catalogue');
const productSelect = document.querySelector('.product')

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
                arrAux =[...arrAux,i];
                const addTrolley = arrAux.map ((e)=>{
                    products[e].status = false;
                    return products[e];
                });

                console.log(addTrolley);
                console.log(addTrolley.length);
            }
            
    } catch (err) {
        console.log(err)
    }
}
api()