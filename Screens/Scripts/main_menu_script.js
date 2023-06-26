setTimeout(() => {
    function switch_to_settings()
    {
        document.getElementById("game_over_screen_container").style.display = "none";
        document.getElementById("game_screen_container").style.display = "none";
        document.getElementById("settings_container").style.display = "block";

        document.getElementById("main_menu_container").style.animation = "fadeout 1s";
        document.getElementById("main_menu_container").style.zIndex = -10;
        document.getElementById("settings_container").style.animation = "fadein 1s";
        setTimeout(() => {
            document.getElementById("main_menu_container").style.animation = "none !important";
            document.getElementById("settings_container").style.animation = "none !important";
            document.getElementById("settings_container").style.zIndex = 10;
        }, 900);
    }

    function switch_to_game()
    {
        document.getElementById("game_over_screen_container").style.display = "none";
        document.getElementById("settings_container").style.display = "none";
        document.getElementById("game_screen_container").style.display = "block";

        document.getElementById("main_menu_container").style.animation = "fadeout 1s";
        document.getElementById("main_menu_container").style.zIndex = -10;
        document.getElementById("game_screen_container").style.animation = "fadein 1s";
        setTimeout(() => {
            document.getElementById("main_menu_container").style.animation = "none !important";
            document.getElementById("game_screen_container").style.animation = "none !important";
            document.getElementById("game_screen_container").style.zIndex = 10;
        }, 900);
    }

    function show_info()
    {
        console.log(timer);
        if (timer == null)
        {
            timer = setTimeout(() => {timer = null;}, 1000);
            if (info_shown == 0)
            {
                document.getElementById("how_to_play_text1").style.display = "block";
                document.getElementById("how_to_play_text2").style.display = "block";
                document.getElementById("how_to_play_text1").style.animation = "fadein 1s";
                document.getElementById("how_to_play_text2").style.animation = "fadein 1s";
                setTimeout(() => {
                    document.getElementById("how_to_play_text1").style.animation = "none !important";
                    document.getElementById("how_to_play_text2").style.animation = "none !important";
                }, 900);
                info_shown = 1;
            } else if (info_shown == 1)
            {
                document.getElementById("how_to_play_text1").style.animation = "fadeout 1s";
                document.getElementById("how_to_play_text2").style.animation = "fadeout 1s";
                setTimeout(() => {
                    document.getElementById("how_to_play_text1").style.animation = "none !important";
                    document.getElementById("how_to_play_text2").style.animation = "none !important";
                    document.getElementById("how_to_play_text1").style.display = "none";
                    document.getElementById("how_to_play_text2").style.display = "none";
                }, 900);
                info_shown = 0;
            }
        }
    }

    var play_button = document.getElementById("play_button");
    var settings_button = document.getElementById("settings_button");

    var play_a = document.getElementById("play_a");
    var settings_a = document.getElementById("settings_a");

    var info_button = document.getElementById("info_button");

    settings_button.onclick = switch_to_settings;
    settings_a.onclick = switch_to_settings;

    play_button.onclick = switch_to_game;
    play_a.onclick = switch_to_game;

    info_button.onclick = show_info;
    var info_shown = 0;
    var timer = null;
}, 100);
