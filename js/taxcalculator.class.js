function TaxCalculator(floatMonthlySalary) {
	this.floatMonthlySalary = floatMonthlySalary;
	
	this.getSSSContribution = function getSSSContribution() {
	/*  
		Gets the SSS contribution depending on the monthlySalary of the user. 
		Reference:http://www.e-pinoyguide.com/2013/09/how-to-compute-sss-philhealth-and-hdmf.html
	*/
		if (this.floatMonthlySalary <= 11249.99)
			floatSSSContribution = 0.00;
		else if (this.floatMonthlySalary >= 11250.00 && this.floatMonthlySalary <= 11749.99)
			floatSSSContribution = 417.80;
		else if (this.floatMonthlySalary >= 11750.00 && this.floatMonthlySalary <= 12249.99)
			floatSSSContribution = 436.00;
		else if (this.floatMonthlySalary >= 12250.00 && this.floatMonthlySalary <= 12749.99)
			floatSSSContribution = 454.20;
		else if (this.floatMonthlySalary >= 12750.00 && this.floatMonthlySalary <= 13249.99)
			floatSSSContribution = 472.30;
		else if (this.floatMonthlySalary >= 13250.00 && this.floatMonthlySalary <= 13749.99)
			floatSSSContribution = 490.00;	
		else if (this.floatMonthlySalary >= 13750.00 && this.floatMonthlySalary <= 14249.99)
			floatSSSContribution = 508.70;		
		else if (this.floatMonthlySalary >= 14250.00 && this.floatMonthlySalary <= 14749.99)
			floatSSSContribution = 526.80;
		else if (this.floatMonthlySalary >= 14750.00 && this.floatMonthlySalary <= 15249.99)
			floatSSSContribution = 545.00;		
		else if (this.floatMonthlySalary >= 15250.00 && this.floatMonthlySalary <= 15749.99)
			floatSSSContribution = 563.20;		
		else if (this.floatMonthlySalary >= 15750.00)
			floatSSSContribution = 581.30;
		
		return parseFloat(floatSSSContribution.toFixed(2));
	}
	
	this.getPhilHealthContribution = function getPhilHealthContribution() {
	/*  
		Gets the PhilHealth contribution depending on the monthlySalary of the user. 
		Reference:http://www.e-pinoyguide.com/2013/09/how-to-compute-sss-philhealth-and-hdmf.html
	*/	
		if (this.floatMonthlySalary <= 8999.99)
			floatPhilHealthContribution = 100.00;
		else if (this.floatMonthlySalary >= 9000.00 && this.floatMonthlySalary <= 9999.99 )
			floatPhilHealthContribution = 112.50;		
		else if (this.floatMonthlySalary >= 10000.00 && this.floatMonthlySalary <= 10999.99 )
			floatPhilHealthContribution = 125.00;
		else if (this.floatMonthlySalary >= 11000.00 && this.floatMonthlySalary <= 11999.99 )
			floatPhilHealthContribution = 137.50;		
		else if (this.floatMonthlySalary >= 12000.00 && this.floatMonthlySalary <= 12999.99 )
			floatPhilHealthContribution = 150.00;
		else if (this.floatMonthlySalary >= 13000.00 && this.floatMonthlySalary <= 13999.99 )
			floatPhilHealthContribution = 162.50;		
		else if (this.floatMonthlySalary >= 14000.00 && this.floatMonthlySalary <= 14999.99 )
			floatPhilHealthContribution = 175.00;	
		else if (this.floatMonthlySalary >= 15000.00 && this.floatMonthlySalary <= 15999.99 )
			floatPhilHealthContribution = 187.50;	
		else if (this.floatMonthlySalary >= 16000.00 && this.floatMonthlySalary <= 16999.99 )
			floatPhilHealthContribution = 200.00;
		else if (this.floatMonthlySalary >= 17000.00 && this.floatMonthlySalary <= 17999.99 )
			floatPhilHealthContribution = 212.50;
		else if (this.floatMonthlySalary >= 18000.00 && this.floatMonthlySalary <= 18999.99 )
			floatPhilHealthContribution = 225.00;	
		else if (this.floatMonthlySalary >= 19000.00 && this.floatMonthlySalary <= 19999.99 )
			floatPhilHealthContribution = 237.50;		
		else if (this.floatMonthlySalary >= 20000.00 && this.floatMonthlySalary <= 20999.99 )
			floatPhilHealthContribution = 250.00;
		else if (this.floatMonthlySalary >= 21000.00 && this.floatMonthlySalary <= 21999.99 )
			floatPhilHealthContribution = 262.50;		
		else if (this.floatMonthlySalary >= 22000.00 && this.floatMonthlySalary <= 22999.99 )
			floatPhilHealthContribution = 275.00;	
		else if (this.floatMonthlySalary >= 23000.00 && this.floatMonthlySalary <= 23999.99 )
			floatPhilHealthContribution = 287.50;
		else if (this.floatMonthlySalary >= 24000.00 && this.floatMonthlySalary <= 24999.99 )
			floatPhilHealthContribution = 300.00;	
		else if (this.floatMonthlySalary >= 25000.00 && this.floatMonthlySalary <= 25999.99 )
			floatPhilHealthContribution = 312.50;		
		else if (this.floatMonthlySalary >= 26000.00 && this.floatMonthlySalary <= 26999.99 )
			floatPhilHealthContribution = 325.00;		
		else if (this.floatMonthlySalary >= 27000.00 && this.floatMonthlySalary <= 27999.99 )
			floatPhilHealthContribution = 337.50;		
		else if (this.floatMonthlySalary >= 28000.00 && this.floatMonthlySalary <= 28999.99 )
			floatPhilHealthContribution = 350.00;		
		else if (this.floatMonthlySalary >= 29000.00 && this.floatMonthlySalary <= 29999.99 )
			floatPhilHealthContribution = 362.50;	
		else if (this.floatMonthlySalary >= 30000.00 && this.floatMonthlySalary <= 30999.99 )
			floatPhilHealthContribution = 375.00;		
		else if (this.floatMonthlySalary >= 31000.00 && this.floatMonthlySalary <= 31999.99 )
			floatPhilHealthContribution = 387.50;			
		else if (this.floatMonthlySalary >= 32000.00 && this.floatMonthlySalary <= 32999.99 )
			floatPhilHealthContribution = 400.00;		
		else if (this.floatMonthlySalary >= 33000.00 && this.floatMonthlySalary <= 33999.99 )
			floatPhilHealthContribution = 412.50;
		else if (this.floatMonthlySalary >= 34000.00 && this.floatMonthlySalary <= 34999.99 )
			floatPhilHealthContribution = 425.00;		
		else if (this.floatMonthlySalary >= 35000.00)
			floatPhilHealthContribution = 437.50;
		
		return parseFloat(floatPhilHealthContribution.toFixed(2));
	}
	
	this.getPagIbigContribution = function getPagIbigContribution() {
	/*  
		Gets the Pag Ibig contribution depending on the monthlySalary of the user. 
		Reference:http://www.e-pinoyguide.com/2013/09/how-to-compute-sss-philhealth-and-hdmf.html
	*/	
		if (this.floatMonthlySalary <= 1500.00)
			floatPagIbigContribution = (0.01 * this.floatMonthlySalary);
		else if (this.floatMonthlySalary > 1500.00 && this.floatMonthlySalary <= 4999.99)
			floatPagIbigContribution = (0.02 * this.floatMonthlySalary);
		else if (this.floatMonthlySalary >= 5000.00)
			floatPagIbigContribution = 100;
			
		return parseFloat(floatPagIbigContribution.toFixed(2));
	}
	
	
	this.getMonthlyTaxableIncome = function getMonthlyTaxableIncome() {
	/*  
		Calculates the monthly taxable income via this equation:
		monthly taxable income = monthly salary - (Phil Health Contribution + SSS Contribution + Pag Ibig Contribution)
		Reference:http://www.e-pinoyguide.com/2014/07/how-to-compute-your-withholding-tax.html
	*/	
		return (this.floatMonthlySalary - (this.getSSSContribution() + this.getPhilHealthContribution() + this.getPagIbigContribution())).toFixed(2);
	}
	
	this.getYearlyTaxableIncome = function getYearlyTaxableIncome() {
	/*  
		Calculates the yearly taxable income via this equation:
		yearly taxable income = (monthly salary - (Phil Health Contribution + SSS Contribution + Pag Ibig Contribution)) * 12
		Reference:http://www.e-pinoyguide.com/2014/07/how-to-compute-your-withholding-tax.html
	*/	
		return (this.getMonthlyTaxableIncome() * 12).toFixed(2);
	}
	
	this.getYearlyTaxToPay = function getYearlyTaxToPay() {
	/*  
		Calculates the yearly tax to pay depending on the yearly taxable income.
		Reference:http://www.businessforum.ph/threads/600-Income-Tax-Rate-Table-for-Individual-Taxpayers-in-the-Philippines
	*/	
		floatYearlyTaxableIncome = this.getYearlyTaxableIncome();
		
		if (floatYearlyTaxableIncome <= 10000.00)
			floatYearlyTaxToPay = (0.05 * floatYearlyTaxableIncome);
		else if (floatYearlyTaxableIncome > 10000.00 && floatYearlyTaxableIncome <= 30000.00)
			floatYearlyTaxToPay = 500 + (0.10 * (floatYearlyTaxableIncome - 10000.00))
		else if (floatYearlyTaxableIncome > 30000.00 && floatYearlyTaxableIncome <= 70000.00)
			floatYearlyTaxToPay =  2500 + (0.15 * (floatYearlyTaxableIncome - 30000.00));
		else if (floatYearlyTaxableIncome > 70000.00 && floatYearlyTaxableIncome <= 140000.00)
			floatYearlyTaxToPay = 8500 + (0.20 * (floatYearlyTaxableIncome - 70000.00));
		else if (floatYearlyTaxableIncome > 140000.00 && floatYearlyTaxableIncome <= 250000.00)
			floatYearlyTaxToPay = 22500 + (0.25 * (floatYearlyTaxableIncome - 140000.00));
		else if (floatYearlyTaxableIncome > 250000.00 && floatYearlyTaxableIncome <= 500000.00)
			floatYearlyTaxToPay = 50000 + (0.30 * (floatYearlyTaxableIncome - 250000.00));
		else if (floatYearlyTaxableIncome > 500000.00)
			floatYearlyTaxToPay = 125000 + (0.32 * (floatYearlyTaxableIncome - 500000.00));
		
		return floatYearlyTaxToPay.toFixed(2);
	}
	
	this.getMonthlyTaxToPay = function getMonthlyTaxToPay() {
	/*  
		Calculates the yearly tax to pay depending on the yearly taxable income.
		Reference:http://www.businessforum.ph/threads/600-Income-Tax-Rate-Table-for-Individual-Taxpayers-in-the-Philippines
	*/	
		return parseFloat((this.getYearlyTaxToPay() / 12).toFixed(2));
	}
	
	this.getTaxBracket = function getTaxBracket() {
	/*  
		Returns the tax bracket depending on the yearly tax income.
		Reference:http://www.businessforum.ph/threads/600-Income-Tax-Rate-Table-for-Individual-Taxpayers-in-the-Philippines
	*/	
		floatYearlyTaxableIncome = this.getYearlyTaxableIncome();
		
		if (floatYearlyTaxableIncome <= 10000.00)
			strTaxBracket = "P10,000.00 and below";
		else if (floatYearlyTaxableIncome > 10000.00 && floatYearlyTaxableIncome <= 30000.00)
			strTaxBracket = "(P10,001.00 - P30,000.00)";
		else if (floatYearlyTaxableIncome > 30000.00 && floatYearlyTaxableIncome <= 70000.00)
			strTaxBracket = "(P30,001.00 - P70,000.00)";
		else if (floatYearlyTaxableIncome > 70000.00 && floatYearlyTaxableIncome <= 140000.00)
			strTaxBracket = "(P70,001.00 - P140,000.00)";
		else if (floatYearlyTaxableIncome > 140000.00 && floatYearlyTaxableIncome <= 250000.00)
			strTaxBracket = "(P140,001.00 - P250,000.00)";
		else if (floatYearlyTaxableIncome > 250000.00 && floatYearlyTaxableIncome <= 500000.00)
			strTaxBracket = "(P250,001.00 - P500,000.00)";
		else if (floatYearlyTaxableIncome > 500000.00)
			strTaxBracket = "(P500,000.00 and above)";
		
		return strTaxBracket;
	}
	
	this.getNetPay = function getNetPay() {
	/*
		Calculates the net pay through this equation: 
		net pay = monthly salary - (PhilHealth Contribution + SSS Contribution + Pag Ibig Contribution + Monthly Tax to Pay)
	*/
		return (this.floatMonthlySalary - (this.getSSSContribution() + this.getPhilHealthContribution() + this.getPagIbigContribution() + this.getMonthlyTaxToPay())).toFixed(2);
	}
	
	this.displayResults = function displayResults() {
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
	
		strDisplayResult = "SSS Contribution: P" + this.getSSSContribution() + "<br>";
		strDisplayResult += "PhilHealth Contribution: P" + this.getPhilHealthContribution() + "<br>";
		strDisplayResult += "Pag Ibig Contribution: P" + this.getPagIbigContribution() + "<br>";
		strDisplayResult += "Monthly Taxable Income: P" + this.getMonthlyTaxableIncome() + "<br>";
		strDisplayResult += "Yearly Taxable Income: P" + this.getYearlyTaxableIncome() + "<br>";
		strDisplayResult += "Tax Bracket: " + this.getTaxBracket() + "<br>";
		strDisplayResult += "Yearly Tax To Pay: " + this.getYearlyTaxToPay() + "<br>";
		strDisplayResult += "Monthly Tax To Pay: P" + this.getMonthlyTaxToPay() + "<br>";
		strDisplayResult += "Net Pay: P" + this.getNetPay();
		
		return strDisplayResult;
	}
}
