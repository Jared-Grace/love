import { path_join } from "./path_join.mjs";
import { claude_config_folder } from "./claude_config_folder.mjs";
import { memory_folder } from "./memory_folder.mjs";
import { memory_folder_realpath } from "./memory_folder_realpath.mjs";
export function memory_hook_cases() {
  "What the memory-path hook must decide for each spelling of a memory path. This hook is the only thing standing between every parallel session and a flood of permission prompts the human has to click, and the prompts return silently if it regresses - the symptom is a human clicking, which no test would notice.";
  "The reason text is checked too, not just the decision. A deny whose reason names a bare directory is useless: the retry has nowhere to go. So the absent-note case demands the basename back.";
  "The escape cases (decision silent) are the SECURITY invariant, not convenience: a path that TEXTUALLY sits under the memory realpath but RESOLVES outside it - via .. traversal, or a prefix-sibling like memory-sibling - must fall through, never allow. The hook resolves realpath and checks memory_root plus a trailing slash, so a naive string-prefix check would leak these; only a test pins that it does not.";
  let config = memory_folder();
  let real = memory_folder_realpath();
  let note = memory_index_name();
  let absent = "brand_new_note_that_does_not_exist_yet.md";
  let config_folder = claude_config_folder();
  let settings = path_join([config_folder, "settings.json"]);
  let cases = [
    {
      tool: "Edit",
      path: path_join([config, note]),
      decision: "deny",
      reason_includes: path_join([real, note]),
    },
    {
      tool: "Write",
      path: path_join([config, note]),
      decision: "deny",
      reason_includes: path_join([real, note]),
    },
    {
      tool: "Edit",
      path: path_join([config, absent]),
      decision: "deny",
      reason_includes: path_join([real, absent]),
    },
    {
      tool: "Edit",
      path: path_join([real, note]),
      decision: "allow",
      reason_includes: "",
    },
    {
      tool: "Write",
      path: path_join([real, absent]),
      decision: "allow",
      reason_includes: "",
    },
    {
      tool: "Read",
      path: path_join([config, note]),
      decision: "silent",
      reason_includes: "",
    },
    {
      tool: "Read",
      path: path_join([real, note]),
      decision: "silent",
      reason_includes: "",
    },
    {
      tool: "Edit",
      path: settings,
      decision: "silent",
      reason_includes: "",
    },
    {
      tool: "Edit",
      path: "package.json",
      decision: "silent",
      reason_includes: "",
    },
    {
      tool: "Write",
      path: real + "/../escape_via_traversal.md",
      decision: "silent",
      reason_includes: "",
    },
    {
      tool: "Write",
      path: real + "-sibling/x.md",
      decision: "silent",
      reason_includes: "",
    },
  ];
  return cases;
}
