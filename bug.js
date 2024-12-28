function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Incorrect handling of null values
  }
  return a + b; 
}