# node-mavenlink
A NodeJS wrapper for the Mavenlink API using HTTP requests.

Mavenlink API: http://developer.mavenlink.com/

# Get started
## Requiring
Start by requiring the module:
```
var Maven = require('node-mavenlink');
```
## Instantiating
This module is a class so you must instantiate the class with your Mavenlink API Access Token. Optionally you can pass a url and version.
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
# POST
## POST Syntax
To make a POST request use the following:
```
mav.post(endpoint, data, callback)
```

### PUT
## PUT Syntax
To make a PUT request use the following:
```
mav.put(endpoint, data, callback)
```

### DELETE
## DELETE Syntax
To make a DELETE request use the following:
```
mav.del(endpoint, callback)
```


# Special Thanks
Dave Levy for an awesome PoC on the Mavenlink API.