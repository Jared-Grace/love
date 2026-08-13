import { property_equals } from "./property_equals.mjs";
import { instructions_commands } from "./instructions_commands.mjs";
import { guard_check } from "./guard_check.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function instructions_commands_denied() {
  "Every command the instructions show that the real guard refuses outright, with the reason it gave.";
  "REFUSED is the fault asked about here, not ungranted. A command that asks is fine and sometimes deliberate - the note on the commands-only switch says in words that both directions prompt the human, and the ungranted search beside the granted one is there to explain why the granted one exists. A command that is DENIED is different in kind: the instructions are handing every Claude a line that cannot run as written, and the reader finds out one attempt at a time.";
  "It is also the failure nobody reports. A deny never reaches the human as a prompt, so a documented shape can stop working and the only trace is a Claude quietly rewording itself - which is exactly how a length check on the sandbox template went on refusing every scratch script that took an argument, for as long as nobody happened to pass one.";
  "The guard is started rather than reasoned about, so this cannot pass while the live behaviour is broken.";
  let commands = await instructions_commands();
  let denied = [];
  for (let command of commands) {
    let r = await guard_check(command);
    let refused = property_equals(r, "decision", "deny");
    if (refused) {
      let reason = property_get(r, "reason");
      list_add(denied, {
        command,
        reason,
      });
    }
  }
  return denied;
}
