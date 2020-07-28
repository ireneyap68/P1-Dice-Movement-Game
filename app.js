// DOM references
let p1= document.getElementById("player-1");
let p2= document.getElementById("player-2");
let end = document.querySelector("#b29");
let dice1 = document.querySelector("#dice1");
let dice2 = document.querySelector("#dice2");
let b4 = document.getElementById("b4");
//let b10 = document.getElementById("b10");
let b12 = document.getElementById("b12");
//let b17 = document.getElementById("b17");
//let b21 = document.getElementById("b21");
//let b26 = document.getElementById("b26");
//let b28 = document.getElementById("b28");
let speed = 700


// define index i=p1 and j=p2 for movement used 
let i = 0
let j = 0

// make a dice function
const playerTurn = (function(){
    var x = Math.ceil(Math.random()*2);
    playerTurn = $(`#c${x}`);    //$("#c"+x+"").css("visibility","hidden");
    playerTurn.style.visibility = "hidden";

})


// set p1 function when meet up with p2 in the same slot
// timeout function setting because want to show an alert to p2
function ironman1() {
    setTimeout(function(){
        if(i===j) {
            alert("Hey Captain, you'll be loser soon!")
            j = 1;
            $(`#b${j}`).append(p2)   //p2 goes back to box1 and appear at the screen
        }
    }, 300);
}

function captain2() {
    setTimeout(function(){
        if(i===j) {
            alert("Hey Ironman, you can't win!")
            i = 1; //player1 will get back to beginning point
            $(`#b${j}`).append(p1)
        }
    }, 300);
}

// Board's trap for each player
const trap = () => {
    if(i == 4){  //player1 when stepping up box4
        dice2.css("pointer-event", "none");  //dice2 stop pointer-even
        p1.style.animation = "bigger .7s"; //set p1 animation
        var go = setInterval(function (){
            i++;
            $(`#b${i}`).append(p1);  // movement shown
        }, speed);

        setTimeout (function() {
            clearInterval(go);  //clear go interval
        }, speed*4 +100);    //speed setting

        setTimeout(function(){
            p1.style.animation = "none";
            dice2.css("pointer-event", "auto");
            ironman1();
        }, speed*5);
    }

    if(j == 4) {   //player2 -> box4
        dice1.css("pointer-event", "none");
        p2.style.animamtion = "bigger .7s";
        var go = setInterval(function() {
            j++;
            $(`#b${j}`).append(p2);
            
        }, speed)

        setTimeout(function(){
            clearInterval(go);
        }, speed*4 +100)

        setTimeout(function(){
            p2.style.animation = "none";
            dice1.css("pointer-events", "auto");
            captain2()
        }, speed*5);
    }

    if(i == 12){
        dice2.css("pointer-events","none");
        p1.style.animation = "smaller .7s";
        var go = setInterval(function(){
            i--;
            $(`#b${i}`).append(p1);
        },speed);
        setTimeout(function(){
            clearInterval(go);
        },speed*3 + 100);
        setTimeout(function(){
            p1.style.animation = "none";
            dice2.css("pointer-events","auto");
            ironman1();
        },speed * 4);
    }
    if(j == 12){
        dice1.css("pointer-events","none");
        p2.style.animation = "smaller .7s";
        var go = setInterval(function(){
            j--;
            $(`#b${j}`).append(p2);
        },speed);
        setTimeout(function(){
            clearInterval(go);
        },speed*3 + 100);
        setTimeout(function(){
            p2.style.animation = "none";
            dice1.css("pointer-events","auto");
            captain2();
        },speed * 4);
    }
    
}

const diceRollerP1 = (function() {	
    //dice1.addEventListener....
    dice1.addEventListener("click",() => {
        let num = Math.ceil(Math.random()*6);
        let bgi = Math.ceil(Math.random()*2);
        document.getElementsByClassName("dice1").src = "img/s" + bgi + ".png";  //fake dice anime image turning
        setTimeout(function(){
            document.getElementsByClassName("dice1").src = "img/" + num + ".png";  // real movement dice1 setting
        }, 300);
            //pointer-event 
        dice1.style.display = ("pointer-events","none");
        dice2.style.display = ("pointer-events", "auto");

        if(num == 1){
            setTimeout(function(){
                i++;
                $(`#b${i}`).append(p1);
                c1.css("visibility","hidden");
                c2.css("visibility","visible");
                trap();
                ironman1();
            },speed);
        }

        if(num == 2) {
            var move = setInterval(function(){
                i++;
                $(`#b${i}`).append(p1);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c1.css("visibility","hidden");
                c2.css("visibility","visible");
                trap();
                ironman1();
            },speed*2 + 100);
        }

        if(num == 3) {
            var move = setInterval(function(){
                i++;
                $(`#b${i}`).append(p1);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c1.css("visibility","hidden");
                c2.css("visibility","visible");
                trap();
                ironman1();
            },speed*3 + 100);
        }
        if(num == 4){
            var move = setInterval(function(){
                i++;
                $(`#b${i}`).append(p1);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c1.css("visibility","hidden");
                c2.css("visibility","visible");
                trap();
                ironman1();
            },speed * 4 + 100);
            ;
        }

        if(num == 5){
            var move = setInterval(function(){
                i++;
                $(`#b${i}`).append(p1);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c1.css("visibility","hidden");
                c2.css("visibility","visible");
                trap();
                ironman1();
            },speed * 5 + 100);
            
        }
        if(num == 6){
            var move = setInterval(function(){
                i++;
                $(`#b${i}`).append(p1);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c1.css("visibility","hidden");
                c2.css("visibility","visible");
                trap();
                ironman1();
            },speed * 6 + 100);
            
        }   
    })
})

const diceRollerP2 = (function() {	
    //dice1.addEventListener....
    dice1.addEventListener("click",() => {
        let num = Math.ceil(Math.random()*6);
        let bgi = Math.ceil(Math.random()*2);
        document.getElementsByClassName("dice2").src = "img/s" + bgi + ".png";  //fake dice anime image turning
        setTimeout(function(){
            document.getElementsByClassName("dice2").src = "img/" + num + ".png";  // real movement dice1 setting
        }, 300);
            //pointer-event 
        dice2.style.display = ("pointer-events", "none");
        dice1.style.display = ("pointer-events","auto");

        if(num == 1){
            setTimeout(function(){
                j++;
                $(`#b${j}`).append(p2);
                c2.css("visibility","hidden");
                c1.css("visibility","visible");
                trap();
                captain2();
            },speed);
        }

        if(num == 2) {
            var move = setInterval(function(){
                j++;
                $(`#b${j}`).append(p2);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c2.css("visibility","hidden");
                c1.css("visibility","visible");
                trap();
                captain2();
            },speed*2 + 100);
        }

        if(num == 3) {
            var move = setInterval(function(){
                j++;
                $(`#b${j}`).append(p2);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c2.css("visibility","hidden");
                c1.css("visibility","visible");
                trap();
                captain2();
            },speed*3 + 100);
        }
        if(num == 4){
            var move = setInterval(function(){
                j++;
                $(`#b${j}`).append(p2);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c2.css("visibility","hidden");
                c1.css("visibility","visible");
                trap();
                captain2();
            },speed * 4 + 100);
            ;
        }
        if(num == 5){
            var move = setInterval(function(){
                j++;
                $(`#b${j}`).append(p2);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c2.css("visibility","hidden");
                c1.css("visibility","visible");
                trap();
                captain2();
            },speed * 5 + 100);
            
        }
        if(num == 6){
            var move = setInterval(function(){
                j++;
                $(`#b${j}`).append(p2);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c2.css("visibility","hidden");
                c1.css("visibility","visible");
                trap();
                captain2();
            },speed * 6 + 100);
            
        }
    })
})

// function for winner, reset 
const check = setInterval(function(){
    if(end.lastElementChild.getAttribute("id") == "player1"){
        alert("Batman won!!!");
        clearInterval(check);
        location.reload();
    }
    if(end.lastElementChild.getAttribute("id") == "player2"){
        alert("Superman won!!!");
        clearInterval(check);
        location.reload();
    }
},1000);
