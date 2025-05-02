let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

for(let i = 2; i <= 20; i += 2){
  console.log(i);
}

for(let i = 7; i <= 70; i+= 7){
  console.log(i)
}

const n = 10;

for(let i = 0; i <= 20; i++){
  if(i >= n){
    break;
  }
  console.log(i)
}

let num10= 1;
while(num10 <= 20){
  if(num10 % 3 === 0){
    num10++;
    continue;
  }
  console.log(num10);
  num10++
}