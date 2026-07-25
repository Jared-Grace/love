export function number_pad_2(n) {
  "a number as a two-digit zero-padded string: 3 becomes '03', 12 stays '12'";
  let s = String(n);
  let padded = s.padStart(2, "0");
  return padded;
}
