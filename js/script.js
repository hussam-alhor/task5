const displayd1El = document.querySelector(".displayd-1");
const displayd2El = document.querySelector(".displayd-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearEl = document.querySelector(".all-clear");
const lastClearEl = document.querySelector(".last-clear");
const mainous = document.querySelector(".mainous");

let num1 = "";
let num2 = "";
let result = null;
let operation = "";
let haveDot = false;
let main = "-"

numbersEl.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === "." && haveDot) {
            return;
        }

        num2 += e.target.innerText;
        displayd2El.innerText = num2;
    });
});
let x;
operationEl.forEach((oper) => {
    oper.addEventListener("click", (e) => {
        const operationName = e.target.innerText;
        operation = operationName;
        if (!num2 && operation !== "-") return;
        haveDot = false;

        if (num1 && num2 && operation) {
            mathOperation();
        } else {
            result = parseFloat(num2);
        }
        clearVar(operationName);

    });
});
function clearVar(name = "") {
    if (num2) {
        num1 += num2 + " " + name + " ";
        displayd1El.innerText = num1;
        displayd2El.innerText = "";
        num2 = "";
        tempResultEl.innerText = result;
    } else {
        num2 += operation + num2
        displayd2El.innerText = num2
    }
}

function mathOperation() {
    if (operation === "X") {
        result = parseFloat(result) * parseFloat(num2);
    } else if (operation === "+") {
        result = parseFloat(result) + parseFloat(num2);
    } else if (operation === "-") {
        result = parseFloat(result) - parseFloat(num2);
    } else if (operation === "/") {
        result = parseFloat(result) / parseFloat(num2);
    } else if (operation === "%") {
        result = parseFloat(result) % parseFloat(num2);
    }
}

equalEl.addEventListener("click", () => {
    if (!num2 || !num1) return;
    haveDot = false;
    mathOperation();
    clearVar();
    displayd2El.innerText = result;
    tempResultEl.innerText = "";
    num2 = result;
    num1 = "";
});

clearEl.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    displayd1El.innerText = "";
    displayd2El.innerText = "";
    result = "";
    tempResultEl.innerText = "";
});

lastClearEl.addEventListener("click", () => {
    displayd2El.innerText = "";
    num2 = "";
});

