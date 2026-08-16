import { hook_child_stdout } from "./hook_child_stdout.mjs";
import { equal } from "./equal.mjs";
import { json_from_property_get } from "./json_from_property_get.mjs";
import { property_get } from "./property_get.mjs";
export async function hook_child_decision(child, payload) {
  "Hands one payload to a permission hook already running and reads back the verdict it gave.";
  "Two corpora put a live hook to the question - one about commands, one about file paths - and the asking was written twice, forty lines each and alike to the character. The talking now lives next door and is shared with the stop hook's corpus too; what is left here is reading the answer, which is the half that differs between one kind of hook and another.";
  "Empty output means the hook abstained, which is its own answer and not a quiet no: the ordinary permission engine then decides, so it is named rather than folded into allow or deny.";
  let stdout = await hook_child_stdout(child, payload);
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
