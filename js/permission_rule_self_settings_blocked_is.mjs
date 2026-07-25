import { permission_rule_tool_name } from "./permission_rule_tool_name.mjs";
import { permission_rule_path_probe } from "./permission_rule_path_probe.mjs";
import { claude_config_folder } from "./claude_config_folder.mjs";
import { memory_folder } from "./memory_folder.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_includes } from "./list_includes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
export function permission_rule_self_settings_blocked_is(rule) {
  "whether one allow rule would let a tool WRITE inside Claude Code's own configuration folder, where a built-in guard prompts the human whatever the settings say, so the grant can never fire on its own";
  "kept apart from the sweep that reads the settings files, because a rule is a plain string and this answer is a plain yes or no: the corpus can hand it any rule at all, including the ones nobody would ever write down";
  "reading is untouched. the guard fires on writes only, so a rule granting Read in that folder is a live grant and must answer no";
  "a path inside the memory folder answers no as well, though the write there is just as blocked. the memory hook denies it first and the file audit reports it with a reason naming the realpath to retry against, and one finding said well beats the same finding said twice";
  arguments_assert(arguments, 1);
  let tools = ["Edit", "Write", "NotebookEdit", "MultiEdit"];
  let tool = permission_rule_tool_name(rule);
  let b = list_includes(tools, tool);
  if (not(b)) {
    return false;
  }
  let path = permission_rule_path_probe(rule);
  if (text_empty_is(path)) {
    return false;
  }
  let separator = "/";
  let left = claude_config_folder();
  let config = text_combine(left, separator);
  let b2 = text_starts_with(path, config);
  if (not(b2)) {
    return false;
  }
  let left2 = memory_folder();
  let memory = text_combine(left2, separator);
  let b3 = text_starts_with(path, memory);
  if (b3) {
    return false;
  }
  return true;
}
