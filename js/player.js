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
        this.removePlayer(el);
        this.setCurrentPos(el);
        this.addPlayer(el);
    }


}