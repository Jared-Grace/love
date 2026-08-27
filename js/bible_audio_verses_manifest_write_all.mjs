import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_recordings } from "./bible_audio_recordings.mjs";
import { bible_audio_recording_manifest_row } from "./bible_audio_recording_manifest_row.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { each } from "./each.mjs";
export async function bible_audio_verses_manifest_write_all() {
  "Re-notes every recording on this disk against the current cutting rule, and says how many now line up, how many do not, and how many could not be asked.";
  "★ IT FINDS ITS OWN SET, SO IT IS ONE COMMAND RATHER THAN FIVE HUNDRED INVOCATIONS. A loop of the same command over a list of chapters leaves nothing behind and drifts from the disk the moment a recording is added or deleted. Asking the folders each time means the sweep and the disk cannot disagree.";
  "★ RE-NOTING IS NOT RE-RECORDING, AND THE DIFFERENCE IS THE WHOLE REASON THIS IS SAFE TO RUN. It replaces a note that is derived from the sound and the chapter with the same note derived again, so nothing is lost that running it once more would not bring back. No sound is made, deleted or changed.";
  "★ THE EXPECTED ANSWER IS THAT ALMOST NOTHING LINES UP, AND THAT IS THE MEASUREMENT RATHER THAN A FAILURE. The recordings on this disk were cut one file to a verse, and the rule now gathers verses forward to where a reader may stop. What this prices is how much re-cutting a new edition will cost, which is a number nobody had before.";
  arguments_assert(arguments, 0);
  let recordings = await bible_audio_recordings();
  async function recording_each(recording) {
    let row = await bible_audio_recording_manifest_row(recording);
    return row;
  }
  let rows = await list_map_async(recordings, recording_each);
  let aligned = 0;
  let unaligned = [];
  let unjudged = [];
  function row_each(row) {
    let judged = property_get(row, "judged");
    if (not(judged)) {
      list_add(unjudged, row);
      return;
    }
    let lines_up = property_get(row, "aligned");
    if (lines_up) {
      aligned = add(aligned, 1);
      return;
    }
    list_add(unaligned, row);
  }
  each(rows, row_each);
  let report = {
    recordings: rows.length,
    aligned,
    unaligned: unaligned.length,
    unjudged: unjudged.length,
    not_aligned: unaligned,
    not_judged: unjudged,
  };
  return report;
}
