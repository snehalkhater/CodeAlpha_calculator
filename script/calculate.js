let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
      }
    } else if (e.target.innerHTML == 'AC') {
      string = "";
      input.value = "0";
    } else if (e.target.innerHTML == 'DEL') {
      string = string.substring(0, string.length - 1);
      input.value = string || "0";
    } else if (e.target.innerHTML == '±') {
      string = string.charAt(0) === '-' ? string.slice(1) : '-' + string;
      input.value = string;
    } else {
      if (input.value === "0" && e.target.innerHTML !== '.') {
        string = e.target.innerHTML;
      } else {
        string += e.target.innerHTML;
      }
      input.value = string;
    }
  });
});