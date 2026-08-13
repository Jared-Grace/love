export function regex_digits_not() {
  "Everything that is not a digit, for taking the digits out of a text and leaving nothing else.";
  let r = /[^0-9]/g;
  return r;
}
