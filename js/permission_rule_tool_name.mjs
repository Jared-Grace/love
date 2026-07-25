import { text_empty } from "./text_empty.mjs";
import { less_than } from "./less_than.mjs";
export function permission_rule_tool_name(rule) {
  "the tool a permission rule grants, which is the text before its opening parenthesis, or empty text when the rule is not in that form";
  let opening = "(";
  let at = rule.indexOf(opening);
  let b = less_than(at, 0);
  if (b) {
    let v = text_empty();
    return v;
  }
  let name = rule.slice(0, at);
  return name;
}
