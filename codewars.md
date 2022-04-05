## Javascript

### Kata Case 1

```javascript
//more simple
var find_average = (array) => {
  return array.length === 0
    ? 0
    : array.reduce((acc, ind) => acc + ind, 0) / array.length;
};
//mycode
function find_average(array) {
  const lengthArr = array.length;
  let sumArr = 0;

  if (array.length > 0) {
    for (let i = 0; array.length > i; i++) {
      sumArr += array[i];
    }
    return sumArr / lengthArr;
  }
  return 0;
}
```

### Kata Case 2

```javascript
//more simple
function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}
//mycode
function sumMix(x){
  const oldArr = x;
  const newArr = [];
for(let i = 0; oldArr.length > i; i++){
  if(typeof oldArr[i] === 'string' ){
    const numberValue = Number(oldArr[i])
    newArr.push(numberValue)
  } else{
    newArr.push(oldArr[i])
  }

}
 const initialValue = 0;
const sumWithInitial = newArr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
  return sumWithInitial
}
}
```
