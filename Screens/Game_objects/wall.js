class Wall {
    constructor(pos_x, pos_y, source)
    {
        this._pos_x = pos_x;
        this._pos_y = pos_y;
        this._source = source;
    }

    place_wall(ctx)
    {
        ctx.drawImage(this._source, this._pos_x, this._pos_y, 30, 30);
    }

    get position()
    {
        return [this._pos_x, this._pos_y];
    }

    get getSource()
    {
        return this._source;
    }
}