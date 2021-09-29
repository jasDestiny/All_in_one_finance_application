tfile=open("fintips.txt", "r")
x=tfile.read()
y=x.split("\n\n\n")

tips=dict()
for i in y:
    i.replace("\n", ".")
    z=i.split('.')
    print(z)