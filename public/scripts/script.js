

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

// below is not used
const items = [];
let itemsAmount = 0;





function addItem(name, link, price){
     items[itemsAmount] = new Item(name,link,price);
     itemsAmount++;
     console.log(items[itemsAmount-1]);

}


class Item {
    constructor(name, link, price) {
        this.name = name;
        this.link = link;
        this.price = price;
    }

    getName(){
        return this.name;
    }
    getLink(){
        return this.link;
    }
    getPrice(){
        return this.price;
    }
}

/*
<script src="script.js"></script>
<script>
    const cappuccino = "cappuccino";
    const cappuccinoLink = "https://cdn.discordapp.com/attachments/950338352618549268/967412571231633438/unknown.png";
    const americano = "americano";
    onclick="addItem(cappuccino,cappuccinoLink,25);"
     onload="test()"
</script>*/