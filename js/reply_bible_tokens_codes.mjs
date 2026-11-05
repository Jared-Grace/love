import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { json_to } from "./json_to.mjs";
import { reply_bible_elements_code } from "./reply_bible_elements_code.mjs";
import { fn_name } from "./fn_name.mjs";
export function reply_bible_tokens_codes(tokens, shared) {
  "The written code for a list of tokens, one expression each, except that required plain words next to each other become one list of words.";
  let codes = [];
  let plain = [];
  function plain_finish() {
    if (greater_than(plain.length, 0)) {
      let object = plain.join(" ");
      let words = json_to(object);
      codes.push(`reply_words(${words})`);
      plain = [];
    }
  }
  for (let token of tokens) {
    if (token.call) {
      plain_finish();
      codes.push(`${token.call}()`);
      continue;
    }
    let key = token.elements.join(" ");
    let word = token.elements[0];
    let plain_is =
      not(token.optional) &&
      not(shared.keys.includes(key)) &&
      equal(token.elements.length, 1) &&
      not(word.endsWith("*"));
    if (plain_is && not_equal(word, "jesus") && not_equal(word, "christ")) {
      plain.push(word);
      continue;
    }
    plain_finish();
    let code = reply_bible_elements_code(token.elements, shared);
    if (shared.keys.includes(key)) {
      code = `${shared.names[key]}()`;
    }
    if (equal(word, "jesus") || equal(word, "christ")) {
      code = `${fn_name("reply_phrase_jesus_either_order")}()`;
    }
    if (token.optional) {
      code = `reply_optional(${code})`;
    }
    codes.push(code);
  }
  plain_finish();
  return codes;
}
