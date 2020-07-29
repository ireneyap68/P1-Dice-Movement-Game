let i = 0;
let j = 0;
let dice1 = document.querySelector(".dice1");
let dice2 = document.querySelector(".dice2");
let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");
let p1 = document.querySelector("#player1");
let p2 = document.querySelector("#player2");
let end = document.querySelector("#b29");
let b4 = document.querySelector("#b4");
let b10 = document.querySelector("#b10");
let b12 = document.querySelector("#b12");
let b17 = document.querySelector("#b17");
let b21 = document.querySelector("#b21");
let b26 = document.querySelector("#b26");
let b28 = document.querySelector("#b28");
let speed = 700;
let reset = document.querySelector(".btn1");
	
	reset.addEventListener("click", function(){
		location.reload();
	});
	function ironman1(){
		setTimeout(function(){	
			if(i == j){
				alert("You're loser, Captain");
				j = 1;
				document.querySelector("#b"+j).appendChild(p2);
			}
		},300);
	}
	function captain2(){
		setTimeout(function(){
			if(i == j){
				alert("You can't win, Ironman.");
				i = 1;
				document.querySelector("#b"+i).appendChild(p1);
			}
		},300);
	}
	function trap(){
		if(i == 4){
			dice2.style.pointerEvents = "none";
			p1.style.animation = "bigger .7s";
			let go = setInterval(function(){
				i++;
				document.querySelector("#b"+i).appendChild(p1);
			},speed);
			setTimeout(function(){
				clearInterval(go);
			},speed * 4 + 100);
			setTimeout(function(){
				p1.style.animation = "none";
				dice2.style.pointerEvents = "auto";
				ironman1();
			},speed * 5);
		}
		if(j == 4){
			dice1.style.pointerEvents = "none";
			p2.style.animation = "bigger .7s";
			let go = setInterval(function(){
				j++;
				document.querySelector("#b"+j).appendChild(p2);
			},speed);
			setTimeout(function(){
				clearInterval(go);
			},speed * 4 + 100);
			setTimeout(function(){
				p2.style.animation = "none";
				dice1.style.pointerEvents = "auto";
				captain2();
			},speed * 5);
		}
		if(i == 10){
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
		if(i == 12){
			dice2.style.pointerEvents = "none";
			p1.style.animation = "smaller .7s";
			let go = setInterval(function(){
				i--;
				document.querySelector("#b"+i).appendChild(p1);
			},speed);
			setTimeout(function(){
				clearInterval(go);
			},speed*3 + 100);
			setTimeout(function(){
				p1.style.animation = "none";
				dice2.style.pointerEvents = "auto";
				ironman1();
			},speed * 4);
		}
		if(j == 12){
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
		if(i == 7){
			c1.style.visibility = "visible";
			c2.style.visibility = "hidden";
			dice1.style.pointerEvents = "auto";
		}
		if(j == 7){
			c2.style.visibility = "visible";
			c1.style.visibility = "hidden";
			dice2.style.pointerEvents = "auto";
		}
		if(i == 17){
			alert("Captain sucks!");
			i = 1;
			document.querySelector("#b"+i).appendChild(p1);
		}
		if(j == 17){
			alert("Ironman sucks!");
			j = 1;
			document.querySelector("#b"+j).appendChild(p2);
		}
	}
	let ready = function(callback){
  		if (document.readyState != "loading") callback();
  		else document.addEventListener("DOMContentLoaded", callback);
	}

	ready(function(){ 
		let x = Math.ceil(Math.random()*2);
		document.querySelector("#c"+x).style.visibility = "hidden";
		dice1.addEventListener("click", function(){
			let num = Math.ceil(Math.random()*6);
			let bgi = Math.ceil(Math.random()*2);
			dice1.style.backgroundImage = "url(img/s"+bgi+".png)";
			setTimeout(function(){
				dice1.style.backgroundImage = "url(img/"+num+".png)";
			}, 300);
			dice1.style.pointerEvents = "none";
			dice2.style.pointerEvents = "auto";
			if(num == 1){
				setTimeout(function(){
					i++;
					document.querySelector("#b"+i).appendChild(p1);
					c1.style.visibility = "hidden";
					c2.style.visibility = "visible";
					trap();
					ironman1();
				},speed);
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
