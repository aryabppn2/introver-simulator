function playerMove(Xmove,moveX,player){
	Xmove.innerHTML=null;
    moveX.innerHTML=player	
}



function sitDownAnimation(vecy){
	vecy.style.backgroundImage='url(Rama.png)';
	vecy.style.backgroundSize='100px 100px';
	vecy.innerHTML=null
	vecy.style.backgroundRepeat='no-repeat';
	
}
function standUpAnimation(vecY){
	vecY.style.backgroundImage='url(kursi.png)';
	vecY.style.backgroundSize='100px 100px';
	vecY.style.backgroundColor='whitesmoke'
	vecY.innerHTML=player
}

function pullupAnimation(vecy,yvec,timeUp,timeDown,player){
	setTimeout(function(){
		vecy.innerHTML=player;
		yvec.innerHTML=null
     setTimeout(function(){
		 yvec.innerHTML=player;
		 vecy.innerHTML=null
	 },timeDown)		
	},timeUp)
	
}

function Vec_03(){
	var vec=[document.getElementById('0,3'),document.getElementById(0+1+',3')];
	vec[1].setAttribute('onclick','vec_13()');
     playerMove(vec[1],vec[0],player)		
	

}

function vec_13(){
	var vec=[document.getElementById('1,3'),document.getElementById(1+1+',3'),document.getElementById(1-1+',3')]
	vec[1].setAttribute('onclick','vec_23()');
	vec[2].setAttribute('onclick','Vec_03()')
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}

function vec_23(){
	var vec=[document.getElementById('2,3'),document.getElementById(2+1+',3'),document.getElementById(2-1+',3')]
     vec[1].setAttribute('onclick','vec_33()');
     vec[2].setAttribute('onclick','vec_13()');
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}

function vec_33(){
	var vec=[document.getElementById('3,3'),document.getElementById(3+1+',3'),document.getElementById(3-1+',3')];
	vec[1].setAttribute('onclick','vec_43()');
	vec[2].setAttribute('onclick','vec_23()');
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
		
	}
	
	
}


function vec_43(){
	var vec=[document.getElementById('4,3'),document.getElementById(4+1+',3'),document.getElementById(4-1+',3')]
	vec[1].setAttribute('onclick','vec_53()');
	vec[2].setAttribute('onclick','vec_33()')
	
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}



function vec_53(){
	var vec=[document.getElementById('5,3'),document.getElementById('6,3'),document.getElementById('4,3')];
	vec[1].setAttribute('onclick','vec_63()');
	vec[2].setAttribute('onclick','vec_43()')
	for(var i=1; i<=vec.length; i++){
     playerMove(vec[i],vec[0],player)		
	}

}



function vec_63(){
	var vec=[document.getElementById('6,3'),document.getElementById('7,3'),document.getElementById('5,3')]
	vec[1].setAttribute('onclick','vec_73()');
	vec[2].setAttribute('onclick','vec_53()')
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}

function vec_73(){
	var vec=[document.getElementById('7,3'),document.getElementById('8,3'),document.getElementById('6,3')]
     vec[1].setAttribute('onclick','vec_83()');
     vec[2].setAttribute('onclick','vec_63()');
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}

function vec_83(){
	var vec=[document.getElementById('8,3'),document.getElementById(8+1+',3'),document.getElementById(8-1+',3')];
	vec[1].setAttribute('onclick','vec_93()');
	vec[2].setAttribute('onclick','vec_73()');
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
		
	}
	
	
}


function vec_93(){
	var vec=[document.getElementById('9,3'),document.getElementById(9+1+',3'),document.getElementById(9-1+',3')]
	vec[1].setAttribute('onclick','Vec_103()');
	vec[2].setAttribute('onclick','vec_83()')
	
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}
function Vec_103(){
	var vec=[document.getElementById('10,3'),document.getElementById(10+1+',3'),document.getElementById(10-1+',3')];
	vec[1].setAttribute('onclick','vec_113()');
	vec[2].setAttribute('onclick','vec_93()')
	for(var i=1; i<=vec.length; i++){
     playerMove(vec[i],vec[0],player)		
	}

}

function vec_113(){
	var vec=[document.getElementById('11,3'),document.getElementById(11+1+',3'),document.getElementById(11-1+',3')]
	vec[1].setAttribute('onclick','vec_123()');
	vec[2].setAttribute('onclick','Vec_103()')
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}

function vec_123(){
	var vec=[document.getElementById('12,3'),document.getElementById(12+1+',3'),document.getElementById(12-1+',3')]
     vec[1].setAttribute('onclick','vec_133()');
     vec[2].setAttribute('onclick','vec_113()');
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}

function vec_133(){
	var vec=[document.getElementById('13,3'),document.getElementById(13+1+',3'),document.getElementById(13-1+',3')];
	vec[1].setAttribute('onclick','vec_143()');
	vec[2].setAttribute('onclick','vec_123()');
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
		
	}
	
	
}


function vec_143(){
	var vec=[document.getElementById('14,3'),document.getElementById(14+1+',3'),document.getElementById(14-1+',3')]
	vec[1].setAttribute('onclick','vec_153()');
	vec[2].setAttribute('onclick','vec_133()')
	
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}
function vec_153(){
	var vec=[document.getElementById('15,3'),document.getElementById(15+1+',3'),document.getElementById(15-1+',3')];
	vec[1].setAttribute('onclick','vec_163()');
	vec[2].setAttribute('onclick','vec_143()')
	for(var i=1; i<=vec.length; i++){
     playerMove(vec[i],vec[0],player)		
	}

}

function vec_163(){
	var vec=[document.getElementById('16,3'),document.getElementById('17,3'),document.getElementById('15,3')]
	vec[1].setAttribute('onclick','vec_173()');
	vec[2].setAttribute('onclick','vec_153()')
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}

function vec_173(){
	var vec=[document.getElementById('17,3'),document.getElementById('18,3'),document.getElementById('16,3')]
     vec[1].setAttribute('onclick','vec_183()');
     vec[2].setAttribute('onclick','vec_163()');
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}

function vec_183(){
	var vec=[document.getElementById('18,3'),document.getElementById(18+1+',3'),document.getElementById(18-1+',3')];
	vec[1].setAttribute('onclick','vec_193()');
	vec[2].setAttribute('onclick','vec_173()');
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
		
	}
	
	
}


function vec_193(){
	var vec=[document.getElementById('19,3'),document.getElementById(19+1+',3'),document.getElementById(19-1+',3')]
	vec[1].setAttribute('onclick','vec_203()');
	vec[2].setAttribute('onclick','vec_183()')
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}
function vec_203(){
	var vec=[document.getElementById('20,3'),document.getElementById(20+1+',3'),document.getElementById(20-1+',3')];
	vec[1].setAttribute('onclick','vec_213()');
	vec[2].setAttribute('onclick','vec_193()')
	for(var i=1; i<=vec.length; i++){
     playerMove(vec[i],vec[0],player)		
	}

}

function vec_213(){
	var vec=[document.getElementById('21,3'),document.getElementById(21+1+',3'),document.getElementById(21-1+',3')]
	vec[1].setAttribute('onclick','vec_223()');
	vec[2].setAttribute('onclick','vec_203()')
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}

function vec_223(){
	var vec=[document.getElementById('22,3'),document.getElementById(22+1+',3'),document.getElementById(22-1+',3')]
     vec[1].setAttribute('onclick','vec_233()');
     vec[2].setAttribute('onclick','vec_213()');
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}

function vec_233(){
	var vec=[document.getElementById('23,3'),document.getElementById(23+1+',3'),document.getElementById(23-1+',3')];
	vec[1].setAttribute('onclick','vec_243()');
	vec[2].setAttribute('onclick','vec_223()');
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
		
	}
	
	
}


function vec_243(){
	var vec=[document.getElementById('24,3'),document.getElementById(24+1+',3'),document.getElementById(24-1+',3')]
	vec[1].setAttribute('onclick','vec_253()');
	vec[2].setAttribute('onclick','vec_233()')
	
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}


function vec_253(){
	var vec=[document.getElementById('25,3'),document.getElementById(25+1+',3'),document.getElementById(25-1+',3')]
	vec[2].setAttribute('onclick','vec_243()');
	vec[1].setAttribute('onclick','vec_263()')
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}



function vec_263(){
	var vec=[document.getElementById('26,3'),document.getElementById(26+1+',3'),document.getElementById(26-1+',3')];
    vec[2].setAttribute('onclick','vec_253()')
	vec[1].setAttribute('onclick','vec_273()')
	for(var i=0; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}


function vec_273(){
	var vec=[document.getElementById('27,3'),document.getElementById(27+1+',3'),document.getElementById(27-1+',3')]
	vec[2].setAttribute('onclick','vec_263()')
	vec[1].setAttribute('onclick','vec_283()')
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
	
}

function vec_283(){
	var vec=[document.getElementById('28,3'),document.getElementById(28+1+',3'),document.getElementById(28-1+',3')]
	vec[1].setAttribute('onclick','vec_293()')
	vec[2].setAttribute('onclick','vec_273()')
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
}



function vec_293(){
	var vec=[document.getElementById('29,3'),document.getElementById(29+1+',3'),document.getElementById(29-1+',3')]
	vec[1].setAttribute('onclick','vec_303()')
	vec[2].setAttribute('onclick','vec_283()')
	for(var i=1; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
	
	
}




function vec_303(){
	var vec=[document.getElementById('30,3'),document.getElementById(30+1+',3'),document.getElementById(30-1+',3')]
	vec[1].setAttribute('onclick','vec_313()');
	vec[2].setAttribute('onclick','vec_293()');
	for(var i=0; i<=vec.length; i++){
		playerMove(vec[i],vec[0],player)
	}
	
	
}


function vec_313(){
	var vec=[document.getElementById('31,3'),document.getElementById(31-1+',3')]
	vec[1].setAttribute('onclick','vec_303()')
	playerMove(vec[1],vec[0],player)
	
	
	
}