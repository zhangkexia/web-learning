from flask import Flask, request, render_template
import os
import json
from datetime import timedelta


app = Flask(__name__)


@app.route('/', methods = ['GET'])
def signin_form():
	return render_template('form.html')

@app.route('/', methods=['POST'])
def signin():
	config_static = {"systype":"vmware","vcusername":"administrator","vcpassword":"Admin2016","netmask":"255.255.255.0","netmask2":"255.255.255.0","memorysize":"","cpusnum":"","corenum":""}
	config_dynamic = {"ostype":"","vmtemplate":"","vchost":"","datacenter":"","esxi_hostname":"", "datastore":"", "vcname":"", "vcnameos":"", "disksize":"", "ip":"", "subnet":"", "gateway":"", "ip2":"", "subnet2":"","annotation":""}
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
	for key in config_dynamic:
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