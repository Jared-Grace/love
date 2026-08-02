import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { json_from_property_get } from "./json_from_property_get.mjs";
import { property_get } from "./property_get.mjs";
export async function hook_child_decision(child, payload) {
  "Hands one payload to a hook already running and reads back the verdict it gave.";
  "Two corpora put a live hook to the question - one about commands, one about file paths - and the asking was written twice, forty lines each and alike to the character. Only the hook being started differs, so only that is left at the two places that start one.";
  "It receives the started child rather than the words that start it, and that is the point rather than an accident of the split. A helper handed a command to run would be a way to run any command, which is the one shape this repo keeps off the seam Claude calls; handed a child, it can only ever talk to a hook somebody else chose.";
  "Empty output means the hook abstained, which is its own answer and not a quiet no: the ordinary permission engine then decides, so it is named rather than folded into allow or deny.";
  let written = json_to(payload);
  let result = await new Promise(function lambda(resolve, reject) {
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
    child.stdin.write(written);
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
