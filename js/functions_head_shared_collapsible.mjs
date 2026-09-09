import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_shared_run_read_or_null } from "./js_function_declaration_shared_run_read_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { js_statements_referenced_names } from "./js_statements_referenced_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { repo_love_functions_names } from "./repo_love_functions_names.mjs";
import { equal } from "./equal.mjs";
import { js_function_declaration_head_shared_verdict_or_null } from "./js_function_declaration_head_shared_verdict_or_null.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_head_shared_collapsible(shared_name) {
  arguments_assert(arguments, 1);
  ("Every function in the repo that opens with a copy of the named function's body, sorted into the ones whose copy could be swapped for a call to it and the ones whose copy could not, each of those carrying the reason.");
  ("The reading that finds shared openings says which functions begin alike and stops there, because whether a group is one helper waiting to be written is a judgment. Where the helper has already been written the judgment is a different one and it can be made here: the question is no longer what to call the shared run, it is whether putting a call where each copy stands leaves every one of those functions doing what it did.");
  ("This reads and reports and changes nothing, which is the whole reason it exists apart from the swap. The refusals are the part worth reading. Each one is a function that really does begin with the same work and still cannot take the call, so each is either a hazard the swap would have walked into or a rule drawn more tightly than it needed to be, and there is no way to tell those apart without looking.");
  ("The named function has to be a run of work handing back one name that run made, or there is nothing a copy of its body could be swapped for, and it has to read every name it was handed, or a call could be written with nothing to put in the gap - the line counting the arguments would then stop it the first time it ran. Both refusals are about the shared function rather than about any copy, so they are answered once and the walk is not made at all.");
  ("Its own name is skipped, since a function trivially opens with a copy of itself.");
  let parsed = await function_parse_declaration(shared_name);
  let declaration = property_get(parsed, "declaration");
  let shared = js_function_declaration_shared_run_read_or_null(declaration);
  let unusable_is = null_is(shared);
  if (unusable_is) {
    let unusable = {
      shared: shared_name,
      refused_shared:
        "it is not a run of work ending in the handing back of one name that run made",
      collapsible: [],
      refused: [],
    };
    return unusable;
  }
  let params = property_get(shared, "params");
  let doing_run = property_get(shared, "run");
  let read = js_statements_referenced_names(doing_run);
  let unread = list_difference(params, read);
  let unread_is = list_empty_not_is(unread);
  if (unread_is) {
    let idle = {
      shared: shared_name,
      refused_shared:
        "it is handed something its run never reads, so a call standing where a copy of the run stands would have nothing to put in that place",
      collapsible: [],
      refused: [],
    };
    return idle;
  }
  let love = await repo_love_functions_names();
  let collapsible = [];
  let refused = [];
  for (let f_name of love) {
    let itself_is = equal(f_name, shared_name);
    if (itself_is) {
      continue;
    }
    let parsed_other = await function_parse_declaration(f_name);
    let declaration_other = property_get(parsed_other, "declaration");
    let verdict = js_function_declaration_head_shared_verdict_or_null(
      declaration_other,
      shared,
    );
    let unrelated_is = null_is(verdict);
    if (unrelated_is) {
      continue;
    }
    let taken_is = property_get(verdict, "collapsible");
    let local_name = property_get(verdict, "local_name");
    if (taken_is) {
      list_add(collapsible, {
        f_name: f_name,
        local_name: local_name,
      });
      continue;
    }
    let reason = property_get(verdict, "reason");
    list_add(refused, {
      f_name: f_name,
      reason: reason,
    });
  }
  let found = {
    shared: shared_name,
    refused_shared: "",
    collapsible: collapsible,
    refused: refused,
  };
  return found;
}
