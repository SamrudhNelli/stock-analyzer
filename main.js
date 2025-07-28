const secret = '5JENCOQR3472DBTJCGJA4LK7RE'
const token = window.otplib.authenticator.generate(secret);
const isValid = window.otplib.authenticator.check(token, secret);
const isValid2 = window.otplib.authenticator.verify({ token, secret });
var data = JSON.stringify({
    "clientcode":"S55125542",
    "password":"8289",
    "totp": `${token}`,
    "source":"WEB",
    "state":"STATE_VARIABLE"
});

var config = {
  method: 'post',
  url: 'https://apiconnect.angelone.in/rest/auth/angelbroking/user/v1/loginByPassword',
  headers : {
    'X-PrivateKey': 'VY6lImzK',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-UserType': 'USER',
    'X-SourceID': 'WEB',
    'X-ClientLocalIP': '127.0.0.1',
    'X-ClientPublicIP': '203.110.242.30',
    'X-MACAddress': '7c:b5:66:fa:08:d9'
  },
  data : data
};

var jwtToken;

axios(config)
.then(function (response) 
{
  jwtToken = response.data.data.jwtToken;
  console.log("Login successful!");
  console.log("JWT Token: " + jwtToken);
  setInterval(function() 
  {
      var data = JSON.stringify({
        "mode": "FULL", "exchangeTokens": {
            "NSE": ["3045"] }});
      var config = {
      method: 'post',
      url: 'https://apiconnect.angelone.in/rest/secure/angelbroking/market/v1/quote/',
      headers: { 
        'X-PrivateKey': 'VY6lImzK', 
        'Accept': 'application/json', 
        'X-SourceID': 'WEB', 
        'X-ClientLocalIP': '127.0.0.1', 
        'X-ClientPublicIP': '203.110.242.30', 
        'X-MACAddress': '7c:b5:66:fa:08:d9', 
        'X-UserType': 'USER', 
        'Authorization': `Bearer ${jwtToken}`, 
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
  }, 5000);

})

.catch(function (error) {
  console.log(error);
});
