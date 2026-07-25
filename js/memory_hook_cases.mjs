import os from "os";
import { path_join } from "./path_join.mjs";
import { memory_folder } from "./memory_folder.mjs";
import { memory_folder_realpath } from "./memory_folder_realpath.mjs";
export function memory_hook_cases() {
  "What the memory-path hook must decide for each spelling of a memory path. This hook is the only thing standing between every parallel session and a flood of permission prompts the human has to click, and the prompts return silently if it regresses - the symptom is a human clicking, which no test would notice.";
  "The reason text is checked too, not just the decision. A deny whose reason names a bare directory is useless: the retry has nowhere to go. So the absent-note case demands the basename back.";
  let config = memory_folder();
  let real = memory_folder_realpath();
  let note = "MEMORY.md";
  let absent = "brand_new_note_that_does_not_exist_yet.md";
  let home = os.homedir();
  let settings = path_join([home, ".claude", "settings.json"]);
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
      path: "js/qa_gates.mjs",
      decision: "silent",
      reason_includes: "",
    },
  ];
  return cases;
}
