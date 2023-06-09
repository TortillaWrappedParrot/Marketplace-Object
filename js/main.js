var MarketItem = (function () {
    function MarketItem() {
    }
    return MarketItem;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = createMarketItem;
};
function validateData() {
    var name = document.getElementById("name");
    var desc = document.getElementById("desc");
    var price = document.getElementById("price");
    var seller = document.getElementById("seller");
    if (name.value[0] != " " && desc.value[0] != " " && seller.value[0] != " " && isNaN(Number(price.value)) == false && Number(price.value) >= 0) {
        if (name && name.value && desc && desc.value && seller && seller.value) {
            return true;
        }
    }
    if (isNaN(Number(price.value)) != false || Number(price.value) < 0) {
        displayError("Price input can not be converted to number or is below zero", 2000);
    }
    else {
        displayError("String inputs can not contain whitespace before the first character or be blank", 2000);
    }
    return false;
}
function displayItem(item) {
    var alignDiv = document.getElementById("align");
    var cosmeticDiv = document.createElement("div");
    cosmeticDiv.style.textAlign = "center";
    cosmeticDiv.style.width = "50%";
    cosmeticDiv.style.border = "5px Dotted Black";
    var itemTitle = document.createElement("h1");
    itemTitle.innerText = item.Name;
    itemTitle.style.margin = "0px";
    var desc = document.createElement("p");
    desc.innerText = item.Description;
    desc.style.margin = "0px";
    var price = document.createElement("p");
    price.innerText = String(item.Price);
    price.style.margin = "0px";
    var seller = document.createElement("h2");
    seller.innerText = item.Seller;
    seller.style.margin = "0px";
    alignDiv.appendChild(cosmeticDiv);
    cosmeticDiv.appendChild(itemTitle);
    cosmeticDiv.appendChild(desc);
    cosmeticDiv.appendChild(price);
    cosmeticDiv.appendChild(seller);
}
function displayError(desc, time) {
    var error = document.getElementById("Error");
    while (error.textContent != "") { }
    error.textContent = desc;
    setTimeout(function () {
        error.textContent = "";
    }, time);
}
function createMarketItem() {
    if (validateData()) {
        var name_1 = document.getElementById("name");
        var desc = document.getElementById("desc");
        var price = document.getElementById("price");
        var seller = document.getElementById("seller");
        var newItem = new MarketItem();
        newItem.Name = name_1.value;
        newItem.Description = desc.value;
        newItem.Price = Number(price.value);
        newItem.Seller = seller.value;
        displayItem(newItem);
    }
}
