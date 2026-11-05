import { equal } from "./equal.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_word_u_v(word) {
  "One word however old printing wrote its u and v, so love also reads loue and us also reads vs. The spellings are worked out from the word, so no rule lists them.";
  "Each spelling stays a whole word rather than a choice of one letter between two pieces, because how many typing mistakes a word forgives is counted from its length: cut at the v, beloved becomes two short pieces that forgive none.";
  let spellings = [""];
  for (let letter of word) {
    let letters = [letter];
    if (equal(letter, "u") || equal(letter, "v")) {
      letters = ["u", "v"];
    }
    function spellings_longer(spelling) {
      function letter_add(next) {
        let longer = `${spelling}${next}`;
        return longer;
      }
      let longer_all = letters.map(letter_add);
      return longer_all;
    }
    spellings = spellings.flatMap(spellings_longer);
  }
  let r = reply_choice(spellings);
  return r;
}
