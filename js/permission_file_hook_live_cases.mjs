import { permission_settings_allow_every } from "./permission_settings_allow_every.mjs";
import { permission_rule_tool_name } from "./permission_rule_tool_name.mjs";
import { permission_rule_inner } from "./permission_rule_inner.mjs";
import { permission_file_tools } from "./permission_file_tools.mjs";
import { claude_config_folder } from "./claude_config_folder.mjs";
import { path_real_or_null } from "./path_real_or_null.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_combine } from "./text_combine.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function permission_file_hook_live_cases() {
  "What the hook that grants the file tools from the settings rules must decide when it is actually started: one path a rule really does grant, which it has to allow, and one path no rule mentions, which it has to leave alone.";
  "The granted path is worked out from the rules in force rather than written down here, because which folders are granted differs from one machine to the next, and a path spelled in this file would be a second copy of a rule - green while the rule it copies is gone, red on a machine that never had it. So the corpus asks the settings what is granted and then asks the hook about that.";
  "The two answers differ on purpose. A hook that allowed everything and a hook that had stopped loading at all both answer one of these wrongly, and those are the two ways it can fail without anything else noticing.";
  "A folder is only usable as a probe when it is on the disk, is spelled the same way after its links are followed, and is outside Claude Code's own configuration directory. Those are three things the hook itself insists on before it will answer, so a probe failing any of them would go red about the probe rather than about the hook.";
  "A reading grant is preferred over a writing one for the same reason: the commands-only switch can refuse a write inside this repo, and a corpus that went red when somebody turned that switch on would be reporting the switch rather than the hook.";
  let rules = await permission_settings_allow_every();
  let tools = permission_file_tools();
  let left = claude_config_folder();
  let config_folder = text_combine(left, "/");
  let candidates = [];
  for (let rule of rules) {
    let tool = permission_rule_tool_name(rule);
    let b = list_includes(tools, tool);
    if (not(b)) {
      continue;
    }
    let inner = permission_rule_inner(rule);
    let deep = "/**";
    let b2 = text_ends_with(inner, deep);
    if (not(b2)) {
      continue;
    }
    let difference = subtract(inner.length, deep.length);
    let folder = inner.slice(0, difference);
    let b3 = text_starts_with(folder, "/");
    if (not(b3)) {
      continue;
    }
    if (text_includes(folder, "*")) {
      continue;
    }
    if (text_starts_with(folder, config_folder)) {
      continue;
    }
    let real = await path_real_or_null(folder);
    let b4 = equal(real, folder);
    if (not(b4)) {
      continue;
    }
    candidates.push({
      tool,
      folder,
    });
  }
  function reading_is(candidate) {
    let same = equal(candidate.tool, "Read");
    return same;
  }
  let reading = candidates.filter(reading_is);
  let preferred = reading.length ? reading : candidates;
  let cases = [];
  for (let granted of preferred.slice(0, 1)) {
    let leaf = "/permission_file_hook_live_probe.txt";
    cases.push({
      label: "a path a rule in force really grants",
      tool_name: granted.tool,
      file_path: text_combine(granted.folder, leaf),
      decision: "allow",
    });
  }
  cases.push({
    label: "a path no rule mentions",
    tool_name: "Edit",
    file_path: "/etc/hosts",
    decision: "silent",
  });
  return cases;
}
