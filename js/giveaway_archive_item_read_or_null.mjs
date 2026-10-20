import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_archive_send_waits } from "./giveaway_archive_send_waits.mjs";
import { list_take } from "./list_take.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { http_answer } from "./http_answer.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { json_from } from "./json_from.mjs";
import { giveaway_archive_status_again_is } from "./giveaway_archive_status_again_is.mjs";
export async function giveaway_archive_item_read_or_null(identifier) {
  arguments_assert(arguments, 1);
  ("$plain identifier");
  ("What a box out there actually holds right now, asked of the place that holds it, or nothing at all if it would not say.");
  ("★ THIS ASKS AND NEVER TELLS, SO IT NEEDS NO KEYS AND IS HANDED NONE. A box out here is readable by anybody, which is the whole point of the giving away; so the one function that is trusted with the keys stays untouched by this, and nothing here can leak what it was never given.");
  ("★ THE WAITING IS REPEATED HERE RATHER THAN SHARED WITH THE SENDER, AND THAT IS NOT AN OVERSIGHT. The sender's waiting sits inside the only function allowed to read the keys, so sharing it would mean a reader borrowing a path through the key-holding code. Two short waits that cannot reach the keys are cheaper than one shared wait that can. The list of waits themselves IS shared, which is the part that would otherwise drift.");
  ("★ ASKING IS LESS PATIENT THAN SENDING, ON PURPOSE, AND ONLY THE FRONT OF THE SHARED LIST IS USED. Giving up on a send loses the half-filled box until somebody runs it again, so the send spends half an hour before it admits defeat. Giving up on a question loses nothing: the same question can be asked again whenever, and a check of many boxes that waited half an hour on each silent one would take a night to say what it could have said in minutes. So the long tail of the waits is left for the sender.");
  ("★ NOTHING IS A REAL ANSWER HERE, NOT A FAULT. A box being filed answers nothing useful, and so does a machine whose reach comes and goes - both are states the walk above must be allowed to say out loud rather than die on, because a box nobody could ask about is not the same as a box that is missing a song.");
  let waits_whole = giveaway_archive_send_waits();
  let waits = list_take(waits_whole, 5);
  let url = "https://archive.org/metadata/" + identifier;
  for (let wait of waits) {
    await sleep_seconds(wait);
    let answered = null;
    let threw_why = null;
    try {
      answered = await http_answer(url, {
        method: "GET",
        headers: {},
        body: null,
      });
    } catch (e) {
      threw_why = String(e);
    }
    let threw_is = null_not_is(threw_why);
    let said_is = not(threw_is);
    if (said_is) {
      let status = answered.status;
      let good_is = equal(status, 200);
      if (good_is) {
        let text = buffer_text_to(answered.bytes);
        let box = json_from(text);
        return box;
      }
      let again_is = giveaway_archive_status_again_is(status);
      let settled_is = not(again_is);
      if (settled_is) {
        return null;
      }
    }
  }
  return null;
}
