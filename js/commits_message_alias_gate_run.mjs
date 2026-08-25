import { arguments_assert } from "./arguments_assert.mjs";
import { commits_message_alias_named } from "./commits_message_alias_named.mjs";
import { commits_message_rules_since } from "./commits_message_rules_since.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
export async function commits_message_alias_gate_run() {
  "QA gate: a commit message opens with the full name of the command that made the change, never with the short name the human types to reach it.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let told = await commits_message_alias_named();
  let f_name = fn_name("ai_git_command_args");
  let f_name2 = fn_name("ai_git");
  let opening = text_combine_multiple([
    "these commits are named after an alias key rather than after a command, so the log records a change as having been made by whatever that key points at today - commit through ",
    f_name,
    " with the full function name, or take the honest fallback ",
    f_name2,
    " where no named command made the change. ",
  ]);
  let r = commits_message_rules_gate_generic(told, opening);
  return r;
}
