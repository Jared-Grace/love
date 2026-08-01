import { permission_rules_decider_write } from "./permission_rules_decider_write.mjs";
import { permission_rules } from "./permission_rules.mjs";
import { each } from "./each.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { log_console } from "./log_console.mjs";
export async function permission_decider_rule_gate_run() {
  "Gate: no allow rule may auto-approve changing a file that decides what is auto-approved";
  "the allow list is generated from a list of named functions on purpose, so that a new standing approval is a name a human said yes to. A rule that can rewrite that file goes around the whole arrangement in one step, and it is the only rule that can, because it approves not a thing being done but what else may be done unasked.";
  "the way to change what is approved stays what it was - edit the source, regenerate the file - which is a visible commit rather than something a standing approval quietly buys.";
  "a hook file counts as a deciding file too, and is the wider half. A hook runs before the permission engine and its allow skips the engine altogether, so approving an edit to the hook that covers the write tools approves an edit to the rules file by another road.";
  "this fails the build rather than reporting, because the two checks that already read these files both read them after the fact. What was missing was anything standing in the way, and a red build is what a human sees before the next thing is built on top.";
  let offenders = await permission_rules_decider_write();
  let rules = await permission_rules();
  function lambda(rule) {
    let message = text_combine_multiple(["WIDENS ITSELF  ", rule]);
    log_console(message);
  }
  each(offenders, lambda);
  let message2 = text_combine_multiple([
    "\nchecked ",
    rules.length,
    "  offenders ",
    offenders.length,
  ]);
  log_console(message2);
  if (greater_than(offenders.length, 0)) {
    let combined = text_combine_multiple([
      "permission decider rule gate: ",
      offenders.length,
      " allow rules let a tool change a file that decides what is auto-approved",
    ]);
    throw new Error(combined);
  }
  let r = {
    checked: rules.length,
    offenders: 0,
  };
  return r;
}
