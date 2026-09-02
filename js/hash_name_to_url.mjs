import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { html_hash_symbol } from "./html_hash_symbol.mjs";
import { text_combine } from "./text_combine.mjs";
export function hash_name_to_url(hash_name) {
  "A bare word naming a screen, written as the hash end of an address - the mark, then the word.";
  "THE TWIN OF THE ONE THAT TAKES PAIRS. A hash holds one piece of text and there are two ways of writing that text: a run of name-and-value pairs, which is built from an object, and a bare word naming a screen, which is already text. Each way now has one function that puts the mark on, so neither is spelled by hand anywhere.";
  "IT REFUSES AN OBJECT, WHICH IS THE FAILURE THE OTHER SHAPE CANNOT MAKE. Handing pairs to a function meaning a word does not throw and does not complain: adding an object to text spells it out as the words object Object, so the address is built, the link is drawn, and it leads nowhere. That is quieter than the mistake in the other direction, which at least reaches an operator that objects.";
  "Three places used to write the mark and the word together by hand. Sharing it is what let the refusal be written once.";
  text_is_assert_json(hash_name, {});
  let symbol = html_hash_symbol();
  let url = text_combine(symbol, hash_name);
  return url;
}
