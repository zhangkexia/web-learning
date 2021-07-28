ostypes = ["Linux", "Windows"]
templates =[
{'ostype':"Linux", "templates": ["linuxtemp1", "linuxtemp2", "linuxtemp3"]},
{'ostype':"Windows", "templates": ["windowstemp1", "windowstemp2", "windowstemp3"]}
]


vchosts = ["vchost1","vchost2","vchost3","vchost4"]
datacenters = [
	{'vchost':'vchost1','datacenters':['datacenter1']},
	{'vchost':'vchost2','datacenters':['datacenter2']},
	{'vchost':'vchost3','datacenters':['datacenter3']},
	{'vchost':'vchost4','datacenters':['datacenter4']},
]


esxihosts = [
	{'vchost':'vchost1','esxihosts':['esxihost11','esxihost12','esxihost13','esxihost14']},
	{'vchost':'vchost2','esxihosts':['esxihost21','esxihost22','esxihost23','esxihost24']},
	{'vchost':'vchost3','esxihosts':['esxihost31','esxihost32','esxihost33','esxihost34']},
	{'vchost':'vchost4','esxihosts':['esxihost41','esxihost42','esxihost43','esxihost44']},
]

datastores = [
	{'vchost':'vchost1','datastores':['datastore11','datastore12','datastore13','datastore14']},
	{'vchost':'vchost2','datastores':['datastore21','datastore22','datastore23','datastore24']},
	{'vchost':'vchost3','datastores':['datastore31','datastore32','datastore33','datastore34']},
	{'vchost':'vchost4','datastores':['datastore41','datastore42','datastore43','datastore44']},
]