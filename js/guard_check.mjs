import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { hook_child_decision } from "./hook_child_decision.mjs";
export async function guard_check(command) {
  arguments_assert(arguments, 1);
  ("Runs one command past the REAL bash guard and reports the decision it produced. Starting the hook rather than importing its reading is the whole point: it is what Claude Code actually runs, so a gate built on it cannot pass while the live behaviour is broken.");
  ("The command is written to the hook and never to a shell, so nothing here runs it. What is started is the guard, fixed by name here and nowhere else, which is what keeps the asking from being a way to run whatever it is asked about.");
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let child = spawn("python3", [".claude/hooks/bash-command-guard.py"], {
    shell: false,
  });
  let payload = {
    tool_name: "Bash",
    tool_input: {
      command,
    },
  };
  let r = await hook_child_decision(child, payload);
  return r;
}
