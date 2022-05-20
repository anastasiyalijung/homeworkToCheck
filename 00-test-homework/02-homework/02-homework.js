let numberN = Number(
    prompt("Enter number N"));

if (isNaN(numberN) || !Number.isInteger(numberN)) {
    do {
        alert("Enter integer!");
        const enteredValue = prompt("Enter number N again");
        numberN = Number(enteredValue);
    } while (!Number.isInteger(numberN));
}


let numberM = Number(
    prompt("Enter number M"));

if (isNaN(numberM) || !Number.isInteger(numberM)) {
    do {
        alert("Enter integer!");
        const enteredValue = prompt("Enter number M again");
        numberM = Number(enteredValue);
    } while (!Number.isInteger(numberM));
}

let sum = 0

if (confirm("Do you want to skip even numbers?")) {
    for (let i = numberN; i <= numberM; i++)
        if (i % 2 !== 0)
            sum += i;
} else {
    for (let i = numberN; i <= numberM; i++)
        sum += i;
}

alert(sum);