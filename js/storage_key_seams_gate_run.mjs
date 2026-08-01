import { arguments_assert } from "./arguments_assert.mjs";
import { storage_key_seams_durable } from "./storage_key_seams_durable.mjs";
import { storage_key_seams_durable_not } from "./storage_key_seams_durable_not.mjs";
import { storage_key_get_callers } from "./storage_key_get_callers.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
export async function storage_key_seams_gate_run() {
  "QA gate: every place a browser storage key is composed has been said, once, to store a name durably or not to.";
  "Which store stands behind a call is a judgement, so the two lists are held by hand. Whether the judgement has been made at all is not a judgement, and that is what this asks: the composing is one function, so the places that make a key are exactly the places that call it, and the trees can say who those are.";
  "That is what keeps the durable list from being a guess. A guess would be a list somebody wrote once and nobody revisited, and the way it fails is by omission - a new way of storing arrives, nothing points at it, and the reading that watches published names walks straight past. Here it cannot arrive quietly: an unclassified caller is a red gate naming the call and asking the one question, and the answer is a word in one of two lists.";
  "A name listed that composes no key is caught the same way, because a list that keeps entries for calls that are gone stops being readable as a description of the code.";
  "A name in both lists is a contradiction rather than an oversight, and it is asked separately so the sentence can say so.";
  arguments_assert(arguments, 0);
  let durable = storage_key_seams_durable();
  let durable_not = storage_key_seams_durable_not();
  let callers = await storage_key_get_callers();
  let both = list_intersect(durable, durable_not);
  list_empty_is_assert_json(both, {
    hint: "a call is named as storing a name durably and as not storing one - it is one or the other, so take it out of the list its reasons do not fit",
    both,
  });
  let classified = list_concat(durable, durable_not);
  function classified_not_is(caller) {
    let n = list_includes_not(classified, caller);
    return n;
  }
  let unclassified = list_filter(callers, classified_not_is);
  let f_name = fn_name("storage_key_seams_durable");
  let f_name2 = fn_name("storage_key_seams_durable_not");
  list_empty_is_assert_json(unclassified, {
    hint: text_combine_multiple([
      "a new place composes a browser storage key and nothing says which store stands behind it - if what it writes is still there after the tab closes, name it in ",
      f_name,
      " so a rename of an owner is watched; if it is not, name it in ",
      f_name2,
      " with the reason",
    ]),
    unclassified,
  });
  function caller_not_is(f_name3) {
    let n2 = list_includes_not(callers, f_name3);
    return n2;
  }
  let stale = list_filter(classified, caller_not_is);
  list_empty_is_assert_json(stale, {
    hint: "a name in one of the storage seam lists composes no key any more - it was renamed, or it stopped making keys, so take it out of the list",
    stale,
  });
  let r = {
    callers: list_size(callers),
    durable: list_size(durable),
    unclassified,
    stale,
  };
  return r;
}
