import { dispatcher_scripts_claude } from "./dispatcher_scripts_claude.mjs";
import { permission_rules_other } from "./permission_rules_other.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { permission_grant_rule } from "./permission_grant_rule.mjs";
import { list_add } from "./list_add.mjs";
import { dispatcher_commands_fn_named } from "./dispatcher_commands_fn_named.mjs";
import { permission_grant_rule_command } from "./permission_grant_rule_command.mjs";
export function permission_allow_generated_from(names) {
  "every allow rule the shared settings file should hold for this exact list of granted function names, rather than for whichever list the generated module happened to hold when the process started";
  "a second entry point of the shape `node scripts/ai.mjs <command> <fn> <args>` needs its own rule per function, or a single rule naming just the command grants it for all of them. Deriving both families from the same list is what stops those two lists drifting apart, which is the whole reason this is generated at all.";
  "taking the list as an argument is what lets a command that has just added a name render the file from the list it wrote. Reading the list here instead would hand back the loaded module, which the loader keeps in memory however many times the file underneath it is rewritten - so the file came out one grant behind, every time.";
  let rules = [];
  let other = permission_rules_other();
  list_add_multiple(rules, other);
  let scripts = dispatcher_scripts_claude();
  let commands = dispatcher_commands_fn_named();
  for (let script of scripts) {
    for (let name of names) {
      let rule = permission_grant_rule(name, script);
      list_add(rules, rule);
    }
    for (let command of commands) {
      for (let name of names) {
        let rule = permission_grant_rule_command(command, name, script);
        list_add(rules, rule);
      }
    }
  }
  return rules;
}
