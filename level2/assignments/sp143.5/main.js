class player{
    constructor(name){
    this.name = String(name);
    this.totalCoin = 0;
    this.status = "Small";
    this.hasStar = Boolean(false);
    }
setName(namePicked){
    this.name = namePicked;
}
 gotHit(){
    if(this.status === "Powered Up"){
        this.status = "Big";
    }else if(this.status === "Big"){
        this.status = "Small";
    }else if(this.status === "small"){
        this.status = "Dead"
    }
 }
 gotPowerUp(){
    if(this.status === "Small"){
        this.status = "Big";
    } else if(this.status === "Big"){
        this.status = "Powered Up";
    } else if(this.status = "Powered Up"){
        this.hasStar = true;
    }
}
addCoin(){
    this.totalCoins++;
}
print(){
    console.log(`Name: ${this.name}`);
    console.log(`Status: ${this.status}`);
    console.log(`Total Coins: ${this.totalCoins}`);
    console.log(`Has Star: ${this.hasStar}`);
}
}
const mario = new player("Mario");
mario.print();
function randomRange(){
    const result = Math.floor(Math.random() * 3);
    if(result === 0){
        mario.gotHit();
        mario.print();
        if(player.status = "Dead"){
            clearInterval(gameplay);
        }
    } else if(result === 1){
        mario.gotPowerUp();
        mario.print();
    } else if(result === 2){
        mario.addCoin();
        mario.print();
    }
}
const gameplay = setInterval(randomRange, 1000);