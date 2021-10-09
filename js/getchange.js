$(function () {
    var $input = $('#input');
    var $output = $('#output');
    $input.on('input', function (event) {
        var value = $input.val();
        $output.text(value);
    });


    var $output2 = $('#output2');
    $input.on('change', function (event) {
        $output2.text($input.val());
    });
});