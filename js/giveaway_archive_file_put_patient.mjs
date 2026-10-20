import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_archive_send_waits } from "./giveaway_archive_send_waits.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { add } from "./add.mjs";
import { giveaway_archive_file_put } from "./giveaway_archive_file_put.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { giveaway_archive_status_again_is } from "./giveaway_archive_status_again_is.mjs";
export async function giveaway_archive_file_put_patient(
  identifier,
  path_in_item,
  body,
  headers_extra,
) {
  arguments_assert(arguments, 4);
  ("$plain identifier");
  ("$plain path_in_item");
  ("$plain body");
  ("$plain headers_extra");
  ("Hands one file to archive.org the way the sender next door does, and keeps trying while the host is merely busy, waiting longer each time before giving up.");
  ("★ THIS IS A SECOND FUNCTION RATHER THAN WAITING ADDED TO THE SENDER, BECAUSE THE SENDER EARNS ITS SHORTNESS BY DOING ONE THING. Waiting, counting tries, and judging which answers are worth another go are three decisions, and none of them is about the file or the name it arrives under. Read on their own they are plain; read inside the sending they would lengthen the one body that most wants to stay short.");
  ("★ A THING THROWN IS ALWAYS TRIED AGAIN, AND THAT IS SAFE ONLY BECAUSE THE WALK ABOVE STOPS ON THE FIRST FILE THAT FAILS. The fault actually met here is this machine losing its reach to the host within the ten seconds its own clock allows, while a plainer tool reaches the same address in a third of a second - so the reach is there and the waiting is what was missing. A fault that will never mend arrives in the same shape and will spend the whole half hour before saying so, but it spends it once, on the first file of the first box, and then the walk ends.");
  ("★ AN ANSWER THE HOST WILL ONLY REPEAT ENDS THE TRYING AT ONCE, WITH THAT ANSWER HANDED BACK. A refused name or a wrong address is a reply, not a delay, and waiting on it would turn a clear fault into a long silence - the worst shape for something nobody is watching, because it looks exactly like work.");
  ("What comes back says how many tries it took even when it worked, so a box that went out only after long waiting is not mistaken for one that went straight through. The last answer and the last thing thrown are both kept, because when the trying runs out there is otherwise nothing left to say why.");
  let waits = giveaway_archive_send_waits();
  let status = null;
  let threw_why = null;
  let tried = 0;
  for (let wait of waits) {
    await sleep_seconds(wait);
    tried = add(tried, 1);
    status = null;
    threw_why = null;
    let r = null;
    try {
      r = await giveaway_archive_file_put(
        identifier,
        path_in_item,
        body,
        headers_extra,
      );
    } catch (e) {
      threw_why = String(e);
    }
    let threw_is = null_not_is(threw_why);
    let answered_is = not(threw_is);
    if (answered_is) {
      status = r.status;
      if (r.ok) {
        let done = {
          path_in_item: path_in_item,
          status: status,
          ok: true,
          tried: tried,
          threw_why: null,
        };
        return done;
      }
      let again_is = giveaway_archive_status_again_is(status);
      let settled_is = not(again_is);
      if (settled_is) {
        let refused = {
          path_in_item: path_in_item,
          status: status,
          ok: false,
          tried: tried,
          threw_why: null,
        };
        return refused;
      }
    }
  }
  let gave_up = {
    path_in_item: path_in_item,
    status: status,
    ok: false,
    tried: tried,
    threw_why: threw_why,
  };
  return gave_up;
}
