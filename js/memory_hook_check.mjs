import { json_from_property_get } from "./json_from_property_get.mjs";
import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export async function memory_hook_check(tool_name, file_path) {
  "Runs one file-path payload past the REAL memory-path hook and reports the decision it produced, exactly as the bash-guard corpus does for commands. Spawning the hook rather than importing its logic is the whole point: it is what Claude Code actually executes, so a gate built on it cannot pass while the live behaviour is broken.";
  "An empty stdout means the hook abstained, which is a distinct outcome from allow and deny - the normal permission engine decides - so it is named rather than folded into either.";
  arguments_assert(arguments, 2);
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let payload = json_to({
    tool_name,
    tool_input: {
      file_path,
    },
  });
  let result = await new Promise(function lambda(resolve, reject) {
    let child = spawn("node", [".claude/hooks/memory_write_allow.mjs"], {
      shell: false,
    });
    let printed = "";
    function on_stdout(data) {
      printed += data.toString();
    }
    child.stdout.on("data", on_stdout);
    function on_error(err) {
      reject(err);
    }
    child.on("error", on_error);
    function on_close(code) {
      resolve({
        code,
        stdout: printed,
      });
    }
    child.on("close", on_close);
    child.stdin.write(payload);
    child.stdin.end();
  });
  let stdout = property_get(result, "stdout");
  let left = stdout.trim();
  if (equal(left, "")) {
    let r = {
      decision: "silent",
    };
    return r;
  }
  let hook = json_from_property_get(stdout, "hookSpecificOutput");
  let r2 = {
    decision: property_get(hook, "permissionDecision"),
    reason: property_get(hook, "permissionDecisionReason"),
  };
  return r2;
}
