import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function commands_only_deny_reason(level) {
  "What a Claude is told when the commands-only switch refuses an editing tool: why it was refused, the three ways to find the command that makes the edit instead, and the one route to writing a command that does not exist yet.";
  "A refusal that only says no turns into the very thing it exists to prevent. The next move after being stopped here is to write a new atom, and a Claude that cannot see that route from the refusal itself will look for the way back out instead - which means asking for the switch to be turned off, at the exact moment the missing atom was about to be written.";
  "Kept beside the reading that decides, rather than inside the hook that prints it, for the same reason: what a refusal says is worth being able to ask for and read without arranging to be refused.";
  arguments_assert(arguments, 1);
  let combined = text_combine_multiple([
    'The commands-only switch is set to "',
    level,
    '", so this repo is changed by named commands rather than by the editing tools.',
  ]);
  let f_name = fn_name("functions_search");
  let combined2 = text_combine_multiple([
    "  node scripts/ai.mjs ",
    f_name,
    " js_,<verb>",
  ]);
  let f_name2 = fn_name("functions_prose_search");
  let combined3 = text_combine_multiple([
    "  node scripts/ai.mjs ",
    f_name2,
    " <words>",
  ]);
  let f_name3 = fn_name("functions_name_vocabulary");
  let combined4 = text_combine_multiple([
    "  node scripts/ai.mjs ",
    f_name3,
    " 200",
  ]);
  let f_name4 = fn_name("function_select_apply_args_auto");
  let combined5 = text_combine_multiple([
    "  node scripts/ai.mjs ",
    f_name4,
    " <fn> <selector> <selector_args> <transform> <transform_args>",
  ]);
  let f_name5 = fn_name("function_new_from_temp");
  let combined6 = text_combine_multiple([
    "  2. node scripts/ai.mjs ",
    f_name5,
    " <name>",
  ]);
  let lines = [
    combined,
    "",
    "Find the command that makes this edit:",
    combined2,
    combined3,
    combined4,
    "",
    "Apply it:",
    combined5,
    "  the whole vocabulary is in notes/transforms.md - read it",
    "",
    "If nothing fits, the missing atom is the work, and there is a way to write one without turning the switch off:",
    "  1. draft it with the editing tool at scripts/temp/<name>.mjs, which stays open",
    combined6,
    "That command takes nothing but one exported function named after its own file, and refuses a name the repo already answers to, so it can add an atom and can do nothing else.",
    "",
    "Turning the switch back is the human's call rather than yours - ask, and say which edit could not be made as a command.",
  ];
  let reason = list_join_newline(lines);
  return reason;
}
