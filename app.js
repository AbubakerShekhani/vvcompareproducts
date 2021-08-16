const express = require('express')
const app = express()
var cors = require('cors')

const port = process.env.PORT || 3005

app.use(cors())

app.get('/getproducts/:consumption', (req, res) => 
	{
	const params = req.params; //params = {id:"000000"}
	
	if (params.consumption <= 0) {
		res.send('0');
		return;
	}
	
	const annualCostsBasicElectricity = basicElectricityTariff(params.consumption)
	const packagedTariffResult = packagedTariff(params.consumption)
	
	const productsResult = [
		{ "name":"Basic Electicity Tariff", "annual_cost": annualCostsBasicElectricity },
		{ "name":"Packaged Tariff", "annual_cost": packagedTariffResult },
	]
	
	res.json(productsResult);
	
	}

)

const basicElectricityTariff = (consumption) => {
	
	const baseCostPerYear = 5 * 12;
	const consumptionCosts = 22/100;
		
	return ( (consumption * consumptionCosts) + baseCostPerYear);
	
}

const packagedTariff = (consumption) => {
	
	let totalCost = 0, excessUnitsCosts = 0, basicCost = 800;
	
	if (consumption > 4000) {
		excessUnits = consumption - 4000;
		rate = (30/100);
		excessUnitsCosts = rate * excessUnits;
	} 

	totalCost =  basicCost + excessUnitsCosts;
	
	return totalCost;
	
}


app.listen(port, () => console.log(`Verivox app listening at http://localhost:${port}`))

module.exports = {
  app: app,
  basicElectricityTariff: basicElectricityTariff,
  packagedTariff: packagedTariff
}



//exports.app = app;
//exports.basicElectricityTariff = basicElectricityTariff;
//exports.packagedTariff = packagedTariff;


