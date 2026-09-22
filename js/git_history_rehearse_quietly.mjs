import { arguments_assert } from "./arguments_assert.mjs";
import { daemons_stop } from "./daemons_stop.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { daemons_ensure } from "./daemons_ensure.mjs";
import { assert_json } from "./assert_json.mjs";
export async function git_history_rehearse_quietly(rehearse) {
  arguments_assert(arguments, 1);
  ("Runs a rehearsal of a history rewrite with the machine's own background work held still, and starts that work again if the rehearsal does not finish.");
  ("★ THIS MACHINE COMMITS TO ITSELF, SO A LONG REHEARSAL IS STALE BEFORE IT CAN BE USED. The accepting step refuses a rehearsal that the present has moved on from, because accepting it would throw away whatever was committed since - and one of the jobs running here writes down what the gates found and commits it on its own, with nobody asking. Measured on a real purge: the rehearsal finished at fourteen minutes past, the machine committed two of its own records at sixteen minutes past, and the proof that had just taken an hour and twenty minutes was refused two minutes after it was handed back. Nothing about that looks like a fault. The rehearsal is right, the refusal is right, and the two can never meet.");
  ("So the quiet has to start before the rehearsal rather than before the accepting, which is where the accepting step starts it - correctly, for its own sake, and far too late for the proof it is being handed. The two steps together need one quiet window around both, and the only place that can be arranged is around the first of them.");
  ("If the rehearsal fails, the background work is started again here and the complaint is passed on. A rehearsal is the safe half and is expected to refuse things; leaving the machine stopped every time one did would make the safe half the expensive one.");
  await daemons_stop();
  let rehearsed = null;
  async function kept() {
    rehearsed = await rehearse();
  }
  let trouble = await catch_error_text_or_null_async(kept);
  let none = equal(trouble, null);
  let failed = not(none);
  if (failed) {
    await daemons_ensure();
  }
  assert_json(none, {
    hint: "the rehearsal did not finish, so nothing has been accepted and the machine's background work is running again - the message below says what went wrong",
    trouble,
  });
  return rehearsed;
}
