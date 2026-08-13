import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { daemons_stale } from "./daemons_stale.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function daemons_stale_gate_run() {
  "Fails when a daemon has spent a day running code the repo has already moved past.";
  "A daemon reads its code once, when it starts, and holds it for as long as it runs. So a fix to anything it reaches can be written, checked, committed and proved green while the daemon carries straight on doing the old thing - and every sign a reader has says the fix shipped.";
  "That is the reason this is worth a gate rather than a habit. Every other way of running old code here is loud: a file that will not parse stops the command, a missing import fails a gate. This one keeps working perfectly, just from an older copy, so nothing anywhere goes red. The one that prompted it had been running for three weeks and had been complaining about the same thing every minute for all of them - and a complaint that arrives every minute is one nobody reads.";
  let stale = await daemons_stale();
  let f_name = fn_name("daemon_restart");
  list_empty_is_assert_json(stale, {
    hint: text_combine_multiple([
      "a daemon is running code older than the repo - restart it with: node scripts/ai.mjs ",
      f_name,
      " <daemon>",
    ]),
    stale,
  });
  let none = {
    stale: 0,
  };
  return none;
}
