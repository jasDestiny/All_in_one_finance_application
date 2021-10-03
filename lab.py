import json

tfile = open("fintips.txt", "r")
x = tfile.read()
y = x.split("\n\n\n")

tips = dict()
for i in y:
    i = i.replace("\n", ".")
    z = i.split('.')
    tipNo = None
    tip = ""
    for j in z:
        if j.isnumeric():
            tipNo = j
        else:
            tip += j
    tips[tipNo] = tip


print(tips)
for i, j in tips.items():
    print(i, j)
    print()

file = open("./src/InvestmentTips.json", "w")
json.dump(tips, file)
