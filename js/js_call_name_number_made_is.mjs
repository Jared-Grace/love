import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_includes } from "./text_includes.mjs";
import { or_list } from "./or_list.mjs";
export function js_call_name_number_made_is(name) {
  arguments_assert(arguments, 1);
  ("$plain name");
  ("Whether a call written by this name is one that makes a number out of something that was not one.");
  ("THE WHOLE NAME IS MATCHED AND NOT THE WORD NUMBER INSIDE IT, because the word appears in names running the other way. One of them writes a number out as text, and reading its name as a maker of numbers would say that its answer is a number when its answer is the writing of one - which is the exact mistake the reading above this exists to catch.");
  ("Only the ways there are of making a number here are named. Arithmetic makes one too, and is left out: this is asked about a name bound to a call, and a sum is not a call.");
  let named = equal(name, "Number");
  let converted = text_ends_with(name, "_to_number");
  let parsed = text_includes(name, "parse_int");
  let parsed_fraction = text_includes(name, "parse_float");
  let made = or_list([named, converted, parsed, parsed_fraction]);
  return made;
}
