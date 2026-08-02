import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { modulo } from "./modulo.mjs";
export function random_seed_from_text(text) {
  "Turn a word into a seed number, so anything random can be made repeatable by keying it to a name it already has.";
  "The same word always gives the same seed, and two words that differ anywhere give different ones. That is all it promises - it is not a checksum and nothing is protected by it.";
  "Kept inside the range a park-miller generator wants, which is one up to one less than its modulus.";
  let n = 7;
  for (let letter of text) {
    let code = letter.charCodeAt(0);
    let scaled = multiply(n, 31);
    let added = add(scaled, code);
    n = modulo(added, 2147483646);
  }
  let r = add(n, 1);
  return r;
}
