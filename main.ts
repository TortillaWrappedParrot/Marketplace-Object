class MarketItem{
    Name: string;
    Description: string;
    Price: number;
    Seller: string;
}

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]")
    addBtn.onclick = createMarketItem;
}

function validateData():boolean{
    let name = <HTMLInputElement>document.getElementById("name");
    let desc = <HTMLInputElement>document.getElementById("desc");
    let price = <HTMLInputElement>document.getElementById("price");
    let seller = <HTMLInputElement>document.getElementById("seller");
    return false;
}

function displayItem(item:MarketItem):void{

}

function createMarketItem():MarketItem{

    return MarketItem;
}