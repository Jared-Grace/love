import { equal } from "./equal.mjs";
export function text_spelling_old_same_is(before, after) {
  "Whether two words differ only the way old English spelling differs: u for v, an e on the end, a doubled letter. So loue is love, sonne is son, and vs is us, while the and thee stay apart.";
  function normal(word) {
    let r = word.replace(/v/g, "u").replace(/e$/, "").replace(/(.)\1/g, "$1");
    return r;
  }
  let left = normal(before);
  let right = normal(after);
  let same = equal(left, right);
  return same;
}
