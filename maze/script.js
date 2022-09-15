const gamePlane = document.querySelector('.gamePlane')

function makeWall(x, y, w, h, type = 'wall') {
    
    let color = 'aquamarine'
    if (type == 'start') { color = 'rgb(22, 114, 83)'}
    if (type == 'meta') { color = 'black'}
    
    const wall = document.createElement('div')
    wall.style.cssText = `
    background:${color};
    width: ${w}%;
    height:${h}%;
    left: ${x}%;
    top: ${y}%;
    position:absolute;
    `
    wall.className = 'wall'
    if (type != 'wall') {
        wall.className += ' ' + type;
    }
 
    gamePlane.append(wall)
}

const map = [
    [0,0,20,20, 'start'],
  [10,20,20,10],
  [20,30,20,10],
  [30,40,20,10],
  [40,50,20,10],
  [50,60,20,10],
  [60,70,30,10],
  [80,80,20,20, 'meta']

]

for (const wall of map) {
    makeWall(...wall)
}

const game = {
    
    buttons: {
        start: document.querySelector('.start'),
        meta: document.querySelector('.meta'),
        walls: document.querySelectorAll('.wall')
        
    },
    init() {
        
        game.buttons.start.onclick = function () { game.start() }
    },
    start() {
        
        game.buttons.start.onclick = ""
        game.buttons.meta.addEventListener('mousemove', game.over)
        gamePlane.addEventListener('mousemove', game.gamePlaneListener)
       

        for (const wall of game.buttons.walls) {
            
            wall.addEventListener('mousemove', game.wallListener)
        }


        console.log("GAME STARTED")

    },
    wallListener(e) {
        e.stopPropagation();
    },
    gamePlaneListener(e) {
        game.over(false)
    },
    over(result) {
        if (result) {
            modal.show('Wygrana')
        } else {
            modal.show('Przegrana')
        }
        game.buttons.meta.removeEventListener('mousemove', game.over)

        gamePlane.removeEventListener('mousemove', game.gamePlaneListener)
         for(const wall of game.buttons.walls){
      wall.removeEventListener('mousemove', game.wallListener)
        }


        game.init()
    }
}



const modal = {
    dom: document.createElement("div"),
    h1 : document.createElement("h1"),
    init() {
        modal.dom.style.cssText = `
        border: 10px solid rgb(22, 114, 83);
        position: fixed;
        width: 80vw;
        height: 80vh;
        left:10vw;
        top:10vh;
        background:aquamarine;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        display:none;
        text-align: center;
        border-radius: 10px;
        `
        document.body.append(modal.dom)

        modal.h1.innerHTML = "H1"
        modal.dom.append(modal.h1)

        const button = document.createElement("button")
        button.innerHTML = "OK"
        button.style.cssText = `
        padding:1rem 4rem;
        border-radius:1rem;
        cursor:pointer
        `

        button.onclick = function (){modal.hide()}
        modal.dom.append(button)

    },
    show(text) {
        modal.dom.style.display = "flex";
        modal.h1.innerHTML= text
    },
    hide() {
        modal.dom.style.display = "none"
    }
    
}
modal.init()
modal.show('KLIKNIJ NA ZIELONY KAFELEK, ABY ROZPOCZĄĆ GRĘ <br/> PRZESUŃ KURSOR NA CZARNY , ABY WYGRAĆ')
game.init()

