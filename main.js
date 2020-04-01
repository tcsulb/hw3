const start = Number(prompt('Enter the start number: '));
const end = Number(prompt('Enter the end number: '));
const step = Number(prompt('Enter the step value: '));

function numberValidate(start, end, step) {
     if (isNaN(start) || isNaN(end) || isNaN(step) || step === 0) {
          result = "Invalid integer input, please reload and try again.";
     } 
     else {
          result = `The generated array is ${createArray(start, end, step)}
                    The ${sumArray(start,end,step)}`;
     }
     return result
}    

function createArray(start, end, step) {
     values = [];
     if (start < end) {
          for (let i = start; i <= end; i += step) {
               values.push(i);
          }
     }
     else {
          for (let i = start; i >= end; i += step) {
               values.push(i);
          }  
     }
     return values;   
}

function sumArray(start, end, step) {
     let values = createArray(start, end, step);
     for (let i = 0; i <= length.values; i++) {
          result += values[i];
     }
     return result;
}

const outputStr = numberValidate();
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = "<h3>" + outputStr + "</h3>";