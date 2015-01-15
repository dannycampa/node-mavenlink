/**
*
*   Access the Mavenlink API to do stuff via HTTP Request
*   
*/

var async = require('async'),
    http = require('request'),
    param = require('node-qs-serialization').param;

function Maven(token, url, version){
    
    if(token == undefined) {
        console.log('node-mavenlink Error: Please pass your OAuth Token when you instantiate');
    } else {
        this.headers = {
            Authorization : 'Bearer ' + token
        };
    }
    
    if(url == undefined) {
        this.url = 'https://api.mavenlink.com/api/';
    } else {
        this.url = url;
    }
    
    if(version == undefined) {
        this.version = 'v1';
    } else {
        this.version = version;
    }

    this.url_host = this.url + this.version + '/';

    this.get = function get(arg1, arg2, arg3){
        
        if(typeof arg1 != 'string' || arg1 == undefined) {
            console.log('node-mavenlink Error: Your first Argument needs to be a string value of the Mavenlink Endpoint you would like to reach.');
        } else {
            var endpoint = arg1;
            if(arg2 == undefined ) {
                console.log('node-mavenlink Error: You need to supply a callback function for your request.');
            } else {
                if(typeof arg2 == 'object') {
                    var the_url = this.url_host + endpoint + '?' + param(arg2);
                    if(arg3 == undefined || typeof arg3 != 'function') {
                        console.log('node-mavenlink Error: You need to supply a callback function for your request.');
                    } else {
                        var cb = arg3;
                    }
                } else if(typeof arg2 == 'function') {
                    var the_url = this.url_host + endpoint;
                    var cb = arg2;
                } else {
                    console.log('node-mavenlink Error: You need to supply a callback function for your request.');
                }
            }
        }
        
        if(this.headers.Authorization == undefined) {
            var err = 'node-mavenlink error: You have not provided your oAuth2 Token. Instantatiate your module with your OAuth2 Token.';
            return cb(err);
        } else {
            http.get({
                url: the_url, 
                headers: this.headers
            }, function(error, response, body) {
                if(error) {
                    return cb(error);
                } else {
                    var the_body = JSON.parse(body);
                    if(the_body.errors) {
                        cb(the_body.errors);
                    } else {
                        var err = undefined;
                        cb(err, the_body);
                    }
                }
            });   
        }
    };
    
    this.post = function post(endpoint, data, cb) {
        
        var make_request = true;
        
        if(endpoint == undefined || typeof endpoint != 'string') {
            console.log('node-mavenlink Error: Your first Argument needs to be an endpoint as a string.');
            make_request = false;
        }
        
        if(data == undefined || typeof data != 'object') {
            console.log('node-mavenlink Error: Please pass a second argument as an object of data.');
            make_request = false;
        }
        
        if(cb == undefined || typeof cb != 'function') {
            console.log('node-mavenlink Error: Please pass a third argument as your callback function.');
            make_request = false;
        }
        
        if(make_request == false) {
            console.log('node-mavenlink Error: You didn\'t properly pass the three arguments. No request made.');
        } else {
            var the_url = this.url_host + endpoint + '?' + param(data);
            http.post({
                url: the_url, 
                headers: this.headers
                }, function(error, response, body) {
                    if(error) {
                        return cb(error);
                    } else {
                        var the_body = JSON.parse(body);
                        if(the_body.errors) {
                            cb(the_body.errors);
                    } else {
                        var err = undefined;
                        cb(err, the_body);
                    }
                }
            }); 
        }
            
    }
    
}

module.exports = Maven;