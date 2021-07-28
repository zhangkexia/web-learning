from flask import Flask, request, render_template
import os
import json
from datetime import timedelta
import info

app = Flask(__name__)


@app.route('/', methods = ['GET'])
def signin_form():
	return render_template('form.html')

@app.route('/', methods=['POST'])
def signin():
	config_static = {"systype":"vmware","vcusername":"administrator","vcpassword":"Admin2016","netmask":"255.255.255.0","netmask2":"255.255.255.0","memorysize":"","cpusnum":"","corenum":""}
	config_dynamic = {"ostype":"","vmtemplate":"","vchost":"","datacenter":"","esxi_hostname":"", "datastore":"", "vcname":"", "vcnameos":"", "disksize":"", "ip":"", "subnet":"", "gateway":"", "ip2":"", "subnet2":"","annotation":""}
	#config_select = {"ostype":"","vmtemplate":"","vchost":"","datacenter":"","esxi_hostname":"", "datastore":""}
	form_content = request.form
	cpumem = form_content["cpumem"]
	if cpumem == "4C8G":
		config_static["memorysize"] = "8"
		config_static["cpusnum"] = "2"
		config_static["corenum"] = "2"
	else:
		config_static["memorysize"] = "4"
		config_static["cpusnum"] = "2"
		config_static["corenum"] = "1"
	ostypes = info.ostypes
	templates = info.templates
	vchosts = info.vchosts
	datacenters = info.datacenters
	datastores = info.datastores
	esxi_hostnames = info.esxihosts
	
	ostype_value = int(form_content["ostype"])
	vmtemplate_value = int(form_content["vmtemplate"])
	vchost_value = int(form_content["vchost"])
	datacenter_value = int(form_content["datacenter"])
	datastore_value = int(form_content["datastore"])
	esxi_hostname_value = int(form_content["esxi_hostname"])

	for key in config_dynamic:
		if key == "ostype":
			config_dynamic[key] = ostypes[ostype_value]
		elif key == "vmtemplate":
			config_dynamic[key] = templates[ostype_value]["templates"][vmtemplate_value]
		elif key == "vchost":
			config_dynamic[key] = vchosts[vchost_value]
		elif key == "datacenter":
			config_dynamic[key] = datacenters[vchost_value]["datacenters"][datacenter_value]
		elif key == "datastore":
			config_dynamic[key] = datastores[vchost_value]["datastores"][datastore_value]
		elif key == "esxi_hostname":
			config_dynamic[key] = esxi_hostnames[vchost_value]["esxihosts"][esxi_hostname_value]
		else:
			config_dynamic[key] = form_content[key]

	config = dict(config_dynamic, **config_static)


	with open("data.json","w") as f:
		json.dump(config,f)
	#cmd = "ansible-playbook -s /vmware/create_vm_linux.xml -e @data.json"
	#os.system(cmd)
	#message = {"1": "hello", "2": "world"}
	#message =["hello","world"]
	message = "created successfully"
	return render_template('form.html', message= message)
if __name__=='__main__':
	app.run(host='192.168.7.2',port=5500)