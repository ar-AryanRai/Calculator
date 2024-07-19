let input = '';
let ans = '';

function clickClear(){
  input = '';
  ans = '';
  display();
}

function clickOne(){
  input += 1;
  display();
}

function clickTwo(){
  input += 2;
  display();
}

function clickThree(){
  input += 3;
  display();
}

function clickFour(){
  input += 4;
  display();
}

function clickFive(){
  input += 5;
  display();
}

function clickSix(){
  input += 6;
  display();
}

function clickSeven(){
  input += 7;
  display();
}

function clickEight(){
  input += 8;
  display();
}

function clickNine(){
  input += 9;
  display();
}

function clickZero(){
  input += 0;
  display();
}

function clickDecimal(){
  input += `.`;
  display();
}

function clickPlus(){
  input += ` + `;
  display();
}

function clickMinus(){
  input += ` - `;
  display();
}

function clickDivide(){
  input += ` / `;
  display();
}

function clickMultiply(){
  input += ` * `;
  display();
}

function clickEqual(){
  calculate();
  if (ans){
    input = ans;
  }
  else{
    input = '';
  }
  document.querySelector('.screen').innerHTML = '';
}

function clickBack(){
  input = input.slice(0,input.length-1);
  display();
}

function calculate(){
  if(input){
    ans = eval(input);
    ans = parseFloat(ans).toFixed(5);
    ans = Number(ans);
    if(ans.toString().length > 10){
      ans = ans.toExponential(2);
    }
  }
  else{
    ans = '';
  }
}

function display(){
  document.querySelector('.screen').innerHTML = input;
  calculate();
  document.querySelector('.resultDisplay').innerHTML = ans;
}

        