import { psalms_videos_descriptions_live_read } from "./psalms_videos_descriptions_live_read.mjs";
import { psalms_videos_descriptions_before_write } from "./psalms_videos_descriptions_before_write.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_videos_descriptions_parts_written } from "./psalms_videos_descriptions_parts_written.mjs";
import { property_set } from "./property_set.mjs";
export async function psalms_videos_descriptions_remaining_parts_write(
  letters_most,
) {
  "Asks youtube which songs still want their words, cuts those into pieces small enough to paste, and writes the pieces down over the ones already there.";
  "It writes over the old pieces rather than beside them because the old pieces are a slicing of every song there is, and once any of the work has landed that slicing describes work that no longer needs doing. Two lists of pieces where one is out of date is how a piece already done gets pasted a second time.";
  "This is the command to run before each sitting. Whoever pasted last, and whether they finished, stops mattering: the pieces that come out hold exactly what is still missing, so two people working on this cannot undo or repeat each other's work, only shorten what is left.";
  "How big a piece a browser will take is not a fact this repo can work out, so it is asked for rather than guessed at.";
  "It keeps a copy of any words already there before it hands out anything to paste, from the same reading it works the pieces out from. Backing up and deciding what to write are the same question asked twice, and asking it twice at two different moments is how a backup ends up not covering the thing that was lost.";
  arguments_assert(arguments, 1);
  let read = await psalms_videos_descriptions_live_read();
  let before = await psalms_videos_descriptions_before_write(read);
  let remaining = [];
  for (let paired of read) {
    let same = equal(paired.live, paired.one.description);
    if (same) {
      continue;
    }
    remaining.push(paired.one);
  }
  ("THE BACKUP IS ADDED TO WHAT THE WRITING SAYS RATHER THAN REPORTED SEPARATELY, because the two belong to one another: the record of what the songs held before is only trustworthy as the copy taken immediately ahead of these pieces, and a caller reading them apart could pair a backup with a different run's pieces without noticing.");
  let r = await psalms_videos_descriptions_parts_written(
    remaining,
    letters_most,
  );
  property_set(r, "before", before);
  return r;
}
