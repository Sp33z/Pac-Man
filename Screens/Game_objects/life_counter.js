class Life_Counter {
    constructor(lives)
    {
        this._lives = lives;
        this._lives_copy = lives;
    }

    removeLive(label)
    {
        this._lives = this._lives - 1;
        if (this._lives == -1)
        {
            label.innerText = "Lives: 0";
        } else {
            label.innerText = "Lives: "+this._lives.toString();
        }
    }

    restoreLives(label)
    {
        this._lives = this._lives_copy;
        label.innerText = "Lives: "+this._lives.toString();
    }

    get remainingLives()
    {
        return this._lives;
    }
}