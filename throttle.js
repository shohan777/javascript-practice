// “Do the thing at most once every X ms.”

// 💡 Use Case:
// User is scrolling a page — you want to trigger something only every 300ms.
function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

function onScroll() {
  console.log("Scroll event triggered at", new Date().toISOString());
}

const throttledScroll = throttle(onScroll, 2000);

// Simulate scroll event being fired rapidly
setInterval(() => {
  throttledScroll();
}, 200); // only triggers once per second
