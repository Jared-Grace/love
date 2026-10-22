import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_archive_send_waits } from "./giveaway_archive_send_waits.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { add } from "./add.mjs";
import { giveaway_archive_metadata_write_multiple } from "./giveaway_archive_metadata_write_multiple.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { giveaway_archive_status_again_is } from "./giveaway_archive_status_again_is.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function giveaway_archive_metadata_write_multiple_patient(
  identifier,
  words,
) {
  arguments_assert(arguments, 2);
  ("$plain identifier");
  ("$plain words");
  ("Writes the named words of a box's page the way the writer next door does, and keeps trying while the host is merely busy, waiting longer each time before giving up.");
  ("★ THIS IS A SECOND FUNCTION RATHER THAN WAITING ADDED TO THE WRITER, FOR THE SAME REASON THE FILE SENDER HAS A PATIENT TWIN. The writer is the one function allowed to hold the keys to this account, and waiting has nothing whatever to do with keys. Putting the waiting inside it would mean every later reader of the waiting has to read past the keys to get at it. Outside, it is three plain decisions about time, and the key-holding function stays the short thing it has to be.");
  ("★ THE WORDS OF A PAGE WERE THE LAST ROAD OUT OF HERE WITH NO PATIENCE ON IT, AND THAT SHOWED IN THE WORST PLACE. A night's sending of sixty boxes ended with one box holding every one of its twenty-nine files and carrying no title, no description and no licence, because the one ask that writes those words was thrown away by a ten-second clock while a plainer tool reached the same address in two seconds. A box full of recordings and nameless is worse than a box that never went, since somebody can find it. Patience on the files alone was never the whole of the job.");
  ("★ A THING THROWN IS ALWAYS TRIED AGAIN, AND THAT IS SAFE BECAUSE EVERY ASK HERE SAYS THE SAME THING TWICE WITHOUT HARM. The writer sends a list of named adds, so a second ask writes the same words over the same words. The host answers the second one by saying the page already agrees, which the writer already counts as done. So there is no number of tries that can leave the page saying something nobody asked for.");
  ("★ AN ANSWER THE HOST WILL ONLY REPEAT ENDS THE TRYING AT ONCE, WITH THAT ANSWER HANDED BACK WHOLE. A word the host will not take, or a patch it could not read, is a reply and not a delay. The writer's whole answer travels out rather than a number, because the reason is in the host's own words and nothing else here can explain it.");
  ("What comes back says how many tries it took even when it worked, so a page written only after long waiting is not mistaken for one that went straight through. When the trying runs out, the last thing thrown is what is left to say why.");
  let waits = giveaway_archive_send_waits();
  let threw_why = null;
  let tried = 0;
  for (let wait of waits) {
    await sleep_seconds(wait);
    tried = add(tried, 1);
    threw_why = null;
    let r = null;
    try {
      r = await giveaway_archive_metadata_write_multiple(identifier, words);
    } catch (e) {
      threw_why = String(e);
    }
    let threw_is = null_not_is(threw_why);
    let answered_is = not(threw_is);
    if (answered_is) {
      if (r.ok) {
        let done = {
          identifier: identifier,
          names: r.names,
          status: r.status,
          ok: true,
          agreed_already: r.agreed_already,
          said_back: r.said_back,
          tried: tried,
          threw_why: null,
        };
        return done;
      }
      let again_is = giveaway_archive_status_again_is(r.status);
      let settled_is = not(again_is);
      if (settled_is) {
        let refused = {
          identifier: identifier,
          names: r.names,
          status: r.status,
          ok: false,
          agreed_already: r.agreed_already,
          said_back: r.said_back,
          tried: tried,
          threw_why: null,
        };
        return refused;
      }
    }
  }
  let gave_up = {
    identifier: identifier,
    names: list_map_property(words, "name"),
    status: null,
    ok: false,
    agreed_already: false,
    said_back: null,
    tried: tried,
    threw_why: threw_why,
  };
  return gave_up;
}
