import { arguments_assert } from "./arguments_assert.mjs";
import { permission_rule_path_allowed_is } from "./permission_rule_path_allowed_is.mjs";
export function permission_rules_path_allowed_is(rules, tool, path) {
  "Whether any allow rule in a whole settings file's list grants this tool the file at this path.";
  "The rules arrive as a list rather than being read from disk here, because the one place that has to read them is a hook, and a hook cannot trust the folder it was started in to spell a relative settings path. Reading is the hook's half; deciding is this half, and this half can be asked a question.";
  arguments_assert(arguments, 3);
  for (let rule of rules) {
    let allowed = permission_rule_path_allowed_is(rule, tool, path);
    if (allowed) {
      return true;
    }
  }
  return false;
}
