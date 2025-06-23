function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // clear previous timer
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


function searchQuery(value) {
  console.log("Searching for:", value);
}

const debouncedSearch = debounce(searchQuery, 500);

// Simulate typing
debouncedSearch("s");
debouncedSearch("sh");
debouncedSearch("sho");
debouncedSearch("shoh");
debouncedSearch("shoha");
debouncedSearch("shohan"); // only this one triggers search after 500ms
