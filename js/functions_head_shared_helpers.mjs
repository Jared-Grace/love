import { number_text_equal_is } from "./number_text_equal_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_head_duplicates } from "./functions_head_duplicates.mjs";
import { property_get } from "./property_get.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_function_declaration_shared_run_read_or_null } from "./js_function_declaration_shared_run_read_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function functions_head_shared_helpers(size) {
  arguments_assert(arguments, 1);
  ("Every group of functions that begin alike, split by whether the shared opening has already been written out as a function of its own somewhere in the group.");
  ("The reading over shared openings stops short of saying what to do about a group, and rightly so, because naming the shared run is a judgment. But a group whose run is already written needs no name thought up - the name exists - so for those the judgment was made some time ago and what is left is a swap. Telling the two apart is the whole of this, and it turns a long list of things to think about into a short list of things to run and a shorter list of things to think about.");
  ("The helper, when there is one, is a member of its own group and is found there rather than by searching the repo. Its opening run is its whole run, so its shape at this length is the shape the group is gathered under - which means the walk is over the groups alone and not over every function in the repo a second time.");
  ("A group is called helped on the strength of one question: is some member a run of work of exactly this length handing back one name that run made. That is the shape a call can stand in for. It is not the whole of what the swap asks - whether each copy can really take the call is asked one function at a time by the reading that lists what is collapsible - so a group named here is a candidate and not a verdict.");
  ("The length is handed in rather than taken from the gate, because a helper's run is as long as it is: the group holding the twelve chapter-name readers was three lines long and the gate watches four, so a reading fixed to the gate's number would have missed the one group that had a helper already.");
  ("$plain size");
  let groups = await functions_head_duplicates(size);
  let helped = [];
  let unhelped = [];
  for (let group of groups) {
    let names = property_get(group, "names");
    let count = property_get(group, "count");
    let helpers = [];
    for (let f_name of names) {
      let parsed = await function_parse_declaration(f_name);
      let declaration = property_get(parsed, "declaration");
      let shared = js_function_declaration_shared_run_read_or_null(declaration);
      let unusable_is = null_is(shared);
      if (unusable_is) {
        continue;
      }
      let run = property_get(shared, "run");
      let run_size = list_size(run);
      let whole_is = number_text_equal_is(run_size, size);
      if (whole_is) {
        list_add(helpers, f_name);
      }
    }
    let entry = {
      count: count,
      helpers: helpers,
      names: names,
    };
    let some = list_empty_not_is(helpers);
    if (some) {
      list_add(helped, entry);
      continue;
    }
    list_add(unhelped, entry);
  }
  let split = {
    size: size,
    helped: helped,
    unhelped: unhelped,
  };
  return split;
}
