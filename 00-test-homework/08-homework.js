const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// function 1
function getMyTaxes(salary) {
  return salary * this.tax;
}
console.log("Taxes to pay", getMyTaxes.call(ukraine, 1000)
            
)


// function 2
function getMiddleTaxes() {
  return this.middleSalary * this.tax;
}
console.log("Middletaxes to pay", getMiddleTaxes.call(ukraine)
            
)


// function 3
function getTotalTaxes() {
  return this.middleSalary * this.tax * this.vacancies;
}
console.log("Taxes in total", getTotalTaxes.call(latvia)
  
)



// function 4
function getTaxes() {
  return this.tax;
}

function getMySalary(country) {
  let mySalary = {};

  let timerId = setInterval(() => {
    mySalary["salary"]= Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;

    mySalary["taxes"] = Math.round(getMyTaxes.call(country, mySalary.salary));

    mySalary["profit"] = mySalary.salary - mySalary.taxes;
    console.log(mySalary);
  }, 10000);
  
  return "Wait 10 sec";
}

getMySalary(litva);