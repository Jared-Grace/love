import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
export function integer_even_is(n) {
  "Whether this whole number splits into two equal halves with nothing over.";
  "Written as the remainder after two and a check that nothing is left, rather";
  "than through the neighbour that hands the remainder back, because that is how";
  "every place asking it writes it - a striped calendar row, a clock reading, a";
  "lesson choosing which of a pair to show - and a body written the way its";
  "callers write it is the only body the fold can recognise in them.";
  "The neighbour uses the wrapping kind of remainder, which matters for the odd";
  "reading beside it and not for this one: below zero the two kinds differ in";
  "sign only, and a sign cannot turn nothing into something.";
  let e = modulo(n, 2);
  let eq = equal(e, 0);
  return eq;
}
