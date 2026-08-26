import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { functions_arguments_assert_stale } from "./functions_arguments_assert_stale.mjs";
import { property_get } from "./property_get.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_function_arguments_assert_count_or_null } from "./js_function_arguments_assert_count_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_arguments_assert_count_repair } from "./function_arguments_assert_count_repair.mjs";
export async function functions_arguments_assert_count_repair() {
  arguments_assert(arguments, 0);
  ("Makes the line counting a function's arguments say the right number, in exactly the functions where it says the wrong one.");
  ("The gate on this said the repair was by hand and one number. The work was written all along, and one thing only ever reached it - the command that changes a parameter list - so every other way of arriving at a changed list left a person to type the number in. This is the door from the gate's own reading to that work.");
  ("It finds its own set rather than being handed one, so it cannot be run against a list that has gone stale between the reading and the repair.");
  ("Only the functions counting themselves with a bare number are repaired, and each is asked directly rather than taken on trust from the reading, which does not say which of the two kinds of line a function carries. The other kind names a test per argument, and which test a newly arrived argument should have to pass is a judgement about what that argument means - there is no right answer to reach for, so those are handed back and left exactly as they were.");
  ("Asking the same question again afterwards is the only honest way to say it worked, since a repair that changed nothing looks identical to one that succeeded.");
  ("Each function is committed the moment it is repaired rather than all of them at the end, because everybody here shares one copy and a run lasting minutes ends with somebody else's sweep having taken the files first.");
  await ai_git_noted();
  let offenders = await functions_arguments_assert_stale();
  let repaired = [];
  let declined = [];
  for (let offender of offenders) {
    let f_name = property_get(offender, "f_name");
    let parsed = await function_parse_declaration(f_name);
    let declaration = property_get(parsed, "declaration");
    let counted = js_function_arguments_assert_count_or_null(declaration);
    let uncounted = null_is(counted);
    if (uncounted) {
      list_add(declined, f_name);
      continue;
    }
    let args = [f_name];
    await function_call_commit(function_arguments_assert_count_repair, args);
    list_add(repaired, f_name);
  }
  let remaining = await functions_arguments_assert_stale();
  let r = {
    repaired,
    declined,
    remaining,
  };
  return r;
}
