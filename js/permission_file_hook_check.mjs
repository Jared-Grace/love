import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { hook_child_decision } from "./hook_child_decision.mjs";
import { permission_file_hook_path } from "./permission_file_hook_path.mjs";
export async function permission_file_hook_check(tool_name, file_path) {
  "Runs one file-path payload past the REAL hook that grants the file tools from the settings rules, and reports the decision it gave.";
  "Starting the hook rather than borrowing the reading inside it is the whole point: what Claude Code executes is this file, so an answer from here cannot be right while the live behaviour is broken. The reading has a corpus of its own next door; this is the other half, the one that proves the hook loads, finds the settings, and resolves a path.";
  "An empty answer means it stood aside, which is its ordinary reply for almost every path - the permission engine then decides exactly as it always did.";
  arguments_assert(arguments, 2);
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let child = spawn("node", [permission_file_hook_path()], {
    shell: false,
  });
  let payload = {
    tool_name,
    tool_input: {
      file_path,
    },
  };
  let r = await hook_child_decision(child, payload);
  return r;
}
