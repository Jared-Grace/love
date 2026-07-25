import { text_empty } from "./text_empty.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { not } from "./not.mjs";

export function permission_rule_command(rule) {
  "the shortest shell command a Bash allow rule claims to auto-approve, or empty text when the rule grants some other tool";
  ("Bash(<command>) grants exactly that command; Bash(<prefix>:*) grants that prefix plus any arguments, so the prefix alone is the shortest command it claims");
  let opening = "Bash(";
  let closing = ")";
  if (not(text_starts_with(rule, opening))) {
    return text_empty();
  }
  if (not(text_ends_with(rule, closing))) {
    return text_empty();
  }
  let inner = rule.slice(opening.length, rule.length - closing.length);
  let arguments_any = ":*";
  if (text_ends_with(inner, arguments_any)) {
    let prefix = inner.slice(0, inner.length - arguments_any.length);
    return prefix;
  }
  return inner;
}
