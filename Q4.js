//     Fix the bug for below syntax.
//     function average(a, b) {
//     return a + b / 2;
//      }
//      console.log(average(2, 1));

// the above code won;t give the correct average since it will divide b by 2 first and then add a.
// the correct code should be

function average(a, b) {
    return (a + b) / 2;
}

console.log(average(2, 1))