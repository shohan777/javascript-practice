// A Promise represents a value that might not be available yet, but will be in the future (like data from an API or file load).

// Think of it like a guarantee:

// “I promise to give you the result later.”

// 🔸 Promise States:
// pending: waiting…

// fulfilled: success — got the result

// rejected: failed — got an error
function asyncSum(a, b) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(`The result is ${a + b}`);
    }, 1000);
  });
}

async function calculate() {
  try {
    const res1 = await asyncSum(5, 10);
    console.log(res1);

    const res2 = await asyncSum(20, 30);
    console.log(res2);
  } catch (err) {
    console.log(`Something went wrong ${err}`);
  }
}

calculate();
