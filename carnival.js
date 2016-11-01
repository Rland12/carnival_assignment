$("form").on("submit", function(event) {
    event.preventDefault();
    console.log($("#age").val());
    console.log($("#min").val());
    $("#response").html();

    var age = parseInt($("#age").val());
    var min = parseInt($("#min-age").val());

    if (age >= min) {
        $("#response").html("You are old enough to ride!");
    }
    else if (age < min) {
        $("#response").html("You cannot ride!");
    }
});
