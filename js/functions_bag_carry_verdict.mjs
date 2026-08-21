import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_record_returned_keys } from "./js_record_returned_keys.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_bag_carry_verdict(one) {
  arguments_assert(arguments, 1);
  ("One word for what would happen to a single carrying of names if it were replaced by handing the record over whole: unmade, unread, extra, absent, same, or reordered.");
  ("Six words rather than a yes and a no. Two of them say the question could not be asked at all, two say it was asked and answered no, and the last two are the two different yeses - one where nobody would see the change and one where the names would come out in another order. A reading that could not be done and a reading that came out against are the same silence to anybody counting, and must not be mistaken for one another.");
  ("It answers about one carrying and knows nothing about where it was found. That is what lets the same six words be counted, listed, or gated over without this being written again for each.");
  ("Unmade is the record that arrived from outside, with no one function behind it to read. Unread is a maker that could not be reached or does not simply gather plain names and hand them back. Extra is a maker handing back a name nobody took out, which handing the record over whole would quietly put into the record being built. Absent is a name taken out that the maker never hands back, which is a fault where it stands and is not this to fix.");
  let producer = property_get(one, "producer");
  if (null_is(producer)) {
    let r = "unmade";
    return r;
  }
  async function read() {
    let ast = await function_ast(producer);
    return ast;
  }
  let made = await catch_null_async(read);
  if (null_is(made)) {
    let r2 = "unread";
    return r2;
  }
  let keys_made = js_record_returned_keys(made);
  if (null_is(keys_made)) {
    let r3 = "unread";
    return r3;
  }
  let taken = property_get(one, "taken");
  let over = list_without_multiple(keys_made, taken);
  let over_is = list_empty_not_is(over);
  if (over_is) {
    let r4 = "extra";
    return r4;
  }
  let under = list_without_multiple(taken, keys_made);
  let under_is = list_empty_not_is(under);
  if (under_is) {
    let r5 = "absent";
    return r5;
  }
  let added = property_get(one, "added");
  let would = list_concat(keys_made, added);
  let keys = property_get(one, "keys");
  let same_is = lists_equal_pair(keys, would);
  if (same_is) {
    let r6 = "same";
    return r6;
  }
  let r7 = "reordered";
  return r7;
}
