let i = 0;  // index for player1
let j = 0;  // index for player2
let dice1 = document.querySelector(".dice1"); //p1 - dice roller
let dice2 = document.querySelector(".dice2"); //p2 - dice roller
let c1 = document.getElementById("c1");  // p1 movement controller
let c2 = document.getElementById("c2"); // p2 movement controller
let p1 = document.getElementById("player1"); // p1 image
let p2 = document.getElementById("player2"); // p2 image
// DOM boxes id (grid) with special trap function
let end = document.getElementById("b29");
let b4 = document.getElementById("b4");
let b10 = document.getElementById("b10");
let b12 = document.getElementById("b12");
let b17 = document.getElementById("b17");
let b21 = document.getElementById("b21");
let b26 = document.getElementById("b26");
let b28 = document.getElementById("b28");
let speed = 700;
let reset = document.querySelector(".btn1"); //restart button
let winnerSound = document.getElementById("sound1");
let pumpSound = document.getElementById("sound2");
let moveSound = document.getElementById("sound3");
let reverseSound = document.getElementById("sound4");
let backOneSound = document.getElementById("sound5");


// create reset button
reset.addEventListener("click", function(){
    location.reload();
});
    
// setTimeout to execute p1 and p2 meet each other and stop after 300 milliseconds
function ironman1(){
    setTimeout(function(){	
        if(i == j){  // when p1 stop at the same box with p2 
            pumpSound.play();
            alert("You're loser, Captain");
            j = 1;  // p2 goes back to #box1
            document.querySelector("#b"+j).appendChild(p2);
            // update the index by #b-box position + j index, and append p2 latest position which been shown
        }
    },300);
}
// function p2 hit p1 in the same time
function captain2(){
    setTimeout(function(){
        if(i == j){
            pumpSound.play();
            alert("You can't win, Ironman.");
            i = 1;  // p1 goes back to #box1
            document.querySelector("#b"+i).appendChild(p1);
            // update latest position p1
        }
    },300);
}

// traps function #box4,7,10,12,17,21,26,28 
// when players hit certain grid box, they will trigger out different function.
function trap(callback){
    if(i == 4){  //when p1 gets into #box4 
        moveSound.play();
        dice2.style.pointerEvents = "none"; // dice2 does not react to pointer events
        p1.style.animation = "bigger .7s"; // p1 becomes bigger for 0.7second
        // move function setInterval and clearInterval
        // setInterval method executes a movement function with speed given
        let countP1 = 0;  //move count 
        let go = setInterval(function(){
            countP1++;
            i++; //index p1++ : trigger out the move forward function
            // update the latest position of p1 by adding the previous position(#b) and new index(i)
            document.querySelector("#b"+i).appendChild(p1);
            if (countP1==4){    //when p1 moves 4 Steps to box 4
                clearInterval(go);  //stop interval
                callback(true);
            }
        },speed); //speed =700
        return  //function is stop
    }
    if(j == 4){   // when p2 hit #box4
        moveSound.play();
        dice1.style.pointerEvents = "none"; // dice1 no working
        p2.style.animation = "bigger .7s"; // becomes bigger
        // setInterval method executes a movement function with speed given
        let countP2 = 0;
        let go = setInterval(function(){  
            countP2++;
            j++;    // index p2++: moving forward
            document.querySelector("#b"+j).appendChild(p2);   //update position in map for p2
            if(countP2 == 4){
                clearInterval(go);   //stop interval
                callback(true);
            }
        },speed);
        return
    }
    if(i == 10){
        moveSound.play();
        dice2.style.pointerEvents = "none";
        p1.style.animation = "bigger .7s";
        let countP1 = 0;
        let go = setInterval(function(){
            countP1++;
            i++;
            document.querySelector("#b"+i).appendChild(p1);
            if(countP1 == 6){
                clearInterval(go);  //stop interval
                callback(true);
            }
        },speed);
        return
    }
    if(j == 10){
        moveSound.play();
        dice1.style.pointerEvents = "none";
        p2.style.animation = "bigger .7s";
        let countP2 = 0;
        let go = setInterval(function(){
            countP2++;
            j++;
            document.querySelector("#b"+j).appendChild(p2);
            if(countP2 == 6){
                clearInterval(go);  //stop interval
                callback(true);
            }
        },speed);
        return
    }
    //reverse backward trap function
    if(i == 12){  //when p1 gets to #box12
        reverseSound.play();
        dice2.style.pointerEvents = "none";  // dice2 doest not react to pointer events
        p1.style.animation = "smaller .7s";  // p1 becomes smaller for 0.7 sec
        //define movement function by setting interval(function,speed)
        let countP1 = 0; // move count p1
        let go = setInterval(function(){
            countP1++; 
            i--;  // p1-- reverse movement
            document.querySelector("#b"+i).appendChild(p1);  // update position p1 by using appenChild method
            if(countP1 == 3){  //if p1 moves 3 steps to box12 so it will stop interval and start the callback
                clearInterval(go);  //stop interval
                callback(true);
            }
        },speed);
        return
    }
    if(j == 12){
        reverseSound.play();
        dice1.style.pointerEvents = "none";
        p2.style.animation = "smaller .7s";
        let countP2 = 0;
        let go = setInterval(function(){
            countP2++;
            j--;
            document.querySelector("#b"+j).appendChild(p2);
            if(countP2 == 3){
                clearInterval(go);  //stop interval
                callback(true);
            }
        },speed);
        return
    }
    if(i == 21){
        reverseSound.play();
        dice2.style.pointerEvents = "none";
        p1.style.animation = "smaller .7s";
        let countP1 = 0;
        let go = setInterval(function(){
            countP1++;
            i--;
            document.querySelector("#b"+i).appendChild(p1);
            if(countP1 == 5){
                clearInterval(go);  //stop interval
                callback(true);
            }
        },speed);
        return
    }
    if(j == 21){
        reverseSound.play();
        dice1.style.pointerEvents = "none";
        p2.style.animation = "smaller .7s";
        let countP2 = 0;
        let go = setInterval(function(){
            countP2++;
            j--;
            document.querySelector("#b"+j).appendChild(p2);
            if(countP2 == 5){
                clearInterval(go);  //stop interval
                callback(true);
            }
        },speed);
        return
    }
    if(i == 26){
        moveSound.play();
        dice2.style.pointerEvents = "none";
        p1.style.animation = "bigger .7s";
        let countP1 = 0;
        let go = setInterval(function(){
            countP1++;
            i++;
            document.querySelector("#b"+i).appendChild(p1);
            if(countP1 == 1){
                clearInterval(go);  //stop interval
                callback(true);
            }
        },speed);
        return
    }
    if(j == 26){
        moveSound.play();
        dice1.style.pointerEvents = "none";
        p2.style.animation = "bigger .7s";
        let countP2 = 0;
        let go = setInterval(function(){
            countP2++;
            j++;
            document.querySelector("#b"+j).appendChild(p2);
            if(countP2 == 1){
                clearInterval(go);  //stop interval
                callback(true);
            }
        },speed);
        return
    }
    if(i == 28){
        reverseSound.play();
        dice2.style.pointerEvents = "none";
        p1.style.animation = "smaller .7s";
        let countP1 = 0;
        let go = setInterval(function(){
            countP1++;
            i--;
            document.querySelector("#b"+i).appendChild(p1);
            if(countP1 == 10){
                clearInterval(go);  //stop interval
                callback(true);
            }
        },speed);
        return
    }
    if(j == 28){
        reverseSound.play();
        dice1.style.pointerEvents = "none";
        p2.style.animation = "bigger .7s";
        let countP2 = 0;
        let go = setInterval(function(){
            countP2++;
            j--;
            document.querySelector("#b"+j).appendChild(p2);
            if(countP2 == 10){
                clearInterval(go);  //stop interval
                callback(true);
            }
        },speed);
        return
    }
    // #box7 is one more chance to roll dice
    if(i == 7){   //when player1 reach #box7
        winnerSound.play();
        c1.style.visibility = "visible";  //c1 is p1.controller visible again
        c2.style.visibility = "hidden"; // c2 keeps hidden
        dice1.style.pointerEvents = "auto"; //dice1 reacts to pointer events
        return
    }
    if(j == 7){
        winnerSound.play();
        c2.style.visibility = "visible";
        c1.style.visibility = "hidden";
        dice2.style.pointerEvents = "auto";
        return
    }
    // #box17 has a trap which go back #box1
    if(i == 17){  // when p1 steps in #box17
        backOneSound.play();
        alert("Captain sucks!");  //alert appear on screen
        i = 1;  // p1 back to #box1
        document.querySelector("#b"+i).appendChild(p1);  // update position on screen by appending()method
        callback(true)
        return
    }
    if(j == 17){
        backOneSound.play();
        alert("Ironman sucks!");
        j = 1;
        document.querySelector("#b"+j).appendChild(p2);
        callback(true)
        return
    }
    callback(true) // inside trap function
    
}


// p1 and p2 movement function
function moveIronman(num){
    let countP1 = 0;  // move count is 0
    let move = setInterval(() => {  //set interval function for movement p1
        i++; // index i++
        countP1++; //move count++
        document.querySelector("#b"+i).appendChild(p1); //update new position
        if(countP1 == num){  
            clearInterval(move) // stop interval
            trap(()=>{  // trap function 
                ironman1();  // check ironman1 function which is the kickoff function
                setTimeout(()=>{  //set timeout after 100 milliseconds to switch p2 turn
                    c1.style.visibility = "hidden";  // hide c1 dice roller
                    c2.style.visibility = "visible";   // visible c2 dice roller
                    dice1.style.pointerEvents = "none"  //dice1 pointer-event off
                    dice2.style.pointerEvents = "auto"  // dice2 react the pointer event
                },100); 
            }); 
        }
    }, speed);

};
function moveCaptain(num){
   let countP2 = 0;
    var move = setInterval(() => {
        j++;
        countP2++;
        document.querySelector("#b"+j).appendChild(p2);
        if(countP2 == num){
            clearInterval(move)
            trap(()=>{
                captain2();
                setTimeout(()=>{
                    c2.style.visibility = "hidden";
                    c1.style.visibility = "visible"; 
                    dice1.style.pointerEvents = "auto"
                    dice2.style.pointerEvents = "none"
                },100);
                
            });
            
        }
    }, speed);

};

// ready function will run after all html file loaded by browser
const ready = function(callback){   //see if DOM is already available
    if (document.readyState != "loading") {
         callback();  // callback if readyState not loading
        } else {document.addEventListener("DOMContentLoaded", callback);
        //else DOM is ready, so the handler can lookup DOM nodes, initialize the interface.
    }
}

//DOM is loaded and ready for manipulation: player's movement runs with dice controller
ready(function(){ // control who gonna start the game/dice roller
    //random pick (refresh or restart as well)
    //it's all depend on luck who's gonna start the game
    let x = Math.ceil(Math.random()*2);
    document.querySelector("#c"+x).style.visibility = "hidden";
    
    //if wanna make p1 starts the game, c2 should be hidden in well beginning of movement
    // let x = document.getElementById("c2");
    // x.style.visibility = "hidden"

    //create dice1(p1) function
    dice1.addEventListener("click", function(){
        dice1.style.pointerEvents = "none";  //dice1 does not react after that
        let num = Math.ceil(Math.random()*6);  //random dice number 1-6
        let bgi = Math.ceil(Math.random()*2);  //randomly switching images
        //background of dice rolling image - using s1/s2 images
        dice1.style.backgroundImage = "url(img/s"+bgi+".png)"; 
        //after 300 milliseconds change rolling dice image to the real dice
        setTimeout(function(){
            dice1.style.backgroundImage = "url(img/"+num+".png)";
            dice2.style.pointerEvents = "auto";  //dice2 turns, so dice2 react to pointer event
            // make movement function according to dice num 1-6     
            moveIronman(num)
        }, 300);
 
    });
    dice2.addEventListener("click", function(){
        dice2.style.pointerEvents = "none";
        let num = Math.ceil(Math.random()*6);
        let bgi = Math.ceil(Math.random()*2);
        dice2.style.backgroundImage = "url(img/s"+bgi+".png)";
        setTimeout(function(){
            dice2.style.backgroundImage = "url(img/"+num+".png)";
            dice1.style.pointerEvents = "auto";
            moveCaptain(num)
        }, 300);   
        
    });
});

// check the winner who get into #box29 first, alert shows after 1 sec.
let check = setInterval(function(){
    if(end.lastElementChild.getAttribute("id") == "player1"){
        alert("Ironman won!!!");
        clearInterval(check);
        location.reload();
    }
    if(end.lastElementChild.getAttribute("id") == "player2"){
        alert("Captain won!!!");
        clearInterval(check);
        location.reload();
    } 
},1000);