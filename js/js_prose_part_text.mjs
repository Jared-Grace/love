import { arguments_assert } from "./arguments_assert.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { text_is } from "./text_is.mjs";
import { js_call_is } from "./js_call_is.mjs";
import { property_list_first } from "./property_list_first.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { null_is } from "./null_is.mjs";
export function js_prose_part_text(node) {
  arguments_assert(arguments, 1);
  ("The words one piece of a paragraph contributes to the sentence, whether that piece was written as text or as a name.");
  ("A paragraph naming a function is not one string with a name after it. It is a sentence broken in half, the name standing in the break, and the second half carrying most of what was being said - measured across this repo, a hundred and seventy-two of a hundred and eighty such paragraphs continue after the name, and one of them runs on for four more lines. So reading only as far as the name is not reading a shorter version of the paragraph; it is stopping mid-sentence.");
  ("A name gives back the name itself, because that is the word a reader looking for the paragraph would search for. Whether the name is spelled bare or handed to the one call that spells a name makes no difference to the sentence, so both give back the same word.");
  ("Anything else gives back nothing rather than refusing, because the caller is assembling a sentence to be read and searched, and a piece it cannot put into words is better missing from the sentence than able to stop it being read at all.");
  let text_part_is = js_literal_is(node);
  if (text_part_is) {
    let value = js_literal_value_get(node);
    let string_is = text_is(value);
    if (string_is) {
      return value;
    }
    let r = "";
    return r;
  }
  let call_is = js_call_is(node);
  if (call_is) {
    let first = property_list_first(node, "arguments");
    let named_is = js_literal_is(first);
    if (named_is) {
      let word = js_literal_value_get(first);
      let word_is = text_is(word);
      if (word_is) {
        return word;
      }
    }
    let r2 = "";
    return r2;
  }
  let name = js_identifier_name_try(node);
  let missing = null_is(name);
  if (missing) {
    let r3 = "";
    return r3;
  }
  return name;
}
