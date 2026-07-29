import { function_open_suffix } from "./function_open_suffix.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { less_than } from "./less_than.mjs";
import { function_open_names } from "./function_open_names.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { function_calls_name_is } from "./function_calls_name_is.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function function_open_names_reached() {
  "Every fn that puts a VS Code window on the human's screen, however many calls away the opening is.";
  "Its neighbour answers the same question one call deep, which is right for what that one is asked and too narrow for what is built on it. " +
    fn_name("function_rename_open") +
    " opens a window; so does every fn that calls it, and there were seven of those, none of them on the one-deep list. " +
    fn_name("permission_editor_open_gate_run") +
    " reads the one-deep list, so a grant on any of the seven passes the gate and then buys the guaranteed error the gate exists to prevent.";
  "Growth stops at the naming convention, and that bound is the whole difficulty. Neither imports nor calls can decide this on their own, because the opening is often conditional: an import closure was tried first and swallowed half the repo, and a call closure did the same, pulling in every fn that shells out - the command runner reaches an opener down a branch it does not normally take, so " +
    fn_name("git_push_schedule") +
    " came out as opening a window. A reached call is what a fn could do, not what it does.";
  "So the set grows only through names ending in the open suffix, because that suffix is the one place the repo states that showing the human something is the point of the fn rather than something it might do. Membership is still settled on the tree - the suffix decides whether a fn may carry the set forward, and an actual call decides whether it is in it - which keeps out the bracket, the emoji and the browser window that share the ending and open nothing.";
  "Callers of an opener are the answer rather than more frontier. They are what a permission rule must not name, and stopping there is what keeps a widely-called helper from carrying the set across the whole repo.";
  "Settling is checked rather than assumed. A pass that adds nothing means the set is closed, and a run that never stops adding says the call graph is not what this expects, which is worth an error rather than a silent cut-off at whatever round the loop happened to end on.";
  let openers = await function_open_names();
  let expanded = [];
  let rounds = 12;
  for (
    let round_index = 0;
    less_than(round_index, rounds);
    round_index = round_index + 1
  ) {
    let before = list_size(openers);
    let names = list_copy(openers);
    for (let name of names) {
      let done = list_includes(expanded, name);
      if (done) {
        continue;
      }
      list_add(expanded, name);
      let by_name = await data_identifiers_search(name);
      let callers = properties_get(by_name);
      for (let caller of callers) {
        let known = list_includes(openers, caller);
        if (known) {
          continue;
        }
        let suffix = function_open_suffix();
        let purpose = text_ends_with(caller, suffix);
        if (not(purpose)) {
          continue;
        }
        let calls = await function_calls_name_is(caller, name);
        if (not(calls)) {
          continue;
        }
        list_add(openers, caller);
      }
    }
    let after = list_size(openers);
    let settled = equal(before, after);
    if (settled) {
      return openers;
    }
  }
  throw new Error(
    "function open names reached: the set of window openers was still growing after " +
      rounds +
      " rounds, so either the call graph has a cycle this does not expect or the repo has grown past what this bound was chosen for",
  );
}
