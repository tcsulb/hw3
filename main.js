
function numberValidate() {
     const start = Number(prompt('Enter the start number: '));
     const end = Number(prompt('Enter the end number: '));
     const step = Number(prompt('Enter the step value: '));
     if (start === NaN || end === NaN || step === NaN || step === 0) {
          result = createArray(start, end, step);
     } 
     else {
          result = "Invalid integer input, please reload and try again.";
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
     return `The generated array is ${values}`;   
}

const outputStr = numberValidate();
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = "<h3>" + outputStr + "</h3>";