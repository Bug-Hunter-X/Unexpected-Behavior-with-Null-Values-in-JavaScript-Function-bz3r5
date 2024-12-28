function foo(a, b) {
  a = (a === null || a === undefined) ? 0 : a;
  b = (b === null || b === undefined) ? 0 : b; 
  return a + b; 
}
//More robust way to handle null values.  Using the nullish coalescing operator (??) for more concise code
function foo(a, b) {
  return (a ?? 0) + (b ?? 0);
}