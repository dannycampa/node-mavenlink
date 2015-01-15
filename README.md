# node-mavenlink
A NodeJS wrapper for the Mavenlink API using HTTP requests.
# Get started
Start by requiring the module:
```
var Maven = require('node-mavenlink');
```
Then you need to instantiate the class with your Mavenlink API Access Token
```
var mav = new Maven('kjh1235k74389123kje1r293ne1981d');
```
# GET
## GET Syntax
To make a GET request use the following:
```
mav.get(endpoint, [data], callback)
```
## GET Example
```
mav.get('users.json', { on_my_account: true }, function(err, users){
    if(err) {
        console.log(err);
    } else {
    
        //Do stuff with users
        
    }
});
```
# POST (Not tested, will verify by 01/16/15)
## POST Syntax
To make a POST request use the following:
```
mav.get(endpoint, data, callback)
```
