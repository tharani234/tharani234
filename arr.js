let multi = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];
let multisum = 0;
for (i = 0; i < multi.length; i++) {

    multi[i].forEach(element => {

        multisum = multisum + element;
    });
}
console.log(multisum);

//random

var random=Math.floor(Math.random()*10+1);
console.log(random);


//random

var n=Math.random()=100;
n=Math.floor(n)+1;
console.log(n);