#server.py
from wsgiref.simple_server import make_server
from app import application

#create a web server, service port is 8000, handle function is "application"
httpd = make_server('', 8000, application)
print("Serving HTTP on port 8000....")
#listening http request
httpd.serve_forever()
