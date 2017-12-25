// WoL-Page Controls



function enav(){
var tN, fN, dN, mN, nN, tP, fP, dP, mP, nP;

tN= document.getElementById('tnav');
fN= document.getElementById('fnav');
dN= document.getElementById('dnav');
mN= document.getElementById('mnav');
nN= document.getElementById('nnav');

tP= document.getElementById('turrets');
fP= document.getElementById('fighters');
dP= document.getElementById('dragons');
mP= document.getElementById('mutants');
nP= document.getElementById('naval');



tN.onclick = function(){
	if(tP.style.display === "none"){
		fP.style.display = "none";
		dP.style.display = "none";
		mP.style.display = "none";
		nP.style.display = "none";
	
	}
}


	fN.onclick = function(){
		
	
	
	}
	
	dN.onclick = function(){
		
	
	}
	
	mN.onclick = function(){
		
	
	
	}
	
	nN.onclick = function(){
		
	
	
	}
}