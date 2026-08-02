import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { hook_child_decision } from "./hook_child_decision.mjs";
export async function memory_hook_check(tool_name, file_path) {
  "Runs one file-path payload past the REAL memory-path hook and reports the decision it produced, exactly as the bash-guard corpus does for commands. Spawning the hook rather than importing its logic is the whole point: it is what Claude Code actually executes, so a gate built on it cannot pass while the live behaviour is broken.";
  "What the started hook is asked, and what its answer means, is shared with the guard's own asking and lives next door. The one thing left here is which hook to start, which is exactly the thing that must stay written out at each place rather than handed in.";
  arguments_assert(arguments, 2);
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let child = spawn("node", [".claude/hooks/memory_write_allow.mjs"], {
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
