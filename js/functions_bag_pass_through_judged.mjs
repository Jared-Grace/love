import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { function_ast } from "./function_ast.mjs";
import { functions_bag_pass_through } from "./functions_bag_pass_through.mjs";
import { js_record_returned_keys } from "./js_record_returned_keys.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_bag_pass_through_judged() {
  arguments_assert(arguments, 0);
  ("Of the functions that carry a record's names through by hand, which ones write those names in the order the record's own maker wrote them - and which ones cannot be told, because the record was handed in rather than made by a function that can be read.");
  ("This is the measurement that says whether the carrying could be replaced by handing the record over whole. Handing it over whole keeps the names in the maker's order; writing them out again keeps them in the order they were written. Where the two orders agree, the replacement changes nothing anybody could see. Where they disagree it changes the order, and whether that matters is a further question about whoever reads the record - so those are the ones to leave alone.");
  ("Where the record was handed in as a parameter there is no maker to read, and where the maker gathers no record of plain names there is nothing to compare. Both are counted apart rather than folded into the disagreeing ones, because they are unanswered rather than answered no.");
  let offenders = await functions_bag_pass_through();
  let unmade = [];
  let unread = [];
  let agreeing = [];
  let differing = [];
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
      let here = [];
      for (let key of keys) {
        let inside_is = list_includes(taken, key);
        if (inside_is) {
          list_add(here, key);
        }
      }
      let there = [];
      for (let key of keys_made) {
        let inside_is = list_includes(taken, key);
        if (inside_is) {
          list_add(there, key);
        }
      }
      let same_is = lists_equal_pair(here, there);
      if (same_is) {
        list_add(agreeing, f_name);
        continue;
      }
      list_add(differing, f_name);
    }
  }
  let counted = {
    agreeing_count: agreeing.length,
    differing_count: differing.length,
    unmade_count: unmade.length,
    unread_count: unread.length,
    agreeing,
    differing,
  };
  return counted;
}
