const promise = new Promise(function(resolve, reject){
    resolve('Holi wis');
});

const cows = 15;

const countCows = new Promise(function(resolve, reject){
    if (cows > 10){
        resolve(`We have ${cows} cows`);
    }else{
        reject('Papi llorelo');
    }
});

countCows.then((result)=>{
    console.log(result);
})
