let input = document.getElementById("ketQua");

let button = document.querySelectorAll("button");

let str = "";
let arr = Array.from(button);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML =="=") {
      str = eval(str);
      input.innerHTML = str;
    } else if (e.target.innerHTML =="C") {
        str = "";
      input.innerHTML = str;
    } else {
      str += e.target.innerHTML;
      input.innerHTML = str;
    }   
  });
});
