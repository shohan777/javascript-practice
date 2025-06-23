function asynSum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if(a == 0 || b == 0) {
                reject('0 is not allowed!')
            } else {
                resolve(`The result is ${a+b}`)
            }
        }, 1000)
    })
}

async function calculate() {
    try {
        const res = await asynSum(4, 5);
        console.log(res);

        const res2 = await asynSum(0, 4);
        console.log(res2);
    } catch(err) {
        console.log(err)
    }
}

calculate();