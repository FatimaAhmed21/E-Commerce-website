var mainImg = document.getElementById("mainImg")
var smallImg = document.getElementsByClassName("small-img")

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function() {
        mainImg.src = smallImg[i].src
    }
}


function deleteItem(element) {
    if (confirm("Are You Sure?")) {
        //to get the activerow
        var item = element.parentNode.parentNode;
        var table = document.querySelector("table");
        table.deleteRow(item.rowIndex);
    }
}