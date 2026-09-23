import { arguments_assert } from "./arguments_assert.mjs";
import { commits_message_alias_named } from "./commits_message_alias_named.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { commits_message_alias_baseline_path } from "./commits_message_alias_baseline_path.mjs";
import { commits_message_rules_gate_generic } from "./commits_message_rules_gate_generic.mjs";
export async function commits_message_alias_gate_run() {
  "QA gate: a commit message opens with the full name of the command that made the change, never with the short name the human types to reach it.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let told = await commits_message_alias_named();
  let opening = text_combine_multiple([
    "these commits are named after an alias key rather than after a command, so the log records a change as having been made by whatever that key points at today - commit through ",
    fn_name("ai_git_command_args"),
    " with the full function name, or take the honest fallback ",
    fn_name("ai_git"),
    " where no named command made the change. ",
  ]);
  let path = commits_message_alias_baseline_path();
  let r = await commits_message_rules_gate_generic(
    told,
    opening,
    path,
    fn_name("commits_message_alias_baseline_write"),
  );
  return r;
}
