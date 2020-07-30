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
        if(i == j){  // when p1 stop at the same index with p2 in the same time
            pumpSound.play();
            alert("You're loser, Captain");
            j = 1;  // p2 goes back to #box1
            document.querySelector("#b"+j).appendChild(p2);
            // updated the index by #b-box position + j index, and append p2 latest position which been shown
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

// function traps #box4,7,10,12,17,21,26,28 
// becomes bigger when hit move command, becomes smaller when hit reverse command 
function trap(){
    if(i == 4){  //when p1 gets into #box4 
        moveSound.play();
        dice2.style.pointerEvents = "none"; // dice2 does not react to pointer events
        p1.style.animation = "bigger .7s"; // p1 becomes bigger for 0.7second
        // move function setInterval and clearInterval
        // setInterval method executes a movement function with speed given
        let go = setInterval(function(){
            i++; //index p1++ : trigger out the move forward function
            // update the latest position of p1 by adding the previous position(#b) and new index(i)
            document.querySelector("#b"+i).appendChild(p1); 
        },speed); //speed =700
        setTimeout(function(){
            clearInterval(go);  //stop interval
        },speed * 4 + 100);
        // after clearInterval , stop animation and dice2 turns
        setTimeout(function(){
            p1.style.animation = "none";  // animation does not react for p1
            dice2.style.pointerEvents = "auto";  // dice2 reacts to pointer events
            ironman1(); //check function whether they meet together
        },speed * 5);
    }
    if(j == 4){   // when p2 reach #slot4
        moveSound.play();
        dice1.style.pointerEvents = "none"; // dice1 no working
        p2.style.animation = "bigger .7s"; // becomes bigger
        // setInterval method executes a movement function with speed given
        let go = setInterval(function(){  
            j++;    // index p2++: moving forward
            document.querySelector("#b"+j).appendChild(p2);   //update position in map for p2
        },speed);
        setTimeout(function(){
            clearInterval(go);   //stop interval
        },speed * 4 + 100);
        // new setTimeout function create to point dice1 roller and check captain2()function
        setTimeout(function(){
            p2.style.animation = "none";  // p2 animation does not react for
            dice1.style.pointerEvents = "auto";  // dice1 reacts to pointer events
            captain2();
        },speed * 5);
    }
    if(i == 10){
        moveSound.play();
        dice2.style.pointerEvents = "none";
        p1.style.animation = "bigger .7s";
        let go = setInterval(function(){
            i++;
            document.querySelector("#b"+i).appendChild(p1);
        },speed);
        setTimeout(function(){
            clearInterval(go);
        },speed * 6 + 100);
        setTimeout(function(){
            p1.style.animation = "none";
            dice2.style.pointerEvents = "auto";
            ironman1();
        },speed * 7);
    }
    if(j == 10){
        moveSound.play();
        dice1.style.pointerEvents = "none";
        p2.style.animation = "bigger .7s";
        let go = setInterval(function(){
            j++;
            document.querySelector("#b"+j).appendChild(p2);
        },speed);
        setTimeout(function(){
            clearInterval(go);
        },speed * 6 + 100);
        setTimeout(function(){
            p2.style.animation = "none";
            dice1.style.pointerEvents = "auto";
            captain2();
        },speed * 7);
    }
    //reverser backward trap function
    if(i == 12){  //when p12 gets to #box12
        reverseSound.play();
        dice2.style.pointerEvents = "none";  // dice2 doest not react to pointer events
        p1.style.animation = "smaller .7s";  // p1 becomes smaller for 0.7 sec
        //define movement function by setting interval(function,speed)
        let go = setInterval(function(){
            i--;  // p1-- reverse movement
            document.querySelector("#b"+i).appendChild(p1);  // update position p1 by using appenChild method
        },speed);
        //stop interval
        setTimeout(function(){
            clearInterval(go);
        },speed*3 + 100);
        setTimeout(function(){  //setTimeout while p2 turn
            p1.style.animation = "none";  // p1 animation stop
            dice2.style.pointerEvents = "auto";  //dice2 reacts on pointer events
            ironman1();  //check function ironman()
        },speed * 4);  //speed 700*4
    }
    if(j == 12){
        reverseSound.play();
        dice1.style.pointerEvents = "none";
        p2.style.animation = "smaller .7s";
        let go = setInterval(function(){
            j--;
            document.querySelector("#b"+j).appendChild(p2);
        },speed);
        setTimeout(function(){
            clearInterval(go);
        },speed*3 + 100);
        setTimeout(function(){
            p2.style.animation = "none";
            dice1.style.pointerEvents = "auto";
            captain2();
        },speed * 4);
    }
    if(i == 21){
        reverseSound.play();
        dice2.style.pointerEvents = "none";
        p1.style.animation = "smaller .7s";
        let go = setInterval(function(){
            i--;
            document.querySelector("#b"+i).appendChild(p1);
        },speed);
        setTimeout(function(){
            clearInterval(go);
        },speed * 5 + 100);
        setTimeout(function(){
            p1.style.animation = "none";
            dice2.style.pointerEvents = "auto";
            ironman1();
        },speed * 6);
    }
    if(j == 21){
        reverseSound.play();
        dice1.style.pointerEvents = "none";
        p2.style.animation = "smaller .7s";
        let go = setInterval(function(){
            j--;
            document.querySelector("#b"+j).appendChild(p2);
        },speed);
        setTimeout(function(){
            clearInterval(go);
        },speed * 5 + 100);
        setTimeout(function(){
            p2.style.animation = "none";
            dice1.style.pointerEvents = "auto";
            captain2();
        },speed * 6);
    }
    if(i == 26){
        moveSound.play();
        dice2.style.pointerEvents = "none";
        p1.style.animation = "bigger .7s";
        let go = setInterval(function(){
            i++;
            document.querySelector("#b"+i).appendChild(p1);
        },speed);
        setTimeout(function(){
            clearInterval(go);
        },speed + 100);
        setTimeout(function(){
            p1.style.animation = "none";
            dice2.style.pointerEvents = "auto";
            ironman1();
        },speed * 2);
    }
    if(j == 26){
        moveSound.play();
        dice1.style.pointerEvents = "none";
        p2.style.animation = "bigger .7s";
        let go = setInterval(function(){
            j++;
            document.querySelector("#b"+j).appendChild(p2);
        },speed);
        setTimeout(function(){
            clearInterval(go);
        },speed + 100);
        setTimeout(function(){
            p2.style.animation = "none";
            dice1.style.pointerEvents = "auto";
            captain2();
        },speed * 2);
    }
    if(i == 28){
        reverseSound.play();
        dice2.style.pointerEvents = "none";
        p1.style.animation = "smaller .7s";
        let go = setInterval(function(){
            i--;
            document.querySelector("#b"+i).appendChild(p1);
        },speed);
        setTimeout(function(){
            clearInterval(go);
        },speed * 10 + 100);
        setTimeout(function(){
            p1.style.animation = "none";
            dice2.style.pointerEvents = "auto";
            ironman1();
        },speed * 11);
    }
    if(j == 28){
        reverseSound.play();
        dice1.style.pointerEvents = "none";
        p2.style.animation = "bigger .7s";
        let go = setInterval(function(){
            j--;
            document.querySelector("#b"+j).appendChild(p2);
        },speed);
        setTimeout(function(){
            clearInterval(go);
        },speed * 10 + 100);
        setTimeout(function(){
            p2.style.animation = "none";
            dice1.style.pointerEvents = "auto";
            captain2();
        },speed * 11);
    }
    // #box7 is one more chance to roll dice
    if(i == 7){   //when player1 reach #box7
        winnerSound.play();
        c1.style.visibility = "visible";  //c1 is p1.controller visible again
        c2.style.visibility = "hidden"; // c2 keeps hidden
        dice1.style.pointerEvents = "auto"; //dice1 reacts to pointer events
    }
    if(j == 7){
        winnerSound.play();
        c2.style.visibility = "visible";
        c1.style.visibility = "hidden";
        dice2.style.pointerEvents = "auto";
    }
    // #box17 has a trap which go back #box1
    if(i == 17){  // when p1 steps in #box17
        backOneSound.play();
        alert("Captain sucks!");  //alert appear on screen
        i = 1;  // p1 back to #box1
        document.querySelector("#b"+i).appendChild(p1);  // update position on screen by appending()method
    }
    if(j == 17){
        backOneSound.play();
        alert("Ironman sucks!");
        j = 1;
        document.querySelector("#b"+j).appendChild(p2);
    }
    
}

// ready function will run after all html file loaded by browser
const ready = function(callback){   //see if DOM is already available
    if (document.readyState != "loading") {
         callback();  // callback if readyState not loading
        } else {document.addEventListener("DOMContentLoaded", callback);
        //else DOM is ready, so the handler can lookup DOM nodes, initialize the interface.
    }
}

//DOM is loaded and ready for manipulation: player's movement runs with dice controller
ready(function(){ 
    //make two players turn as random pick (refresh or restart as well)
    //it's all depend on luck who's gonna start the game
    let x = Math.ceil(Math.random()*2);
    document.querySelector("#c"+x).style.visibility = "hidden";
    
    //if wanna make p1 starts the game, c2 should be hidden in well beginning of movement
    // let x = document.getElementById("c2");
    // x.style.visibility = "hidden"

    //create dice1(p1) function
    dice1.addEventListener("click", function(){
        let num = Math.ceil(Math.random()*6);  //random number of those six real dices
        let bgi = Math.ceil(Math.random()*2);  //randomly switching images
        //background of dice rolling image - using s1/s2 images
        dice1.style.backgroundImage = "url(img/s"+bgi+".png)"; 
        //after 300 milliseconds change rolling dice image to the real dice
        setTimeout(function(){
            dice1.style.backgroundImage = "url(img/"+num+".png)";
        }, 300);
        dice1.style.pointerEvents = "none";  //dice1 does not react after that
        dice2.style.pointerEvents = "auto";  //dice2 turns, so dice2 react to pointer event
        // make movement function according to dice num 1-6
        if(num == 1){
            setTimeout(function(){
                i++;  // p1 movement with index
                document.querySelector("#b"+i).appendChild(p1);  //update previous position+i then append p1
                c1.style.visibility = "hidden";  // c1 been hidden because  it's c2 turns
                c2.style.visibility = "visible";  // c2 appear
                trap();  //check trap function
                ironman1(); //check p1 function
            },speed);  //move's speed
            ;
        }
        if(num == 2){
            let move = setInterval(function(){
                i++;
                document.querySelector("#b"+i).appendChild(p1);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c1.style.visibility = "hidden";
                c2.style.visibility = "visible";
                trap();
                ironman1();
            },speed*2 + 100);
            ;
        }
        if(num == 3){
            let move = setInterval(function(){
                i++;
                document.querySelector("#b"+i).appendChild(p1);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c1.style.visibility = "hidden";
                c2.style.visibility = "visible";
                trap();
                ironman1();
            },speed*3 + 100);
            ;
        }
        if(num == 4){
            let move = setInterval(function(){
                i++;
                document.querySelector("#b"+i).appendChild(p1);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c1.style.visibility = "hidden";
                c2.style.visibility = "visible";
                trap();
                ironman1();
            },speed * 4 + 100);
            ;
        }
        if(num == 5){
            let move = setInterval(function(){
                i++;
                document.querySelector("#b"+i).appendChild(p1);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c1.style.visibility = "hidden";
                c2.style.visibility = "visible";
                trap();
                ironman1();
            },speed * 5 + 100);
            ;
        }
        if(num == 6){
            let move = setInterval(function(){
                i++;
                document.querySelector("#b"+i).appendChild(p1);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c1.style.visibility = "hidden";
                c2.style.visibility = "visible";
                trap();
                ironman1();
            },speed * 6 + 100);
            ;
        }
    });
    dice2.addEventListener("click", function(){
        let num = Math.ceil(Math.random()*6);
        let bgi = Math.ceil(Math.random()*2);
        dice2.style.backgroundImage = "url(img/s"+bgi+".png)";
        setTimeout(function(){
            dice2.style.backgroundImage = "url(img/"+num+".png)";
        }, 300);
        dice2.style.pointerEvents = "none";
        dice1.style.pointerEvents = "auto";
        if(num == 1){
            setTimeout(function(){
                j++;
                document.querySelector("#b"+j).appendChild(p2);
                c2.style.visibility = "hidden";
                c1.style.visibility = "visible";
                trap();
                captain2();
            },speed);
            ;
        }
        if(num == 2){
            let move = setInterval(function(){
                j++;
                document.querySelector("#b"+j).appendChild(p2);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c2.style.visibility = "hidden";
                c1.style.visibility = "visible";
                trap();
                captain2();
            },speed*2 + 100);
            ;
        }
        if(num == 3){
            let move = setInterval(function(){
                j++;
                document.querySelector("#b"+j).appendChild(p2);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c2.style.visibility = "hidden";
                c1.style.visibility = "visible";
                trap();
                captain2();
            },speed*3 + 100);
            ;
        }
        if(num == 4){
            let move = setInterval(function(){
                j++;
                document.querySelector("#b"+j).appendChild(p2);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c2.style.visibility = "hidden";
                c1.style.visibility = "visible";
                trap();
                captain2();
            },speed * 4 + 100);
            ;
        }
        if(num == 5){
            let move = setInterval(function(){
                j++;
                document.querySelector("#b"+j).appendChild(p2);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c2.style.visibility = "hidden";
                c1.style.visibility = "visible";
                trap();
                captain2();
            },speed * 5 + 100);
            ;
        }
        if(num == 6){
            let move = setInterval(function(){
                j++;
                document.querySelector("#b"+j).appendChild(p2);
            }, speed);
            setTimeout(function(){
                clearInterval(move);
                c2.style.visibility = "hidden";
                c1.style.visibility = "visible";
                trap();
                captain2();
            },speed * 6 + 100);
            ;
        }
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