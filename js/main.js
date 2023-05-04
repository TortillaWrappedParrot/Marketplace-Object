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
    return false;
}
function displayItem(item) {
}
function createMarketItem() {
    return MarketItem;
}
