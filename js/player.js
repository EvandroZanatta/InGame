function calcDistance(elDestiny){

    var distance_x = 0,
        distance_y = 0;

    elHero = document.getElementById("hero1");
    elHero = elHero.parentNode;

    elHero_x = elHero.dataset.x;
    elHero_y = elHero.dataset.y;

    elDestiny_x = elDestiny.dataset.x;
    elDestiny_y = elDestiny.dataset.y;

    if(elHero_x < elDestiny_x){
        distance_x = elDestiny_x - elHero_x;
    }else{
        distance_x = elHero_x - elDestiny_x;
    }

    if(elHero_y < elDestiny_y){
        distance_y = elDestiny_y - elHero_y;
    }else{
        distance_y = elHero_y - elDestiny_y;
    }

    if(distance_x > 1 || distance_y > 1){
        return false;
    }

    if(distance_x > 0 && distance_y > 0){
        return false;
    }

    return true;
    
}
class Player {

    constructor(board) {

        this.imgPlayer = '<img src="img/hero1.svg" id="hero1" alt="">';
        this.currentPos = 'map_pos_0_11';

        this.localPlayer1 = document.getElementsByClassName("map_pos_0_11")[0];
        this.localPlayer1.innerHTML = this.imgPlayer;
        this.seletor = 'hero1';
    }
    
    getSeletor(){
        return this.seletor;
    }

    getCurrentPos(){
        return this.currentPos;
    }

    setCurrentPos(el){
        this.currentPos = el.dataset.position;
    }

    removePlayer(){
        document.getElementsByClassName(this.currentPos)[0].innerHTML = '';
    }

    addPlayer(el){
        el.innerHTML = this.imgPlayer;
    }

    move(el){

        if(el.dataset.type != 'road'){
            return false;
        }
        
        if(el.nodeName != "TD"){
            return false;
        }

        if(calcDistance(el) ==  false){
            return false;
        }

        this.removePlayer(el);
        this.setCurrentPos(el);
        this.addPlayer(el);
    }


}