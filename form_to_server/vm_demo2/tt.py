'''
list = ["one", "two", "three"]
dic = {"one":"zhang", "two":"li", "three":"han"}
for item in list:
	item = dic[item]
	print(item)
'''
dict1 = {"one":"hello", "two":"world"}
dict2 = {"three":"nihao", "four":"zhongguo"}
dic = dict(dict1, **dict2)
print(dic)
