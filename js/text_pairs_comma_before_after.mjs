import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { lists_sizes_equal_assert_json } from "./lists_sizes_equal_assert_json.mjs";
import { list_add } from "./list_add.mjs";
export function text_pairs_comma_before_after(before_text, after_text) {
  "$plain before_text";
  "$plain after_text";
  "Two comma-joined words read as one list of what-becomes-what, each old name paired with the new name standing in the same place.";
  "A command line hands every word over separately, so a function that wanted two lists would have to guess where one ended and the other began. Joining each list into one word is how every other list is passed here, and this is the reading back of that shape when the two lists have to line up.";
  "AN EMPTY FIRST LIST IS REFUSED RATHER THAN ANSWERED WITH NOTHING. A caller that named nothing meant to name something; answering with an empty list would let the whole run finish having done nothing and report success.";
  "The two lists having different lengths is refused for the same reason, and it is the likelier of the two mistakes: a name left out of the second list would otherwise pair with nothing at all and quietly rename its subject to nothing.";
  arguments_assert(arguments, 2);
  let befores = text_split_comma(before_text);
  let afters = text_split_comma(after_text);
  let named = list_empty_not_is(befores);
  assert_json(named, {
    hint: "no words were named to be paired - would you like to pass them as one comma-joined word?",
    before_text,
  });
  lists_sizes_equal_assert_json([befores, afters], {
    hint: "each word on the left needs exactly one word on the right to pair with - would you like to pass the two lists with the same number of words?",
    befores,
    afters,
  });
  let pairs = [];
  let at = 0;
  for (let one of befores) {
    let other = afters[at];
    list_add(pairs, {
      before: one,
      after: other,
    });
    at = at + 1;
  }
  return pairs;
}
