// alert("Hello! You are intracting with calculator\n Let's go, to play with numbers");
document.getElementById("bt");
let count = 0;

function num(op) {
  if (count <= 40) {
    count += 1;
    if (op === "+") {
      document.getElementById("display-p").textContent += "+";
    } else if (op == "-") {
      document.getElementById("display-p").textContent += "-";
    } else if (op == "*") {
      document.getElementById("display-p").textContent += "*";
    } else if (op == ".") {
      document.getElementById("display-p").textContent += ".";
    } else if (op == "/") {
      document.getElementById("display-p").textContent += "/";
    } else if (op == "=") {
      txtSplit(document.getElementById("display-p").innerText);
    } else {
      document.getElementById("display-p").textContent += op;
    }
  } else {
    alert("Maximum limit exceds..");
  }
}
function reset() {
  document.getElementById("display-p").textContent = "";
}
function txtSplit(txt) {
  let l = txt.length;
  let arr = txt.split("");
  opsdef(arr, l);
}
function opsdef(arr, l) {
  let num1 = "";
  let num2 = "";
  let opsy;
  let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let symb = ["+", "-", "/", "*"];
  let count = 0;
  for (let i = 0; i <= l - 1; i++) {
    if (count == 0) {
      if (nums.includes(arr[i] || arr[i] == ".")) {
        num1 += arr[i];
      } else if (symb.includes(arr[i])) {
        opsy = arr[i];
        count++;
        for (let j = i + 1; j <= l - 1; j++) {
          if (nums.includes(arr[j] || arr[i] == ".")) {
            num2 += arr[j];
          } else {
            document.getElementById("display-p").textContent =
              "Invalid opration..";
          }
        }
      } else {
        document.getElementById("display-p").textContent = "Invalid opration..";
      }
    }
  }
  if (num2.length > 0) {
    ops(num1, opsy, num2);
  } else {
    document.getElementById("display-p").textContent = "Invalid opration..";
  }
}

function ops(num1, opsy, num2) {
  alert(num1 + "jiii" + num2);
  n1 = Number(num1);
  n2 = Number(num2);
  if (opsy == "+") {
    let an = n1 + n2;
    document.getElementById("display-p").textContent = an;
  } else if (opsy == "-") {
    let an = n1 - n2;
    document.getElementById("display-p").textContent = an;
  } else if (opsy == "*") {
    let an = n1 * n2;
    document.getElementById("display-p").textContent = an;
  } else {
    if (n2 == 0) {
      document.getElementById("display-p").textContent =
        "Division with 0 is not valid";
    } else {
      let an = n1 / n2;
      document.getElementById("display-p").textContent = an;
    }
  }
}
