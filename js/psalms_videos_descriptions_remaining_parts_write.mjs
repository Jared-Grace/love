import { psalms_videos_descriptions_live_read } from "./psalms_videos_descriptions_live_read.mjs";
import { psalms_videos_descriptions_before_write } from "./psalms_videos_descriptions_before_write.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_videos_descriptions_parts_cut } from "./psalms_videos_descriptions_parts_cut.mjs";
import { psalms_videos_descriptions_payload_parts_path } from "./psalms_videos_descriptions_payload_parts_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
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
  for (let each of read) {
    let same = equal(each.live, each.one.description);
    if (same) {
      continue;
    }
    remaining.push(each.one);
  }
  let parts = psalms_videos_descriptions_parts_cut(remaining, letters_most);
  let path = psalms_videos_descriptions_payload_parts_path();
  await file_overwrite_json(path, parts);
  let sizes = [];
  for (let one of parts) {
    sizes.push(one.length);
  }
  let r = {
    path: path,
    parts: parts.length,
    videos: remaining.length,
    videos_by_part: sizes,
    before: before,
  };
  return r;
}
