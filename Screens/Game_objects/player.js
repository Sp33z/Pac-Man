class Player {
    constructor (pos_x, pos_y, source, lives)
    {
        this._pos_x = pos_x;
        this._pos_y = pos_y;
        this._respawn_pos_x = 0;
        this._respawn_pos_y = 0;
        this._source = source;
        this._lives = lives;
        this._power_up = 0;
        this._score = 0;
        this._chomp = 0;
        this._velocity = 1;
        this._rotation = 0;
        this._isfrozen = 0;
        this._respawn_anim = 0;
        this._timeout = 0;
    }

    spawn(ctx)
    {
        ctx.drawImage(this._source[0], this._pos_x, this._pos_y, 30, 30);
    }
    //ctx.drawImage(this._source[this._chomp], this._pos_x, this._pos_y, 30, 30);

    update(ctx, last_key, canvas)
    {
        if (this._isfrozen == 0)
        {
            ctx.save();
            if (last_key == "w")
            {
                ctx.translate(this._pos_x+15, this._pos_y+15);
                ctx.rotate(4.73);
                ctx.translate(-this._pos_x-15, -this._pos_y-15);
            } else if(last_key == "a")
            {
                ctx.translate(this._pos_x+15, this._pos_y+15);
                ctx.rotate(3.18);
                ctx.translate(-this._pos_x-15, -this._pos_y-15);
            } else if(last_key == "s")
            {
                ctx.translate(this._pos_x+15, this._pos_y+15);
                ctx.rotate(1.63);
                ctx.translate(-this._pos_x-15, -this._pos_y-15);
            }

            if (this._chomp < 7)
            {
                this._chomp = this._chomp + 1;
                ctx.drawImage(this._source[0], this._pos_x, this._pos_y, 30, 30);
            } else if (7 <= this._chomp && this._chomp < 14)
            {
                this._chomp = this._chomp + 1;
                ctx.drawImage(this._source[1], this._pos_x, this._pos_y, 30, 30);
            } else if (14 <= this._chomp && this._chomp < 21)
            {
                this._chomp = this._chomp + 1;
                ctx.drawImage(this._source[2], this._pos_x, this._pos_y, 30, 30);
            } else if (this._chomp == 21)
            {
                this._chomp = 0;
                ctx.drawImage(this._source[0], this._pos_x, this._pos_y, 30, 30);
            }
            ctx.restore();
        } else {
            if (0<=this._respawn_anim  && this._respawn_anim < 30)
            {
                ctx.drawImage(this._source[3], this._pos_x, this._pos_y, 30, 30);
            } else if (15<=this._respawn_anim  && this._respawn_anim < 30)
            {
                ctx.drawImage(this._source[4], this._pos_x, this._pos_y, 30, 30);
            } else if (30<=this._respawn_anim  && this._respawn_anim < 45)
            {
                ctx.drawImage(this._source[5], this._pos_x, this._pos_y, 30, 30);
            } else if (45<=this._respawn_anim  && this._respawn_anim < 60)
            {
                ctx.drawImage(this._source[6], this._pos_x, this._pos_y, 30, 30);
            } else if (60<=this._respawn_anim  && this._respawn_anim < 75)
            {
                ctx.drawImage(this._source[7], this._pos_x, this._pos_y, 30, 30);
            } else if (75<=this._respawn_anim  && this._respawn_anim < 90)
            {
                ctx.drawImage(this._source[8], this._pos_x, this._pos_y, 30, 30);
            } else if (90<=this._respawn_anim  && this._respawn_anim < 105)
            {
                ctx.drawImage(this._source[9], this._pos_x, this._pos_y, 30, 30);
            } else if (105<=this._respawn_anim  && this._respawn_anim < 120)
            {
                ctx.drawImage(this._source[10], this._pos_x, this._pos_y, 30, 30);
            }
            this._respawn_anim = this._respawn_anim + 1;
        }
    }

    set position(pos)
    {
        this._pos_x = pos[0];
        this._pos_y = pos[1];
    }

    set respawnPosition(pos)
    {
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

    get powered_up()
    {
        return this._power_up;
    }

    respawn()
    {
        this._pos_x = this._respawn_pos_x;
        this._pos_y = this._respawn_pos_y;
    }

    set froze(num)
    {
        this._isfrozen = num;
    }

    reset_anim()
    {
        this._respawn_anim = 0;
    }
    
    powerup()
    {
        if (this._power_up == 0)
        {
            this._power_up = 1;
            this._timeout = setTimeout(() => {
                this._power_up = 0;
                this._timeout = 0;
            }, 10000);
        }
    }
}