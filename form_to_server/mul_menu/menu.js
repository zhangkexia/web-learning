var oNav = document.getElementById('nav')
var aH2 = oNav.getElementsByTagName('h2')

for (var i = 0; i < aH2.length; i++) {
	aH2[i].onclick = function(){

		var oUl = getNext(this);
		var oSpan = getFirst(this);
		var oParent = this.parentNode.parentNode;
		var aUl = oParent.getElementsByTagName('ul');
		var aSpan = oParent.getElementsByTagName('span')
		if (oUl) {
			if(oUl.style.display == 'block'){
				oUl.style.display = "none";
				oSpan.innerHTML = '+';
			}else{
				for(var i=0; i<aUl.length;i++){
					aUl[i].style.dispaly = 'none';
					aSpan[i].innerHTML = '+'
				}
				oUl.style.display = "block";
				oSpan.innerHTML = "-";

			}
		}
	};
}

function getPrev(obj){
	if(!obj || !obj.previousSibling) return null;
	return obj.previousSibling.nodeType === 1? obj.previousSibling:getPrev(obj.previousSibling);
}

function getNext(obj){
	if ( !obj || !obj.nextSibling ) return null;
	return obj.nextSibling.nodeType === 1?obj.nextSibling:getNext(obj.nextSibling);

}

function getFirst(obj){
	if( !obj || !obj.firstChild ) return null;
	return obj.firstChild.nodeType === 1 ? obj.firstChild : getNext( obj.firstChild );
}

function getLast(obj){
	if ( !obj || !obj.lastChild ) return null;
	return obj.lastChild.nodeType === 1 ? obj.lastChild : getPrev( obj.lastChild );
}