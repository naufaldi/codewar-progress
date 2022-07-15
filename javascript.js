var min = function(list){
 let valueMin = null;
 let valueTemp = null;
 for(let i = 0; i < list.length; i++){
   if(valueTemp === null ){
      valueTemp = list[i]
   } 
   if (valueTemp <= list[i]){
     console.log("value temp", valueTemp)
        valueTemp = list[i]
   }
 }
 list[valueTemp]
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log( -52 > -110)