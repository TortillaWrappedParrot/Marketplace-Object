class MarketItem{
    Name: string;
    Description: string;
    Price: number;
    Seller: string;
}

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = createMarketItem;
}

function validateData():boolean{
    let name = <HTMLInputElement>document.getElementById("name");
    let desc = <HTMLInputElement>document.getElementById("desc");
    let price = <HTMLInputElement>document.getElementById("price");
    let seller = <HTMLInputElement>document.getElementById("seller");
    if (name.value[0] != " " && desc.value[0] != " "  && seller.value[0] != " " && isNaN(Number(price.value)) == false && Number(price.value) >= 0){
        if (name && name.value && desc && desc.value && seller && seller.value){
            return true;
        }
    }
    if (isNaN(Number(price.value)) != false || Number(price.value) < 0){
        displayError("Price input can not be converted to number or is below zero", 2000);
    } else {
        displayError("String inputs can not contain whitespace before the first character or be blank", 2000);
    }
    return false;
}

function displayItem(item:MarketItem):void{
    //get div
    let alignDiv = document.getElementById("align");
    //create new div for border
    let cosmeticDiv = document.createElement("div");
    cosmeticDiv.style.textAlign = "center";
    cosmeticDiv.style.width = "50%";
    cosmeticDiv.style.border = "5px Dotted Black"
    //create title
    let itemTitle = document.createElement("h1");
    itemTitle.innerText = item.Name
    itemTitle.style.margin = "0px";
    //create desc
    let desc = document.createElement("p");
    desc.innerText = item.Description
    desc.style.margin = "0px";
    //create price
    let price = document.createElement("p");
    price.innerText = String(item.Price);
    price.style.margin = "0px";
    //create seller
    let seller = document.createElement("h2");
    seller.innerText = item.Seller
    seller.style.margin = "0px";
    //Append to div
    alignDiv.appendChild(cosmeticDiv)
    cosmeticDiv.appendChild(itemTitle)
    cosmeticDiv.appendChild(desc)
    cosmeticDiv.appendChild(price)
    cosmeticDiv.appendChild(seller)
}

function displayError(desc: string, time:number):void{
    let error = <HTMLElement>document.getElementById("Error");
    while (error.textContent != ""){}
    error.textContent = desc;
    setTimeout(() => {
        error.textContent = "";
    }, time);
}

function createMarketItem():void{
    if (validateData()){
        let name = <HTMLInputElement>document.getElementById("name");
        let desc = <HTMLInputElement>document.getElementById("desc");
        let price = <HTMLInputElement>document.getElementById("price");
        let seller = <HTMLInputElement>document.getElementById("seller");
        let newItem = new MarketItem();
        newItem.Name = name.value;
        newItem.Description = desc.value;
        newItem.Price = Number(price.value);
        newItem.Seller = seller.value;
        displayItem(newItem);
    }
}