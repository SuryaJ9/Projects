const radius = [1,2,3,4,5,6];
const jai = function (radius){
    const surya = [];
    for(let i= 0;i<radius.length;i++){
        surya.push(radius[i] * radius[i]);
    }
    return surya;
};
console.log(jai(radius));