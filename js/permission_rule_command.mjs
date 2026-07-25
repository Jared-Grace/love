import { subtract } from "./subtract.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { not } from "./not.mjs";
export function permission_rule_command(rule) {
  "the shortest shell command a Bash allow rule claims to auto-approve, or empty text when the rule grants some other tool";
  "Bash(<command>) grants exactly that command; Bash(<prefix>:*) grants that prefix plus any arguments, so the prefix alone is the shortest command it claims";
  let opening = "Bash(";
  let closing = ")";
  let b = text_starts_with(rule, opening);
  if (not(b)) {
    let v = text_empty();
    return v;
  }
  let b2 = text_ends_with(rule, closing);
  if (not(b2)) {
    let v2 = text_empty();
    return v2;
  }
  let difference = subtract(rule.length, closing.length);
  let inner = rule.slice(opening.length, difference);
  let arguments_any = ":*";
  if (text_ends_with(inner, arguments_any)) {
    let difference2 = subtract(inner.length, arguments_any.length);
    let prefix = inner.slice(0, difference2);
    return prefix;
  }
  return inner;
}
