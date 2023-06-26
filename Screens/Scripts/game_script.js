setTimeout(() => {

    function turnSoundOnOff()
    {
        if (sound_on_off == 0)
        {
            sound_on_off = 1;
            sound_button.className = "audio_buttons_on";
        } else if (sound_on_off == 1)
        {
            sound_on_off = 0;
            sound_button.className = "audio_buttons_off";
        }
    }

    function show_game_over_screen()
    {
        controller.stopListenInput();
        window.cancelAnimationFrame(animation_frame);
        document.getElementById("settings_container").style.display = "none";
        document.getElementById("main_menu_container").style.display = "none";
        document.getElementById("game_over_screen_container").style.display = "block";
        document.getElementById("game_over_screen_container").style.zIndex = 11;
        document.getElementById("game_over_screen_container").style.animation = "fadein 1s";

    }
    /* ---------------------------------------------- Observer ----------------------------- */
    /* -Podla coho som robil observer: https://github.com/pkellz/devsage/blob/master/DesignPatterns/Observer.js / https://www.youtube.com/watch?v=45TeJEmcqk8- */

    function MoveGhosts()
    {
        this.observers = [] // array of observer functions
    }

    MoveGhosts.prototype = {
        subscribe: function(fn)
        {
            this.observers.push(fn)
        },
        unsubscribe: function(fnToRemove)
        {
            this.observers = this.observers.filter( fn => {
            if(fn != fnToRemove)
                return fn
            })
        },
        notify: function()
        {
            for(i = 0; i<this.observers.length; i++)
            {
                (this.observers)[i]();
            }
        }
    }

    const moveGs = new MoveGhosts()

    /* ---------------------------------------------- Move Ghosts ----------------------------- */
    function moveAllGhosts()
    {
        ghost_red.update(context, generated_walls);
        ghost_blue.update(context, generated_walls);
        ghost_pink.update(context, generated_walls);
        ghost_yellow.update(context, generated_walls);
    }

    moveGs.subscribe(moveAllGhosts);

    /* ---------------------------------------------- Change Controls ----------------------------- */

    //var controlKeys = ["W", "S", "A", "D"];

    getKeyUp = function({key})
    {
        if (!controlKeys.includes(key.toUpperCase()))
        {
            if (key == "ArrowUp")
            {
                document.getElementById("key_up").innerText = "UP";
                document.getElementById("key_up").style.fontSize = "3vh";
            } else if (key == "ArrowDown")
            {
                document.getElementById("key_up").innerText = "DOWN";
                document.getElementById("key_up").style.fontSize = "3vh";
            } else if (key == "ArrowRight")
            {
                document.getElementById("key_up").innerText = "RIGHT";
                document.getElementById("key_up").style.fontSize = "3vh";
            } else if (key == "ArrowLeft")
            {
                document.getElementById("key_up").innerText = "LEFT";
                document.getElementById("key_up").style.fontSize = "3vh";
            } else {
                document.getElementById("key_up").innerText = key.toUpperCase();
                document.getElementById("key_up").style.fontSize = "5vh";
            }
            controlKeys[0] = key.toUpperCase();
            document.getElementById("button_up").removeEventListener("keydown", getKeyUp, true);
            document.getElementById("button_up").className = "button_up";
            setting_button_pressed = 0;
        }
    }

    getKeyDown = function({key})
    {
        if (!controlKeys.includes(key.toUpperCase()))
        {
            if (key == "ArrowUp")
            {
                document.getElementById("key_down").innerText = "UP";
                document.getElementById("key_down").style.fontSize = "3vh";
            } else if (key == "ArrowDown")
            {
                document.getElementById("key_down").innerText = "DOWN";
                document.getElementById("key_down").style.fontSize = "3vh";
            } else if (key == "ArrowRight")
            {
                document.getElementById("key_down").innerText = "RIGHT";
                document.getElementById("key_down").style.fontSize = "3vh";
            } else if (key == "ArrowLeft")
            {
                document.getElementById("key_down").innerText = "LEFT";
                document.getElementById("key_down").style.fontSize = "3vh";
            } else {
                document.getElementById("key_down").innerText = key.toUpperCase();
                document.getElementById("key_down").style.fontSize = "5vh";
            }
            controlKeys[1] = key.toUpperCase();
            document.getElementById("button_down").removeEventListener("keydown", getKeyDown, true);
            document.getElementById("button_down").className = "button_down";
            setting_button_pressed = 0;
        }
    }

    getKeyLeft = function({key})
    {
        if (!controlKeys.includes(key.toUpperCase()))
        {
            if (key == "ArrowUp")
            {
                document.getElementById("key_left").innerText = "UP";
                document.getElementById("key_left").style.fontSize = "3vh";
            } else if (key == "ArrowDown")
            {
                document.getElementById("key_left").innerText = "DOWN";
                document.getElementById("key_left").style.fontSize = "3vh";
            } else if (key == "ArrowRight")
            {
                document.getElementById("key_left").innerText = "RIGHT";
                document.getElementById("key_left").style.fontSize = "3vh";
            } else if (key == "ArrowLeft")
            {
                document.getElementById("key_left").innerText = "LEFT";
                document.getElementById("key_left").style.fontSize = "3vh";
            } else {
                document.getElementById("key_left").innerText = key.toUpperCase();
                document.getElementById("key_left").style.fontSize = "5vh";
            }
            controlKeys[2] = key.toUpperCase();
            document.getElementById("button_left").removeEventListener("keydown", getKeyLeft, true);
            document.getElementById("button_left").className = "button_left";
            setting_button_pressed = 0;
        }
    }

    getKeyRight = function({key})
    {
        if (!controlKeys.includes(key.toUpperCase()))
        {
            if (key == "ArrowUp")
            {
                document.getElementById("key_right").innerText = "UP";
                document.getElementById("key_right").style.fontSize = "3vh";
            } else if (key == "ArrowDown")
            {
                document.getElementById("key_right").innerText = "DOWN";
                document.getElementById("key_right").style.fontSize = "3vh";
            } else if (key == "ArrowRight")
            {
                document.getElementById("key_right").innerText = "RIGHT";
                document.getElementById("key_right").style.fontSize = "3vh";
            } else if (key == "ArrowLeft")
            {
                document.getElementById("key_right").innerText = "LEFT";
                document.getElementById("key_right").style.fontSize = "3vh";
            } else {
                document.getElementById("key_right").innerText = key.toUpperCase();
                document.getElementById("key_right").style.fontSize = "5vh";
            }
            controlKeys[3] = key.toUpperCase();
            document.getElementById("button_right").removeEventListener("keydown", getKeyRight, true);
            document.getElementById("button_right").className = "button_right";
            setting_button_pressed = 0;
        }
    }

    function changeControlsUp()
    {
        if (setting_button_pressed == 0)
        {
            setting_button_pressed = 1;
            document.getElementById("button_up").className = "selected_button";
            document.getElementById("button_up").addEventListener("keydown", getKeyUp, true);
        }
    }

    function changeControlsDown()
    {
        if (setting_button_pressed == 0)
        {
            setting_button_pressed = 1;
            document.getElementById("button_down").className = "selected_button";
            document.getElementById("button_down").addEventListener("keydown", getKeyDown, true);
        }
    }

    function changeControlsRight()
    {
        if (setting_button_pressed == 0)
        {
            setting_button_pressed = 1;
            document.getElementById("button_right").className = "selected_button";
            document.getElementById("button_right").addEventListener("keydown", getKeyRight, true);
        }
    }

    function changeControlsLeft()
    {
        if (setting_button_pressed == 0)
        {
            setting_button_pressed = 1;
            document.getElementById("button_left").className = "selected_button";
            document.getElementById("button_left").addEventListener("keydown", getKeyLeft, true);
        }
    }


    /* ---------------------------------------------- Start Restart Game ----------------------------- */

    function startRestartGame()
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (sound_on_off == 1)
        {
            pacman_begining.play();
        }
    
        document.getElementById("game_over_text").innerText = "Game over";
        player = new Player(0, 0, [images[18], images[19], images[20], images[38], images[39], images[40], images[41], images[42], images[43], images[44], images[45]], 3);

        ghost_red = new Ghost(0, 0, [images[22], images[23], images[24], images[25], images[47], images[48]]);
        ghost_blue = new Ghost(0, 0, [images[26], images[27], images[28], images[29], images[47], images[48]]);
        ghost_pink = new Ghost(0, 0, [images[30], images[31], images[32], images[33], images[47], images[48]]);
        ghost_yellow = new Ghost(0, 0, [images[34], images[35], images[36], images[37], images[47], images[48]]);

        generated_map = generate_map(map);

        generated_walls = generated_map[0];
        generated_pac_dots = generated_map[1];
        generated_pac_powerup = generated_map[2];
        
        controller = new Controller(window, player, generated_walls);
        controller.setKeyUp = controlKeys[0];
        controller.setKeyDown = controlKeys[1];
        controller.setKeyLeft = controlKeys[2];
        controller.setKeyRight = controlKeys[3];
        controller.listenInput();

        score_counter = new Score_Counter(0, 10);
        score_counter.scoreToNull(document.getElementById("score_counter"));

        life_counter = new Life_Counter(3);
        life_counter.restoreLives(document.getElementById("life_counter"));
        colliding = 0;
        generate_walls();
        generate_dots();
        generate_powerups();

        setTimeout(() => {
            animate(context);    
        }, 4000)
    }

    /* ---------------------------------------------- Image Loader ----------------------------------*/

    function loadAllImages()
    {
        var allImages = [];
        var image = new Image();
        var imageSrc = [
            /* ---------------------------- Walls --------------------------*/
            'Screens/Resources/Images/Walls/no_border_white.png',
            'Screens/Resources/Images/Walls/down_border.png',
            'Screens/Resources/Images/Walls/up_border.png',
            'Screens/Resources/Images/Walls/right_border.png',
            'Screens/Resources/Images/Walls/left_border.png',
            'Screens/Resources/Images/Walls/no_border.png',
            'Screens/Resources/Images/Walls/down_right_border.png',
            'Screens/Resources/Images/Walls/up_right_border.png',
            'Screens/Resources/Images/Walls/down_left_border.png',
            'Screens/Resources/Images/Walls/up_left_border.png',
            'Screens/Resources/Images/Walls/up_down_border.png',
            'Screens/Resources/Images/Walls/right_left_border.png',
            'Screens/Resources/Images/Walls/up_left_right_border.png',
            'Screens/Resources/Images/Walls/down_left_right_border.png',
            'Screens/Resources/Images/Walls/up_down_left_border.png',
            'Screens/Resources/Images/Walls/up_down_right_border.png',
            'Screens/Resources/Images/Walls/bordered.png',
            'Screens/Resources/Images/Walls/gate.png',
            /* ------------------------------ Pac-Man ----------------------- */
            'Screens/Resources/Images/Pac-Man/pac-man1.png',
            'Screens/Resources/Images/Pac-Man/pac-man2.png',
            'Screens/Resources/Images/Pac-Man/pac-man3.png',
            /* ------------------------------ Pac-Dot ----------------------- */
            'Screens/Resources/Images/pac-dots.png',
            /* ------------------------------ Red-Ghost --------------------- */
            'Screens/Resources/Images/Ghosts/Red/red_ghost_up.png',
            'Screens/Resources/Images/Ghosts/Red/red_ghost_down.png',
            'Screens/Resources/Images/Ghosts/Red/red_ghost_left.png',
            'Screens/Resources/Images/Ghosts/Red/red_ghost_right.png',
            /* ------------------------------ Blue-Ghost -------------------- */
            'Screens/Resources/Images/Ghosts/Blue/blue_ghost_up.png',
            'Screens/Resources/Images/Ghosts/Blue/blue_ghost_down.png',
            'Screens/Resources/Images/Ghosts/Blue/blue_ghost_left.png',
            'Screens/Resources/Images/Ghosts/Blue/blue_ghost_right.png',
            /* ------------------------------ Pink-Ghost -------------------- */
            'Screens/Resources/Images/Ghosts/Pink/pink_ghost_up.png',
            'Screens/Resources/Images/Ghosts/Pink/pink_ghost_down.png',
            'Screens/Resources/Images/Ghosts/Pink/pink_ghost_left.png',
            'Screens/Resources/Images/Ghosts/Pink/pink_ghost_right.png',
            /* ------------------------------ Yellow-Ghost ------------------ */
            'Screens/Resources/Images/Ghosts/Yellow/yellow_ghost_up.png',
            'Screens/Resources/Images/Ghosts/Yellow/yellow_ghost_down.png',
            'Screens/Resources/Images/Ghosts/Yellow/yellow_ghost_left.png',
            'Screens/Resources/Images/Ghosts/Yellow/yellow_ghost_right.png',
            /* ------------------------------ Pac-Man dies ------------------ */
            'Screens/Resources/Images/Pac-Man/pac-man-dies1.png',
            'Screens/Resources/Images/Pac-Man/pac-man-dies2.png',
            'Screens/Resources/Images/Pac-Man/pac-man-dies3.png',
            'Screens/Resources/Images/Pac-Man/pac-man-dies4.png',
            'Screens/Resources/Images/Pac-Man/pac-man-dies5.png',
            'Screens/Resources/Images/Pac-Man/pac-man-dies6.png',
            'Screens/Resources/Images/Pac-Man/pac-man-dies7.png',
            'Screens/Resources/Images/Pac-Man/pac-man-dies8.png',
            /* ------------------------------ Pac-PowerUp dies ---------------- */
            'Screens/Resources/Images/pac-powerup.png',
            /* ------------------------------ Ghost dies ---------------- */
            'Screens/Resources/Images/Ghosts/blink_off_ghost_down.png',
            'Screens/Resources/Images/Ghosts/blink_on_ghost_down.png'
        ]

        for (i = 0; i<imageSrc.length; i++)
        {
            allImages[i] = new Image();
            allImages[i].src = imageSrc[i];
        }
        return allImages;
    }

    /* ----------------------------------- Generate Walls ------------------------ */

    function generate_map()
    {
        var walls = [];
        var pac_dots = [];
        var pac_powerup = [];
        var pos_x = 0;
        var pos_y = 0;
        var pos = 0;

        for (i = 0; i<map.length; i++)
        {
            for (i2 = 0; i2<map[i].length; i2++)
            {
                pos = map[i][i2];
                if (pos != 0)
                {
                    if (pos == 10)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[0]));
                    } else if (pos == 11)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[1]));
                    } else if (pos == 12)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[2]));
                    } else if (pos == 13)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[3]));
                    } else if (pos == 14)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[4]));
                    }else if (pos == 1)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[5]));
                    }else if (pos == 15)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[6]));
                    }else if (pos == 16)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[7]));
                    } else if (pos == 17)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[8]));
                    } else if (pos == 18)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[9]));
                    } else if (pos == 19)
                    {
                        walls.push(new Wall(pos_x, pos_y,  images[10]));
                    } else if (pos == 20)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[11]));
                    } else if (pos == 21)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[12]));
                    } else if (pos == 22)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[13]));
                    } else if (pos == 23)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[14]));
                    } else if (pos == 24)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[15]));
                    } else if (pos == 25)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[16]));
                    } else if (pos == 26)
                    {
                        walls.push(new Wall(pos_x, pos_y, images[17]));
                    } else if (pos == 88)
                    {
                        player.position = [pos_x, pos_y];
                        player.respawnPosition = [pos_x, pos_y];
                        player.spawn(context);
                    } else if (pos == 91)
                    {
                        ghost_red.position = [pos_x, pos_y];
                        ghost_red.spawn(context);
                    } else if (pos == 92)
                    {
                        ghost_blue.position = [pos_x, pos_y];
                        ghost_blue.spawn(context);
                    } else if (pos == 93)
                    {
                        ghost_pink.position = [pos_x, pos_y];
                        ghost_pink.spawn(context);
                    } else if (pos == 94)
                    {
                        ghost_yellow.position = [pos_x, pos_y];
                        ghost_yellow.spawn(context);
                    } else if (pos == 50)
                    {
                        pac_powerup.push(new Pac_PowerUp(pos_x, pos_y, images[46]));
                    }
                } else {
                    pac_dots.push(new Pac_Dot(pos_x, pos_y, images[21]));
                }
                pos_x = pos_x + 30;
            }
            pos_x = 0;
            pos_y = pos_y + 30;
        }

        return [walls, pac_dots, pac_powerup];
    }

    function generate_walls()
    {
        for (i = 0; i<generated_walls.length; i++)
        {
            generated_walls[i].place_wall(context);
        }
    }

    function generate_dots()
    {
        for (i = 0; i<generated_pac_dots.length; i++)
        {
            generated_pac_dots[i].place_dot(context);
        }
    }

    function generate_powerups()
    {
        for (i = 0; i<generated_pac_powerup.length; i++)
        {
            generated_pac_powerup[i].place_dot(context);
        }
    }

    function eatDots()
    {
        for(i = 0; i<generated_pac_dots.length; i++)
        {
            if (generated_pac_dots[i].position[1] == player.position[1] && (15>generated_pac_dots[i].position[0]-player.position[0] && generated_pac_dots[i].position[0]-player.position[0]>-15)
            || generated_pac_dots[i].position[0] == player.position[0] && (15>generated_pac_dots[i].position[1]-player.position[1] && generated_pac_dots[i].position[1]-player.position[1]>-15))
            {
                generated_pac_dots.splice(generated_pac_dots.indexOf(generated_pac_dots[i]), 1);
                if (sound_on_off == 1)
                {
                    pac_chomp.play();
                }
                score_counter.addToScore(document.getElementById("score_counter"));
            }
        }
        if (generated_pac_dots.length == 0)
        {
            show_game_over_screen();
            document.getElementById("game_over_text").innerText = "You won!";
            document.getElementById("game_over_score").innerText = "Your score: "+score_counter.getscore.toString();
        }
        return generated_pac_dots;
    }

    function eatPacPowerUp()
    {
        for(i = 0; i<generated_pac_powerup.length; i++)
        {
            if (generated_pac_powerup[i].position[1] == player.position[1] && (15>generated_pac_powerup[i].position[0]-player.position[0] && generated_pac_powerup[i].position[0]-player.position[0]>-15)
            || generated_pac_powerup[i].position[0] == player.position[0] && (15>generated_pac_powerup[i].position[1]-player.position[1] && generated_pac_powerup[i].position[1]-player.position[1]>-15))
            {
                generated_pac_powerup.splice(generated_pac_powerup.indexOf(generated_pac_powerup[i]), 1);
                if (sound_on_off == 1)
                {
                    pac_chomp.play();
                }
                score_counter.addToScorePowerUp(document.getElementById("score_counter"));
                player.powerup();
                ghost_blue.powerup();
                ghost_pink.powerup();
                ghost_red.powerup();
                ghost_yellow.powerup();
            }
        }

        return generated_pac_powerup;
    }

    /* ---------------------------- Pac-Man - Ghosts collision -------------------*/

    var colliding = 0;
    var colliding_ghost = "";
    function checkPacManGhostCollision()
    {   
        if (player.powered_up == 0)
        {
            if (colliding == 0)
            {
                if (player.position[0] == ghost_red.position[0] && (26>=(player.position[1] - ghost_red.position[1]) && (player.position[1] - ghost_red.position[1])>=-26)
                || player.position[1] == ghost_red.position[1] && (26>=(player.position[0] - ghost_red.position[0]) && (player.position[0] - ghost_red.position[0])>=-26))
                {
                    colliding = 1;
                }
                if (player.position[0] == ghost_blue.position[0] && (26>=(player.position[1] - ghost_blue.position[1]) && (player.position[1] - ghost_blue.position[1])>=-26)
                || player.position[1] == ghost_blue.position[1] && (26>=(player.position[0] - ghost_blue.position[0]) && (player.position[0] - ghost_blue.position[0])>=-26))
                {
                    colliding = 1;
                }
                if (player.position[0] == ghost_yellow.position[0] && (26>=(player.position[1] - ghost_yellow.position[1]) && (player.position[1] - ghost_yellow.position[1])>=-26)
                || player.position[1] == ghost_yellow.position[1] && (26>=(player.position[0] - ghost_yellow.position[0]) && (player.position[0] - ghost_yellow.position[0])>=-26))
                {
                    colliding = 1;
                }
                if (player.position[0] == ghost_pink.position[0] && (26>=(player.position[1] - ghost_pink.position[1]) && (player.position[1] - ghost_pink.position[1])>=-26)
                || player.position[1] == ghost_pink.position[1] && (26>=(player.position[0] - ghost_pink.position[0]) && (player.position[0] - ghost_pink.position[0])>=-26))
                {
                    colliding = 1;
                }

                if (colliding == 1)
                {
                    if (sound_on_off == 1)
                    {
                        pac_death.play();
                    }
                    player.froze = 1;
                    ghost_red.froze = 1;
                    ghost_blue.froze = 1;
                    ghost_pink.froze = 1;
                    ghost_yellow.froze = 1;
                    controller.froze = 1;

                    life_counter.removeLive(document.getElementById("life_counter"));
                    if (life_counter.remainingLives != -1)
                    {
                        setTimeout(() => {
                            player.froze = 0;
                            ghost_red.froze = 0;
                            ghost_blue.froze = 0;
                            ghost_pink.froze = 0;
                            ghost_yellow.froze = 0;
                            controller.froze = 0;
                            player.respawn();
                            ghost_red.respawn();
                            ghost_blue.respawn();
                            ghost_pink.respawn();
                            ghost_yellow.respawn();
                            colliding = 0;
                            player.reset_anim();
                        }, 3200);
                    } else if (life_counter.remainingLives == -1)
                    {
                        show_game_over_screen()
                        document.getElementById("game_over_score").innerText = "Your score: "+score_counter.getscore.toString();
                    }
                }
            }
        } else if (player.powered_up == 1)
        {
            if (player.position[0] == ghost_red.position[0] && (26>=(player.position[1] - ghost_red.position[1]) && (player.position[1] - ghost_red.position[1])>=-26)
            || player.position[1] == ghost_red.position[1] && (26>=(player.position[0] - ghost_red.position[0]) && (player.position[0] - ghost_red.position[0])>=-26))
            {
                colliding_ghost = "red";
            }
            if (player.position[0] == ghost_blue.position[0] && (26>=(player.position[1] - ghost_blue.position[1]) && (player.position[1] - ghost_blue.position[1])>=-26)
            || player.position[1] == ghost_blue.position[1] && (26>=(player.position[0] - ghost_blue.position[0]) && (player.position[0] - ghost_blue.position[0])>=-26))
            {
                colliding_ghost = "blue";
            }
            if (player.position[0] == ghost_yellow.position[0] && (26>=(player.position[1] - ghost_yellow.position[1]) && (player.position[1] - ghost_yellow.position[1])>=-26)
            || player.position[1] == ghost_yellow.position[1] && (26>=(player.position[0] - ghost_yellow.position[0]) && (player.position[0] - ghost_yellow.position[0])>=-26))
            {
                colliding_ghost = "yellow";
            }
            if (player.position[0] == ghost_pink.position[0] && (26>=(player.position[1] - ghost_pink.position[1]) && (player.position[1] - ghost_pink.position[1])>=-26)
            || player.position[1] == ghost_pink.position[1] && (26>=(player.position[0] - ghost_pink.position[0]) && (player.position[0] - ghost_pink.position[0])>=-26))
            {
                colliding_ghost = "pink";
            }

            if (colliding_ghost == "red")
            {
                ghost_red.respawn();
                score_counter.eatGhost(document.getElementById("score_counter"));
            }
            if (colliding_ghost == "blue")
            {
                ghost_blue.respawn();
                score_counter.eatGhost(document.getElementById("score_counter"));
            }
            if (colliding_ghost == "pink")
            {
                ghost_pink.respawn();
                score_counter.eatGhost(document.getElementById("score_counter"));
            }
            if (colliding_ghost == "yellow")
            {
                ghost_yellow.respawn();
                score_counter.eatGhost(document.getElementById("score_counter"));
            }
            colliding_ghost = "";
        }        
    }


    function makeGameHarder()
    {
        if (score_counter.getscore > 2500)
        {
            if (ghost_blue.position[0]%2 == 0 && ghost_blue.position[1]%2 == 0)
            {
                ghost_blue.velocity = 2;
            }

            if (ghost_red.position[0]%2 == 0 && ghost_red.position[1]%2 == 0)
            {
                ghost_red.velocity = 2;
            }

            if (ghost_pink.position[0]%2 == 0 && ghost_pink.position[1]%2 == 0)
            {
                ghost_pink.velocity = 2;
            }

            if (ghost_yellow.position[0]%2 == 0 && ghost_yellow.position[1]%2 == 0)
            {
                ghost_yellow.velocity = 2;
            }

            if (player.position[0]%2 == 0 && player.position[1]%2 == 0)
            {
                player.velocity = 2;
            }
        }
    }

    /* ---------------------------- Animate screen -------------------------------*/

    function animate()
    {
        animation_frame = requestAnimationFrame(animate);
        context.clearRect(0, 0, canvas.width, canvas.height);
        generate_walls();
        generate_dots();
        generate_powerups();
        generated_pac_dots = eatDots();
        generated_pac_powerup = eatPacPowerUp();
        checkPacManGhostCollision();
        controller.movePacMan();
        moveGs.notify();
        player.update(context, controller.lastKey, canvas);
        makeGameHarder();
    }

/* ------------------------------------------------------------------- DOM ------------------------------------------------------------------- */

    var sound_on_off = 0;

    var sound_button = document.getElementById("sounds_button");
    sound_button.onclick = turnSoundOnOff;

    var canvas = document.getElementById("game_canvas");
    context = canvas.getContext('2d');

    var play_button = document.getElementById("play_button");
    var restart_button = document.getElementById("restart_game_button");

    var eventHandler = 0;

    var key_up = document.getElementById("key_up");
    var key_down = document.getElementById("key_down");
    var key_right = document.getElementById("key_right");
    var key_left = document.getElementById("key_left");
    var setting_button_pressed = 0;

    document.getElementById("button_up").onclick = changeControlsUp;
    document.getElementById("button_down").onclick = changeControlsDown;
    document.getElementById("button_left").onclick = changeControlsLeft;
    document.getElementById("button_right").onclick = changeControlsRight;

    key_up.onclick = changeControlsUp;
    key_down.onclick = changeControlsDown;
    key_right.onclick = changeControlsRight;
    key_left.onclick = changeControlsLeft;

    var controlKeys = ["W", "S", "A", "D"];

/* ------------------------------------------------------------------ MAP ----------------------------------------------------------------------*/    
    var map = [                                         //
        [01, 01, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 01, 01], //1
        [01, 15, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 88, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 17, 01], //2
        [13, 00, 50, 18, 19, 19, 19, 16, 00, 00, 21, 00, 23, 19, 12, 12, 12, 12, 12, 19, 24, 00, 21, 00, 00, 18, 19, 19, 19, 16, 50, 00, 14], //3
        [13, 00, 18, 15, 00, 00, 00, 20, 00, 00, 20, 00, 00, 00, 14, 01, 01, 01, 13, 00, 00, 00, 20, 00, 00, 20, 00, 00, 00, 17, 16, 00, 14], //4
        [13, 00, 20, 00, 00, 21, 00, 22, 00, 00, 17, 19, 24, 00, 17, 11, 11, 11, 15, 00, 23, 19, 15, 00, 00, 22, 00, 21, 00, 00, 20, 00, 14], //5
        [13, 00, 20, 00, 23, 15, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 17, 24, 00, 20, 00, 14], //6
        [13, 00, 20, 00, 00, 00, 18, 24, 00, 23, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 24, 00, 23, 16, 00, 00, 00, 20, 00, 14], //7
        [13, 00, 17, 19, 24, 00, 22, 50, 00, 00, 00, 00, 00, 00, 50, 00, 00, 50, 00, 00, 00, 00, 00, 00, 00, 50, 22, 00, 23, 19, 15, 00, 14], //8
        [13, 00, 00, 00, 00, 00, 00, 00, 00, 10, 10, 10, 10, 00, 10, 00, 00, 10, 00, 10, 10, 10, 10, 10, 00, 00, 00, 00, 00, 00, 00, 00, 14], //9
        [01, 19, 19, 19, 19, 19, 16, 00, 00, 10, 00, 00, 00, 00, 10, 00, 00, 10, 00, 00, 00, 10, 00, 00, 00, 00, 18, 19, 19, 19, 19, 19, 01], //10
        [13, 00, 00, 00, 00, 50, 22, 00, 00, 10, 00, 00, 00, 00, 10, 00, 00, 10, 00, 00, 00, 10, 00, 00, 00, 00, 22, 50, 00, 00, 00, 00, 14],
        [13, 00, 18, 19, 16, 00, 00, 00, 00, 10, 10, 10, 00, 00, 10, 00, 00, 10, 00, 00, 00, 10, 00, 00, 00, 00, 00, 00, 18, 19, 16, 00, 14],
        [13, 00, 20, 00, 20, 00, 21, 00, 00, 10, 00, 00, 00, 00, 10, 00, 00, 10, 00, 00, 00, 10, 00, 00, 00, 00, 21, 00, 20, 00, 20, 00, 14],
        [13, 00, 20, 00, 17, 19, 15, 00, 00, 10, 00, 00, 00, 00, 10, 00, 00, 10, 00, 00, 00, 10, 00, 00, 00, 00, 17, 19, 15, 00, 20, 00, 14],
        [13, 00, 20, 00, 00, 00, 00, 00, 00, 10, 00, 00, 00, 00, 10, 00, 00, 10, 00, 00, 00, 10, 00, 00, 00, 00, 00, 00, 00, 00, 20, 00, 14],
        [13, 00, 20, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 20, 00, 14],
        [13, 00, 17, 19, 19, 19, 24, 00, 00, 00, 25, 00, 25, 00, 23, 19, 19, 24, 00, 25, 00, 25, 00, 00, 00, 00, 23, 19, 19, 19, 15, 00, 14],
        [13, 50, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 50, 14],
        [01, 19, 19, 19, 19, 19, 16, 00, 10, 10, 10, 10, 10, 00, 10, 10, 10, 10, 10, 00, 10, 50, 00, 00, 10, 00, 18, 19, 19, 19, 19, 19, 01],
        [13, 00, 00, 00, 00, 00, 20, 00, 10, 50, 00, 00, 00, 00, 00, 00, 10, 00, 00, 00, 10, 00, 00, 00, 10, 00, 20, 00, 00, 00, 00, 00, 14],
        [13, 00, 23, 19, 24, 00, 22, 00, 10, 00, 00, 00, 00, 00, 00, 00, 10, 00, 00, 00, 10, 00, 00, 00, 10, 00, 22, 00, 23, 19, 24, 00, 14],
        [13, 00, 00, 50, 00, 00, 00, 00, 10, 10, 10, 10, 10, 00, 00, 00, 10, 00, 00, 00, 10, 00, 00, 00, 10, 00, 00, 00, 00, 50, 00, 00, 14],
        [13, 00, 18, 12, 16, 00, 21, 00, 00, 00, 00, 00, 10, 00, 00, 00, 10, 00, 00, 00, 10, 00, 00, 00, 10, 00, 21, 00, 18, 12, 16, 00, 14],
        [13, 00, 17, 11, 15, 00, 22, 00, 00, 00, 00, 50, 10, 00, 00, 00, 10, 00, 00, 00, 10, 00, 00, 50, 10, 00, 22, 00, 17, 11, 15, 00, 14],
        [13, 00, 00, 00, 00, 00, 00, 00, 10, 10, 10, 10, 10, 00, 00, 00, 10, 00, 00, 00, 10, 10, 10, 10, 10, 00, 00, 00, 00, 00, 00, 00, 14],
        [13, 00, 23, 19, 19, 19, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 18, 19, 19, 19, 24, 00, 14],
        [13, 00, 00, 00, 00, 00, 17, 24, 00, 23, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 24, 00, 23, 15, 00, 00, 00, 00, 00, 14],
        [13, 00, 00, 00, 23, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 18, 24, 00, 00, 00, 14],
        [13, 00, 21, 00, 50, 17, 19, 19, 19, 19, 16, 00, 18, 24, 26, 26, 26, 26, 26, 23, 16, 00, 18, 19, 19, 19, 19, 15, 50, 00, 21, 00, 14],
        [13, 00, 20, 00, 00, 00, 00, 00, 00, 00, 20, 00, 20, 99, 99, 99, 99, 99, 99, 99, 20, 00, 20, 00, 00, 00, 00, 00, 00, 00, 20, 00, 14],
        [13, 00, 17, 16, 00, 00, 00, 18, 16, 00, 20, 00, 20, 99, 91, 92, 93, 94, 99, 99, 20, 00, 20, 00, 18, 16, 00, 00, 00, 18, 15, 00, 14],
        [13, 00, 50, 17, 19, 24, 00, 17, 15, 00, 22, 00, 17, 19, 19, 19, 19, 19, 19, 19, 15, 00, 22, 00, 17, 15, 00, 23, 19, 15, 50, 00, 14],
        [01, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 18, 01],
        [01, 01, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 01, 01]
    ];

    var animation_frame = null;

    var generated_map = [];

    var difficulty = 0;

    var generated_walls = [];
    var generated_pac_dots = [];
    var generated_pac_powerup = [];
    
    var images = loadAllImages();

    var player = null;
    var controller = new Controller(window, player, generated_walls);
    var score_counter = null;
    var life_counter = null;

    var ghost_red = null;
    var ghost_blue = null;
    var ghost_pink = null;
    var ghost_yellow = null;

    var pac_chomp = new Audio('Screens/Resources/Audio/pacman_chomp.wav');
    var pac_death = new Audio('Screens/Resources/Audio/pacman_death.wav');
    var pacman_begining = new Audio('Screens/Resources/Audio/pacman_beginning.wav');

    var score_counter = new Score_Counter(0, 10);
    score_counter.scoreToNull(document.getElementById("score_counter"));

    images[images.length-1].onload = function (){
        play_button.addEventListener("click", startRestartGame);
        restart_button.addEventListener("click", startRestartGame);
    }
}, 50);