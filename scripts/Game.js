class Game{
    constructor(level, player, life, ctx){
        this.lvl = level;
        this.player = player;
        this.score = 0;
        this.attempts = life; 
        this.obstacles = [];
        this.platforms = [];
        this.bugs = [];
        this.ctx = ctx;
        this.isGameOver = false;
        
        
        
    }

}