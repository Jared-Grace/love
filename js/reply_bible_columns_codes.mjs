import { greater_than } from "./greater_than.mjs";
import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function reply_bible_columns_codes(columns) {
  "The written code of a verse draft, in plain letters: required words next to each other become one list of words, a place where Bibles differ becomes a choice, and a place some Bibles lack is optional. It calls no shared word or phrase, because which of those fits is a judgment made by reading the draft.";
  let codes = [];
  let plain = [];
  function plain_finish() {
    if (greater_than(plain.length, 0)) {
      let joined = plain.join(" ");
      let words = json_to(joined);
      codes.push(`reply_words(${words})`);
      plain = [];
    }
  }
  function quoted(word) {
    let code = json_to(word);
    return code;
  }
  for (let column of columns) {
    let elements = [...new Set(column.words)].sort();
    let single = equal(elements.length, 1);
    if (single && not(column.optional)) {
      plain.push(elements[0]);
      continue;
    }
    plain_finish();
    let joined = elements.map(quoted).join(", ");
    let code = single ? joined : `reply_choice([${joined}])`;
    if (column.optional) {
      code = `reply_optional(${code})`;
    }
    codes.push(code);
  }
  plain_finish();
  return codes;
}
