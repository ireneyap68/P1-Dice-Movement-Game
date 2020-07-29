# P1-dice-movement-game
 Dice Board Movement Game

##  Summary
1. This game involves TWO players by using dice roller to move their steps. The winner is who hit the end point.

2. Board designs with css-grids. Within the board, players will catch in a trap when trigger some points: moving forward, reserve and restart. 

3. If two players meet on the same point, last player kicks the previous player to starting point!

4. Alert message will show the winner at the end.

## HTML
1. Insert: Boilerplate, css and javascript.
2. Set Div to movement board / 2 players movement / images for dice and others.

* create players id and input images represent p1 and p2
```html
    <div class="character">
                <img id= "player-1" src="" alt="">
                <img id="player-2" src="" alt="">
```

* create class "map" = game's board, 50 blocks include grid-movement and grid-blanks.
```html
    <div class="map">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
```

## CSS
* Create movement board by using:
``` css
    .map {
        position: absolute;
        display: grid;
        grid-template-columns: repeat(10,1fr);
        grid-template-rows: repeat(5,1fr);
        grid-gap: 3px;
        left: 0%;
        top: 0%;
        width: 100%;
        height: 100%;
    }
```
* Set position - dice and players

The z-index property in CSS controls the vertical stacking order of elements that overlap. I'm planning to let 2 players overlaps when turn into same slot.
```css
    character img{ 
        position: relative;
        margin-top:10%;
        width:80px;
        z-index: 1;
    }
```

The transform property applies a 2D or 3D transformation to an element. The translate() CSS function repositions an element in the horizontal and/or vertical directions. It result is a <transform-function> data type. I want my dice looks translated so I decided to use transform.
```css
    .dice1, .dice2{
        width: 100px;
        height: 100px;
        background-image: url(img/1.jpg);
        cursor: pointer;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
```


## Javascript
* Declare variable: players, dice, boxes(slot) and others.
* DOM tree - document.querySelector / document.getElementById.
* Create Functions: dice movement, players, traps and winner .

I used a lot of - setTimeout(function, milliseconds) - to execute a function, after waiting a specified number of milliseconds.
```javascript
    function ironman1(){
        setTimeout(function(){	
            if(i == j){  // p1 when hit the same index with p2 in the same time
                alert("You're loser, Captain");
                j = 1;  // p2 goes back to #box1
                document.querySelector("#b"+j).appendChild(p2);
                // updated the index by #b-box position + j index, and append p2 latest position which been shown

            }
        },300);
    }
```

The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. I use setInterval and clearIntervel when running my movement function.
* trap - function move forward: #box 4, 10 and 26
```javascript
    if(i == 4){  //when p1 gets to #box4 
        dice2.style.pointerEvents = "none"; // dice2 does not react to pointer events
        p1.style.animation = "bigger .7s"; // p1 becomes bigger for 0.7second
        // move function setInterval and clearInterval
        // setInterval method executes a movement function with speed given
        let go = setInterval(function(){
            i++; //index p1++ : this is move forward slot
            document.querySelector("#b"+i).appendChild(p1); //update position of the movement p1
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
```
* trap - function reverse back: #box 12, 21 and 28
```javascript
    if(i == 12){  //when p12 gets to #box12
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
```

* Create a function for #box7 which the player has one more chance to roll dice.
```javascript
// #box7 is one more chance to roll dice
    if(i == 7){   //when player1 reach #box7
        c1.style.visibility = "visible";  //c1 is p1.controller visible again
        c2.style.visibility = "hidden"; // c2 been hidden
        dice1.style.pointerEvents = "auto"; //dice1 reacts to pointer events
    }
```

* Create a function for #box17 which the player go back to #box1 to start again
```javascript
    // #box17 has a trap which go back #box1
        if(i == 17){  // when p1 steps in #box17
            alert("Captain sucks!");  //alert appear on screen
            i = 1;  // p1 back to #box1
            document.querySelector("#b"+i).appendChild(p1);  // update position on screen by appending()method
        }
```

* The document.readyState property describes the loading state of the document. To make my movement of each player is working well, I use the below callback() method if DOM is not loading, else "ready" function will run.
```javascript
    // ready function will run after all html file loaded by browser
    let ready = function(callback){   //see if DOM is already available
        if (document.readyState != "loading") {
            callback();  // callback if readyState not loading
            } else {document.addEventListener("DOMContentLoaded", callback);
            //else DOM is ready, so the handler can lookup DOM nodes, initialize the interface.
        }
    }
```

* DICE Movement function create as below: 
First, define who's the first player. Then, calculate random number for real dice(1-6) and rolling dice(s1/s2), after 300 milliseconds change rolling dice image to the real dice, then according to the number, move the player to the right place and then hide the dice and visible another dice.
```javascript
    ready(function(){ 
        //make two players turn as random pick (refresh or restart as well)
        //it's all depend on luck who's gonna start the game
        let x = Math.ceil(Math.random()*2);
        document.querySelector("#c"+x).style.visibility = "hidden";
        
        //if wanna make p1 starts the game, c2 should be hidden in well beginning of movement
        // let x = document.getElementById("c2");
        // x.style.visibility = "hidden"

        //create dice1 function
        dice1.addEventListener("click", function(){
            let num = Math.ceil(Math.random()*6);  //random number of those six real dices
            let bgi = Math.ceil(Math.random()*2);  //randomly switching images
            //make dice rolling image - using s1/s2 images
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
```
## Finally, my first game is on board! Please enjoy it!
