const catalogue = document.querySelector('.catalogue');
const productSelect = document.querySelector('.product');
const navOption = document.querySelector('.nav-option');
const pay = document.querySelector('.pay');
let opc = document.querySelector('.ec-trolley');
let nav = document.querySelector('.nav-option');
let arrAux = [];
let products = [];
let ingresados = [];

const api = async() =>{
    try {
            const url = await fetch('https://api.escuelajs.co/api/v1/products')
            products = await(url.json())
            products.map((pro,i) =>{
                let divProduct = document.createElement('div')
                divProduct.classList.add('container-product');
                let dataProduct = document.createElement('div')
                dataProduct.classList.add('data-product');
                let imgProduct = document.createElement('img')
                imgProduct.classList.add('img-product');
                let buttonTrolley = document.createElement('button')
                buttonTrolley.classList.add('btn-trolley');
                let divSelect = document.createElement('div') 
                divSelect.classList.add('div-select')
                let imgSelect = document.createElement('img') 
                imgSelect.classList.add('img-productSelect')
                let btnTrolleySelect = document.createElement('button')
                btnTrolleySelect.classList.add('btn-trolleyS')

                pro['status'] = true;
                pro['delete'] = false;
                pro['totalProduct'] = pro.price;
                pro['pay'] = [pro.totalProduct];
                pro['productAdd'] = 1;
                imgProduct.setAttribute('src',pro.images)
                divProduct.appendChild(imgProduct);
                divProduct.appendChild(dataProduct);
                divProduct.appendChild(dataProduct);
                divProduct.appendChild(buttonTrolley);
                catalogue.appendChild(divProduct);

                dataProduct.innerHTML = (`<p><b>Precio:</b> ${pro.price}</p> <p><b>Categoria:</b> ${pro.category.name}</p> <p><b>Desacripcion:</b> ${pro.description}</p> <p> <b>Folio:</b> ${pro.id}</p>`)
                
                buttonTrolley.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-17l-3.431 14h-2.102l2.541-11h-16.812l4.615 13h13.239l3.474-14h2.178l.494-2h-4.196z"/></svg>`

                divProduct.addEventListener('click', () =>{
                productSelect.appendChild(imgSelect) 
                productSelect.appendChild(divSelect)
                imgSelect.setAttribute('src',products[i].images)
                divSelect.innerHTML = (`<p><b>Precio:</b> ${products[i].price}</p> <p><b>Categoria:</b> ${products[i].category.name}</p> <p><b>Desacripcion:</b> ${products[i].description}</p> <p> <b>Folio:</b> ${products[i].id}</p>`)
                    
                    btnTrolleySelect.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-17l-3.431 14h-2.102l2.541-11h-16.812l4.615 13h13.239l3.474-14h2.178l.494-2h-4.196z"/></svg>`
                    productSelect.appendChild(btnTrolleySelect);
                });

                main(products,btnTrolleySelect,buttonTrolley,i)
            });

            opc.addEventListener('click', () =>{
                if (Object.entries(nav.style.display).length==0)
                    nav.style.display = "none";

                nav.style.display == "none" ? nav.style.display = "block"
                    : nav.style.display = "none"
            });

    } catch (err) {
        console.log(err)
    }
}
let copiaIngresados = []
const main = (products,btnTrolleySelect,buttonTrolley,i) =>{
    const options = document.createElement('div'); 
    options.classList.add('options');
    const totalElement = document.createElement('p'); 
    totalElement.classList.add('total-element');
    const totalPay = document.createElement('div'); 
    totalPay.classList.add('total-pay');
    const action = document.createElement('div'); 
    action.classList.add('btn-action');
    const btnLess = document.createElement('button'); 
    btnLess.classList.add('btn-less');
    const btnAdd = document.createElement('button'); 
    btnAdd.classList.add('btn-add');
    const contOptions = document.createElement('div'); 
    contOptions.classList.add('contOption');
    const imgOption = document.createElement('img');
    imgOption.classList.add('img-option')
    const btnDelete = document.createElement('button')
    btnDelete.classList.add('btn-delete')
    divTotal = document.createElement('div');
    divTotal.classList.add('total')

    buttonTrolley.addEventListener('click', () =>{
        ingresados = [...ingresados,products[i]]
        productos(ingresados);
        btnDelete.addEventListener('click',() =>{
            eliminar(ingresados, i)
        });
    });

    btnTrolleySelect.addEventListener('click', () =>{
        ingresados = [...ingresados,products[i]]
        productos(ingresados);
    });
    
    const productos = (ingresados) =>{
        const sumaProduct = (copiaIngresados) =>{
          let suma = 0
          let result = copiaIngresados.map(e =>{
                return suma += e.totalProduct
            });
          result.reverse()
          result = result[0]
          pay.innerHTML = " ";
          pay.innerHTML = `<span><b>TOTAL: $ ${result}</b></span>`;
        }

        copiaIngresados = [...ingresados]
        sumaProduct(ingresados)
        ingresados.map((tro) =>{
            imgOption.setAttribute('src',tro.images);
            btnDelete.innerHTML = `<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z" fill-rule="nonzero"/> </svg>`
            btnAdd.innerHTML = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"/></svg>`
            btnLess.innerHTML = `<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm4.253 7.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z" fill-rule="nonzero"/></svg>`
            options.innerHTML = (`<p><b>Precio $</b> ${tro.price}</p> <p><b>Desacripcion:</b> ${tro.description}</p>`);
            contOptions.appendChild(imgOption);
            contOptions.appendChild(options);
            contOptions.appendChild(btnDelete);
            options.appendChild(totalElement);
            options.appendChild(action)
            action.appendChild(btnAdd)
            action.appendChild(btnLess)
            navOption.appendChild(contOptions);
            navOption.appendChild(totalPay);
        }); 

        btnAdd.addEventListener('click',()=>{
            const price = ingresados[i].price;
            ingresados[i].productAdd++;
            ingresados[i].totalProduct = ingresados[i].productAdd * price;
            totalElement.innerHTML = `<p><b>$ ${ingresados[i].totalProduct}</b> - ${ingresados[i].productAdd} U`;
            sumaProduct(copiaIngresados);
        });

        btnLess.addEventListener('click',()=>{
            const price = ingresados[i].price;
            ingresados[i].productAdd--;
            ingresados[i].totalProduct = ingresados[i].productAdd * price;
            totalElement.innerHTML = `<p><b>$ ${ingresados[i].totalProduct}</b> - ${ingresados[i].productAdd} U`;
            if(ingresados[i].productAdd == 0)
                eliminar(copiaIngresados,i);        
            else
                sumaProduct(copiaIngresados);
        });
    }

    const eliminar = (ingresados,i) =>{
        ingresados.splice(i,1)
        productos(ingresados,i);
        contOptions.innerHTML=" "
    }
}
api()
main()


