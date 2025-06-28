const mass1 = [];
var N = 6;
for(let i = 0; i < N; i++){
    mass1[i] = [];
    for(let j = 0; j < N; j++){
        mass1[i][j] = Math.floor(Math.random() * 99) + 1;
    }
}
var sum = 0;
for(let i = 0; i < N; i++){
    sum = sum + mass1[i][i];
    console.log("f " + sum);
}
var unsum = 0;
for(let i = N - 1; i >= 0; i--){
    unsum = unsum + mass1[N-i-1][i];
    console.log("s " + mass1[N-i-1][i]);
}

console.log(mass1, "Сумма элементов главной диагонали: " + sum, "Сумма элементов побочной диагонали: " + unsum);