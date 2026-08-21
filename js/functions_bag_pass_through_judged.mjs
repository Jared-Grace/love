import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_concat } from "./list_concat.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { function_ast } from "./function_ast.mjs";
import { functions_bag_pass_through } from "./functions_bag_pass_through.mjs";
import { js_record_returned_keys } from "./js_record_returned_keys.mjs";
import { list_add } from "./list_add.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_bag_pass_through_judged() {
  arguments_assert(arguments, 0);
  ("Every place where a record's names are carried through by hand, sorted by what would actually happen if the carrying were replaced by handing the record over whole and adding the new names on top of it.");
  ("The replacement is only the same piece of work when the record that arrives holds exactly the names that were taken out of it - no more and no fewer. One name more and handing it over whole quietly puts that name into the record being built, where nothing wrote it and nothing expects it. One name fewer and a name is being read out of a record that never held it, which is a fault where it stands and is not this to fix.");
  ("With the names settled, what is left is their order, and that is asked as one question rather than two. Handing the record over whole puts its maker's names first in its maker's order and the new ones after them; writing them out by hand puts all of them wherever the hand put them. Those agree only when the hand happened to write the carried names first, in that same order, and the new ones behind. Where they agree the replacement is invisible. Where they do not it is a real change of order, and whether anybody minds is a question about the readers rather than about this.");
  ("A record handed in as a parameter has no maker to read, and a maker that does not simply gather plain names and hand them back cannot be read either. Neither is a no. Both are counted on their own, because a reading that could not be done and a reading that came out against are the same silence and must not be mistaken for one another.");
  let offenders = await functions_bag_pass_through();
  let unmade = [];
  let unread = [];
  let extra = [];
  let absent = [];
  let same = [];
  let reordered = [];
  for (let offender of offenders) {
    let f_name = property_get(offender, "f_name");
    let carried = property_get(offender, "pass_through");
    for (let one of carried) {
      let producer = property_get(one, "producer");
      if (null_is(producer)) {
        list_add(unmade, f_name);
        continue;
      }
      async function read() {
        let ast = await function_ast(producer);
        return ast;
      }
      let made = await catch_null_async(read);
      if (null_is(made)) {
        list_add(unread, f_name);
        continue;
      }
      let keys_made = js_record_returned_keys(made);
      if (null_is(keys_made)) {
        list_add(unread, f_name);
        continue;
      }
      let taken = property_get(one, "taken");
      let keys = property_get(one, "keys");
      let added = property_get(one, "added");
      let over = list_without_multiple(keys_made, taken);
      let over_is = list_empty_not_is(over);
      if (over_is) {
        list_add(extra, f_name);
        continue;
      }
      let under = list_without_multiple(taken, keys_made);
      let under_is = list_empty_not_is(under);
      if (under_is) {
        list_add(absent, f_name);
        continue;
      }
      let would = list_concat(keys_made, added);
      let same_is = lists_equal_pair(keys, would);
      if (same_is) {
        list_add(same, f_name);
        continue;
      }
      list_add(reordered, f_name);
    }
  }
  let counted = {
    same_count: same.length,
    reordered_count: reordered.length,
    extra_count: extra.length,
    absent_count: absent.length,
    unmade_count: unmade.length,
    unread_count: unread.length,
    same,
    reordered,
    absent,
  };
  return counted;
}
