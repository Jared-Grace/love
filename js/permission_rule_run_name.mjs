import { text_empty } from "./text_empty.mjs";
import { text_combine } from "./text_combine.mjs";
import { dispatcher_scripts } from "./dispatcher_scripts.mjs";
export function permission_rule_run_name(rule) {
  "the dispatcher function name a permission rule auto-approves, or empty text when the rule is not a dispatcher grant";
  ("a rule reads Bash(node scripts/r.mjs <name> ...) — the name ends at the first space, colon or closing paren");
  for (let script of dispatcher_scripts()) {
    let marker = text_combine(script, " ");
    let at = rule.indexOf(marker);
    if (at < 0) {
      continue;
    }
    let rest = rule.slice(at + marker.length);
    let name = rest.split(/[ :)]/)[0];
    return name;
  }
  return text_empty();
}
