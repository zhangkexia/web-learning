//window.alert(mess[0]);

function $(str){
	return document.getElementById(str);
}

var ostype = $('ostype');
var vmtemplate = $('vmtemplate');
var vchost = $('vchost');
var datacenter = $('datacenter');
var esxihost = $('esxi_hostname');
var datastore = $('datastore');
(function showOstype(){
	var len = templates.length;
	for(var i=0;i<len;i++){
		var ostypeOpt = document.createElement('option');
		ostypeOpt.innerText = templates[i]['ostype'];
		ostypeOpt.className = str(i);
		ostype.appendChild(ostypeOpt)
	}
})();

function showTemp(obj){
	var val = int(obj.options[obj.selectedIndex].className);

	if (val != null) {
		vmtemplate.length = 1;//clear options before
		var tempLen = templates[val]["templates"].length;
		for (var j=0; j<tempLen;j++){
			var tempOpt = document.createElement('option');
			tempOpt.innerText = templates[val]["templates"][j];
			tempOpt.className = str(j);
			vmtemplate.appendChild(tempOpt);
		}
	}

}

(function showVchost(){
	var len = datacenters.length;
	for(var i=0;i<len;i++){
		var vchostOpt = document.createElement('option');
		vchostOpt.innerText = datacenters[i]['vchost'];
		vchostOpt.className = str(i);
		vchost.appendChild(vchostOpt)
	}
})();





function showRes(obj){
	var val = int(obj.options[obj.selectedIndex].className);

	if (val != null) {
		datacenter.length = 1;//clear options before
		var datacenterLen = datacenters[val]["datacenters"].length;
		for (var j=0; j<datacenterLen;j++){
			var datacenterOpt = document.createElement('option');
			datacenterOpt.innerText = datacenters[val]["datacenters"][j];
			datacenterOpt.className = str(j);
			datacenter.appendChild(datacenterOpt);
		}

		esxihost.length = 1;//clear options before
		var esxihostLen = esxihosts[val]["esxihosts"].length;
		for (var j=0; j<esxihostLen;j++){
			var esxihostOpt = document.createElement('option');
			esxihostOpt.innerText = esxihosts[val]["esxihosts"][j];
			esxihostOpt.className = str(j);
			esxihost.appendChild(esxihostOpt);
		}

		datastore.length = 1;//clear options before
		var datastoreLen = datastores[val]["datastores"].length;
		for (var j=0; j<datastoreLen;j++){
			var datastoreOpt = document.createElement('option');
			datastoreOpt.innerText = datastores[val]["datastores"][j];
			datastoreOpt.className = str(j);
			datastore.appendChild(datastoreOpt);
		}

	}

}

function showSub(obj, sub) {
	var ip = obj.value;
	var sub = $(sub);
	var ipBefore = ip.split(".", 3);
	ipBefore.push('0/24');
	var subnet = ipBefore.join(".");
	sub.value = subnet;
}

function showSubnet(obj) {
	showSub(obj, "subnet");

}

function showSubnet2(obj) {
	showSub(obj, "subnet2");

}