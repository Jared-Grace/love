export function counter(lambda$c) {
  let i = 0;
  lambda$c(c);
  function c() {
    i++;
  }
  return i;
}
