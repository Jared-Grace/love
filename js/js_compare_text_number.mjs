import { js_compare_text_number_call_each } from "./js_compare_text_number_call_each.mjs";
import { js_compare_text_number_kind_of } from "./js_compare_text_number_kind_of.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
export function js_compare_text_number(ast) {
  arguments_assert(arguments, 1);
  ("$plain ast");
  ("Every exact comparison in this code that holds a piece of text cut out of something written down against a number, each written out as the line that makes it.");
  ("A NUMBER AND THE SAME NUMBER WRITTEN OUT ARE NEVER EQUAL HERE, AND NOTHING SAYS SO. The comparison used is exact, so a chapter read out of a file as writing and a chapter handed in as a number simply never match - and what the caller gets back is not an error but an empty answer, which is indistinguishable from a passage that really holds nothing. That happened, cost a morning, and is the whole reason for this reading.");
  ("Where a name is bound to a call, the call decides what it holds, and only two kinds of call are trusted to decide: one that cuts text out of text, and one that makes a number out of something else. Everything else leaves the name undecided, which is right - a reading that guessed would be accusing whoever wrote a name it did not recognise.");
  ("A name nothing here binds is read for what it says of itself, and a name that says number counts as one. That is how a parameter counts, and a parameter is where the two sides usually meet: the text is cut a line above the comparison and the number arrived from somewhere else entirely.");
  ("What a call was bound to beats what its name says, in both directions. A name that says number and is filled from a cut of text is holding text whatever it is called, and this reading exists precisely because such a name was called number.");
  ("Both sides have to be plain names. A comparison written with the cutting done inside it is missed, and that is accepted: the pass that canonicalizes this repo pulls such a call out into a name of its own, so the shape barely occurs, and looking through it would mean deciding what an arbitrary expression holds.");
  let r = js_compare_text_number_kind_of(ast);
  let kind_of = property_get(r, "kind_of");
  let calls = property_get(r, "calls");
  let f_name = fn_name("not_equal");
  let compares = [equal.name, f_name];
  let found = [];
  let call_each = js_compare_text_number_call_each(compares, kind_of, found);
  each(calls, call_each);
  return found;
}
