# P1-dice-movement-game
 Dice Board Movement Game

##  Summary
1. This game involves TWO players by using dice roller to move their steps. The winner is who hit the end point.

2. Board designs with grids. Within the board, attributes are given when arrive some points: moving forward or reserve backward. 

3. If both of the players meet on the same point, last player will kick the previous player to starting point!

4. Alert Click will show the winner at the end.

## HTML
1. Insert: Boilerplate, css and javascript.
2. Set Div to movement board / 2 players movement / images for dice and others.

* create players id and input images represent p1 and p2
```html
    <div class="character">
                <img id= "player 1" src="" alt="">
                <img id="player 2" src="" alt="">
```

* create "map" which means game's board, 50 blocks include grid-movement and grid-blanks.
```html
    <div class="map">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
```

## CSS
* Create movement board.
* Set position - dice and others.

The z-index property in CSS controls the vertical stacking order of elements that overlap. I'm planning to let 2 players overlaps when turn into same slot.
```css
    character img{ 
        position: relative;
        margin-top:10%;
        width:80px;
        z-index: 1;
    }
```

The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements. I want my dice looks anime so I decided to use transform.
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


## JS
* Create variable to players, dice, movement and others.
* Function to dice, movements board, forward/backward, meet together then go back to first step and others.