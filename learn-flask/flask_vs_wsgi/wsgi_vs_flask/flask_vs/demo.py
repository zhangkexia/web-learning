from flask import Flask
from flask import request

app = Flask(__name__)
@app.route('/', methods = ['GET', 'POST'])
def home():
	return '<h1>Home</h1>'

@app.route('/signin', methods = ['GET']) #浏览器输入URL后，就是发起了GET请求
def signin_form():
	return '''<form action="/signin" method="post">
	          <p><input name="username"></p>
	          <p><input name="password" type="password"></p>
	          <p><button type="submit">Sign In</button></p>
	          </form>'''
@app.route('/signin', methods = ['POST']) #在上面那个表单提交后（同样的URL），就发起了POST请求，请求信息是在request对象中
def signin():
	#get form content from requst object
	if request.form['username']=='admin' and request.form['password']=='password':
		return '<h3>Hello, admin!</h3>'
	return '<h3>Bad username or password.<h3>'

if __name__ == '__main__':
	app.run()
