export function js_code_call_commutative() {
  "the function calls whose two arguments can be swapped without changing the result - Math.min(a, b) is the same as Math.min(b, a), and the same for Math.max. The unscramble accepts either argument order for these, the way it already does for commutative operators like + and *. Matched against the unparsed callee, so it is the full dotted name.";
  let names = ["Math.min", "Math.max"];
  return names;
}
