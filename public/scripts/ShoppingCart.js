function addToBasket() {
    let product = document.getElementById("prodHeader").innerHTML;
    let price = document.getElementById("price").innerHTML;
    let storage = getItems();
    storage.push({"name":product,"price":price});
    storeItem(storage);
}

function deleteFromBasket(item) {
    let storage = getItems();
    const found = storage.findIndex(el => el["name"] == item);
    storage.splice(found,1);
    storeItem(storage);
    const element = document.getElementById("secret");
    element.parentNode.removeChild(element);
    buildBasket();
}

function storeItem(array) {
    sessionStorage.setItem('basket', JSON.stringify(array))
}

function getItems() {
    let storage = JSON.parse(sessionStorage.getItem('basket'))
    if (storage == null) {
        return [];
    }
    else {
        return storage;
    }
}

function buildReceipt(){
    let storage = getItems();
    //create a Table Object
    let table = document.createElement('table');
//iterate over every array(row) within tableArr
    for (let row of storage) {
//Insert a new row element into the table element
        let trow = table.insertRow();
        let cell = trow.insertCell();
        cell.textContent = row["name"]+" "+row["price"];
    }
    let total = document.createElement("h6");
    total.classList.add("mb-0");
    total.textContent = "Total: " + getTotal() + " CB";
    table.appendChild(total);
//append the compiled table to the DOM
    document.getElementById("receipt").appendChild(table);
    sessionStorage.setItem('basket', JSON.stringify([]));
}

function buildBasket() {
    let storage = getItems();

    let container = document.createElement('div');
    container.id = "secret";
    container.classList.add(...["container", "p-3", "rounded", "cart"]);

    let title = document.createElement("h6");
    title.classList.add("mb-0");
    title.textContent = "Shopping cart";

    container.appendChild(title);

    let contents =  document.createElement('div');
    contents.classList.add(...["d-flex", "justify-content-between"]);
    container.appendChild(contents);

    let count = document.createElement('span');
    count.textContent = "You have " + (storage.length) + " items in your cart";
    contents.appendChild(count);

    if (storage.length  > 0) {
        for (let item of storage) {
            let productcard = document.createElement('div');
            productcard.classList.add(...["d-flex", "justify-content-between", "align-items-center", "mt-3", "p-2", "items", "rounded"]);
            let productContainer = document.createElement('div');
            productContainer.classList.add(...["d-flex", "flex-row"]);

            let image = document.createElement('img');
            image.classList.add("rounded");
            image.src = "https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg?w=2000";
            productContainer.appendChild(image);
            productcard.appendChild(productContainer);

            let textContainer = document.createElement('div');
            textContainer.classList.add("ml-2");

            let product = document.createElement('span');
            product.classList.add(...["font-weight-bold", "d-block"]);
            product.textContent = item["name"];
            textContainer.appendChild(product);

            let size = document.createElement('span');
            size.classList.add("spec");
            size.textContent = "Small/Large";
            textContainer.appendChild(size);
            productContainer.appendChild(textContainer);

            let rightSide = document.createElement('div');
            rightSide.classList.add(...["d-flex", "flex-row", "align-items-center"]);
            let price = document.createElement('span');
            price.classList.add(...["d-block", "ml-5", "font-weight-bold"]);
            price.textContent = item["price"];
            rightSide.appendChild(price);

            let deleteButton = document.createElement('button');
            deleteButton.classList.add("deleteButton");
            deleteButton.onclick = function () {
                deleteFromBasket(item["name"]);
            }

            let trashCan = document.createElement('img');
            trashCan.classList.add("trash");
            trashCan.src = "https://icons-for-free.com/download-icon-delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588_512.png";
            deleteButton.appendChild(trashCan);
            rightSide.appendChild(deleteButton);
            productcard.appendChild(rightSide);


            container.appendChild(productcard);
        }
    }
    let total = document.createElement("h6");
    total.classList.add("mb-0");
    total.textContent = "Total: " + getTotal() + " CB";
    container.appendChild(total);

    document.getElementById("basket").appendChild(container);
}

function getTotal(){
    let storage = getItems();
    let sum = 0;

    for (let item of storage) {
        sum = sum + parseInt((item["price"].replace(" CB", "")));
    }
    return sum;
}


function start(){
    if (sessionStorage.getItem('wallet') == null){
        sessionStorage.setItem('wallet', 0);

    }
    document.getElementById('wallet').innerHTML = sessionStorage.getItem('wallet');

}

function addMoney(data) {
    sessionStorage.setItem('wallet', parseInt(sessionStorage.getItem('wallet')) + 100);
    document.getElementById('wallet').innerHTML = sessionStorage.getItem('wallet');
}


function loseMoney(){

    if(getTotal() <= 0){
        alert("order something dumb dumb");
        document.getElementById("passage").setAttribute("href","#");

    }

    else if (sessionStorage.getItem('wallet') - getTotal() < 0 || sessionStorage.getItem('wallet') == null){
        alert("You are poor, add money in profile");
        document.getElementById("passage").setAttribute("href","#");

    }
    else {
        sessionStorage.setItem('wallet',sessionStorage.getItem('wallet')-getTotal());
        document.getElementById("passage").setAttribute("href","Receipt.html");
    }
        }