// Get search value from search bar

// function getSearch() {
//     let value = document.getElementById('input').value;

//     var data = window.open("http://www." + value + ".com", "", "width=200,height=100").
//         alert(value)
//     console.log(data);
// }

function setAttr() {
    var value = document.getElementById('input').value;
    if (value.length >= 1) {
        if (value.includes(".com", ".in", ".gmail", ".org")) {
            // For iframe and embrd tag
            document.getElementById('loader').setAttribute("src", "https://" + value)
        }
        else {
            document.getElementById('loader').setAttribute("src", "https://www.google.com/search?q=" + value)
        }
        // For object tag
        // document.getElementById('loader').setAttribute("data", "https://www.google.com/search?q=" + value)
    }
}