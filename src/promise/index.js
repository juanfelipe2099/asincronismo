const promise = new Promise(function(resolve, reject){
    resolve('Holi wis');
});

const cows = 5;

const countCows = new Promise(function(resolve, reject){
    if (cows > 10){
        resolve(`We have ${cows} cows`);
    }else{
        reject('Esto es un cambio bobo');
    }
});

countCows.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log('finally'));
