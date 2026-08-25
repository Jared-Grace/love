import { arguments_assert } from "./arguments_assert.mjs";
import { commits_message_path_named } from "./commits_message_path_named.mjs";
import { commits_message_rules_since } from "./commits_message_rules_since.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
export async function commits_message_path_gate_run() {
  "QA gate: a commit message names only things that are already public, never a path reaching out of this repo into the machine it was written on.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let told = await commits_message_path_named();
  let f_name = fn_name("ai_git");
  let opening = text_combine_multiple([
    "these commit messages carry a path beginning at the root of the machine or at somebody's home, which this repo being public publishes unreviewed to anybody who clones it - say the file the way the repo says it, relative to the repo, or take the honest fallback ",
    f_name,
    " where the real argument cannot be written publicly. ",
  ]);
  let r = commits_message_rules_gate_generic(told, opening);
  return r;
}
