import { permission_rules } from "./permission_rules.mjs";
import { permission_rule_tool_name } from "./permission_rule_tool_name.mjs";
import { permission_rule_path_probe } from "./permission_rule_path_probe.mjs";
import { claude_config_folder } from "./claude_config_folder.mjs";
import { memory_folder } from "./memory_folder.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function permission_rules_unreachable_self_settings() {
  "audit: every allow rule that would let a tool WRITE inside Claude Code's own configuration folder, which a built-in guard prompts for whatever the settings say";
  "the guard is not a permission rule and no permission rule outranks it. it offers the human a grant that lasts only the session, so the prompt returns next session, and the allow rule sitting in the file reads as if it were handled. that silent lie is the whole reason to name these";
  "reading is untouched: the guard fires on writes only, and a rule granting Read there is a live grant, so the tool list here is the write tools alone";
  "paths inside the memory folder are left out on purpose. the memory hook denies those first and the file audit already reports them, with a reason that names the realpath to retry against, which is more useful than this one";
  let rules = await permission_rules();
  let tools = ["Edit", "Write", "NotebookEdit", "MultiEdit"];
  let separator = "/";
  let config = text_combine(claude_config_folder(), separator);
  let memory = text_combine(memory_folder(), separator);
  let offenders = [];
  for (let rule of rules) {
    let tool = permission_rule_tool_name(rule);
    let b = list_includes(tools, tool);
    if (not(b)) {
      continue;
    }
    let path = permission_rule_path_probe(rule);
    if (text_empty_is(path)) {
      continue;
    }
    let b2 = text_starts_with(path, config);
    if (not(b2)) {
      continue;
    }
    let b3 = text_starts_with(path, memory);
    if (b3) {
      continue;
    }
    list_add(offenders, {
      rule,
      command: path,
      decision: "ask",
      by: "self-settings guard",
    });
  }
  return offenders;
}
