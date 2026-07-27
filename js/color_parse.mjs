export function color_parse(written) {
  "read a css colour written as hex or as rgb into its four channels, so two spellings of one colour can be compared as numbers rather than as text. Three, four, six and eight digit hex all work, and a missing alpha means fully opaque. Anything it cannot read comes back as null, which is the honest answer for a name like transparent or currentColor.";
  let parsed = null;
  let hash = written.startsWith("#");
  if (hash) {
    let digits = written.slice(1);
    let short = digits.length === 3 || digits.length === 4;
    if (short) {
      digits = digits
        .split("")
        .map(function each_digit(d) {
          return d + d;
        })
        .join("");
    }
    let full = digits.length === 6 || digits.length === 8;
    if (!full) {
      return null;
    }
    let alpha = 1;
    let has_alpha = digits.length === 8;
    if (has_alpha) {
      alpha = parseInt(digits.slice(6, 8), 16) / 255;
    }
    parsed = {
      red: parseInt(digits.slice(0, 2), 16),
      green: parseInt(digits.slice(2, 4), 16),
      blue: parseInt(digits.slice(4, 6), 16),
      alpha,
    };
    return parsed;
  }
  let inside = written.replace(/[^0-9., ]/g, "");
  let numbers = inside.split(",").map(function each_number(n) {
    return parseFloat(n);
  });
  let enough = numbers.length >= 3;
  let readable = enough && !numbers.slice(0, 3).some(Number.isNaN);
  if (!readable) {
    return null;
  }
  let alpha_written = numbers.length > 3 && !Number.isNaN(numbers[3]);
  parsed = {
    red: numbers[0],
    green: numbers[1],
    blue: numbers[2],
    alpha: alpha_written ? numbers[3] : 1,
  };
  return parsed;
}
