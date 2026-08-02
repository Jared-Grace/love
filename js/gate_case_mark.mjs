export function gate_case_mark(pass_is) {
  "The word a gate puts at the head of one checked case's line.";
  "The two words are the same width on purpose, so everything printed after them lines up in a column and a reader finds the failures by the shape of the page rather than by reading it. That is an agreement between the two words, and neither of them can keep it alone - which is exactly why fourteen gates each writing the pair out was a promise fourteen files had to go on keeping by hand.";
  if (pass_is) {
    let r = "pass  ";
    return r;
  }
  let r2 = "FAIL  ";
  return r2;
}
