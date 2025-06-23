function asyncSum(a, b) {
  return new Promise((resolve) => {
    setTimeout(function() {
      resolve(`The result is ${a+b}`)
    }, 1000)
  })
}

async function calculate() {
  try {
    const res1 = await asyncSum(5, 10);
    console.log(res1);
    
    const res2 = await asyncSum(20, 30);
    console.log(res2);
  } catch(err) {
    console.log(`Something went wrong ${err}`)
  }
}

calculate();