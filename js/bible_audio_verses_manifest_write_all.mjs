import { property_equals } from "./property_equals.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_recordings } from "./bible_audio_recordings.mjs";
import { bible_audio_recording_manifest_row } from "./bible_audio_recording_manifest_row.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { each } from "./each.mjs";
export async function bible_audio_verses_manifest_write_all() {
  "Re-notes every recording on this disk against the current cutting rule, and says how many are cut the way it cuts, how many of those still say what their chapter says, how many are cut some other way, and how many could not be asked.";
  "★ IT FINDS ITS OWN SET, SO IT IS ONE COMMAND RATHER THAN FIVE HUNDRED INVOCATIONS. A loop of the same command over a list of chapters leaves nothing behind and drifts from the disk the moment a recording is added or deleted. Asking the folders each time means the sweep and the disk cannot disagree.";
  "★ RE-NOTING IS NOT RE-RECORDING, AND THE DIFFERENCE IS THE WHOLE REASON THIS IS SAFE TO RUN. It replaces a note that is derived from the sound and the chapter with the same note derived again, so nothing is lost that running it once more would not bring back. No sound is made, deleted or changed.";
  "★ THE ONES THAT LINE UP ARE SPLIT AGAIN, BECAUSE A BARE COUNT OF THEM HIDES THE ONLY ACTIONABLE ANSWER THERE IS. A recording cut the current way whose words no longer match its chapter is a short list of pieces to re-record - the cheapest repair on the disk and the one worth doing first. Counted together with the ones that match, it disappears into a number that looks like good news.";
  "★ THE FIVE ANSWERS ADD UP TO EVERY RECORDING, AND THAT IS CHECKED BY CONSTRUCTION RATHER THAN HOPED FOR. Every recording lands in exactly one of empty, clean, stale, cut some other way, and could not be asked, because each is reached by a return that leaves no path to a second one. A sweep whose parts do not sum to its total has looked at a category it never named.";
  "★ A FOLDER HOLDING NO SOUND IS COUNTED AS EMPTY AND NOT AS CLEAN, BECAUSE NOTHING AND CORRECT ARE THE SAME NUMBER. No pieces against no verses is no differences, so a folder with nothing recorded in it passes every test the ones with sound in them have to pass. One such folder was sitting in the clean count, and the count read as evidence that a recording was right when nothing had been looked at.";
  arguments_assert(arguments, 0);
  let recordings = await bible_audio_recordings();
  async function recording_each(recording) {
    let row = await bible_audio_recording_manifest_row(recording);
    return row;
  }
  let rows = await list_map_async(recordings, recording_each);
  let empty = [];
  let clean = 0;
  let stale = [];
  let recut = [];
  let unjudged = [];
  function row_each(row) {
    let judged = property_get(row, "judged");
    if (not(judged)) {
      list_add(unjudged, row);
      return;
    }
    let silent = property_equals(row, "chunks", 0);
    if (silent) {
      list_add(empty, row);
      return;
    }
    let lines_up = property_get(row, "aligned");
    if (not(lines_up)) {
      list_add(recut, row);
      return;
    }
    let unmatched = property_get(row, "unmatched");
    let matches = equal(unmatched, 0);
    if (matches) {
      clean = add(clean, 1);
      return;
    }
    list_add(stale, row);
  }
  each(rows, row_each);
  let report = {
    recordings: rows.length,
    empty: empty.length,
    clean,
    stale: stale.length,
    recut: recut.length,
    unjudged: unjudged.length,
    nothing_recorded: empty,
    words_changed: stale,
    cut_another_way: recut,
    not_judged: unjudged,
  };
  return report;
}
