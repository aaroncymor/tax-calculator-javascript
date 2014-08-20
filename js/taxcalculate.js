var totalMonthlySalary;
var sssContribution;
var philHealthContribution;
var pagIbigContribution;
var yearlyTaxToPay;
var taxBracket;
var netPay;
var finalOutput;


function getSSSContribution(monthlySalary){
/*  
	Gets the SSS contribution depending on the monthlySalary of the user. 
	Reference:http://www.e-pinoyguide.com/2013/09/how-to-compute-sss-philhealth-and-hdmf.html
*/

	if (isNaN(monthlySalary)){
		//Input Error Message Code
		
	} else {
		if (monthlySalary <= 11249.99)
			sssContribution = 0.00;
		else if (monthlySalary >= 11250.00 && monthlySalary <= 11749.99)
			sssContribution = 417.80;
		else if (monthlySalary >= 11750.00 && monthlySalary <= 12249.99)
			sssContribution = 436.00;		
		else if (monthlySalary >= 12250.00 && monthlySalary <= 12749.99)
			sssContribution = 454.20;
		else if (monthlySalary >= 12750.00 && monthlySalary <= 13249.99)
			sssContribution = 472.30;		
		else if (monthlySalary >= 13250.00 && monthlySalary <= 13749.99)
			sssContribution = 490.00;	
		else if (monthlySalary >= 13750.00 && monthlySalary <= 14249.99)
			sssContribution = 508.70;		
		else if (monthlySalary >= 14250.00 && monthlySalary <= 14749.99)
			sssContribution = 526.80;
		else if (monthlySalary >= 14750.00 && monthlySalary <= 15249.99)
			sssContribution = 545.00;		
		else if (monthlySalary >= 15250.00 && monthlySalary <= 15749.99)
			sssContribution = 563.20;		
		else if (monthlySalary >= 15750.00)
			sssContribution = 581.30;

		return sssContribution;
	}
}

function getPhilHealthContribution(monthlySalary){
/*  
	Gets the PhilHealth contribution depending on the monthlySalary of the user. 
	Reference:http://www.e-pinoyguide.com/2013/09/how-to-compute-sss-philhealth-and-hdmf.html
*/	

	if (isNaN(monthlySalary)) {
		//Input ErrorMessage Code 
	} else {
		if (monthlySalary <= 8999.99)
			philHealthContribution = 100.00;
		else if (monthlySalary >= 9000.00 && monthlySalary <= 9999.99 )
			philHealthContribution = 112.50;		
		else if (monthlySalary >= 10000.00 && monthlySalary <= 10999.99 )
			philHealthContribution = 125.00;
		else if (monthlySalary >= 11000.00 && monthlySalary <= 11999.99 )
			philHealthContribution = 137.50;		
		else if (monthlySalary >= 12000.00 && monthlySalary <= 12999.99 )
			philHealthContribution = 150.00;
		else if (monthlySalary >= 13000.00 && monthlySalary <= 13999.99 )
			philHealthContribution = 162.50;		
		else if (monthlySalary >= 14000.00 && monthlySalary <= 14999.99 )
			philHealthContribution = 175.00;	
		else if (monthlySalary >= 15000.00 && monthlySalary <= 15999.99 )
			philHealthContribution = 187.50;	
		else if (monthlySalary >= 16000.00 && monthlySalary <= 16999.99 )
			philHealthContribution = 200.00;
		else if (monthlySalary >= 17000.00 && monthlySalary <= 17999.99 )
			philHealthContribution = 212.50;
		else if (monthlySalary >= 18000.00 && monthlySalary <= 18999.99 )
			philHealthContribution = 225.00;	
		else if (monthlySalary >= 19000.00 && monthlySalary <= 19999.99 )
			philHealthContribution = 237.50;		
		else if (monthlySalary >= 20000.00 && monthlySalary <= 20999.99 )
			philHealthContribution = 250.00;
		else if (monthlySalary >= 21000.00 && monthlySalary <= 21999.99 )
			philHealthContribution = 262.50;		
		else if (monthlySalary >= 22000.00 && monthlySalary <= 22999.99 )
			philHealthContribution = 275.00;	
		else if (monthlySalary >= 23000.00 && monthlySalary <= 23999.99 )
			philHealthContribution = 287.50;
		else if (monthlySalary >= 24000.00 && monthlySalary <= 24999.99 )
			philHealthContribution = 300.00;	
		else if (monthlySalary >= 25000.00 && monthlySalary <= 25999.99 )
			philHealthContribution = 312.50;		
		else if (monthlySalary >= 26000.00 && monthlySalary <= 26999.99 )
			philHealthContribution = 325.00;		
		else if (monthlySalary >= 27000.00 && monthlySalary <= 27999.99 )
			philHealthContribution = 337.50;		
		else if (monthlySalary >= 28000.00 && monthlySalary <= 28999.99 )
			philHealthContribution = 350.00;		
		else if (monthlySalary >= 29000.00 && monthlySalary <= 29999.99 )
			philHealthContribution = 362.50;	
		else if (monthlySalary >= 30000.00 && monthlySalary <= 30999.99 )
			philHealthContribution = 375.00;		
		else if (monthlySalary >= 31000.00 && monthlySalary <= 31999.99 )
			philHealthContribution = 387.50;			
		else if (monthlySalary >= 32000.00 && monthlySalary <= 32999.99 )
			philHealthContribution = 400.00;		
		else if (monthlySalary >= 33000.00 && monthlySalary <= 33999.99 )
			philHealthContribution = 412.50;
		else if (monthlySalary >= 34000.00 && monthlySalary <= 34999.99 )
			philHealthContribution = 425.00;		
		else if (monthlySalary >= 35000.00)
			philHealthContribution = 437.50;

		return philHealthContribution;
	}
}

function getPagIbigContribution(monthlySalary) {
/*  
	Gets the Pag Ibig contribution depending on the monthlySalary of the user. 
	Reference:http://www.e-pinoyguide.com/2013/09/how-to-compute-sss-philhealth-and-hdmf.html
*/	

	if (monthlySalary <= 1500.00)
		pagIbigContribution = (0.01 * monthlySalary);
	else if (monthlySalary > 1500.00 && monthlySalary <= 4999.99)
		pagIbigContribution = (0.02 * monthlySalary);
	else if (monthlySalary >= 5000.00)
		pagIbigContribution = 100;
	
	return pagIbigContribution;
}

function getMonthlyTaxableIncome(monthlySalary){
/*  
	Calculates the monthly taxable income via this equation:
	monthly taxable income = monthly salary - (Phil Health Contribution + SSS Contribution + Pag Ibig Contribution)
	Reference:http://www.e-pinoyguide.com/2014/07/how-to-compute-your-withholding-tax.html
*/	

	monthlySalaryFloat = parseFloat(monthlySalary);
	philHealthContributionFloat = parseFloat(getPhilHealthContribution(monthlySalaryFloat));
	pagIbigContributionFloat = parseFloat(getPagIbigContribution(monthlySalaryFloat));
	sssContributionFloat = parseFloat(getSSSContribution(monthlySalaryFloat));
	return monthlySalaryFloat - (philHealthContributionFloat + sssContributionFloat + pagIbigContributionFloat);
	
}

function getYearlyTaxableIncome(monthlySalary) {
/*  
	Calculates the yearly taxable income via this equation:
	yearly taxable income = (monthly salary - (Phil Health Contribution + SSS Contribution + Pag Ibig Contribution)) * 12
	Reference:http://www.e-pinoyguide.com/2014/07/how-to-compute-your-withholding-tax.html
*/	

	return getMonthlyTaxableIncome(parseFloat(monthlySalary)) * 12;
}

function getYearlyTaxToPay(yearlyTaxableIncome) {
/*  
	Calculates the yearly tax to pay depending on the yearly taxable income.
	Reference:http://www.businessforum.ph/threads/600-Income-Tax-Rate-Table-for-Individual-Taxpayers-in-the-Philippines
*/	
	if (yearlyTaxableIncome <= 10000.00)
		yearlyTaxToPay = (0.05 * yearlyTaxableIncome);
	else if (yearlyTaxableIncome > 10000.00 && yearlyTaxableIncome <= 30000.00)
		yearlyTaxToPay = 500 + (0.10 * (yearlyTaxableIncome - 10000.00))
	else if (yearlyTaxableIncome > 30000.00 && yearlyTaxableIncome <= 70000.00)
		yearlyTaxToPay =  2500 + (0.15 * (yearlyTaxableIncome - 30000.00));
	else if (yearlyTaxableIncome > 70000.00 && yearlyTaxableIncome <= 140000.00)
		yearlyTaxToPay = 8500 + (0.20 * (yearlyTaxableIncome - 70000.00));
	else if (yearlyTaxableIncome > 140000.00 && yearlyTaxableIncome <= 250000.00)
		yearlyTaxToPay = 22500 + (0.25 * (yearlyTaxableIncome - 140000.00));
	else if (yearlyTaxableIncome > 250000.00 && yearlyTaxableIncome <= 500000.00)
		yearlyTaxToPay = 50000 + (0.30 * (yearlyTaxableIncome - 250000.00));
	else if (yearlyTaxableIncome > 500000.00)
		yearlyTaxToPay = 125000 + (0.32 * (yearlyTaxableIncome - 500000.00));
	
	return parseFloat(yearlyTaxToPay).toFixed(2);
}

function getMonthlyTaxToPay(yearlyTaxableIncome) {
/*  
	Calculates the yearly tax to pay depending on the yearly taxable income.
	Reference:http://www.businessforum.ph/threads/600-Income-Tax-Rate-Table-for-Individual-Taxpayers-in-the-Philippines
*/	
	return getYearlyTaxToPay(yearlyTaxableIncome) / 12.0;

}

function getTaxBracket(yearlyTaxableIncome) {
/*  
	Returns the tax bracket depending on the yearly tax income.
	Reference:http://www.businessforum.ph/threads/600-Income-Tax-Rate-Table-for-Individual-Taxpayers-in-the-Philippines
*/	

	if (yearlyTaxableIncome <= 10000.00)
		taxBracket = "P10,000.00 and below";
	else if (yearlyTaxableIncome > 10000.00 && yearlyTaxableIncome <= 30000.00)
		taxBracket = "(P10,001.00 - P30,000.00)";
	else if (yearlyTaxableIncome > 30000.00 && yearlyTaxableIncome <= 70000.00)
		taxBracket = "(P30,001.00 - P70,000.00)";
	else if (yearlyTaxableIncome > 70000.00 && yearlyTaxableIncome <= 140000.00)
		taxBracket = "(P70,001.00 - P140,000.00)";
	else if (yearlyTaxableIncome > 140000.00 && yearlyTaxableIncome <= 250000.00)
		taxBracket = "(P140,001.00 - P250,000.00)";
	else if (yearlyTaxableIncome > 250000.00 && yearlyTaxableIncome <= 500000.00)
		taxBracket = "(P250,001.00 - P500,000.00)";
	else if (yearlyTaxableIncome > 500000.00)
		taxBracket = "(P500,000.00 and above)";
	
	return taxBracket;
}

function getNetPay(monthlySalary) {
/*
	Calculates the net pay through this equation: 
	net pay = monthly salary - (PhilHealth Contribution + SSS Contribution + Pag Ibig Contribution + Monthly Tax to Pay)
*/

	monthlySalaryFloat = parseFloat(monthlySalary);
	philHealthContributionFloat = parseFloat(getPhilHealthContribution(monthlySalaryFloat));
	sssContributionFloat = parseFloat(getSSSContribution(monthlySalaryFloat));
	pagIbigContributionFloat = parseFloat(getPagIbigContribution(monthlySalaryFloat));
	monthlyTaxToPayFloat = getMonthlyTaxToPay(yearlyTaxableIncome);
	
	return monthlySalaryFloat - (philHealthContributionFloat + sssContributionFloat + pagIbigContributionFloat + monthlyTaxToPayFloat);
}

function displayOutput(monthlySalary) {
/*
	Displays the following: 
		SSS Contribution
		PhilHealth Contribution
		Monthly Taxable Income
		Yearly Taxable Income
		Tax Bracket
		Yearly Tax to Pay
		Monthly Tax to Pay
		Net Pay
*/
	

	monthlySalaryFloat = parseFloat(monthlySalary);
	philHealthContributionFloat = parseFloat(getPhilHealthContribution(monthlySalaryFloat));
	sssContributionFloat = parseFloat(getSSSContribution(monthlySalaryFloat));
	pagIbigContributionFloat = parseFloat(getPagIbigContribution(monthlySalaryFloat));
	monthlyTaxableIncome = getMonthlyTaxableIncome(monthlySalaryFloat);
	yearlyTaxableIncome = getYearlyTaxableIncome(monthlySalaryFloat);
	taxBracket = getTaxBracket(yearlyTaxableIncome);
	yearlyTaxToPayFloat = getYearlyTaxToPay(yearlyTaxableIncome);
	monthlyTaxToPayFloat = getMonthlyTaxToPay(yearlyTaxableIncome);
	netPayFloat = getNetPay(monthlySalaryFloat);
	
	
	finalOutput = "SSS Contribution: " + sssContributionFloat.toFixed(2) + "<br>";
	finalOutput += "PhilHealth Contribution: " + philHealthContributionFloat.toFixed(2) + "<br>";
	finalOutput += "Pag Ibig Contribution: " + pagIbigContributionFloat.toFixed(2) + "<br>";
	finalOutput += "Monthly Taxable Income: " + monthlyTaxableIncome.toFixed(2) + "<br>";
	finalOutput += "Yearly Taxable Income: " + yearlyTaxableIncome.toFixed(2) + "<br>";
	finalOutput += "Tax Bracket: " + taxBracket + "<br>";
	finalOutput += "Yearly Tax To Pay: " + yearlyTaxToPayFloat + "<br>";
	finalOutput += "Monthly Tax To Pay: " + monthlyTaxToPayFloat.toFixed(2) + "<br>";
	finalOutput += "Net Pay: " + netPayFloat.toFixed(2);
	
	
	document.getElementById("total_monthly_salary").innerHTML = finalOutput;

}