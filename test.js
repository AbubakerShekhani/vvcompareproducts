const assert = require('chai').assert;
const appfunctions = require('./app');


/*
describe('Chef test', function(){
   
    let chef = Chef;
    
    it('check the dish has valid name.', function(){
        assert.isString(chef.checkMenu(), 'string');
    })
    
    it('check for a dish in menu.', function (){
        let dish= chef.checkMenu()
        assert.oneOf(dish, chef.dishes)

    });
    
});
*/

describe('Basic Electricity Tarriff', function() {
  it('Should output positive value', function() {
	
	var basicElectricityTariff1 = appfunctions.basicElectricityTariff(3500);
	
    assert.equal(basicElectricityTariff1, 830);
	
  });
  
  it('Should output positive value', function() {
	
	var basicElectricityTariff1 = appfunctions.basicElectricityTariff(4500);
	
    assert.equal(basicElectricityTariff1, 1050);
	
  });
});


describe('Packaged Tarriff', function() {
  it('Should output positive value', function() {
	
	var packagedTariff1 = appfunctions.packagedTariff(3500);
	
    assert.equal(packagedTariff1, 800);
	
  });
  
  it('Should output positive value', function() {
	
	var packagedTariff1 = appfunctions.packagedTariff(4500);
	
    assert.equal(packagedTariff1, 950);
	
  });
});