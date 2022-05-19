console.log("Test homework");

let tShirt = 15.678;
let earPhones = 123.965;
let player = 90.2345; 

//Log the max and min numbers
console.log(Math.max(15.678, 123.965, 90.2345));
console.log(Math.min(15.678, 123.965, 90.2345));

//Складіть вартість всіх товарів, в змінну та виведіть цю суму
let totalSum = tShirt + earPhones + player;
console.log(totalSum);

//Округлення в МЕНЬШУ сторону.
let totalSum2 = Math.floor(tShirt + earPhones + player);

//Виведіть суму товарів округлену до сотень
console.log(Math.ceil(totalSum2 / 100) * 100);


if (totalSum2 % 2 == 0) {
	console.log(iseven = true);
} else {
	console.log(iseven = false);
  
};

console.log(500 - totalSum);

console.log(totalSum.toFixed(2));

let sale = Math.random() * (75 - 10) + 10;
let toPay = totalSum2 * (sale / 100);
console.log(toPay.toFixed(2));

let netProfit = totalSum2 / 2 - sale;
console.log(netProfit);


//Template string
console.log(`The highest price is ${earPhones}, the lowest price is ${tShirt}, 
total sum to pay is ${totalSum} which is an uneven number, 
using the sale you pay ${toPay} and at the end the netProfit is equal to ${netProfit}.`);