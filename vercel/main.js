console.log("HOla!");
var axios = require('axios');
var data = JSON.stringify({
    "mode": "FULL",
    "exchangeTokens": {
        "NSE": ["3045"]
    }
});

var config = {
  method: 'post',
  url: 'https://apiconnect.angelone.in/rest/secure/angelbroking/market/v1/quote/',
  headers: { 
    'X-PrivateKey': 'API_KEY', 
    'Accept': 'application/json, application/json', 
    'X-SourceID': 'WEB, WEB', 
    'X-ClientLocalIP': 'CLIENT_LOCAL_IP', 
    'X-ClientPublicIP': 'CLIENT_PUBLIC_IP', 
    'X-MACAddress': 'MAC_ADDRESS', 
    'X-UserType': 'USER', 
    'Authorization': 'Bearer AUTHORIZATION_TOKEN', 
    'Content-Type': 'application/json'
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