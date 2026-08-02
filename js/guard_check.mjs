import { json_from_property_get } from "./json_from_property_get.mjs";
import { json_to } from "./json_to.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export async function guard_check(command) {
  arguments_assert(arguments, 1);
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let payload = json_to({
    tool_name: "Bash",
    tool_input: {
      command,
    },
  });
  let result = await new Promise(function lambda(resolve, reject) {
    let child = spawn("python3", [".claude/hooks/bash-command-guard.py"], {
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
  if (stdout.trim() === "") {
    return {
      decision: "silent",
    };
  }
  let hook = json_from_property_get(stdout, "hookSpecificOutput");
  return {
    decision: property_get(hook, "permissionDecision"),
    reason: property_get(hook, "permissionDecisionReason"),
  };
}
