/* eslint-disable no-unused-vars */
//part 1, function to adjust an object
function setPropsOnObj(object){
    object.x = 7;
    object['y']=8;
    object['onePlus'] = function onePlus(num) { return num + 1;};
    
    
};
//part 2, function to adjust an array
function setPropsOnArr(arrayObject){
    arrayObject['hello'] = function hello(){return 'Hello!';};
    arrayObject['full']='stack';
    arrayObject[0]=5;
    arrayObject['twoTimes'] = function (num) {return num * 2;}
    }
// part 3, function to adjust another function
function setPropsOnFunc(functionObject){
    functionObject['year'] = '20??';
    functionObject['divideByTwo'] = function divideByTwo(num){return num/2;};
}
// part 4, function that combines arrays
function shallowCopy(arr1, arr2){
    if (Array.isArray(arr1)){
    let returned = [];
    for(let i = 0; i < arr1.length ; i++){
         returned.push(arr1[i]);
    }
    for(let i = 0; i < arr2.length ; i++){
         returned.push(arr2[i]);
    }
    return returned;
    }
    if (typeof arr1 === 'object')
    { let returned = {};
    for ( let keys in arr1){ 
        returned[keys] = arr1[keys];
    }
    for ( let keys in arr2){ 
        returned[keys] = arr2[keys];;
    }
    return returned;
    }
}

