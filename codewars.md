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
function removeUrlAnchor(url) {
  let removed;
  const urlRemove = url.indexOf('#');
  if (urlRemove !== -1) {
    return (removed = url.slice(0, urlRemove));
  }
  return url;
}
//simple
function removeUrlAnchor(url) {
  return url.split('#')[0];
}
//simple 2
function removeUrlAnchor(url) {
  // TODO: complete
  return url.replace(/#.*/gi, '');
}
```

### Kata case 4

```javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  let one = laLigaGoals;
  let two = copaDelReyGoals;
  let three = championsLeagueGoals;
  return one + two + three;
}
```

### Kata case 5

```javascript
function cockroachSpeed(s) {
  const secsInHour = 3600;
  const centimetersInKilometers = 100000;

  return Math.floor((s * centimetersInKilometers) / secsInHour);
}
```

### Kata case 7

```javascript
function greet(name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
}
```

### Kata case 8

```javascript
var min = function (list) {
  let valueMin = null;
  let valueTemp = list[0];
  for (let val of list) {
    if (valueTemp >= val) {
      valueTemp = val;
    }
  }
  return valueTemp;
};

var max = function (list) {
  let valueMin = null;
  let valueTemp = list[0];
  for (let val of list) {
    if (valueTemp <= val) {
      valueTemp = val;
    }
  }
  return valueTemp;
};
```

### Kata case 9

```javascript
function findShort(s) {
  let string = s;
  let array = string.split(' ');
  let arrayMin = 0;
  let arrayTemp = 0;
  for (let i = 0; i < array.length; i++) {
    arrayMin = Array.from(array[i]).length;

    if (arrayTemp === 0) {
      arrayTemp = arrayMin;
    } else if (arrayTemp > arrayMin) {
      arrayTemp = arrayMin;
    }
  }
  return arrayTemp;
}
// other people
function findShort(s) {
  return Math.min.apply(
    null,
    s.split(' ').map((w) => w.length)
  );
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

### Kata case 11

```javascript
function longest(s1, s2) {
  // your code
  const ar1 = s1.split('');
  const ar2 = s2.split('');
  const ar3 = [...new Set([...ar1, ...ar2])];

  const str1 = ar3.sort().join('');
  return str1;
}
```

### Kata case 12

```javascript
function isPalindrome(x) {
  // your code here
  const arr1 = x.toLowerCase('');
  const arr2 = x.toLowerCase('').split('').reverse().join('');
  if (arr1 === arr2) {
    return true;
  } else {
    return false;
  }
}
```

### Kata case 13

```javascript
function toCamelCase(str) {
  if (str !== '') {
    if (str.includes('_')) {
      let arr = str.split('_');
      let arrTempt = [];
      for (let i = 0; i < arr.length; i++) {
        let arrVar = arr[i];
        if (i === 0) {
          arrTempt.push(arr[i]);
        } else {
          arrTempt.push(arrVar[0].toUpperCase() + arrVar.substring(1));
        }
      }
      return arrTempt.join('');
    } else if (str.includes('-')) {
      let arr = str.split('-');
      let arrTempt = [];
      for (let i = 0; i < arr.length; i++) {
        let arrVar = arr[i];
        if (i === 0) {
          arrTempt.push(arr[i]);
        } else {
          arrTempt.push(arrVar[0].toUpperCase() + arrVar.substring(1));
        }
      }
      return arrTempt.join('');
    }
  } else {
    return str;
  }
}

// KATA SHORT ANSWER
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
```

### Kata case 12

```javascript
function smash(words) {
  return words.join(' ');
}
```

### Kata case 13

```javascript
<<<<<<< HEAD
function testEven(n) {
    return n%2===0;
=======
function fakeBin(x) {
  const arr = x.split('');
  let newArr = [];

  for (let i = 0; i <= x.length; i++) {
    if (parseInt(arr[i]) >= 5) {
      newArr.push('1');
    } else if (parseInt(arr[i]) < 5) {
      newArr.push('0');
    }
  }
  return newArr.join('');
>>>>>>> 798bb0ddf1ae06ef2a4d831913d67bb330535648
}

// another solution
function fakeBin(x) {
  return x
    .split('')
    .map((n) => (n < 5 ? 0 : 1))
    .join('');
}
```

### Kata case 14

```javascript
function expandedForm(num) {
  // Your code here
  const arrNum = Array.from(String(num), Number);

  for (let i = 0; i < arrNum.length; i++) {
    for (let y = arrNum.length - i; y > 1; y--) {
      if (!arrNum[i] == '0') {
        arrNum[i] += '0';
      }
    }
  }
  // how can '0' is not number ?
  return arrNum.filter(Number).join(' + ');
}

//alternative
const expandedForm = (n) =>
  n
    .toString()
    .split('')
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(' + ');
//alternative
const expandedForm = (n) =>
  n
    .toString()
    .split('')
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(' + ');
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
function dontGiveMeFive(start, end) {
  let arr = [];

  for (let i = start; i <= end; i++) {
    if (!((i + '').indexOf('5') > -1)) {
      arr.push(i);
    }
  }
  return arr.length;
}

// another solution
function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++;
    }
  }
  return count;
}
```

### Kata case 15

```javascript
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let arrTemp = [];
  let arr = dna.split('');

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 'T') {
      arrTemp.push('U');
    } else {
      arrTemp.push(arr[i]);
    }
  }
  return arrTemp.join('');
}

// another solution
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}
```

### Kata case 16

```javascript
function dup(s) {
  //..
  let newArrAll = [];

  for (let i = 0; i < s.length; i++) {
    let newArr = s[i].split('');
    let tempArr = [];
    let temp = '';

    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] !== temp) {
        tempArr.push(newArr[j]);
        temp = newArr[j];
      }
    }
    newArrAll.push(tempArr.join(''));
  }
  return newArrAll;
}

// another solution
function dup(s) {
  return s.map((x) => x.replace(/(.)\1+/g, '$1'));
}
```

### Kata case 17

```javascript
function getSum(a, b) {
  //Good luck!
  if (a == b) {
    return a;
  } else if (a < b) {
    let val = 0;
    for (let i = a; i <= b; i++) {
      val += i;
    }
    return val;
  } else {
    let val = 0;
    for (let i = b; i <= a; i++) {
      val += i;
    }
    return val;
  }
}

// another solution
const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

function GetSum(a, b) {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}
```

### Kata case 18

```javascript
function addBinary(a, b) {
  let sum = a + b;

  return sum.toString(2);
function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}
```

### Kata case 19

```javascript
function SeriesSum(n) {
  // Happy Coding ^_^
  let penyebut = 1;

  let arr = [];
  for (let i = 1; i <= n; i++) {
    let temp = 1.0 / penyebut;
    penyebut += 3.0;
    arr.push(temp);
  }

  let sumArr = parseFloat(
    arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  ).toFixed(2);
  console.log(sumArr);
  return sumArr;
}
//other kata
function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}
```

### Kata case 20

```javascript
function makeNegative(num) {
  // Code?
  if (num < 0) {
    return num;
  } else if (num == 0) {
    return 0;
  } else {
    return num * -1;
  }
}
//other kata
function makeNegative(num) {
  return -Math.abs(num);
}
```

### Kata case 21

```javascript
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
}
```

### Kata case 22

```javascript
var number = function (busStops) {
  let pass = 0;
  let term = 0;

  for (let i = 0; i < busStops.length; i++) {
    console.log(busStops[i]);
    for (let j = 0; j < busStops[i].length; j++) {
      console.log(busStops[i][j]);
      if (j == 0) {
        pass += busStops[i][j];
      } else if (j == 1) {
        term += busStops[i][j];
      }
    }
  }
  return pass - term;
};

// other solution
const number = (busStops) =>
  busStops.reduce((rem, [on, off]) => rem + on - off, 0);
```
