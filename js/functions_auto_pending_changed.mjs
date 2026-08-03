import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names_changed } from "./functions_names_changed.mjs";
import { function_auto_pending_is } from "./function_auto_pending_is.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_auto_pending_changed() {
  "Of the functions being edited right now, the ones the canonicalizing pass would still change - somebody edited a file and has not run the pass over it.";
  "The repo-wide form of this question sweeps seven thousand functions and was measured still running after an hour and a half, because every answer runs a whole pipeline rather than reading a file. Ten of us share this machine and the load average sat between eight and twenty-six through that measurement, so the number says what the sweep costs here rather than what it would cost alone - which is the only number worth having, since here is where it runs. This one asks it of the handful of files with an uncommitted edit in them, which is seconds - and those are the only files where the answer can be anybody's to act on, since a function nobody has touched has been in whatever state it is in since long before today.";
  "So this is the one to run before committing, and the repo-wide form is the one to run when the standing debt is what is being asked about.";
  "A function the pipeline cannot process is passed over rather than counted as pending. Refusing to canonicalize is a real answer for a few of these - a body that is handed to a browser as text must not gain calls into the repo - and a command that named those every time would be one nobody runs twice.";
  arguments_assert(arguments, 0);
  let f_names = await functions_names_changed();
  let pending = [];
  for (let f_name of f_names) {
    async function ask() {
      let answer = await function_auto_pending_is(f_name);
      return answer;
    }
    let asked = await catch_null_async(ask);
    if (asked) {
      list_add(pending, f_name);
    }
  }
  return pending;
}
