setTimeout(() => 
{
    function switch_to_main_menu()
    {
        document.getElementById("game_over_screen_container").style.display = "none";
        document.getElementById("game_screen_container").style.display = "none";
        document.getElementById("settings_container").style.animation = "fadeout 1s";
        document.getElementById("settings_container").style.zIndex = -11;
        document.getElementById("main_menu_container").style.animation = "fadein 1s";
        setTimeout(() => {
            document.getElementById("main_menu_container").style.zIndex = 10;
        }, 900);
    }

    function play_music()
    {
        if (is_music == 0)
        {
            is_music = 1;
            music_button.className = "audio_buttons_on";
            audio_player.play();
        } else if(is_music == 1)
        {
            is_music = 0;
            music_button.className = "audio_buttons_off";
            audio_player.pause();
        }
    }

    var back_button = document.getElementById("settings_back_button");
    var back_a = document.getElementById("settings_back_text");

    back_button.onclick = switch_to_main_menu;
    back_a.onclick = switch_to_main_menu;

    /*********************************** */

    var audio_player = document.getElementById("menu_music");
    var music_button = document.getElementById("music_button");

    var is_music = 0;

    music_button.onclick = play_music;

    /************************************ */

}, 100);
