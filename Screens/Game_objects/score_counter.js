class Score_Counter {
    constructor(score, score_points)
    {
        this._score = score;
        this._score_points = score_points;
    }

    addToScore(label)
    {
        this._score = this._score + this._score_points;
        label.innerText = "Score: "+this._score.toString();
    }

    scoreToNull(label)
    {
        this._score = 0;
        label.innerText = "Score: "+this._score.toString();
    }

    get getscore()
    {
        return this._score;
    }

    addToScorePowerUp(label)
    {
        this._score = this._score + 50;
        label.innerText = "Score: "+this._score.toString();
    }

    eatGhost(label)
    {
        this._score = this._score + 400;
        label.innerText = "Score: "+this._score.toString();
    }
}