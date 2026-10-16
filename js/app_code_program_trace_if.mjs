import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_program_trace_value } from "./app_code_program_trace_value.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function app_code_program_trace_if(node, actions, code, values) {
  arguments_assert(arguments, 4);
  ("an if line run: its condition worked out, with any evaluating it took added to actions, answering what the condition came to, what stands after its { ... }, and the statements that run next");
  ("next is the { ... } the condition picks, or the else if itself, which runs as a statement of its own, or nothing when there is no else; the caller runs them, so the lines they add come after the if's own");
  let test = property_get(node, "test");
  let condition = app_code_program_trace_value(test, actions, code, values);
  let alternate = property_get(node, "alternate");
  ("an if's line also says what stands after its { ... }: none, else, or else_if; a guide saying which { ... } runs instead reads it here");
  let after = "none";
  let b = equal(alternate, null);
  if (not(b)) {
    let left = property_get(alternate, "type");
    after = equal(left, "IfStatement") ? "else_if" : "else";
  }
  let next = [];
  if (condition) {
    let consequent = property_get(node, "consequent");
    next = property_get(consequent, "body");
  } else if (equal(after, "else_if")) {
    next = [alternate];
  } else if (equal(after, "else")) {
    next = property_get(alternate, "body");
  }
  let r = {
    condition,
    alternate: after,
    next,
  };
  return r;
}
