import { arguments_assert } from "./arguments_assert.mjs";
export function bible_greek_crasis_kai_partners() {
  arguments_assert(arguments, 0);
  ("Every New Testament Greek word that is kai fused onto the word after it, each with the Strong's number of that second word.");
  ("CRASIS IS TWO WORDS WRITTEN AS ONE. κἀγώ is καί and ἐγώ, κἀκεῖ is καί and ἐκεῖ, κἄν is καί and ἐάν. The dictionary gives the fused form a number of its own, so a table that seats kai on a picture never sees the kai inside it, and a chapter built from the numbers loses the picture a person writing by hand put there.");
  ("These numbers are GREEK ONLY. The same numbers in the Hebrew numbering are unrelated words, so a reader must ask which testament a word stands in before asking here.");
  let partners = {
    2504: "1473",
    2546: "1563",
    2547: "1564",
    2548: "1565",
    2579: "1437",
  };
  return partners;
}
