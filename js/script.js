
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzz = `fizz buzz`
        console.log(fizzBuzz)
    } else if (i % 5 === 0) {
        buzz = `buzz`
        console.log(buzz)
    } else if (i % 3 === 0) {
        fizz = `fizz`
        console.log(fizz)
    } else {
        console.log(i)
    }
}