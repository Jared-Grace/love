import { function_open_names_reached } from "./function_open_names_reached.mjs";
import { permission_run_names } from "./permission_run_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { greater_than } from "./greater_than.mjs";
import { each } from "./each.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { log_console } from "./log_console.mjs";
export async function permission_editor_open_gate_run() {
  "Gate: no allow rule may auto-approve a function that puts a VS Code window on the human's screen";
  "Whether the window appears is read from the environment rather than from the arguments, so a standing rule approves both answers without being able to say which";
  "The reason used to be that this seam refused an opener outright, making the grant a guaranteed error. It prints instead now, so the error is gone and the reason with it; what survives is that a rule is durable and the environment it runs under is not part of it";
  "The fix is always the same - point the rule at a function that does the work without the showing";
  "Membership is read from the calls the function actually makes, rather than from the ending of its name, because that ending also spells a bracket, an emoji and a browser window, and none of those are worth failing a build over";
  "Openers reached through another opener count too. Seven fns call the rename opener without opening anything themselves by name, so a one-deep list passed a grant on any of them and left the gate reporting clean about the very thing it is for";
  let names = await permission_run_names();
  let openers = await function_open_names_reached();
  function lambda(name) {
    let opens = list_includes(openers, name);
    return opens;
  }
  let offenders = list_filter(names, lambda);
  function lambda2(name) {
    let message = text_combine_multiple(["OPENS EDITOR  ", name]);
    log_console(message);
  }
  each(offenders, lambda2);
  let message2 = text_combine_multiple([
    "\nchecked ",
    names.length,
    "  offenders ",
    offenders.length,
  ]);
  log_console(message2);
  if (greater_than(offenders.length, 0)) {
    let combined = text_combine_multiple([
      "permission editor open gate: ",
      offenders.length,
      " allow rules name a function that opens the editor on the human's screen",
    ]);
    throw new Error(combined);
  }
  let r = {
    checked: names.length,
    offenders: 0,
  };
  return r;
}
