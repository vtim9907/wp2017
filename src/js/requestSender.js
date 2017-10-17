$(document).ready(function() {
    $("#setting_btn").click(function() {
        $.ajax({
            method: "post",
            url: "/setting_account",
            data: {
                nick: jQuery('input[id=nick]').val(),
                account: jQuery('input[id=account]').val()
            },
            success: function(data) {
                alert(data);
                $("#setting_content").text(data);
            },
            error: function() {
                $("#setting_content").text("Error!! Something went worng!");
            }
        });
        $('#setting_content').text('loading...');
    });
});