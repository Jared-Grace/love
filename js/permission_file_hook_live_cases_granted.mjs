import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
export function permission_file_hook_live_cases_granted(r) {
  arguments_assert(arguments, 1);
  let reading = property_get(r, "reading");
  let candidates = property_get(r, "candidates");
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
  return cases;
}
