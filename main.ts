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
    if (name.value[0] != " " && desc.value[0] != " "  && seller.value[0] != " " && isNaN(Number(price.value)) == false){
        if (name && name.value && desc && desc.value && seller && seller.value){
            return true;
        }
    }
    if (isNaN(Number(price.value)) != false){
        displayError("Price input can not be converted to number", 2000);
    } else {
        displayError("String inputs can not contain whitespace before the first character or be blank", 2000);
    }
    return false;
}

function displayItem(item:MarketItem):void{

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
        let newItem = new MarketItem();
    }
}