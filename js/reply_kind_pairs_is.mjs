import { equal } from "./equal.mjs";
export function reply_kind_pairs_is(kind) {
  "Whether a word of this kind can stand in a pair the reply rules read as English: a dictionary word or a number.";
  let pairs = equal(kind, "dictionary") || equal(kind, "number");
  return pairs;
}
