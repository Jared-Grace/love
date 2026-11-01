import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { modulo } from "./modulo.mjs";
import { regex_url } from "./regex_url.mjs";
export function text_url_pieces(text) {
  "A line of prose cut into the words between web addresses and the addresses themselves, in the order they are read, each saying which of the two it is.";
  "Splitting at a pattern with one capturing group hands back the plain runs and the captured addresses alternately, plain first - so every second piece is an address. Empty plain runs, which appear when a line starts or ends with an address or two addresses touch, are left out, because nothing would be drawn for them.";
  let r = regex_url();
  let parts = text.split(r);
  let pieces = [];
  for (let i = 0; less_than(i, parts.length); i++) {
    let part = parts[i];
    let left = modulo(i, 2);
    let url = equal(left, 1);
    if (equal(part, "")) {
      continue;
    }
    pieces.push({
      text: part,
      url,
    });
  }
  return pieces;
}
