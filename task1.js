var output = "";

function buttonClick(value) {
    console.log("value", value);
    output += value;
    document.getElementById("output").value = output;
}

function result() {
    try {
        if (document.getElementById("output").value && document.getElementById("output").value != undefined) {
            document.getElementById("result").innerHTML = eval(document.getElementById("output").value);
        }
    } catch (e) {
        document.getElementById("result").innerHTML = "Error";
    }
}

function clearValue() {
    output = "";
    document.getElementById("output").value = '';
    document.getElementById("result").innerHTML = '00';
}