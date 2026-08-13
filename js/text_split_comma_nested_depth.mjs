import { arguments_assert } from "./arguments_assert.mjs";
import { text_comma_run_longest } from "./text_comma_run_longest.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { text_split_comma_nested } from "./text_split_comma_nested.mjs";
export function text_split_comma_nested_depth(t, count) {
  "The same taking apart as the plain one, for a caller that already knows how deep the list it wants is nested, and would rather be told than quietly handed a shallower one.";
  "Depth is the longest run of commas, so it can be read off the writing before anything is cut. Nothing else has to be checked here, because the plain one already refuses a list nested unevenly - so a word whose deepest run is the wanted depth is nested that deep the whole way across.";
  "Worth its own name because the alternative is every caller counting brackets in what came back. A command taking a list of lists and handed a list of words would otherwise work through the words as though each were a list, and say nothing.";
  arguments_assert(arguments, 2);
  let depth = text_comma_run_longest(t);
  equal_assert_json(depth, count, {
    hint: "this list is nested a different amount than the command asked for. One comma between words, two between lists of words, three between lists of those - so counting the commas at the widest break in what was written says which of them this is.",
    t,
    depth,
    count,
  });
  let nested = text_split_comma_nested(t);
  return nested;
}
