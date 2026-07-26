export function text_digits_mask(text) {
  "replace every number - integer or decimal - with a single # so two crawls of the same screen compare equal despite the random values baked into each quiz question. Decimals collapse to the same token as integers (3 and 3.2 both become #), so a value that is sometimes whole and sometimes fractional does not read as a change. The labels, prose, and structure the make-sense judge cares about stay; the volatile operands do not";
  let masked = text.replace(/[0-9]+(\.[0-9]+)?/g, "#");
  return masked;
}
