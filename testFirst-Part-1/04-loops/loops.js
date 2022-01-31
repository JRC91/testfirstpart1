/* eslint-disable no-unused-vars */
function repeat(word ,num){
    let length = '';
    for (let i = num; i >0; i--){
    length += word;
    }
    return length;
}
function sum(array){
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}
function join(array, space){
    let comeTogether = '';
    if(!space){space = '';}
    for (let i = 0; i < array.length; i++ ){
        if (i == array.length-1) {
        comeTogether +=array[i];
    }
      else{  comeTogether +=array[i]+space;
    }
    }
    return comeTogether;
}
function gridGenerator(num){
    let row = '';
    let temp = '';
    for(let i = 1; i <= num; i++){
        let line ='';
    if(i%2 == 0){
        for(let i =1; i <= num; i++){
            if(i%2 == 0){line+='#';}
            if(i%2 == 1){line+=' ';}          
        }}     
    if(i%2 == 1) {
        for(let i = 1; i <= num; i++){
            if(i%2 == 1){line+='#';}
            if(i%2 == 0){line+=' ';}
            }}
      
    temp += line + '\n';
    }
    return temp;
}
function paramify(obj){
    let output='';
    let tempArray= [];
    for(let key in obj){
        let currKey = key;
        
        if(!obj.hasOwnProperty(key)){continue;}
        tempArray.push(key+'='+obj[key]);
         
    }
    tempArray.sort();
    for(let i = 0; i < tempArray.length; i++){
    output+=tempArray[i]+'&';   
    }
    output = output.slice(0,-1);
    return output;
}

/*
function paramifyObjectKey(obj){
    let keyArray = Object.keys(obj);
    let tempArray = [];
    let output = '';
    for(let j = 0; j < keyArray.length; j++){
        tempArray.push(keyArray[j]+'='+obj[keyArray[j]]);
    }
    tempArray.sort();
    for (let i = 0; i < tempArray.length; i++){
        output +=tempArray[i]+'&';
    }
    
    output = output.slice(0,-1);
    return output
}
*/

function paramifyObjectKeys(obj){
    let keyArray = Object.keys(obj);
    let output = '';
    for(let j = 0; j < keyArray.length; j++){
        keyArray.splice(j, 1, keyArray[j]+'='+obj[keyArray[j]]);
    }
    keyArray.sort();
    for (let i = 0; i < keyArray.length; i++){
        output +=keyArray[i]+'&';
    }
    
    output = output.slice(0,-1);
    return output
}



function sort(arr){
 
        for(let i = 0; i < arr.length; i++)
        {   
            for (let j = i + 1; j< arr.length; j++){
            if(arr[i] > arr[j]){
                let swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
                
            }
            else {continue;}
            }
        }
        return arr;
    }
    