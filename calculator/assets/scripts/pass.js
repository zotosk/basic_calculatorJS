const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
    return parseInt(userInput.value);
}

// function clearInput(){
//     userInput.value = '';
// }

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const culcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, culcDescription);
}

function writeToLog(operationIdentity, prevResult, operationNum, newResult) {
    const logEntry = {
        operation: operationIdentity,
        prevResult: prevResult,
        enteredNumber: operationNum,
        newResult: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}

function add() {
    const enteredUserNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredUserNumber;
    createAndWriteLog('+', initialResult, enteredUserNumber);
    writeToLog('ADD', initialResult, enteredUserNumber, currentResult );
}

function substruct() {
    const enteredUserNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredUserNumber;
    createAndWriteLog('-', initialResult, enteredUserNumber);
    writeToLog('SUBSTRUCT', initialResult, enteredUserNumber, currentResult );
}

function multiply() {
    const enteredUserNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredUserNumber;
    createAndWriteLog('*', initialResult, enteredUserNumber);
    writeToLog('MULTIPLY', initialResult, enteredUserNumber, currentResult );
}

function divide() {
    const enteredUserNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredUserNumber;
    createAndWriteLog('/', initialResult, enteredUserNumber);
    writeToLog('DIVIDE', initialResult, enteredUserNumber, currentResult );
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substruct);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
// clearBtn.addEventListener('click', clearInput);





