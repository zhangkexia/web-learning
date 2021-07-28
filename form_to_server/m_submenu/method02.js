//*****************method2 js code**********//
//****************use data from city.js***********//
var addrShow02 = $('addr-show02'); //show area finally
var titleWrap = $('title-wrap').getElementsByTagName('li');
var addrWrap = $('addr-wrap'); //show area of provence/city/country
var btn2 = document.getElementsByClassName('met2')[0]; //confirm button

var current2 = {
	pro:'',
	cit:'',
	country:'',
	provVal:'',
	cityVal:'',
	countryVal:''
};

/*load provence list*/
window.onload = showPro2();

function showPro2(){
	addrWrap.innerHTML = '';
	/*addrShow02.value = '';*/
	btn2.disabled = true;
	titleWrap[0].className = 'titleSel';
	var len = provence.length;
	for (var i=0;i<len;i++){
		var provLi = document.createElement('li');
		provLi.innerHTML = provence[i]['name'];
		provLi.index = i;
		addrWrap.appendChild(provLi);
	}
}

/*************************add click event on li element whick is produced dynamicly***********/
addrWrap.onclick = function(e){
	var n;
	var e = e ||window.event;
	var target = e.target ||e.srcElement;
	if(target&&target.nodeName =='LI'){
		/*check which level to show*/
		for (var z=0;z<3;z++) {
			if (titleWrap[z].className == 'titleSel')
				n=z;
		}
		/*process function to show*/
		switch(n){
			case 0:
				showCity2(target.index);
				break;
			case 1:
				showCountry2(target.index);
				break;
			case 2:
				selectCountry(target.index);
				break;
			default:
				showPro2();
		}
	}

};
/*after choosing provence show cities*/
function showCity2(index){
	addrWrap.innerHTML = '';
	current2.prov = index;
	current2.provVal = provence[index].name;
	titleWrap[0].className = '';
	titleWrap[1].className = 'titleSel';
	var cityLen = provence[index].city.length;
	for(var j=0;j<cityLen;j++){
		var cityLi = document.createElement('li');
		cityLi.innerText = provence[index].city[j].name;
		cityLi.index = j;
		addrWrap.appendChild(cityLi);
	}
}

/*after choosing city show countries*/
function showCountry2(index) {
	addrWrap.innerHTML = '';
	current2.city = index;
	current2.cityVal = provence[current2.prov].city[index].name;
	titleWrap[1].className='';
	titleWrap[2].className='titleSel';
	var countryLen = provence[current2.prov].city[index].districtAndCounty.length;
	if(countryLen == 0){
		addrShow02.value = current2.provVal + '-' + current2.cityVal;

	}
	for (var k=0;k<countryLen;k++){
		var cityLi = document.createElement('li');
		cityLi.innerHTML = provence[current2.prov].city[index].districtAndCounty[k];
		cityLi.index = k;
		addrWrap.appendChild(cityLi);
	}
}

/*choose country*/
function selectCountry(index){
	btn2.disabled = false;
	current2.country = index;
	addrWrap.getElementsByTagName('li')[index].style.backgroundColor = '#23B7E5';
	current2.countryVal = provence[current2.prov].city[current2.city].districtAndCounty[index];

}

/*after clicking confirm*/
btn2.onclick=function(){
	addrShow02.value = current2.provVal + '-' +current2.cityVal + '-' +current2.countryVal;
	addrWrap.getElementsByTagName('li')[current2.country].style.backgroundColor = '';
};
/*process functions of click provence/city/country*/
document.getElementById('title-wrap').onclick = function(e){
	var e = e||window.event;
	var target =e.target||e.srcElement;
	if(target&&target.nodeName=='LI'){
		for (var z=0;z<3;z++){
			titleWrap[z].className='';
		}
		target.className = 'titleSel';
		if(target.value =='0'){
			showPro2();
		}else if(target.value=='1'){
			showCity2(current2.prov);
		}else {
			showCountry2(current2.city);
		}
	}
};