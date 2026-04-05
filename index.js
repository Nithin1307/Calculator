function app(value) {
    let screen = $("#display").val();
    $("#display").val(screen + value);
}

function clearDisplay() {
    $("#display").val("");
}

function calc() {
    try {
        let ans=eval($("#display").val());
        $("#display").val(ans);
    }
    catch{
        $("#display").val("Error");
    }
}

function backspace() {
    let screen = $("#display").val();
    $("#display").val(screen.slice(0, -1));
}