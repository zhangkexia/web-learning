//*********method01 by js**********//
//*********the data is from city.js*******//


/*get objecty by id*/
function $(str){
	return document.getElementById(str);
}

var addrShow = $('addr-show');
var btn = document.getElementsByClassName('met1')[0];
var prov = $('prov');
var city = $('city');
var country = $('country');

/*current chosen provence*/
var current = {
	prov: '',
	city: '',
	country: ''
};

/*show prov list*/
(function showProv() {
	btn.disabled = true;
	var len = provence.length;
	for(var i=0;i<len;i++){
		var proOpt = document.createElement('option');
		proOpt.innerText = provence[i]['name'];
		proOpt.value = i;
		prov.appendChild(proOpt);
	}
})();

/*show cities by chosen provence*/

function showCity(obj){
	var val = obj.options[obj.selectedIndex].value;
	if (val !=current.prov){
		current.prov = val;
		addrShow.value = '';
		btn.disabled = true;
	}
	//console.log(val);
	if (val != null) {
		city.length = 1;
		var cityLen = provence[val]["city"].length;
		for (var j=0; j<cityLen;j++){
			var cityOpt = document.createElement('option');
			cityOpt.innerText = provence[val]["city"][j].name;
			cityOpt.value = j;
			city.appendChild(cityOpt);
		}
	}
}

/*show country by chosen city*/
function showCountry(obj){
	var val = obj.options[obj.selectedIndex].value;
	current.city = val;
	if (val !=null) {
		country.length = 1;
		var countryLen = provence[current.prov]["city"][val].districtAndCounty.length;
		if(countryLen == 0){
			addrShow.value = provence[current.prov].name + '-' + provence[current.prov]["city"][current.city].name;
			return;
		}
	}
	for (var n=0;n<countryLen;n++){
		var countryOpt = document.createElement('option');
		countryOpt.innerText = provence[current.prov]["city"][val].districtAndCounty[n];
		countryOpt.value = n;
		country.appendChild(countryOpt);
	}
}
/*after choosing country*/
function selecCountry(obj){
	current.country = obj.options[obj.selectedIndex].value;
	if ((current.city != null) && (current.country != null)){
		btn.disabled = false;
	}
}
/*after clicking button show address*/
function showAddr(){
	addrShow.value = provence[current.prov].name + '-' + provence[current.prov]["city"][current.city].name + '-' + provence[current.prov]["city"][current.city].districtAndCounty[current.country];

}