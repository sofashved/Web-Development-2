function sort(){
    let price=document.getElementById("price")
    let title=document.getElementById("title")
    if(price.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponse()}

    if(title.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponse1()}
}

function search(){
    if(price.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponse()}

    if(title.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponse1()}
}


async function getResponse() {
    let response = await fetch("data.json")
    let content = await response.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 12)
    console.log(content)

  let key
    /*for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }*/
    content_price=content.sort((a, b) => a.price - b.price);

    /*
     products: []
     filteredProducts: []
     const query = this.searchQuery.toLowerCase();
            this.filteredProducts = this.products.filter(product => {
                return (
                    product.title.toLowerCase().includes(query) ||
                    product.description.toLowerCase().includes(query) ||
                    product.price.toString().includes(query)
                );
            });
    */
   content_filter=[]
    let word=document.getElementById('search').value.toLowerCase();
   //let word = 'search'.toLowerCase();
    content_filter= content_price.filter((product) =>{
        return (
                    product.title.toLowerCase().includes(word) ||
                    product.description.toLowerCase().includes(word) ||
                    product.price.toString().includes(word)
                );

    });
    console.log(content_filter);

    let node_for_insert = document.getElementById("node_for_insert")
    //node_for_insert.innerHTML='';
    for (key in content_filter) {
                node_for_insert.innerHTML += `
                <li style="width: 310px" class="d-flex flex-column m-1 p-1 border bg-body">
                <img style="width: 180px" class="align-self-center" src=${content_filter[key].img}>
                <h5 class="card-title">${content_filter[key].title}</h5>
                <p class="card-text">${content_filter[key].description}. Цена ${content_filter[key].price} р.</p>
                <input type="hidden" name= "vendor_code" value=${content_filter[key].vendor_code}>
                <p class="card-text" >Заказать<input class="w-25" type="number" name="amount" value="0" min="0"></p>
                </li>
                        `
            }

}
async function getResponse1() {
   // let response = await fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    //let response = await fetch("https://vmarshirov.github.io/g06u28/030_js/data/0620.json")
    //let response = await fetch("http://185.182.111.214:7628/tmp/g06u28.txt_api.json")
//    let response = await fetch("shop.json")
    let response = await fetch("data.json")

    let content = await response.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 11)
    //content.sort()
    console.log(content)
    let key
    /*for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }*/

    // sort by name
    content_title=content.sort((a, b) => {
        const nameA = a.title.toUpperCase(); // ignore upper and lowercase
        const nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
      }
      return 0;
    });


    content_filter=[]
    let word=document.getElementById('search').value.toLowerCase();
   //let word = 'search'.toLowerCase();
    content_filter= content_title.filter((product) =>{
        return (
                    product.title.toLowerCase().includes(word) ||
                    product.description.toLowerCase().includes(word) ||
                    product.price.toString().includes(word)
                );

    });
    console.log(content_filter);

    //node_for_insert.innerHTML='';
    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content_filter) {
                node_for_insert.innerHTML += `
                <li style="width: 310px" class="d-flex flex-column m-1 p-1 border bg-body">
                <img style="width: 180px" class="align-self-center" src=${content_filter[key].img}>
                <h5 class="card-title">${content_filter[key].title}</h5>
                <p class="card-text">${content_filter[key].description}. Цена ${content_filter[key].price} р.</p>
                <input type="hidden" name= "vendor_code" value=${content_filter[key].vendor_code}>
                <p class="card-text" >Заказать <input class="w-25" type="checkbox" name="check" value="0" onClick='this.value = this.checked ? 1 : 0'></p>
                </li>
                        `
            }

}

sort()
