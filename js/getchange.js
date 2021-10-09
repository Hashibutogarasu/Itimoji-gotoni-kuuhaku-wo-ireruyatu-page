function OnInputExec() {
    var value1 = document.getElementById("input1");
    var value2 = document.getElementById("input2");
    var result = Number(value1.value) + Number(value2.value);
    var output1 = document.getElementById("output1");
    output1.value = result;
}