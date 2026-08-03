import { address_key_doors_callers } from "./address_key_doors_callers.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { hash_key_doors } from "./hash_key_doors.mjs";
import { address_key_doors_wrapped } from "./address_key_doors_wrapped.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export async function address_key_doors_wrapped_gate_run() {
  "Fails where something has become a door onto the address of a page without being written down as one.";
  "The set of doors is a list somebody keeps, and a list like that goes stale silently: every reading of published address words asks about calls to the names on it, so a door it has never heard of publishes words and reads back as a repo with nothing to find.";
  "Every caller it questioned is printed, and counted in the answer. That is the half an empty answer cannot carry on its own: a walk that had stopped reaching callers would find no offender either, and the two look the same from outside unless the population is shown.";
  arguments_assert(arguments, 0);
  let pairs = await address_key_doors_callers();
  for (let pair of pairs) {
    console.log(pair);
  }
  let wrapped = await address_key_doors_wrapped();
  let f_name = fn_name("hash_key_doors");
  list_empty_is_assert_json(wrapped, {
    hint: text_combine_multiple([
      "a function hands one of its own parameters where the name of a field of a page address goes, which makes it a door onto that address - so a word written at a call to it is published with nothing watching, and it belongs in ",
      f_name,
      " beside the two already there",
    ]),
    wrapped,
  });
  let list = hash_key_doors();
  let r = {
    doors: list_size(list),
    callers: list_size(pairs),
    wrapped,
  };
  return r;
}
