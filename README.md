# AmEx_CodeStreet_Backend

Backend for AmEx CodeStreet'21

# git-repo

A node.js based backend service that helps the user get access to multiple financial services through http requests

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.
First of all, download the zip file of the repository or clone it locally.

### Prerequisities

To install all the node modules run

```
cd AmEx_CodeStreet_Backend
npm install npm-install-all -g
```

in the project folder on your terminal

## How to use the code

To execute the routes, request to each of the endpoints. Start the server with

```
nodemon app.js
```

## Endpoints

Check app.js for all the endpoints and all attribute fields

### Main functions :

1. New investors and people manage accounts and investments
2. Users can predict the possibility of getting loans from banks
3. Spending advisor provides tips to savings, needs and wants based on the 50-30-20 financial model
4. Income tax calculator calculates the income tax based on user input and provides some common tips to
5. Social media integration is done with reddit, users can request data from 4 most popular investment based subreddits
6. Users can request P2P loans
7. Debit card users can get credits depending on their monthly spendings, turning their cards into virtual credit cards

### API Documentation

HOME ROUTE
GET: "/"

AUTH
POST: "/users/auth/"
PARAMS: {pno, pan}

AUTH OTP
POST: "/users/auth/"
PARAMS: {pno, otp}

FINTIP ROUTE
POST: "/query/fintip/"
PARAMS: {pno, tokenval}

LOAN
POST: "/query/loan/"
PARAMS:{pno, tokenval}

INCOME TAX
POST: "/query/incomeTax/"
PARAMS:{pno,tokenval,income,houseRentA,
propInc,fd,otherCapGain,savInt,nps,medInsFam,
rent,epf,nsc,tuition,houseLoan,insurance,hlinterest,
proTax,taxAlreadyPaid}

SPENING ADVISOR
POST: "/query/spendingAdvisor/"
PARAMS: {pno, tokenval, budget}

REDDIT
POST: "/query/data/reddit/"
PARAMS:{pno, tokenval}

P2P
POST:"/query/credit/p2p/"
PARAMS:{}

VIRTUAL CREDITS
POST:"/query/credit/virtualcredits/"
PARAMS:{pno, tokenval}

### Screenshots

<i>Postman Screenshots</i><br>
<img src="https://i.ibb.co/MC7bPjr/1.jpg">
<img src="https://i.ibb.co/XYkxWNP/2.jpg">
<img src="https://i.ibb.co/xmSc89R/3.jpg">
<img src="https://i.ibb.co/yQ6WZc5/4.jpg">
<img src="https://i.ibb.co/dBNx72s/5.jpg">
<img src="https://i.ibb.co/9crrXhH/6.jpg">
