var index=process.argv.slice(2);
var result = index.reduce((acc,num)=>{
    return acc + Number(num);
},0);
console.log(result);