let myH1Tag = document.getElementById("test");
myH1Tag.style.color = "red";
let val = null;

let myPTag = document.getElementById("demo");

function hejFunction() {
    myPTag.innerHTML = "hej";
}

hejFunction();

function multArr(array_in_question) {
    let new_array = []
    for (const iterator of array_in_question) {
        new_array.push(iterator * 5);
    }

    return new_array;
}

console.log(multArr([4, 7, 5, 7, 0, 3, 7]));

function multTwo(num1, num2) {
    return num1 * num2;
}

console.log(multTwo(5, 7));


function button_custom() {
    val = document.getElementById("main-text-input").value;
    console.log(val);
}

function load() {
    if(val !=null){
        console.log(val);
    }
}