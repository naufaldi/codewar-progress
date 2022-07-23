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

### Kata Case 3

```javascript
function removeUrlAnchor(url){
  let removed;
  const urlRemove = url.indexOf('#');
  if(urlRemove !== -1){
    return removed = url.slice(0,urlRemove)
  }
  return url
}
//simple
function removeUrlAnchor(url){
  return url.split('#')[0];
}
//simple 2
function removeUrlAnchor(url){
  // TODO: complete
  return url.replace(/#.*/gi,"");
}

```
### Kata case 4
```javascript
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  let one = laLigaGoals;
  let two = copaDelReyGoals;
  let three = championsLeagueGoals;
  return one+two+three;
}
```
### Kata case 5
```javascript
function cockroachSpeed(s) {
  const secsInHour = 3600;
  const centimetersInKilometers = 100000;
  
  return Math.floor((s*centimetersInKilometers)/secsInHour);
}
```

### Kata case 7
```javascript
function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
}

```
### Kata case 8
```javascript
var min = function(list){
    let valueMin = null;
    let valueTemp = list[0];
    for(let val of list){
      if (valueTemp >= val){
           valueTemp = val
      }
    }
    return valueTemp;
}

var max = function(list){
    
    let valueMin = null;
    let valueTemp = list[0];
    for(let val of list){
      if (valueTemp <= val){
           valueTemp = val
      }
    }
    return valueTemp;
}
```
### Kata case 9
```javascript
function findShort(s){
  let string = s;
  let array = string.split(" ");
  let arrayMin = 0;
  let arrayTemp = 0;
  for(let i =0; i < array.length; i++){
    
    arrayMin = Array.from(array[i]).length;
    
    if(arrayTemp === 0 ){
      arrayTemp = arrayMin;
    } else if(arrayTemp > arrayMin){
      arrayTemp = arrayMin;
    }
  }
  return arrayTemp
}
// other people
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

```
### Kata case 10
```javascript
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
// without mutating
```
### Kata case 6
```javascript
```