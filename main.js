var data = JSON.stringify({
    "clientcode":"S55125542",
    "password":"Trading@Project123",
	"totp":"5JENCOQR3472DBTJCGJA4LK7RE",
  "state":"STATE_VARIABLE"
});

var config = {
  method: 'post',
  url: 'https://apiconnect.angelone.in/rest/auth/angelbroking/user/v1/loginByPassword',
  headers : {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-UserType': 'USER',
    'X-SourceID': 'WEB',
    'X-ClientLocalIP': '127.0.0.1', 
    'X-ClientPublicIP': '203.110.242.30',
    'X-MACAddress': '7c:b5:66:fa:08:d9',
    'X-PrivateKey': 'VY6lImzK'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


var data1 = JSON.stringify({
     "mode": "LTP", "exchangeTokens": { "NSE": ["3045","881"], "NFO": ["58662"] }}
);
var config1 = {
  method: 'post',
  url: 'https://apiconnect.angelone.in/rest/secure/angelbroking/market/v1/quote/',
  headers: { 
    'X-PrivateKey': 'VY6lImzK', 
    'Accept': 'application/json, application/json', 
    'X-SourceID': 'WEB, WEB', 
    'X-ClientLocalIP': '127.0.0.1', 
    'X-ClientPublicIP': '203.110.242.30', 
    'X-MACAddress': '7c:b5:66:fa:08:d9', 
    'X-UserType': 'USER', 
    'Authorization': 'c9c657c0-467b-4d3c-8e6e-359c6602abd3', 
    'Content-Type': 'application/json'
  },
  data : data1
};

console.log('HOla!');

axios(config1)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});