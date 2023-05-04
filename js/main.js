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
    if (name.value[0] != " " && desc.value[0] != " " && seller.value[0] != " " && isNaN(Number(price.value)) == false) {
        if (name && name.value && desc && desc.value && seller && seller.value) {
            return true;
        }
    }
    if (isNaN(Number(price.value)) != false) {
        displayError("Price input can not be converted to number", 2000);
    }
    else {
        displayError("String inputs can not contain whitespace before the first character or be blank", 2000);
    }
    return false;
}
function displayItem(item) {
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
        var newItem = new MarketItem();
    }
}
