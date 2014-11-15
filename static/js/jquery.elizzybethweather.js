//  wow
(function($) {

    //  such plugin
    $.doge = function() {

        var tings = ["loves", "lovely", "amaze", "cute", "gorjus", "bad joke", "girl", "dreamy", "saxy", "gregarious", "helping sickies"];

        //  very jquery
        var doge = $('body').css('font-family', 'Comic Sans MS, Comic Sans, Chalkboard, Helvetica, Arial, sans-serif');

        var suchcolors = [ 
            "#0066FF", "#FF3399", "#33CC33", "#FFFF99", "#FFFF75", "#8533FF", 
            "#33D6FF", "#FF5CFF", "#19D1A3", "#FF4719", "#197519", "#6699FF", "#4747D1",
            "#D1D1E0", "#FF5050", "#FFFFF0", "#CC99FF", "#66E0C2", "#FF4DFF", "#00CCFF",
        ];

        function randomFrom(arr){
        var randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
        }

        var r = function(arr) {
            if(!arr) arr = tings; return arr[Math.floor(Math.random() * arr.length)];
        };

        //Get Weather
        var id = $("#weather-id").text();
        var suchid = parseInt(id);
        var suchicon = $("#weather-icon").text();
        var suchdescription = $("#weather-desc").text();
        var temp = $("#degreesCelsius .number").text();
        var suchtemp = parseInt(temp);

        var dogefix = ['so wow', 'wow'];
        $.each(tings, function(_, ting) {
            dogefix.push('such ' + ting);
            dogefix.push('very ' + ting);
            dogefix.push('much ' + ting);
            dogefix.push('so ' + ting);
        });

        var very = doge.append('<div class="such overlay" />').children('.such.overlay').css({
            position: 'fixed',
                left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            pointerEvents: 'none'
        });

        interval = setInterval(function() {
            $('.such.overlay').append(
                '<span style="position: absolute; left: ' + Math.random()  *100 + '%;top: ' + Math.random()  *100 + '%;font-size: ' + Math.max(20, (Math.random() * 50 + 24)) + 'px; color:' + randomFrom(suchcolors) + ';">'
                    + r(dogefix) +
                '</span>');
                var suchnumber = $("span").length;
                if (suchnumber > 8 )
                {
                    $('.such span:nth-child(1)').remove();
                }
        }, 2300);

    };
})(jQuery);
