import { less_than } from "./less_than.mjs";
import { text_size } from "./text_size.mjs";
export function text_hash_short(text) {
  "$plain text";
  "A short word standing for a piece of writing - about six letters and digits - made the same way in a page and on a machine, so a link can name a thing by what it says and not by where it sits in a list.";
  "It is 32-bit FNV-1a, written out in plain arithmetic because the one hash the repo already had asks the machine's own library, and a page in a browser has no such library to ask.";
  "Thirty-two bits is far too few to tell every piece of writing apart, and it is not asked to: it only has to tell apart the handful of things one list holds, and whoever uses it for that should keep a check that it still does.";
  let h = 2166136261;
  let size = text_size(text);
  for (let i = 0; less_than(i, size); i++) {
    h = h ^ text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  let unsigned = h >>> 0;
  let word = unsigned.toString(36);
  return word;
}
