import { permission_grant_delete_paths_steerable } from "./permission_grant_delete_paths_steerable.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { permission_grant_refusals_context_escalates } from "./permission_grant_refusals_context_escalates.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { functions_delete_seams } from "./functions_delete_seams.mjs";
import { function_seams_reached_paths_memo } from "./function_seams_reached_paths_memo.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { greater_than } from "./greater_than.mjs";
import { and } from "./and.mjs";
export async function permission_grant_refusals_context_destructive(
  denied,
  unaliased,
  refusals,
  openers,
  parsed,
  remembered,
) {
  arguments_assert(arguments, 6);
  let r = await permission_grant_refusals_context_escalates(
    denied,
    unaliased,
    refusals,
    openers,
    parsed,
    remembered,
  );
  let escalates = property_get(r, "escalates");
  let rules_written = property_get(r, "rules_written");
  let takes_arguments = property_get(r, "takes_arguments");
  let params = property_get(r, "params");
  let ast = property_get(r, "ast");
  if (escalates) {
    list_add(
      refusals,
      unaliased +
        " reaches a function that writes Claude's own permission rules, so approving it approves whatever it goes on to approve: " +
        list_join_comma(rules_written),
    );
  }
  ("Reaching a function that erases what its argument names is the refusal about damage nobody can hand back, and it is here because every other reading here is read off a name. The folder copier was asked whether it may be granted and came back with nothing at all against it, while removing its target folder and everything under it before it copies - pointed at this repo it would erase the repo. Its parameters are called source and target, which carry no word that reads as a path; it reaches no shell and it writes no rule. All three readings above were true of it and all three were silent.");
  ("The same argument condition as the two above, and for the same reason. What is dangerous here is that the caller chooses what gets deleted, and a rule covers every argument the function is ever handed; a function declaring none deletes whatever its committed source says and nothing a rule could change. That is what keeps the gates and the reports out of this.");
  ("Overwriting a file is deliberately not asked about here, and the division is the useful half. Every function that replaces a file's contents takes the path as a parameter, and a parameter spelled that way is already refused below by name - so that whole family is covered exactly, and this covers only what no name can reach.");
  let delete_seams = functions_delete_seams();
  let delete_paths = await function_seams_reached_paths_memo(
    unaliased,
    delete_seams,
    remembered,
  );
  ("A reach whose last hop takes nothing is dropped before it is counted. The chain says where an argument stops being able to travel, and the function that calls the deleter is the one that names what is deleted - so when that one declares nothing, the near-end reading above has already answered the whole question and counting the reach again refuses on a ground that is not there.");
  let steerable = await permission_grant_delete_paths_steerable(delete_paths);
  let deleters = object_property_names(steerable);
  let erases = greater_than(deleters.length, 0);
  let destructive = and(erases, takes_arguments);
  let r2 = {
    params,
    ast,
    delete_paths: steerable,
    destructive,
  };
  return r2;
}
