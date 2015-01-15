var should = require('chai').should(),
    mod = require('../index'),
    area = mod.area;

describe('#area', function(){
    
    it('Finds area of 5 & 5', function(){
        area(5, 5).should().equal(25);
    });
    
});
    