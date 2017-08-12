$(document).ready(function () {
    var input = $("#input");
    var output = $("#output");
    var updateOutput = function () {
        output.html(marked(input.val()))
    };

    $("body").on("keyup", updateOutput);
});
