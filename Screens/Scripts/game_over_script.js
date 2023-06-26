setTimeout(() => {
    function show_main_menu_screen()
    {
        document.getElementById("settings_container").style.display = "none";

        document.getElementById("game_screen_container").style.animation = "fadeout 1s";
        document.getElementById("game_over_screen_container").style.animation = "fadeout 1s";
        document.getElementById("main_menu_container").style.animation = "fadein 1s";
        setTimeout(() => {
            document.getElementById("game_screen_container").style.zIndex = -12;
            document.getElementById("game_over_screen_container").style.zIndex = -13;

            document.getElementById("game_screen_container").style.display = "none";
            document.getElementById("game_over_screen_container").style.display = "none";

            document.getElementById("game_screen_container").style.animation = "none !important";
            document.getElementById("game_over_screen_container").style.animation = "none !important";
            
            document.getElementById("main_menu_container").style.display = "block";
            document.getElementById("main_menu_container").style.zIndex = 10;
        }, 900);
    }

    function show_game_screen()
    {
        document.getElementById("settings_container").style.display = "none";
        document.getElementById("settings_container").style.display = "none";

        document.getElementById("game_over_screen_container").style.animation = "fadeout 1s";
        setTimeout(() => {
            document.getElementById("game_over_screen_container").style.zIndex = -13;
            document.getElementById("game_over_screen_container").style.display = "none";
            document.getElementById("game_over_screen_container").style.animation = "none !important";
        }, 900);
    }

    var restart_game_button = document.getElementById("restart_game_button");
    var main_menu_button = document.getElementById("main_menu_button");

    main_menu_button.onclick=show_main_menu_screen;
    restart_game_button.onclick=show_game_screen;
}, 100);