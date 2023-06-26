function compareArrays(arr1, arr2)
{
    if (arr1.length == arr2.length)
    {
        var x = 0;
        for (i = 0; i<arr1.length; i++)
        {
            if (arr1[i] == arr2[i])
            {
                x = x + 1;
            }
        }
        if (x == arr1.length)
        {
            return 1;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

class Ghost {
    constructor (pos_x, pos_y, source)
    {
        this._pos_x = pos_x;
        this._pos_y = pos_y;
        this._respawn_pos_x = pos_x;
        this._respawn_pos_y = pos_y;
        this._source = source;
        this._score = 0;
        this._blipping = 0;
        this._velocity = 1;
        this._out_of_spawn = 0;
        this._moving = "";
        this._new_move = 0;
        this._touching = [];
        this._previous_touching = [];
        this._directions = ["up", "down", "right", "left"];
        this._isfrozen = 0;
        this._timeout = 0;
        this._powered_up = 0;
    }

    spawn(ctx)
    {
        ctx.drawImage(this._source[0], this._pos_x, this._pos_y, 30, 30);
    }
    //ctx.drawImage(this._source[this._chomp], this._pos_x, this._pos_y, 30, 30);

    update(ctx, walls)
    {
        if (this._isfrozen == 0)
        {
            if (this._out_of_spawn != 90)
            {
                this._moving = "";
                this._pos_y = this._pos_y - 2;
                this._out_of_spawn = this._out_of_spawn + 2;
                ctx.drawImage(this._source[0], this._pos_x, this._pos_y, 30, 30);
            } else if (this._pos_x%30 == 0 && this._pos_y%30 == 0){
                this._touching = [];
                this._directions = ["up", "down", "right", "left"];
                for (i = 0; i<walls.length; i++)
                {
                    //console.log(walls[i].getSource);
                    if(this._pos_y+30 == walls[i].position[1] && this._pos_x == walls[i].position[0])
                    {
                        this._touching[0] = "down";
                    }
                    if(this._pos_y == walls[i].position[1]+30 && this._pos_x == walls[i].position[0])
                    {
                        this._touching[1] = "up";
                    }
                    if(this._pos_y == walls[i].position[1] && this._pos_x+30 == walls[i].position[0])
                    {
                        this._touching[2] = "right";
                    }
                    if(this._pos_y == walls[i].position[1] && this._pos_x == walls[i].position[0]+30)
                    {
                        this._touching[3] = "left";
                    }
                }

                if (compareArrays(this._touching, this._previous_touching) == 0 || this._moving == "")
                {
                    if (this._new_move != 2 || this._touching.includes(this._moving))
                    {
                        for(i = 0; i<this._touching.length; i++)
                        {  
                            if (this._touching[i] != null)
                            {
                                this._directions.splice(this._directions.indexOf(this._touching[i]), 1);
                            }
                        }
                        this._moving = this._directions[Math.floor(Math.random() * this._directions.length)];
                        this._new_move = 0;
                    }
                    this._previous_touching = this._touching;
                }
                this._new_move = this._new_move+1;
            }
            if(this._moving == "up")
            {
                this._pos_y = this._pos_y - this._velocity;
                if (this._powered_up == 1)
                {
                    if (0<=this._blipping && this._blipping< 50)
                    {
                        ctx.drawImage(this._source[4], this._pos_x, this._pos_y, 30, 30);
                    } else if (50<=this._blipping && this._blipping< 100)
                    {
                        ctx.drawImage(this._source[5], this._pos_x, this._pos_y, 30, 30);
                    }
                    this._blipping = this._blipping + 1;
                } else if (this._powered_up == 0)
                {
                    ctx.drawImage(this._source[0], this._pos_x, this._pos_y, 30, 30);
                }
            } else if(this._moving == "down")
            {
                this._pos_y = this._pos_y + this._velocity;
                if (this._powered_up == 1)
                {
                    if (0<=this._blipping && this._blipping< 50)
                    {
                        ctx.drawImage(this._source[4], this._pos_x, this._pos_y, 30, 30);
                    } else if (50<=this._blipping && this._blipping< 100)
                    {
                        ctx.drawImage(this._source[5], this._pos_x, this._pos_y, 30, 30);
                    }
                    this._blipping = this._blipping + 1;
                } else if (this._powered_up == 0)
                {
                    ctx.drawImage(this._source[1], this._pos_x, this._pos_y, 30, 30);
                }
            } if(this._moving == "right")
            {
                this._pos_x = this._pos_x + this._velocity;
                if (this._powered_up == 1)
                {
                    if (0<=this._blipping && this._blipping< 50)
                    {
                        ctx.drawImage(this._source[4], this._pos_x, this._pos_y, 30, 30);
                    } else if (50<=this._blipping && this._blipping< 100)
                    {
                        ctx.drawImage(this._source[5], this._pos_x, this._pos_y, 30, 30);
                    }
                    this._blipping = this._blipping + 1;
                } else if (this._powered_up == 0)
                {
                    ctx.drawImage(this._source[3], this._pos_x, this._pos_y, 30, 30);
                }
            } if(this._moving == "left")
            {
                this._pos_x = this._pos_x - this._velocity
                if (this._powered_up == 1)
                {
                    if (0<=this._blipping && this._blipping< 50)
                    {
                        ctx.drawImage(this._source[4], this._pos_x, this._pos_y, 30, 30);
                    } else if (50<=this._blipping && this._blipping< 100)
                    {
                        ctx.drawImage(this._source[5], this._pos_x, this._pos_y, 30, 30);
                    }
                    this._blipping = this._blipping + 1;
                } else if (this._powered_up == 0)
                {
                    ctx.drawImage(this._source[2], this._pos_x, this._pos_y, 30, 30);
                }
            }
            if (this._powered_up == 1 && this._blipping >= 100)
            {
                this._blipping = 0;
            }
        } else {
            ctx.drawImage(this._source[0], this._pos_x, this._pos_y, 30, 30);
        }
        
    }

    set position(pos)
    {
        this._pos_x = pos[0];
        this._pos_y = pos[1];
        this._respawn_pos_x = pos[0];
        this._respawn_pos_y = pos[1];
    }

    get position()
    {
        return [this._pos_x, this._pos_y];
    }

    get velocity()
    {
        return this._velocity;
    }

    set velocity(velocity)
    {
        this._velocity = velocity;
    }

    respawn()
    {
        this._pos_x = this._respawn_pos_x;
        this._pos_y = this._respawn_pos_y;
        this._out_of_spawn = 0;
    }

    set froze(num)
    {
        this._isfrozen = num;
    }

    powerup()
    {
        if (this._powered_up == 0)
        {
            this._powered_up = 1;
            this._timeout = setTimeout(() => {
                this._powered_up = 0;
                this._timeout = 0;
                this._blipping = 0;
            }, 10000);
        }
    }
}