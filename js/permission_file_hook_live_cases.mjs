import { permission_file_hook_live_cases_granted } from "./permission_file_hook_live_cases_granted.mjs";
import { permission_file_hook_live_cases_reading } from "./permission_file_hook_live_cases_reading.mjs";
import { permission_settings_allow_every } from "./permission_settings_allow_every.mjs";
export async function permission_file_hook_live_cases() {
  "What the hook that grants the file tools from the settings rules must decide when it is actually started: one path a rule really does grant, which it has to allow, and one path no rule mentions, which it has to leave alone.";
  "The granted path is worked out from the rules in force rather than written down here, because which folders are granted differs from one machine to the next, and a path spelled in this file would be a second copy of a rule - green while the rule it copies is gone, red on a machine that never had it. So the corpus asks the settings what is granted and then asks the hook about that.";
  "The two answers differ on purpose. A hook that allowed everything and a hook that had stopped loading at all both answer one of these wrongly, and those are the two ways it can fail without anything else noticing.";
  "A folder is only usable as a probe when it is on the disk, is spelled the same way after its links are followed, and is outside Claude Code's own configuration directory. Those are three things the hook itself insists on before it will answer, so a probe failing any of them would go red about the probe rather than about the hook.";
  "A reading grant is preferred over a writing one for the same reason: the commands-only switch can refuse a write inside this repo, and a corpus that went red when somebody turned that switch on would be reporting the switch rather than the hook.";
  let rules = await permission_settings_allow_every();
  let r = await permission_file_hook_live_cases_reading(rules);
  let cases = permission_file_hook_live_cases_granted(r);
  cases.push({
    label: "a path no rule mentions",
    tool_name: "Edit",
    file_path: "/etc/hosts",
    decision: "silent",
  });
  return cases;
}
