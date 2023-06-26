class Controller{
    constructor (window, player, walls){
        this._window = window;
        this._player = player;
        this._walls = walls;
        this._previous_key = "";
        this._last_key = "";
        this._current_key = ""; 
        this._colliderSides = ["", "", "", ""];
        this._isfrozen = 0;

        this._keyUp = "";
        this._keyDown = "";
        this._keyLeft = "";
        this._keyRight = "";
    }

    listenInput()
    {
        window.addEventListener("keydown", ({key}) =>
        {
            if (key.toUpperCase() == this._keyUp)
            {
                this._current_key = "w";
            } else if (key.toUpperCase() == this._keyDown)
            {   
                this._current_key = "s";
            } else if (key.toUpperCase() == this._keyLeft)
            {
                this._current_key = "a";
            } else if (key.toUpperCase() == this._keyRight)
            {
                this._current_key = "d";
            }
        })
    }

    stopListenInput()
    {
        this._current_key = "";
        this._last_key = "";
        window.removeEventListener("keydown", ({key}) =>
        {
            if (key == "w")
            {
                this._current_key = "w";
            } else if (key == "s")
            {   
                this._current_key = "s";
            } else if (key == "a")
            {
                this._current_key = "a";
            } else if (key == "d")
            {
                this._current_key = "d";
            }
        })
    }

    movePacMan()
    {
        if (this._isfrozen == 0)
        {
            this._colliderSides = ["", "", "", ""];
            
            if(this._previous_key != this._last_key)
            {
                this._previous_key = this._last_key;
            }

            if(this._last_key != this._current_key && this._player.position[0] % 30 == 0 && this._player.position[1] % 30 == 0)
            {
                this._last_key = this._current_key;
            }

            for (i = 0; i<this._walls.length; i++)
            {
                if(this._player.position[0] + 30  == this._walls[i].position[0]
                && this._player.position[1] == this._walls[i].position[1] && (this._last_key == "d" || this._previous_key == "d"))
                {
                    this._colliderSides[0] = "d";
                }

                if(this._player.position[0] == this._walls[i].position[0] + 30
                    && this._player.position[1] == this._walls[i].position[1] && (this._last_key == "a" || this._previous_key == "a"))
                {
                    this._colliderSides[1] = "a";
                }

                if(this._player.position[1] == this._walls[i].position[1] + 30
                    && this._player.position[0] == this._walls[i].position[0] && (this._last_key == "w" || this._previous_key == "w"))
                {
                    this._colliderSides[2] = "w";
                }

                if(this._player.position[1] + 30 == this._walls[i].position[1]
                    && this._player.position[0] == this._walls[i].position[0] && (this._last_key == "s" || this._previous_key == "s"))
                {
                    this._colliderSides[3] = "s";
                }
            }

            if (this._colliderSides[0] != "d" && this._last_key == "d")
            {
                this._player.position = [this._player.position[0]+this._player.velocity, this._player.position[1]];
            } else if (this._colliderSides[0] == "d" && !this._colliderSides.includes(this._previous_key)) {
                this._current_key = this._previous_key;
                this._last_key = this._previous_key;
            }
            if (this._colliderSides[3] != "s" && this._last_key == "s")
            {
                this._player.position = [this._player.position[0], this._player.position[1]+this._player.velocity];
            } else if (this._colliderSides[3] == "s" && !this._colliderSides.includes(this._previous_key)) {
                this._current_key = this._previous_key;
                this._last_key = this._previous_key;
            }
            if (this._colliderSides[2] != "w" && this._last_key == "w")
            {
                this._player.position = [this._player.position[0], this._player.position[1]-this._player.velocity];
            } else if (this._colliderSides[2] == "w" && !this._colliderSides.includes(this._previous_key)) {
                this._current_key = this._previous_key;
                this._last_key = this._previous_key;
            }
            if (this._colliderSides[1] != "a" && this._last_key == "a")
            {
                this._player.position = [this._player.position[0]-this._player.velocity, this._player.position[1]];
            } else if (this._colliderSides[1] == "a" && !this._colliderSides.includes(this._previous_key)) {
                this._current_key = this._previous_key;
                this._last_key = this._previous_key;
            }
        }
    }

    get lastKey()
    {
        return this._last_key;
    }

    set froze(num)
    {
        this._isfrozen = num;
    }

    set setKeyUp(up)
    {
        this._keyUp = up;
    }

    set setKeyDown(down)
    {
        this._keyDown = down;
    }

    set setKeyLeft(left)
    {
        this._keyLeft = left;
    }

    set setKeyRight(right)
    {
        this._keyRight = right;
    }

}