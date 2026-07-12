export function incrementer() {
  let count = 0;
  let r = function lambda() {
    count++;
    return count;
  };
  return r;
}
