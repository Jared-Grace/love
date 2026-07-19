import { text_empty } from "./text_empty.mjs";
export function permission_rule_run_name(rule) {
  "the r.mjs function name a permission rule auto-approves, or empty text when the rule is not an r.mjs grant";
  ("a rule reads Bash(node scripts/r.mjs <name> ...) — the name ends at the first space, colon or closing paren");
  let marker = "scripts/r.mjs ";
  let at = rule.indexOf(marker);
  if (at < 0) {
    return text_empty();
  }
  let rest = rule.slice(at + marker.length);
  let name = rest.split(/[ :)]/)[0];
  return name;
}
