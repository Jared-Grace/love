import { arguments_assert } from "./arguments_assert.mjs";
import { permission_file_tools } from "./permission_file_tools.mjs";
import { claude_config_folder } from "./claude_config_folder.mjs";
import { text_combine } from "./text_combine.mjs";
import { permission_rule_tool_name } from "./permission_rule_tool_name.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { permission_rule_inner } from "./permission_rule_inner.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { subtract } from "./subtract.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_includes } from "./text_includes.mjs";
import { path_real_or_null } from "./path_real_or_null.mjs";
import { equal } from "./equal.mjs";
export async function permission_file_hook_live_cases_reading(rules) {
  arguments_assert(arguments, 1);
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
  let r = {
    candidates,
    reading,
  };
  return r;
}
