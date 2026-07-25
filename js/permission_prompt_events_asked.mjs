import { list_add } from "./list_add.mjs";
import { guard_check } from "./guard_check.mjs";
export async function permission_prompt_events_asked(events) {
  "Drops the shell events that CANNOT have reached the human, by asking the guard itself what it decides for each command. A command the guard auto-approves, or hard-denies, never produces a dialog - so a long gap there was the command being slow, not a person deciding.";
  "What survives is the shell commands the guard leaves to the permission engine, plus every non-shell tool, whose rules live in settings and are not consulted here. So this narrows the suspects; it does not convict them.";
  let verdicts = new Map();
  let kept = [];
  for (let event of events) {
    if (event.tool !== "Bash") {
      list_add(kept, event);
      continue;
    }
    let command = event.command;
    if (!verdicts.has(command)) {
      let checked = await guard_check(command);
      verdicts.set(command, checked.decision);
    }
    let decision = verdicts.get(command);
    let settled = decision === "allow" || decision === "deny";
    if (settled) {
      continue;
    }
    list_add(kept, event);
  }
  return kept;
}
