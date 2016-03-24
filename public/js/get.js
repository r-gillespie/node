$(function() {
   $('#submit').click(function(){
       var $input = $('#formtext').val();
       console.log($input);
        $.ajax({
            type: "GET",
            url: "https://us.api.battle.net/d3/profile/" + $input + "/",
            data: {
                locale: "en_US",
                apikey: apikey;
            },
            //jsonp: "callback",
            success: function(data){
                console.log(data);
                $('h1').html('BattleTag: ' + data.battleTag);
                $.each(data.heroes, function(i, val) {
                    $('#submit').after("<p>" + "<b>" + val.name + "</b>" + ": " + "Level " + val.level + " " + val.class + "</p>");
                });
            },
            error: function() {
                $('submit').after('an error occurred');
            }
        });
    });   
});