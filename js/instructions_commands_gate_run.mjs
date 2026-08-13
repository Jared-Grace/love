import { instructions_commands } from "./instructions_commands.mjs";
import { list_size } from "./list_size.mjs";
import { instructions_commands_denied } from "./instructions_commands_denied.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { log_console } from "./log_console.mjs";
import { each } from "./each.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function instructions_commands_gate_run() {
  "Fails when the instructions show a command the guard refuses, and names it with the guard's own reason.";
  "The instructions load whole for every Claude in this repo on every session, so a shape they promise and the guard turns away is not one Claude's wasted attempt but everyone's, repeatedly. Two ways it goes wrong and this catches both: the guard tightens under a template nobody re-tested, or a template is written that was never true.";
  "The count that passed is printed even when nothing is wrong, because a clean answer and a search that found no commands at all read identically otherwise - and this reads the fences, so a change to how the instructions are laid out could empty it silently.";
  let commands = await instructions_commands();
  let count = list_size(commands);
  console.log("instruction commands checked: " + count);
  let denied = await instructions_commands_denied();
  function lambda(one) {
    let command = property_get(one, "command");
    let reason = property_get(one, "reason");
    let message = text_combine_multiple([
      "REFUSED  ",
      command,
      "\n         ",
      reason,
    ]);
    log_console(message);
  }
  each(denied, lambda);
  let names = list_map_property(denied, "command");
  list_empty_is_assert_json(names, {
    hint: "the instructions show these commands and the guard refuses them, so every Claude that follows the instructions gets a line that cannot run - either widen the guard to accept the shape it already promises, or correct the shape written in the instructions",
  });
  let r = {
    checked: count,
    denied: 0,
  };
  return r;
}
