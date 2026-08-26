import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_letters_digits_none_is } from "./text_letters_digits_none_is.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { or } from "./or.mjs";
import { js_tokenizer } from "./js_tokenizer.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { js_tokenizer_label_property_path } from "./js_tokenizer_label_property_path.mjs";
import { property_path_get } from "./property_path_get.mjs";
export function js_tokens_run_together(before, after) {
  "$plain before";
  "$plain after";
  arguments_assert(arguments, 2);
  ("The one piece two pieces spell when they are written with nothing between them, or nothing when they spell no such piece. Two asterisks run together into the one that means to the power of; a less-than and an equals run together into less-than-or-equal.");
  ("It is asked wherever a person is choosing pieces one at a time and could reasonably believe that choosing two of them side by side is how the third is written. That belief is right about how the language LOOKS and wrong about how it is built, and nothing on a screen of separate pieces corrects it.");
  ("ONLY SIGNS COUNT, NEVER WORDS OR NUMBERS. A three and a two do run together, but into a number the reader calls a number rather than calling it thirty-two, and two letters run together into a name; answering those would hand back something true and useless at nearly every wrong pair of taps. So the two spellings together have to hold no letter and no digit before anything else is asked.");
  ("WHAT DECIDES IT IS THE VALUE THE READER GIVES BACK, NEVER THE NAME OF THE KIND. The reader files several signs under one shared kind - less-than and less-than-or-equal share one, and so do the four that compare for sameness - so the kind is a family name rather than a spelling and matching against it finds only the signs that happen to be alone in their family. The value is the spelling itself, and asking that finds all of them.");
  ("The answer is the merged piece itself rather than a yes, because every caller has to name it to say anything helpful about it.");
  let joined = text_combine(before, after);
  let signs = text_letters_digits_none_is(joined);
  if (not(signs)) {
    return null;
  }
  ("a piece that spells one of the two it was made from has not run together into anything new - it is that piece with nothing added, and saying so would be telling the reader their two taps make the piece they already tapped");
  let before_same = equal(joined, before);
  let after_same = equal(joined, after);
  let unchanged = or(before_same, after_same);
  if (unchanged) {
    return null;
  }
  let tokens = js_tokenizer(joined);
  let size = list_size(tokens);
  let one = equal(size, 1);
  if (not(one)) {
    return null;
  }
  let token = list_first(tokens);
  let spelling = property_get(token, "value");
  let missing = undefined_is(spelling);
  if (missing) {
    ("a few signs are handed back with no spelling of their own, because the reader has only one sign under that kind and lets the kind stand for it - the arrow written as an equals and a greater-than is one. There the name of the kind IS the spelling, so it is read instead, and it is read only here so that the families of several signs never reach it.");
    let type_label = js_tokenizer_label_property_path();
    spelling = property_path_get(token, type_label);
  }
  let spelled = equal(spelling, joined);
  if (not(spelled)) {
    return null;
  }
  return joined;
}
